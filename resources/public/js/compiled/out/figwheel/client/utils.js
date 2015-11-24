// Compiled by ClojureScript 1.7.122 {}
goog.provide('figwheel.client.utils');
goog.require('cljs.core');
goog.require('clojure.string');
figwheel.client.utils._STAR_print_debug_STAR_ = false;
figwheel.client.utils.html_env_QMARK_ = (function figwheel$client$utils$html_env_QMARK_(){
return goog.inHtmlDocument_();
});
figwheel.client.utils.node_env_QMARK_ = (function figwheel$client$utils$node_env_QMARK_(){
return !((goog.nodeGlobalRequire == null));
});
figwheel.client.utils.host_env_QMARK_ = (function figwheel$client$utils$host_env_QMARK_(){
if(cljs.core.truth_(figwheel.client.utils.node_env_QMARK_.call(null))){
return new cljs.core.Keyword(null,"node","node",581201198);
} else {
return new cljs.core.Keyword(null,"html","html",-998796897);
}
});
figwheel.client.utils.base_url_path = (function figwheel$client$utils$base_url_path(){
return clojure.string.replace.call(null,goog.basePath,/(.*)goog\//,(function (p1__24117_SHARP_,p2__24116_SHARP_){
return [cljs.core.str(p2__24116_SHARP_)].join('');
}));
});
figwheel.client.utils.dispatch_custom_event = (function figwheel$client$utils$dispatch_custom_event(event_name,data){
if(cljs.core.truth_((function (){var and__16517__auto__ = figwheel.client.utils.html_env_QMARK_.call(null);
if(cljs.core.truth_(and__16517__auto__)){
return (window["CustomEvent"]);
} else {
return and__16517__auto__;
}
})())){
return document.body.dispatchEvent((new CustomEvent(event_name,(function (){var obj24121 = {"detail":data};
return obj24121;
})())));
} else {
return null;
}
});
figwheel.client.utils.debug_prn = (function figwheel$client$utils$debug_prn(o){
if(cljs.core.truth_(figwheel.client.utils._STAR_print_debug_STAR_)){
var o__$1 = (((cljs.core.map_QMARK_.call(null,o)) || (cljs.core.seq_QMARK_.call(null,o)))?cljs.core.prn_str.call(null,o):o);
return console.log(o__$1);
} else {
return null;
}
});
figwheel.client.utils.log = (function figwheel$client$utils$log(var_args){
var args24126 = [];
var len__17587__auto___24132 = arguments.length;
var i__17588__auto___24133 = (0);
while(true){
if((i__17588__auto___24133 < len__17587__auto___24132)){
args24126.push((arguments[i__17588__auto___24133]));

var G__24134 = (i__17588__auto___24133 + (1));
i__17588__auto___24133 = G__24134;
continue;
} else {
}
break;
}

var G__24128 = args24126.length;
switch (G__24128) {
case 1:
return figwheel.client.utils.log.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.utils.log.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24126.length)].join('')));

}
});

figwheel.client.utils.log.cljs$core$IFn$_invoke$arity$1 = (function (x){
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),x);
});

figwheel.client.utils.log.cljs$core$IFn$_invoke$arity$2 = (function (level,arg){
var f = (function (){var pred__24129 = cljs.core._EQ_;
var expr__24130 = (cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?level:new cljs.core.Keyword(null,"info","info",-317069002));
if(cljs.core.truth_(pred__24129.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),expr__24130))){
return ((function (pred__24129,expr__24130){
return (function (p1__24122_SHARP_){
return console.warn(p1__24122_SHARP_);
});
;})(pred__24129,expr__24130))
} else {
if(cljs.core.truth_(pred__24129.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),expr__24130))){
return ((function (pred__24129,expr__24130){
return (function (p1__24123_SHARP_){
return console.debug(p1__24123_SHARP_);
});
;})(pred__24129,expr__24130))
} else {
if(cljs.core.truth_(pred__24129.call(null,new cljs.core.Keyword(null,"error","error",-978969032),expr__24130))){
return ((function (pred__24129,expr__24130){
return (function (p1__24124_SHARP_){
return console.error(p1__24124_SHARP_);
});
;})(pred__24129,expr__24130))
} else {
return ((function (pred__24129,expr__24130){
return (function (p1__24125_SHARP_){
return console.log(p1__24125_SHARP_);
});
;})(pred__24129,expr__24130))
}
}
}
})();
return f.call(null,arg);
});

figwheel.client.utils.log.cljs$lang$maxFixedArity = 2;
figwheel.client.utils.eval_helper = (function figwheel$client$utils$eval_helper(code,p__24136){
var map__24139 = p__24136;
var map__24139__$1 = ((((!((map__24139 == null)))?((((map__24139.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24139.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24139):map__24139);
var opts = map__24139__$1;
var eval_fn = cljs.core.get.call(null,map__24139__$1,new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294));
if(cljs.core.truth_(eval_fn)){
return eval_fn.call(null,code,opts);
} else {
return eval(code);
}
});

//# sourceMappingURL=utils.js.map?rel=1448369126834