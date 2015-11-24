// Compiled by ClojureScript 1.7.122 {}
goog.provide('re_frame.utils');
goog.require('cljs.core');
goog.require('clojure.set');
re_frame.utils.default_loggers = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"log","log",-1595516004),(function (p1__19899_SHARP_){
return console.log(p1__19899_SHARP_);
}),new cljs.core.Keyword(null,"warn","warn",-436710552),(function (p1__19900_SHARP_){
return console.warn(p1__19900_SHARP_);
}),new cljs.core.Keyword(null,"error","error",-978969032),(function (p1__19901_SHARP_){
return console.error(p1__19901_SHARP_);
}),new cljs.core.Keyword(null,"group","group",582596132),(function (p1__19902_SHARP_){
if(cljs.core.truth_(console.groupCollapsed)){
return console.groupCollapsed(p1__19902_SHARP_);
} else {
return console.log(p1__19902_SHARP_);
}
}),new cljs.core.Keyword(null,"groupEnd","groupEnd",-337721382),(function (){
if(cljs.core.truth_(console.groupEnd)){
return console.groupEnd();
} else {
return null;
}
})], null);
re_frame.utils.loggers = cljs.core.atom.call(null,re_frame.utils.default_loggers);
/**
 * Change the set (subset?) of logging functions used by re-frame.
 *   'new-loggers' should be a map which looks like default-loggers
 */
re_frame.utils.set_loggers_BANG_ = (function re_frame$utils$set_loggers_BANG_(new_loggers){
if(cljs.core.empty_QMARK_.call(null,clojure.set.difference.call(null,cljs.core.set.call(null,cljs.core.keys.call(null,new_loggers)),cljs.core.set.call(null,cljs.core.keys.call(null,re_frame.utils.default_loggers))))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Unknown keys in new-loggers"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"empty?","empty?",76408555,null),cljs.core.list(new cljs.core.Symbol(null,"difference","difference",-738334373,null),cljs.core.list(new cljs.core.Symbol(null,"set","set",1945134081,null),cljs.core.list(new cljs.core.Symbol(null,"keys","keys",-1586012071,null),new cljs.core.Symbol(null,"new-loggers","new-loggers",-1268568509,null))),cljs.core.list(new cljs.core.Symbol(null,"set","set",1945134081,null),cljs.core.list(new cljs.core.Symbol(null,"keys","keys",-1586012071,null),new cljs.core.Symbol(null,"default-loggers","default-loggers",387733219,null)))))))].join('')));
}

return cljs.core.swap_BANG_.call(null,re_frame.utils.loggers,cljs.core.merge,new_loggers);
});
re_frame.utils.log = (function re_frame$utils$log(var_args){
var args__17594__auto__ = [];
var len__17587__auto___19904 = arguments.length;
var i__17588__auto___19905 = (0);
while(true){
if((i__17588__auto___19905 < len__17587__auto___19904)){
args__17594__auto__.push((arguments[i__17588__auto___19905]));

var G__19906 = (i__17588__auto___19905 + (1));
i__17588__auto___19905 = G__19906;
continue;
} else {
}
break;
}

var argseq__17595__auto__ = ((((0) < args__17594__auto__.length))?(new cljs.core.IndexedSeq(args__17594__auto__.slice((0)),(0))):null);
return re_frame.utils.log.cljs$core$IFn$_invoke$arity$variadic(argseq__17595__auto__);
});

re_frame.utils.log.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return new cljs.core.Keyword(null,"log","log",-1595516004).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,re_frame.utils.loggers)).call(null,cljs.core.apply.call(null,cljs.core.str,args));
});

re_frame.utils.log.cljs$lang$maxFixedArity = (0);

re_frame.utils.log.cljs$lang$applyTo = (function (seq19903){
return re_frame.utils.log.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq19903));
});
re_frame.utils.warn = (function re_frame$utils$warn(var_args){
var args__17594__auto__ = [];
var len__17587__auto___19908 = arguments.length;
var i__17588__auto___19909 = (0);
while(true){
if((i__17588__auto___19909 < len__17587__auto___19908)){
args__17594__auto__.push((arguments[i__17588__auto___19909]));

var G__19910 = (i__17588__auto___19909 + (1));
i__17588__auto___19909 = G__19910;
continue;
} else {
}
break;
}

var argseq__17595__auto__ = ((((0) < args__17594__auto__.length))?(new cljs.core.IndexedSeq(args__17594__auto__.slice((0)),(0))):null);
return re_frame.utils.warn.cljs$core$IFn$_invoke$arity$variadic(argseq__17595__auto__);
});

re_frame.utils.warn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return new cljs.core.Keyword(null,"warn","warn",-436710552).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,re_frame.utils.loggers)).call(null,cljs.core.apply.call(null,cljs.core.str,args));
});

re_frame.utils.warn.cljs$lang$maxFixedArity = (0);

re_frame.utils.warn.cljs$lang$applyTo = (function (seq19907){
return re_frame.utils.warn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq19907));
});
re_frame.utils.group = (function re_frame$utils$group(var_args){
var args__17594__auto__ = [];
var len__17587__auto___19912 = arguments.length;
var i__17588__auto___19913 = (0);
while(true){
if((i__17588__auto___19913 < len__17587__auto___19912)){
args__17594__auto__.push((arguments[i__17588__auto___19913]));

var G__19914 = (i__17588__auto___19913 + (1));
i__17588__auto___19913 = G__19914;
continue;
} else {
}
break;
}

var argseq__17595__auto__ = ((((0) < args__17594__auto__.length))?(new cljs.core.IndexedSeq(args__17594__auto__.slice((0)),(0))):null);
return re_frame.utils.group.cljs$core$IFn$_invoke$arity$variadic(argseq__17595__auto__);
});

re_frame.utils.group.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return new cljs.core.Keyword(null,"group","group",582596132).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,re_frame.utils.loggers)).call(null,cljs.core.apply.call(null,cljs.core.str,args));
});

re_frame.utils.group.cljs$lang$maxFixedArity = (0);

re_frame.utils.group.cljs$lang$applyTo = (function (seq19911){
return re_frame.utils.group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq19911));
});
re_frame.utils.groupEnd = (function re_frame$utils$groupEnd(var_args){
var args__17594__auto__ = [];
var len__17587__auto___19916 = arguments.length;
var i__17588__auto___19917 = (0);
while(true){
if((i__17588__auto___19917 < len__17587__auto___19916)){
args__17594__auto__.push((arguments[i__17588__auto___19917]));

var G__19918 = (i__17588__auto___19917 + (1));
i__17588__auto___19917 = G__19918;
continue;
} else {
}
break;
}

var argseq__17595__auto__ = ((((0) < args__17594__auto__.length))?(new cljs.core.IndexedSeq(args__17594__auto__.slice((0)),(0))):null);
return re_frame.utils.groupEnd.cljs$core$IFn$_invoke$arity$variadic(argseq__17595__auto__);
});

re_frame.utils.groupEnd.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return new cljs.core.Keyword(null,"groupEnd","groupEnd",-337721382).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,re_frame.utils.loggers)).call(null,cljs.core.apply.call(null,cljs.core.str,args));
});

re_frame.utils.groupEnd.cljs$lang$maxFixedArity = (0);

re_frame.utils.groupEnd.cljs$lang$applyTo = (function (seq19915){
return re_frame.utils.groupEnd.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq19915));
});
re_frame.utils.error = (function re_frame$utils$error(var_args){
var args__17594__auto__ = [];
var len__17587__auto___19920 = arguments.length;
var i__17588__auto___19921 = (0);
while(true){
if((i__17588__auto___19921 < len__17587__auto___19920)){
args__17594__auto__.push((arguments[i__17588__auto___19921]));

var G__19922 = (i__17588__auto___19921 + (1));
i__17588__auto___19921 = G__19922;
continue;
} else {
}
break;
}

var argseq__17595__auto__ = ((((0) < args__17594__auto__.length))?(new cljs.core.IndexedSeq(args__17594__auto__.slice((0)),(0))):null);
return re_frame.utils.error.cljs$core$IFn$_invoke$arity$variadic(argseq__17595__auto__);
});

re_frame.utils.error.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,re_frame.utils.loggers)).call(null,cljs.core.apply.call(null,cljs.core.str,args));
});

re_frame.utils.error.cljs$lang$maxFixedArity = (0);

re_frame.utils.error.cljs$lang$applyTo = (function (seq19919){
return re_frame.utils.error.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq19919));
});
re_frame.utils.first_in_vector = (function re_frame$utils$first_in_vector(v){
if(cljs.core.vector_QMARK_.call(null,v)){
return cljs.core.first.call(null,v);
} else {
return re_frame.utils.error.call(null,"re-frame: expected a vector event, but got: ",v);
}
});

//# sourceMappingURL=utils.js.map?rel=1448375409854