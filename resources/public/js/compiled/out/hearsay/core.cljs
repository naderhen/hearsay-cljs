(ns hearsay.core
    (:require-macros [cljs.core.async.macros :refer [go]]
                     [reagent.ratom :refer [reaction]])
    (:require [reagent.core :as reagent]
              [cljs-http.client :as http]
              [cljs.core.async :as async]
              [cognitect.transit :as t]
              [re-frame.core :refer [register-handler trim-v debug path register-sub subscribe dispatch dispatch-sync]]))

(enable-console-print!)

(defn index-by [coll key-fn]
    (into {} (map (juxt key-fn identity) coll)))

(def w (t/writer :json))
(def r (t/reader :json))

(def fake-episodes `(
                     {:id 1 :title "Jon Gabrus: Intern Gino Lambardo's Drive Time Radio Show" :thumbnail_url "http://cdn2.earwolf.com/wp-content/uploads/2014/11/ll-300x300.jpg" :description "Welcome back to Long Island's only Drive Time Radio Show hosted by Comedy Bang Bang's..."}
                     {:id 2 :title "Dan Deacon and the Mighty Mighty Bosses" :thumbnail_url "http://cdn4.earwolf.com/wp-content/uploads/2011/11/Improv4Humans_1600x1600_Cover-300x300.jpg" :description "American composer Dan Deacon joins Seth Morris, Lauren Lapkus, and Jon Gabrus for a ver..."}
                     {:id 3 :title "Live from Politicon 2015" :thumbnail_url "http://cdn4.earwolf.com/wp-content/uploads/2011/11/Improv4Humans_1600x1600_Cover-300x300.jpg" :description "Echo Kellum, Mike Still, and Jon Gabrus get political for an improv4humans with Matt..."}
                     {:id 4 :title "Realies and Fictionals" :thumbnail_url "http://cdn2.earwolf.com/wp-content/uploads/2011/04/CBBLOGOFULL-300x300.jpg" :description "Alia Shawkat, Angela Trimbur, and Adam DeVine stop by to give Scott and intern Gino..."}
                     ))

(def initial-state
  {
   :episodes `()
   :todos {}
   })


(register-handler
 :initialize
 debug
 (fn
   [db _]
   (merge db initial-state)))

(register-handler
 :reset-episodes
 (debug trim-v)
 (fn
   [db [value]]
   (assoc db :episodes value )))

(register-handler
 :reset-todos
 (debug trim-v)
 (fn
   [db [value]]
   (assoc db :todos value)))

(register-sub
 :episodes
 (fn
   [db _]
   (reaction (:episodes @db))))

(register-sub
 :todos
 (fn
   [db _]
   (reaction (vals (:todos @db)))))

(defn app
  []
  [:div.ui.text.container
   [:div.ui.one.column.grid
    [:div.column
     [episodes-list]
     [todos-list]]]])

(defn episodes-list
  []
  [:div.ui.very.relaxed.list
     (let [episodes (subscribe [:episodes])]
       (for [episode @episodes]
         ^{:key (:id episode)} [:div.item
                                 [:img.ui.avatar.image {:src (:thumbnail_url episode)}]
                                 [:div.content
                                  [:a.header (:title episode)]
                                  [:div.description (:description episode)]]]))])


(defn todos-list
  []
  [:div.ui.very.relaxed.list
     (let [todos (subscribe [:todos])]
       (for [todo @todos]
         ^{:key (:id todo)} [:div.item
                                 [:div.content
                                  [:a.header (:title todo)]
                                  [:div.description (:userId todo)]]]))])



(js/setTimeout #(dispatch [:reset-episodes fake-episodes]) 1500)

(go (let [response (<! (http/get "http://jsonplaceholder.typicode.com/todos" {:with-credentials? false :headers {"Content-Type" "application/json"}}
                                                                :query-params {}))]
      (let [todos (:body response)]
        (dispatch [:reset-todos (index-by todos :id)]))))

(defn ^:export main
  []
  (dispatch-sync [:initialize])
  (reagent/render [app]
                  (js/document.getElementById "app")))
