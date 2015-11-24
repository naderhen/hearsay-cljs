// Compiled by ClojureScript 1.7.122 {}
goog.provide('figwheel.connect');
goog.require('cljs.core');
goog.require('hearsay.core');
goog.require('figwheel.client');
goog.require('figwheel.client.utils');
figwheel.client.start.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),(function() { 
var G__19791__delegate = function (x){
if(cljs.core.truth_(hearsay.core.main)){
return cljs.core.apply.call(null,hearsay.core.main,x);
} else {
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: :on-jsload hook 'hearsay.core/main' is missing");
}
};
var G__19791 = function (var_args){
var x = null;
if (arguments.length > 0) {
var G__19792__i = 0, G__19792__a = new Array(arguments.length -  0);
while (G__19792__i < G__19792__a.length) {G__19792__a[G__19792__i] = arguments[G__19792__i + 0]; ++G__19792__i;}
  x = new cljs.core.IndexedSeq(G__19792__a,0);
} 
return G__19791__delegate.call(this,x);};
G__19791.cljs$lang$maxFixedArity = 0;
G__19791.cljs$lang$applyTo = (function (arglist__19793){
var x = cljs.core.seq(arglist__19793);
return G__19791__delegate(x);
});
G__19791.cljs$core$IFn$_invoke$arity$variadic = G__19791__delegate;
return G__19791;
})()
,new cljs.core.Keyword(null,"build-id","build-id",1642831089),"dev",new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),"ws://localhost:3449/figwheel-ws"], null));

//# sourceMappingURL=connect.js.map?rel=1448387427349