(ns figwheel.connect (:require [hearsay.core] [figwheel.client] [figwheel.client.utils]))
(figwheel.client/start {:on-jsload (fn [& x] (if js/hearsay.core.main (apply js/hearsay.core.main x) (figwheel.client.utils/log :debug "Figwheel: :on-jsload hook 'hearsay.core/main' is missing"))), :build-id "dev", :websocket-url "ws://localhost:3449/figwheel-ws"})

