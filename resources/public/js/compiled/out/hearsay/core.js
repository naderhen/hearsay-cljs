// Compiled by ClojureScript 1.7.122 {}
goog.provide('hearsay.core');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('cljs_http.client');
goog.require('cljs.core.async');
goog.require('cognitect.transit');
goog.require('re_frame.core');
cljs.core.enable_console_print_BANG_.call(null);
hearsay.core.index_by = (function hearsay$core$index_by(coll,key_fn){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,cljs.core.juxt.call(null,key_fn,cljs.core.identity),coll));
});
hearsay.core.w = cognitect.transit.writer.call(null,new cljs.core.Keyword(null,"json","json",1279968570));
hearsay.core.r = cognitect.transit.reader.call(null,new cljs.core.Keyword(null,"json","json",1279968570));
hearsay.core.fake_episodes = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"id","id",-1388402092)),cljs.core._conj.call(null,cljs.core.List.EMPTY,(1)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"title","title",636505583)),cljs.core._conj.call(null,cljs.core.List.EMPTY,"Jon Gabrus: Intern Gino Lambardo's Drive Time Radio Show"),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"thumbnail_url","thumbnail_url",-1549807415)),cljs.core._conj.call(null,cljs.core.List.EMPTY,"http://cdn2.earwolf.com/wp-content/uploads/2014/11/ll-300x300.jpg"),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"description","description",-1428560544)),cljs.core._conj.call(null,cljs.core.List.EMPTY,"Welcome back to Long Island's only Drive Time Radio Show hosted by Comedy Bang Bang's...")))))),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"id","id",-1388402092)),cljs.core._conj.call(null,cljs.core.List.EMPTY,(2)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"title","title",636505583)),cljs.core._conj.call(null,cljs.core.List.EMPTY,"Dan Deacon and the Mighty Mighty Bosses"),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"thumbnail_url","thumbnail_url",-1549807415)),cljs.core._conj.call(null,cljs.core.List.EMPTY,"http://cdn4.earwolf.com/wp-content/uploads/2011/11/Improv4Humans_1600x1600_Cover-300x300.jpg"),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"description","description",-1428560544)),cljs.core._conj.call(null,cljs.core.List.EMPTY,"American composer Dan Deacon joins Seth Morris, Lauren Lapkus, and Jon Gabrus for a ver...")))))),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"id","id",-1388402092)),cljs.core._conj.call(null,cljs.core.List.EMPTY,(3)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"title","title",636505583)),cljs.core._conj.call(null,cljs.core.List.EMPTY,"Live from Politicon 2015"),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"thumbnail_url","thumbnail_url",-1549807415)),cljs.core._conj.call(null,cljs.core.List.EMPTY,"http://cdn4.earwolf.com/wp-content/uploads/2011/11/Improv4Humans_1600x1600_Cover-300x300.jpg"),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"description","description",-1428560544)),cljs.core._conj.call(null,cljs.core.List.EMPTY,"Echo Kellum, Mike Still, and Jon Gabrus get political for an improv4humans with Matt...")))))),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"id","id",-1388402092)),cljs.core._conj.call(null,cljs.core.List.EMPTY,(4)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"title","title",636505583)),cljs.core._conj.call(null,cljs.core.List.EMPTY,"Realies and Fictionals"),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"thumbnail_url","thumbnail_url",-1549807415)),cljs.core._conj.call(null,cljs.core.List.EMPTY,"http://cdn2.earwolf.com/wp-content/uploads/2011/04/CBBLOGOFULL-300x300.jpg"),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"description","description",-1428560544)),cljs.core._conj.call(null,cljs.core.List.EMPTY,"Alia Shawkat, Angela Trimbur, and Adam DeVine stop by to give Scott and intern Gino...")))))))));
hearsay.core.initial_state = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"episodes","episodes",1616489169),cljs.core.List.EMPTY,new cljs.core.Keyword(null,"todos","todos",630308868),cljs.core.PersistentArrayMap.EMPTY], null);
re_frame.core.register_handler.call(null,new cljs.core.Keyword(null,"initialize","initialize",609952913),re_frame.core.debug,(function (db,_){
return cljs.core.merge.call(null,db,hearsay.core.initial_state);
}));
re_frame.core.register_handler.call(null,new cljs.core.Keyword(null,"reset-episodes","reset-episodes",1959702959),re_frame.core.debug.call(null,re_frame.core.trim_v),(function (db,p__23112){
var vec__23113 = p__23112;
var value = cljs.core.nth.call(null,vec__23113,(0),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"episodes","episodes",1616489169),value);
}));
re_frame.core.register_handler.call(null,new cljs.core.Keyword(null,"reset-todos","reset-todos",-675312660),re_frame.core.debug.call(null,re_frame.core.trim_v),(function (db,p__23114){
var vec__23115 = p__23114;
var value = cljs.core.nth.call(null,vec__23115,(0),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"todos","todos",630308868),value);
}));
re_frame.core.register_sub.call(null,new cljs.core.Keyword(null,"episodes","episodes",1616489169),(function (db,_){
return reagent.ratom.make_reaction.call(null,(function (){
return new cljs.core.Keyword(null,"episodes","episodes",1616489169).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,db));
}));
}));
re_frame.core.register_sub.call(null,new cljs.core.Keyword(null,"todos","todos",630308868),(function (db,_){
return reagent.ratom.make_reaction.call(null,(function (){
return cljs.core.vals.call(null,new cljs.core.Keyword(null,"todos","todos",630308868).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,db)));
}));
}));
hearsay.core.app = (function hearsay$core$app(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.ui.text.container","div.ui.text.container",-98863085),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.ui.one.column.grid","div.ui.one.column.grid",991108620),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.column","div.column",-1380853326),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [hearsay.core.episodes_list], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [hearsay.core.todos_list], null)], null)], null)], null);
});
hearsay.core.episodes_list = (function hearsay$core$episodes_list(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.ui.very.relaxed.list","div.ui.very.relaxed.list",549667292),(function (){var episodes = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"episodes","episodes",1616489169)], null));
var iter__17301__auto__ = ((function (episodes){
return (function hearsay$core$episodes_list_$_iter__23120(s__23121){
return (new cljs.core.LazySeq(null,((function (episodes){
return (function (){
var s__23121__$1 = s__23121;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__23121__$1);
if(temp__4425__auto__){
var s__23121__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__23121__$2)){
var c__17299__auto__ = cljs.core.chunk_first.call(null,s__23121__$2);
var size__17300__auto__ = cljs.core.count.call(null,c__17299__auto__);
var b__23123 = cljs.core.chunk_buffer.call(null,size__17300__auto__);
if((function (){var i__23122 = (0);
while(true){
if((i__23122 < size__17300__auto__)){
var episode = cljs.core._nth.call(null,c__17299__auto__,i__23122);
cljs.core.chunk_append.call(null,b__23123,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.item","div.item",517680018),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img.ui.avatar.image","img.ui.avatar.image",529078443),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),new cljs.core.Keyword(null,"thumbnail_url","thumbnail_url",-1549807415).cljs$core$IFn$_invoke$arity$1(episode)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.content","div.content",-298042649),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.header","a.header",905005575),new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(episode)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.description","div.description",1049154676),new cljs.core.Keyword(null,"description","description",-1428560544).cljs$core$IFn$_invoke$arity$1(episode)], null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(episode)], null)));

var G__23124 = (i__23122 + (1));
i__23122 = G__23124;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__23123),hearsay$core$episodes_list_$_iter__23120.call(null,cljs.core.chunk_rest.call(null,s__23121__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__23123),null);
}
} else {
var episode = cljs.core.first.call(null,s__23121__$2);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.item","div.item",517680018),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img.ui.avatar.image","img.ui.avatar.image",529078443),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),new cljs.core.Keyword(null,"thumbnail_url","thumbnail_url",-1549807415).cljs$core$IFn$_invoke$arity$1(episode)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.content","div.content",-298042649),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.header","a.header",905005575),new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(episode)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.description","div.description",1049154676),new cljs.core.Keyword(null,"description","description",-1428560544).cljs$core$IFn$_invoke$arity$1(episode)], null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(episode)], null)),hearsay$core$episodes_list_$_iter__23120.call(null,cljs.core.rest.call(null,s__23121__$2)));
}
} else {
return null;
}
break;
}
});})(episodes))
,null,null));
});})(episodes))
;
return iter__17301__auto__.call(null,cljs.core.deref.call(null,episodes));
})()], null);
});
hearsay.core.todos_list = (function hearsay$core$todos_list(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.ui.very.relaxed.list","div.ui.very.relaxed.list",549667292),(function (){var todos = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"todos","todos",630308868)], null));
var iter__17301__auto__ = ((function (todos){
return (function hearsay$core$todos_list_$_iter__23129(s__23130){
return (new cljs.core.LazySeq(null,((function (todos){
return (function (){
var s__23130__$1 = s__23130;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__23130__$1);
if(temp__4425__auto__){
var s__23130__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__23130__$2)){
var c__17299__auto__ = cljs.core.chunk_first.call(null,s__23130__$2);
var size__17300__auto__ = cljs.core.count.call(null,c__17299__auto__);
var b__23132 = cljs.core.chunk_buffer.call(null,size__17300__auto__);
if((function (){var i__23131 = (0);
while(true){
if((i__23131 < size__17300__auto__)){
var todo = cljs.core._nth.call(null,c__17299__auto__,i__23131);
cljs.core.chunk_append.call(null,b__23132,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.item","div.item",517680018),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.content","div.content",-298042649),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.header","a.header",905005575),new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(todo)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.description","div.description",1049154676),new cljs.core.Keyword(null,"userId","userId",575594135).cljs$core$IFn$_invoke$arity$1(todo)], null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(todo)], null)));

var G__23133 = (i__23131 + (1));
i__23131 = G__23133;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__23132),hearsay$core$todos_list_$_iter__23129.call(null,cljs.core.chunk_rest.call(null,s__23130__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__23132),null);
}
} else {
var todo = cljs.core.first.call(null,s__23130__$2);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.item","div.item",517680018),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.content","div.content",-298042649),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.header","a.header",905005575),new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(todo)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.description","div.description",1049154676),new cljs.core.Keyword(null,"userId","userId",575594135).cljs$core$IFn$_invoke$arity$1(todo)], null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(todo)], null)),hearsay$core$todos_list_$_iter__23129.call(null,cljs.core.rest.call(null,s__23130__$2)));
}
} else {
return null;
}
break;
}
});})(todos))
,null,null));
});})(todos))
;
return iter__17301__auto__.call(null,cljs.core.deref.call(null,todos));
})()], null);
});
setTimeout((function (){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reset-episodes","reset-episodes",1959702959),hearsay.core.fake_episodes], null));
}),(1500));
var c__19665__auto___23160 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19665__auto___23160){
return (function (){
var f__19666__auto__ = (function (){var switch__19644__auto__ = ((function (c__19665__auto___23160){
return (function (state_23151){
var state_val_23152 = (state_23151[(1)]);
if((state_val_23152 === (1))){
var inst_23134 = [new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222),new cljs.core.Keyword(null,"headers","headers",-835030129)];
var inst_23135 = ["Content-Type"];
var inst_23136 = ["application/json"];
var inst_23137 = cljs.core.PersistentHashMap.fromArrays(inst_23135,inst_23136);
var inst_23138 = [false,inst_23137];
var inst_23139 = cljs.core.PersistentHashMap.fromArrays(inst_23134,inst_23138);
var inst_23140 = cljs.core.PersistentHashMap.EMPTY;
var inst_23141 = cljs_http.client.get.call(null,"http://jsonplaceholder.typicode.com/todos",inst_23139,new cljs.core.Keyword(null,"query-params","query-params",900640534),inst_23140);
var state_23151__$1 = state_23151;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23151__$1,(2),inst_23141);
} else {
if((state_val_23152 === (2))){
var inst_23143 = (state_23151[(2)]);
var inst_23144 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(inst_23143);
var inst_23145 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_23146 = hearsay.core.index_by.call(null,inst_23144,new cljs.core.Keyword(null,"id","id",-1388402092));
var inst_23147 = [new cljs.core.Keyword(null,"reset-todos","reset-todos",-675312660),inst_23146];
var inst_23148 = (new cljs.core.PersistentVector(null,2,(5),inst_23145,inst_23147,null));
var inst_23149 = re_frame.core.dispatch.call(null,inst_23148);
var state_23151__$1 = state_23151;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23151__$1,inst_23149);
} else {
return null;
}
}
});})(c__19665__auto___23160))
;
return ((function (switch__19644__auto__,c__19665__auto___23160){
return (function() {
var hearsay$core$state_machine__19645__auto__ = null;
var hearsay$core$state_machine__19645__auto____0 = (function (){
var statearr_23156 = [null,null,null,null,null,null,null];
(statearr_23156[(0)] = hearsay$core$state_machine__19645__auto__);

(statearr_23156[(1)] = (1));

return statearr_23156;
});
var hearsay$core$state_machine__19645__auto____1 = (function (state_23151){
while(true){
var ret_value__19646__auto__ = (function (){try{while(true){
var result__19647__auto__ = switch__19644__auto__.call(null,state_23151);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19647__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19647__auto__;
}
break;
}
}catch (e23157){if((e23157 instanceof Object)){
var ex__19648__auto__ = e23157;
var statearr_23158_23161 = state_23151;
(statearr_23158_23161[(5)] = ex__19648__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23151);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23157;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19646__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23162 = state_23151;
state_23151 = G__23162;
continue;
} else {
return ret_value__19646__auto__;
}
break;
}
});
hearsay$core$state_machine__19645__auto__ = function(state_23151){
switch(arguments.length){
case 0:
return hearsay$core$state_machine__19645__auto____0.call(this);
case 1:
return hearsay$core$state_machine__19645__auto____1.call(this,state_23151);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
hearsay$core$state_machine__19645__auto__.cljs$core$IFn$_invoke$arity$0 = hearsay$core$state_machine__19645__auto____0;
hearsay$core$state_machine__19645__auto__.cljs$core$IFn$_invoke$arity$1 = hearsay$core$state_machine__19645__auto____1;
return hearsay$core$state_machine__19645__auto__;
})()
;})(switch__19644__auto__,c__19665__auto___23160))
})();
var state__19667__auto__ = (function (){var statearr_23159 = f__19666__auto__.call(null);
(statearr_23159[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19665__auto___23160);

return statearr_23159;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19667__auto__);
});})(c__19665__auto___23160))
);

hearsay.core.main = (function hearsay$core$main(){
re_frame.core.dispatch_sync.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"initialize","initialize",609952913)], null));

return reagent.core.render.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [hearsay.core.app], null),document.getElementById("app"));
});
goog.exportSymbol('hearsay.core.main', hearsay.core.main);

//# sourceMappingURL=core.js.map?rel=1448392641545