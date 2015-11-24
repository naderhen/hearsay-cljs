// Compiled by ClojureScript 1.7.122 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
goog.require('cljs.repl');
goog.require('figwheel.client.heads_up');
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),args], null));

return args;
});
figwheel.client.console_print = (function figwheel$client$console_print(args){
console.log.apply(console,cljs.core.into_array.call(null,args));

return args;
});
figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

return cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__24143__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__24143 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__24144__i = 0, G__24144__a = new Array(arguments.length -  0);
while (G__24144__i < G__24144__a.length) {G__24144__a[G__24144__i] = arguments[G__24144__i + 0]; ++G__24144__i;}
  args = new cljs.core.IndexedSeq(G__24144__a,0);
} 
return G__24143__delegate.call(this,args);};
G__24143.cljs$lang$maxFixedArity = 0;
G__24143.cljs$lang$applyTo = (function (arglist__24145){
var args = cljs.core.seq(arglist__24145);
return G__24143__delegate(args);
});
G__24143.cljs$core$IFn$_invoke$arity$variadic = G__24143__delegate;
return G__24143;
})()
;
});
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel$client$get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__24146){
var map__24149 = p__24146;
var map__24149__$1 = ((((!((map__24149 == null)))?((((map__24149.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24149.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24149):map__24149);
var message = cljs.core.get.call(null,map__24149__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__24149__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str(class$),cljs.core.str(" : "),cljs.core.str(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__16529__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__16529__auto__)){
return or__16529__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__16517__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__16517__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__16517__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return (cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts)));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__19830__auto___24279 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19830__auto___24279,ch){
return (function (){
var f__19831__auto__ = (function (){var switch__19765__auto__ = ((function (c__19830__auto___24279,ch){
return (function (state_24253){
var state_val_24254 = (state_24253[(1)]);
if((state_val_24254 === (7))){
var inst_24249 = (state_24253[(2)]);
var state_24253__$1 = state_24253;
var statearr_24255_24280 = state_24253__$1;
(statearr_24255_24280[(2)] = inst_24249);

(statearr_24255_24280[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24254 === (1))){
var state_24253__$1 = state_24253;
var statearr_24256_24281 = state_24253__$1;
(statearr_24256_24281[(2)] = null);

(statearr_24256_24281[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24254 === (4))){
var inst_24217 = (state_24253[(7)]);
var inst_24217__$1 = (state_24253[(2)]);
var state_24253__$1 = (function (){var statearr_24257 = state_24253;
(statearr_24257[(7)] = inst_24217__$1);

return statearr_24257;
})();
if(cljs.core.truth_(inst_24217__$1)){
var statearr_24258_24282 = state_24253__$1;
(statearr_24258_24282[(1)] = (5));

} else {
var statearr_24259_24283 = state_24253__$1;
(statearr_24259_24283[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24254 === (13))){
var state_24253__$1 = state_24253;
var statearr_24260_24284 = state_24253__$1;
(statearr_24260_24284[(2)] = null);

(statearr_24260_24284[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24254 === (6))){
var state_24253__$1 = state_24253;
var statearr_24261_24285 = state_24253__$1;
(statearr_24261_24285[(2)] = null);

(statearr_24261_24285[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24254 === (3))){
var inst_24251 = (state_24253[(2)]);
var state_24253__$1 = state_24253;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24253__$1,inst_24251);
} else {
if((state_val_24254 === (12))){
var inst_24224 = (state_24253[(8)]);
var inst_24237 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_24224);
var inst_24238 = cljs.core.first.call(null,inst_24237);
var inst_24239 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_24238);
var inst_24240 = console.warn("Figwheel: Not loading code with warnings - ",inst_24239);
var state_24253__$1 = state_24253;
var statearr_24262_24286 = state_24253__$1;
(statearr_24262_24286[(2)] = inst_24240);

(statearr_24262_24286[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24254 === (2))){
var state_24253__$1 = state_24253;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24253__$1,(4),ch);
} else {
if((state_val_24254 === (11))){
var inst_24233 = (state_24253[(2)]);
var state_24253__$1 = state_24253;
var statearr_24263_24287 = state_24253__$1;
(statearr_24263_24287[(2)] = inst_24233);

(statearr_24263_24287[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24254 === (9))){
var inst_24223 = (state_24253[(9)]);
var inst_24235 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_24223,opts);
var state_24253__$1 = state_24253;
if(cljs.core.truth_(inst_24235)){
var statearr_24264_24288 = state_24253__$1;
(statearr_24264_24288[(1)] = (12));

} else {
var statearr_24265_24289 = state_24253__$1;
(statearr_24265_24289[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24254 === (5))){
var inst_24223 = (state_24253[(9)]);
var inst_24217 = (state_24253[(7)]);
var inst_24219 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_24220 = (new cljs.core.PersistentArrayMap(null,2,inst_24219,null));
var inst_24221 = (new cljs.core.PersistentHashSet(null,inst_24220,null));
var inst_24222 = figwheel.client.focus_msgs.call(null,inst_24221,inst_24217);
var inst_24223__$1 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_24222);
var inst_24224 = cljs.core.first.call(null,inst_24222);
var inst_24225 = figwheel.client.reload_file_state_QMARK_.call(null,inst_24223__$1,opts);
var state_24253__$1 = (function (){var statearr_24266 = state_24253;
(statearr_24266[(9)] = inst_24223__$1);

(statearr_24266[(8)] = inst_24224);

return statearr_24266;
})();
if(cljs.core.truth_(inst_24225)){
var statearr_24267_24290 = state_24253__$1;
(statearr_24267_24290[(1)] = (8));

} else {
var statearr_24268_24291 = state_24253__$1;
(statearr_24268_24291[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24254 === (14))){
var inst_24243 = (state_24253[(2)]);
var state_24253__$1 = state_24253;
var statearr_24269_24292 = state_24253__$1;
(statearr_24269_24292[(2)] = inst_24243);

(statearr_24269_24292[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24254 === (10))){
var inst_24245 = (state_24253[(2)]);
var state_24253__$1 = (function (){var statearr_24270 = state_24253;
(statearr_24270[(10)] = inst_24245);

return statearr_24270;
})();
var statearr_24271_24293 = state_24253__$1;
(statearr_24271_24293[(2)] = null);

(statearr_24271_24293[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24254 === (8))){
var inst_24224 = (state_24253[(8)]);
var inst_24227 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_24228 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_24224);
var inst_24229 = cljs.core.async.timeout.call(null,(1000));
var inst_24230 = [inst_24228,inst_24229];
var inst_24231 = (new cljs.core.PersistentVector(null,2,(5),inst_24227,inst_24230,null));
var state_24253__$1 = state_24253;
return cljs.core.async.ioc_alts_BANG_.call(null,state_24253__$1,(11),inst_24231);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__19830__auto___24279,ch))
;
return ((function (switch__19765__auto__,c__19830__auto___24279,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__19766__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__19766__auto____0 = (function (){
var statearr_24275 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_24275[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__19766__auto__);

(statearr_24275[(1)] = (1));

return statearr_24275;
});
var figwheel$client$file_reloader_plugin_$_state_machine__19766__auto____1 = (function (state_24253){
while(true){
var ret_value__19767__auto__ = (function (){try{while(true){
var result__19768__auto__ = switch__19765__auto__.call(null,state_24253);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19768__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19768__auto__;
}
break;
}
}catch (e24276){if((e24276 instanceof Object)){
var ex__19769__auto__ = e24276;
var statearr_24277_24294 = state_24253;
(statearr_24277_24294[(5)] = ex__19769__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24253);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24276;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19767__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24295 = state_24253;
state_24253 = G__24295;
continue;
} else {
return ret_value__19767__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__19766__auto__ = function(state_24253){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__19766__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__19766__auto____1.call(this,state_24253);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__19766__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__19766__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__19766__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__19766__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__19766__auto__;
})()
;})(switch__19765__auto__,c__19830__auto___24279,ch))
})();
var state__19832__auto__ = (function (){var statearr_24278 = f__19831__auto__.call(null);
(statearr_24278[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19830__auto___24279);

return statearr_24278;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19832__auto__);
});})(c__19830__auto___24279,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__24296_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__24296_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
var base_path_24303 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_24303){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{var _STAR_print_fn_STAR_24301 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR_24302 = cljs.core._STAR_print_newline_STAR_;
cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_fn_STAR_24301,_STAR_print_newline_STAR_24302,base_path_24303){
return (function() { 
var G__24304__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__24304 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__24305__i = 0, G__24305__a = new Array(arguments.length -  0);
while (G__24305__i < G__24305__a.length) {G__24305__a[G__24305__i] = arguments[G__24305__i + 0]; ++G__24305__i;}
  args = new cljs.core.IndexedSeq(G__24305__a,0);
} 
return G__24304__delegate.call(this,args);};
G__24304.cljs$lang$maxFixedArity = 0;
G__24304.cljs$lang$applyTo = (function (arglist__24306){
var args = cljs.core.seq(arglist__24306);
return G__24304__delegate(args);
});
G__24304.cljs$core$IFn$_invoke$arity$variadic = G__24304__delegate;
return G__24304;
})()
;})(_STAR_print_fn_STAR_24301,_STAR_print_newline_STAR_24302,base_path_24303))
;

cljs.core._STAR_print_newline_STAR_ = false;

try{return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"value","value",305978217),[cljs.core.str(figwheel.client.utils.eval_helper.call(null,code,opts))].join('')], null));
}finally {cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_24302;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_24301;
}}catch (e24300){if((e24300 instanceof Error)){
var e = e24300;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_24303], null));
} else {
var e = e24300;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_24303))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = {};
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__24307){
var map__24314 = p__24307;
var map__24314__$1 = ((((!((map__24314 == null)))?((((map__24314.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24314.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24314):map__24314);
var opts = map__24314__$1;
var build_id = cljs.core.get.call(null,map__24314__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__24314,map__24314__$1,opts,build_id){
return (function (p__24316){
var vec__24317 = p__24316;
var map__24318 = cljs.core.nth.call(null,vec__24317,(0),null);
var map__24318__$1 = ((((!((map__24318 == null)))?((((map__24318.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24318.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24318):map__24318);
var msg = map__24318__$1;
var msg_name = cljs.core.get.call(null,map__24318__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__24317,(1));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__24317,map__24318,map__24318__$1,msg,msg_name,_,map__24314,map__24314__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__24317,map__24318,map__24318__$1,msg,msg_name,_,map__24314,map__24314__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__24314,map__24314__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__24324){
var vec__24325 = p__24324;
var map__24326 = cljs.core.nth.call(null,vec__24325,(0),null);
var map__24326__$1 = ((((!((map__24326 == null)))?((((map__24326.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24326.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24326):map__24326);
var msg = map__24326__$1;
var msg_name = cljs.core.get.call(null,map__24326__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__24325,(1));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__24328){
var map__24338 = p__24328;
var map__24338__$1 = ((((!((map__24338 == null)))?((((map__24338.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24338.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24338):map__24338);
var on_compile_warning = cljs.core.get.call(null,map__24338__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__24338__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__24338,map__24338__$1,on_compile_warning,on_compile_fail){
return (function (p__24340){
var vec__24341 = p__24340;
var map__24342 = cljs.core.nth.call(null,vec__24341,(0),null);
var map__24342__$1 = ((((!((map__24342 == null)))?((((map__24342.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24342.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24342):map__24342);
var msg = map__24342__$1;
var msg_name = cljs.core.get.call(null,map__24342__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__24341,(1));
var pred__24344 = cljs.core._EQ_;
var expr__24345 = msg_name;
if(cljs.core.truth_(pred__24344.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__24345))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__24344.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__24345))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__24338,map__24338__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__19830__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19830__auto__,msg_hist,msg_names,msg){
return (function (){
var f__19831__auto__ = (function (){var switch__19765__auto__ = ((function (c__19830__auto__,msg_hist,msg_names,msg){
return (function (state_24546){
var state_val_24547 = (state_24546[(1)]);
if((state_val_24547 === (7))){
var inst_24480 = (state_24546[(2)]);
var state_24546__$1 = state_24546;
var statearr_24548_24589 = state_24546__$1;
(statearr_24548_24589[(2)] = inst_24480);

(statearr_24548_24589[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24547 === (20))){
var inst_24508 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_24546__$1 = state_24546;
if(cljs.core.truth_(inst_24508)){
var statearr_24549_24590 = state_24546__$1;
(statearr_24549_24590[(1)] = (22));

} else {
var statearr_24550_24591 = state_24546__$1;
(statearr_24550_24591[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24547 === (27))){
var inst_24520 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_24521 = figwheel.client.heads_up.display_warning.call(null,inst_24520);
var state_24546__$1 = state_24546;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24546__$1,(30),inst_24521);
} else {
if((state_val_24547 === (1))){
var inst_24468 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_24546__$1 = state_24546;
if(cljs.core.truth_(inst_24468)){
var statearr_24551_24592 = state_24546__$1;
(statearr_24551_24592[(1)] = (2));

} else {
var statearr_24552_24593 = state_24546__$1;
(statearr_24552_24593[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24547 === (24))){
var inst_24536 = (state_24546[(2)]);
var state_24546__$1 = state_24546;
var statearr_24553_24594 = state_24546__$1;
(statearr_24553_24594[(2)] = inst_24536);

(statearr_24553_24594[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24547 === (4))){
var inst_24544 = (state_24546[(2)]);
var state_24546__$1 = state_24546;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24546__$1,inst_24544);
} else {
if((state_val_24547 === (15))){
var inst_24496 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_24497 = figwheel.client.format_messages.call(null,inst_24496);
var inst_24498 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_24499 = figwheel.client.heads_up.display_error.call(null,inst_24497,inst_24498);
var state_24546__$1 = state_24546;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24546__$1,(18),inst_24499);
} else {
if((state_val_24547 === (21))){
var inst_24538 = (state_24546[(2)]);
var state_24546__$1 = state_24546;
var statearr_24554_24595 = state_24546__$1;
(statearr_24554_24595[(2)] = inst_24538);

(statearr_24554_24595[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24547 === (31))){
var inst_24527 = figwheel.client.heads_up.flash_loaded.call(null);
var state_24546__$1 = state_24546;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24546__$1,(34),inst_24527);
} else {
if((state_val_24547 === (32))){
var state_24546__$1 = state_24546;
var statearr_24555_24596 = state_24546__$1;
(statearr_24555_24596[(2)] = null);

(statearr_24555_24596[(1)] = (33));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24547 === (33))){
var inst_24532 = (state_24546[(2)]);
var state_24546__$1 = state_24546;
var statearr_24556_24597 = state_24546__$1;
(statearr_24556_24597[(2)] = inst_24532);

(statearr_24556_24597[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24547 === (13))){
var inst_24486 = (state_24546[(2)]);
var inst_24487 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_24488 = figwheel.client.format_messages.call(null,inst_24487);
var inst_24489 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_24490 = figwheel.client.heads_up.display_error.call(null,inst_24488,inst_24489);
var state_24546__$1 = (function (){var statearr_24557 = state_24546;
(statearr_24557[(7)] = inst_24486);

return statearr_24557;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24546__$1,(14),inst_24490);
} else {
if((state_val_24547 === (22))){
var inst_24510 = figwheel.client.heads_up.clear.call(null);
var state_24546__$1 = state_24546;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24546__$1,(25),inst_24510);
} else {
if((state_val_24547 === (29))){
var inst_24534 = (state_24546[(2)]);
var state_24546__$1 = state_24546;
var statearr_24558_24598 = state_24546__$1;
(statearr_24558_24598[(2)] = inst_24534);

(statearr_24558_24598[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24547 === (6))){
var inst_24476 = figwheel.client.heads_up.clear.call(null);
var state_24546__$1 = state_24546;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24546__$1,(9),inst_24476);
} else {
if((state_val_24547 === (28))){
var inst_24525 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_24546__$1 = state_24546;
if(cljs.core.truth_(inst_24525)){
var statearr_24559_24599 = state_24546__$1;
(statearr_24559_24599[(1)] = (31));

} else {
var statearr_24560_24600 = state_24546__$1;
(statearr_24560_24600[(1)] = (32));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24547 === (25))){
var inst_24512 = (state_24546[(2)]);
var inst_24513 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_24514 = figwheel.client.heads_up.display_warning.call(null,inst_24513);
var state_24546__$1 = (function (){var statearr_24561 = state_24546;
(statearr_24561[(8)] = inst_24512);

return statearr_24561;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24546__$1,(26),inst_24514);
} else {
if((state_val_24547 === (34))){
var inst_24529 = (state_24546[(2)]);
var state_24546__$1 = state_24546;
var statearr_24562_24601 = state_24546__$1;
(statearr_24562_24601[(2)] = inst_24529);

(statearr_24562_24601[(1)] = (33));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24547 === (17))){
var inst_24540 = (state_24546[(2)]);
var state_24546__$1 = state_24546;
var statearr_24563_24602 = state_24546__$1;
(statearr_24563_24602[(2)] = inst_24540);

(statearr_24563_24602[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24547 === (3))){
var inst_24482 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_24546__$1 = state_24546;
if(cljs.core.truth_(inst_24482)){
var statearr_24564_24603 = state_24546__$1;
(statearr_24564_24603[(1)] = (10));

} else {
var statearr_24565_24604 = state_24546__$1;
(statearr_24565_24604[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24547 === (12))){
var inst_24542 = (state_24546[(2)]);
var state_24546__$1 = state_24546;
var statearr_24566_24605 = state_24546__$1;
(statearr_24566_24605[(2)] = inst_24542);

(statearr_24566_24605[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24547 === (2))){
var inst_24470 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_24546__$1 = state_24546;
if(cljs.core.truth_(inst_24470)){
var statearr_24567_24606 = state_24546__$1;
(statearr_24567_24606[(1)] = (5));

} else {
var statearr_24568_24607 = state_24546__$1;
(statearr_24568_24607[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24547 === (23))){
var inst_24518 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_24546__$1 = state_24546;
if(cljs.core.truth_(inst_24518)){
var statearr_24569_24608 = state_24546__$1;
(statearr_24569_24608[(1)] = (27));

} else {
var statearr_24570_24609 = state_24546__$1;
(statearr_24570_24609[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24547 === (19))){
var inst_24505 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_24506 = figwheel.client.heads_up.append_message.call(null,inst_24505);
var state_24546__$1 = state_24546;
var statearr_24571_24610 = state_24546__$1;
(statearr_24571_24610[(2)] = inst_24506);

(statearr_24571_24610[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24547 === (11))){
var inst_24494 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_24546__$1 = state_24546;
if(cljs.core.truth_(inst_24494)){
var statearr_24572_24611 = state_24546__$1;
(statearr_24572_24611[(1)] = (15));

} else {
var statearr_24573_24612 = state_24546__$1;
(statearr_24573_24612[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24547 === (9))){
var inst_24478 = (state_24546[(2)]);
var state_24546__$1 = state_24546;
var statearr_24574_24613 = state_24546__$1;
(statearr_24574_24613[(2)] = inst_24478);

(statearr_24574_24613[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24547 === (5))){
var inst_24472 = figwheel.client.heads_up.flash_loaded.call(null);
var state_24546__$1 = state_24546;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24546__$1,(8),inst_24472);
} else {
if((state_val_24547 === (14))){
var inst_24492 = (state_24546[(2)]);
var state_24546__$1 = state_24546;
var statearr_24575_24614 = state_24546__$1;
(statearr_24575_24614[(2)] = inst_24492);

(statearr_24575_24614[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24547 === (26))){
var inst_24516 = (state_24546[(2)]);
var state_24546__$1 = state_24546;
var statearr_24576_24615 = state_24546__$1;
(statearr_24576_24615[(2)] = inst_24516);

(statearr_24576_24615[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24547 === (16))){
var inst_24503 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_24546__$1 = state_24546;
if(cljs.core.truth_(inst_24503)){
var statearr_24577_24616 = state_24546__$1;
(statearr_24577_24616[(1)] = (19));

} else {
var statearr_24578_24617 = state_24546__$1;
(statearr_24578_24617[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24547 === (30))){
var inst_24523 = (state_24546[(2)]);
var state_24546__$1 = state_24546;
var statearr_24579_24618 = state_24546__$1;
(statearr_24579_24618[(2)] = inst_24523);

(statearr_24579_24618[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24547 === (10))){
var inst_24484 = figwheel.client.heads_up.clear.call(null);
var state_24546__$1 = state_24546;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24546__$1,(13),inst_24484);
} else {
if((state_val_24547 === (18))){
var inst_24501 = (state_24546[(2)]);
var state_24546__$1 = state_24546;
var statearr_24580_24619 = state_24546__$1;
(statearr_24580_24619[(2)] = inst_24501);

(statearr_24580_24619[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24547 === (8))){
var inst_24474 = (state_24546[(2)]);
var state_24546__$1 = state_24546;
var statearr_24581_24620 = state_24546__$1;
(statearr_24581_24620[(2)] = inst_24474);

(statearr_24581_24620[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__19830__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__19765__auto__,c__19830__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19766__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19766__auto____0 = (function (){
var statearr_24585 = [null,null,null,null,null,null,null,null,null];
(statearr_24585[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19766__auto__);

(statearr_24585[(1)] = (1));

return statearr_24585;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19766__auto____1 = (function (state_24546){
while(true){
var ret_value__19767__auto__ = (function (){try{while(true){
var result__19768__auto__ = switch__19765__auto__.call(null,state_24546);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19768__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19768__auto__;
}
break;
}
}catch (e24586){if((e24586 instanceof Object)){
var ex__19769__auto__ = e24586;
var statearr_24587_24621 = state_24546;
(statearr_24587_24621[(5)] = ex__19769__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24546);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24586;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19767__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24622 = state_24546;
state_24546 = G__24622;
continue;
} else {
return ret_value__19767__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19766__auto__ = function(state_24546){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19766__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19766__auto____1.call(this,state_24546);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19766__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19766__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19766__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19766__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19766__auto__;
})()
;})(switch__19765__auto__,c__19830__auto__,msg_hist,msg_names,msg))
})();
var state__19832__auto__ = (function (){var statearr_24588 = f__19831__auto__.call(null);
(statearr_24588[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19830__auto__);

return statearr_24588;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19832__auto__);
});})(c__19830__auto__,msg_hist,msg_names,msg))
);

return c__19830__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__19830__auto___24685 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19830__auto___24685,ch){
return (function (){
var f__19831__auto__ = (function (){var switch__19765__auto__ = ((function (c__19830__auto___24685,ch){
return (function (state_24668){
var state_val_24669 = (state_24668[(1)]);
if((state_val_24669 === (1))){
var state_24668__$1 = state_24668;
var statearr_24670_24686 = state_24668__$1;
(statearr_24670_24686[(2)] = null);

(statearr_24670_24686[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24669 === (2))){
var state_24668__$1 = state_24668;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24668__$1,(4),ch);
} else {
if((state_val_24669 === (3))){
var inst_24666 = (state_24668[(2)]);
var state_24668__$1 = state_24668;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24668__$1,inst_24666);
} else {
if((state_val_24669 === (4))){
var inst_24656 = (state_24668[(7)]);
var inst_24656__$1 = (state_24668[(2)]);
var state_24668__$1 = (function (){var statearr_24671 = state_24668;
(statearr_24671[(7)] = inst_24656__$1);

return statearr_24671;
})();
if(cljs.core.truth_(inst_24656__$1)){
var statearr_24672_24687 = state_24668__$1;
(statearr_24672_24687[(1)] = (5));

} else {
var statearr_24673_24688 = state_24668__$1;
(statearr_24673_24688[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24669 === (5))){
var inst_24656 = (state_24668[(7)]);
var inst_24658 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_24656);
var state_24668__$1 = state_24668;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24668__$1,(8),inst_24658);
} else {
if((state_val_24669 === (6))){
var state_24668__$1 = state_24668;
var statearr_24674_24689 = state_24668__$1;
(statearr_24674_24689[(2)] = null);

(statearr_24674_24689[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24669 === (7))){
var inst_24664 = (state_24668[(2)]);
var state_24668__$1 = state_24668;
var statearr_24675_24690 = state_24668__$1;
(statearr_24675_24690[(2)] = inst_24664);

(statearr_24675_24690[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24669 === (8))){
var inst_24660 = (state_24668[(2)]);
var state_24668__$1 = (function (){var statearr_24676 = state_24668;
(statearr_24676[(8)] = inst_24660);

return statearr_24676;
})();
var statearr_24677_24691 = state_24668__$1;
(statearr_24677_24691[(2)] = null);

(statearr_24677_24691[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
});})(c__19830__auto___24685,ch))
;
return ((function (switch__19765__auto__,c__19830__auto___24685,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__19766__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__19766__auto____0 = (function (){
var statearr_24681 = [null,null,null,null,null,null,null,null,null];
(statearr_24681[(0)] = figwheel$client$heads_up_plugin_$_state_machine__19766__auto__);

(statearr_24681[(1)] = (1));

return statearr_24681;
});
var figwheel$client$heads_up_plugin_$_state_machine__19766__auto____1 = (function (state_24668){
while(true){
var ret_value__19767__auto__ = (function (){try{while(true){
var result__19768__auto__ = switch__19765__auto__.call(null,state_24668);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19768__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19768__auto__;
}
break;
}
}catch (e24682){if((e24682 instanceof Object)){
var ex__19769__auto__ = e24682;
var statearr_24683_24692 = state_24668;
(statearr_24683_24692[(5)] = ex__19769__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24668);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24682;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19767__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24693 = state_24668;
state_24668 = G__24693;
continue;
} else {
return ret_value__19767__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__19766__auto__ = function(state_24668){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__19766__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__19766__auto____1.call(this,state_24668);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__19766__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__19766__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__19766__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__19766__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__19766__auto__;
})()
;})(switch__19765__auto__,c__19830__auto___24685,ch))
})();
var state__19832__auto__ = (function (){var statearr_24684 = f__19831__auto__.call(null);
(statearr_24684[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19830__auto___24685);

return statearr_24684;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19832__auto__);
});})(c__19830__auto___24685,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__19830__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19830__auto__){
return (function (){
var f__19831__auto__ = (function (){var switch__19765__auto__ = ((function (c__19830__auto__){
return (function (state_24714){
var state_val_24715 = (state_24714[(1)]);
if((state_val_24715 === (1))){
var inst_24709 = cljs.core.async.timeout.call(null,(3000));
var state_24714__$1 = state_24714;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24714__$1,(2),inst_24709);
} else {
if((state_val_24715 === (2))){
var inst_24711 = (state_24714[(2)]);
var inst_24712 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_24714__$1 = (function (){var statearr_24716 = state_24714;
(statearr_24716[(7)] = inst_24711);

return statearr_24716;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24714__$1,inst_24712);
} else {
return null;
}
}
});})(c__19830__auto__))
;
return ((function (switch__19765__auto__,c__19830__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__19766__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__19766__auto____0 = (function (){
var statearr_24720 = [null,null,null,null,null,null,null,null];
(statearr_24720[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__19766__auto__);

(statearr_24720[(1)] = (1));

return statearr_24720;
});
var figwheel$client$enforce_project_plugin_$_state_machine__19766__auto____1 = (function (state_24714){
while(true){
var ret_value__19767__auto__ = (function (){try{while(true){
var result__19768__auto__ = switch__19765__auto__.call(null,state_24714);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19768__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19768__auto__;
}
break;
}
}catch (e24721){if((e24721 instanceof Object)){
var ex__19769__auto__ = e24721;
var statearr_24722_24724 = state_24714;
(statearr_24722_24724[(5)] = ex__19769__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24714);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24721;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19767__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24725 = state_24714;
state_24714 = G__24725;
continue;
} else {
return ret_value__19767__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__19766__auto__ = function(state_24714){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__19766__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__19766__auto____1.call(this,state_24714);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__19766__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__19766__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__19766__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__19766__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__19766__auto__;
})()
;})(switch__19765__auto__,c__19830__auto__))
})();
var state__19832__auto__ = (function (){var statearr_24723 = f__19831__auto__.call(null);
(statearr_24723[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19830__auto__);

return statearr_24723;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19832__auto__);
});})(c__19830__auto__))
);

return c__19830__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__24726){
var map__24733 = p__24726;
var map__24733__$1 = ((((!((map__24733 == null)))?((((map__24733.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24733.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24733):map__24733);
var ed = map__24733__$1;
var formatted_exception = cljs.core.get.call(null,map__24733__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__24733__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__24733__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__24735_24739 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__24736_24740 = null;
var count__24737_24741 = (0);
var i__24738_24742 = (0);
while(true){
if((i__24738_24742 < count__24737_24741)){
var msg_24743 = cljs.core._nth.call(null,chunk__24736_24740,i__24738_24742);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_24743);

var G__24744 = seq__24735_24739;
var G__24745 = chunk__24736_24740;
var G__24746 = count__24737_24741;
var G__24747 = (i__24738_24742 + (1));
seq__24735_24739 = G__24744;
chunk__24736_24740 = G__24745;
count__24737_24741 = G__24746;
i__24738_24742 = G__24747;
continue;
} else {
var temp__4425__auto___24748 = cljs.core.seq.call(null,seq__24735_24739);
if(temp__4425__auto___24748){
var seq__24735_24749__$1 = temp__4425__auto___24748;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24735_24749__$1)){
var c__17332__auto___24750 = cljs.core.chunk_first.call(null,seq__24735_24749__$1);
var G__24751 = cljs.core.chunk_rest.call(null,seq__24735_24749__$1);
var G__24752 = c__17332__auto___24750;
var G__24753 = cljs.core.count.call(null,c__17332__auto___24750);
var G__24754 = (0);
seq__24735_24739 = G__24751;
chunk__24736_24740 = G__24752;
count__24737_24741 = G__24753;
i__24738_24742 = G__24754;
continue;
} else {
var msg_24755 = cljs.core.first.call(null,seq__24735_24749__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_24755);

var G__24756 = cljs.core.next.call(null,seq__24735_24749__$1);
var G__24757 = null;
var G__24758 = (0);
var G__24759 = (0);
seq__24735_24739 = G__24756;
chunk__24736_24740 = G__24757;
count__24737_24741 = G__24758;
i__24738_24742 = G__24759;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cause)){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Error on file "),cljs.core.str(new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", line "),cljs.core.str(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", column "),cljs.core.str(new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause))].join(''));
} else {
}

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__24760){
var map__24763 = p__24760;
var map__24763__$1 = ((((!((map__24763 == null)))?((((map__24763.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24763.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24763):map__24763);
var w = map__24763__$1;
var message = cljs.core.get.call(null,map__24763__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),[cljs.core.str("Figwheel: Compile Warning - "),cljs.core.str(message)].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if(typeof figwheel.client.config_defaults !== 'undefined'){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[figwheel.client.default_on_compile_warning,figwheel.client.default_on_jsload,true,figwheel.client.default_on_compile_fail,false,true,[cljs.core.str("ws://"),cljs.core.str((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),cljs.core.str("/figwheel-ws")].join(''),figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = ((cljs.core.not.call(null,figwheel.client.utils.html_env_QMARK_.call(null)))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__16517__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__16517__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__16517__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__24771 = cljs.core.seq.call(null,plugins);
var chunk__24772 = null;
var count__24773 = (0);
var i__24774 = (0);
while(true){
if((i__24774 < count__24773)){
var vec__24775 = cljs.core._nth.call(null,chunk__24772,i__24774);
var k = cljs.core.nth.call(null,vec__24775,(0),null);
var plugin = cljs.core.nth.call(null,vec__24775,(1),null);
if(cljs.core.truth_(plugin)){
var pl_24777 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__24771,chunk__24772,count__24773,i__24774,pl_24777,vec__24775,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_24777.call(null,msg_hist);
});})(seq__24771,chunk__24772,count__24773,i__24774,pl_24777,vec__24775,k,plugin))
);
} else {
}

var G__24778 = seq__24771;
var G__24779 = chunk__24772;
var G__24780 = count__24773;
var G__24781 = (i__24774 + (1));
seq__24771 = G__24778;
chunk__24772 = G__24779;
count__24773 = G__24780;
i__24774 = G__24781;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__24771);
if(temp__4425__auto__){
var seq__24771__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24771__$1)){
var c__17332__auto__ = cljs.core.chunk_first.call(null,seq__24771__$1);
var G__24782 = cljs.core.chunk_rest.call(null,seq__24771__$1);
var G__24783 = c__17332__auto__;
var G__24784 = cljs.core.count.call(null,c__17332__auto__);
var G__24785 = (0);
seq__24771 = G__24782;
chunk__24772 = G__24783;
count__24773 = G__24784;
i__24774 = G__24785;
continue;
} else {
var vec__24776 = cljs.core.first.call(null,seq__24771__$1);
var k = cljs.core.nth.call(null,vec__24776,(0),null);
var plugin = cljs.core.nth.call(null,vec__24776,(1),null);
if(cljs.core.truth_(plugin)){
var pl_24786 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__24771,chunk__24772,count__24773,i__24774,pl_24786,vec__24776,k,plugin,seq__24771__$1,temp__4425__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_24786.call(null,msg_hist);
});})(seq__24771,chunk__24772,count__24773,i__24774,pl_24786,vec__24776,k,plugin,seq__24771__$1,temp__4425__auto__))
);
} else {
}

var G__24787 = cljs.core.next.call(null,seq__24771__$1);
var G__24788 = null;
var G__24789 = (0);
var G__24790 = (0);
seq__24771 = G__24787;
chunk__24772 = G__24788;
count__24773 = G__24789;
i__24774 = G__24790;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(var_args){
var args24791 = [];
var len__17587__auto___24794 = arguments.length;
var i__17588__auto___24795 = (0);
while(true){
if((i__17588__auto___24795 < len__17587__auto___24794)){
args24791.push((arguments[i__17588__auto___24795]));

var G__24796 = (i__17588__auto___24795 + (1));
i__17588__auto___24795 = G__24796;
continue;
} else {
}
break;
}

var G__24793 = args24791.length;
switch (G__24793) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24791.length)].join('')));

}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((goog.dependencies_ == null)){
return null;
} else {
if(typeof figwheel.client.__figwheel_start_once__ !== 'undefined'){
return null;
} else {
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

return figwheel.client.socket.open.call(null,system_options);
}));
}
}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

figwheel.client.start.cljs$lang$maxFixedArity = 1;
figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(var_args){
var args__17594__auto__ = [];
var len__17587__auto___24802 = arguments.length;
var i__17588__auto___24803 = (0);
while(true){
if((i__17588__auto___24803 < len__17587__auto___24802)){
args__17594__auto__.push((arguments[i__17588__auto___24803]));

var G__24804 = (i__17588__auto___24803 + (1));
i__17588__auto___24803 = G__24804;
continue;
} else {
}
break;
}

var argseq__17595__auto__ = ((((0) < args__17594__auto__.length))?(new cljs.core.IndexedSeq(args__17594__auto__.slice((0)),(0))):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__17595__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__24799){
var map__24800 = p__24799;
var map__24800__$1 = ((((!((map__24800 == null)))?((((map__24800.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24800.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24800):map__24800);
var opts = map__24800__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq24798){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq24798));
});

//# sourceMappingURL=client.js.map?rel=1448369127937