// Compiled by ClojureScript 1.7.122 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('goog.string');
goog.require('goog.Uri');
goog.require('goog.net.jsloader');
goog.require('cljs.core.async');
goog.require('goog.object');
goog.require('clojure.set');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
figwheel.client.file_reloading.queued_file_reload;
if(typeof figwheel.client.file_reloading.figwheel_meta_pragmas !== 'undefined'){
} else {
figwheel.client.file_reloading.figwheel_meta_pragmas = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__16529__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string')) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__16529__auto__){
return or__16529__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.name__GT_path = (function figwheel$client$file_reloading$name__GT_path(ns){

return (goog.dependencies_.nameToPath[ns]);
});
figwheel.client.file_reloading.provided_QMARK_ = (function figwheel$client$file_reloading$provided_QMARK_(ns){
return (goog.dependencies_.written[figwheel.client.file_reloading.name__GT_path.call(null,ns)]);
});
figwheel.client.file_reloading.fix_node_request_url = (function figwheel$client$file_reloading$fix_node_request_url(url){

if(cljs.core.truth_(goog.string.startsWith(url,"../"))){
return clojure.string.replace.call(null,url,"../","");
} else {
return [cljs.core.str("goog/"),cljs.core.str(url)].join('');
}
});
figwheel.client.file_reloading.immutable_ns_QMARK_ = (function figwheel$client$file_reloading$immutable_ns_QMARK_(name){
var or__16529__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 9, ["svgpan.SvgPan",null,"far.out",null,"testDep.bar",null,"someprotopackage.TestPackageTypes",null,"goog",null,"an.existing.path",null,"cljs.core",null,"ns",null,"dup.base",null], null), null).call(null,name);
if(cljs.core.truth_(or__16529__auto__)){
return or__16529__auto__;
} else {
return cljs.core.some.call(null,cljs.core.partial.call(null,goog.string.startsWith,name),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["goog.","cljs.","clojure.","fake.","proto2."], null));
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__25242_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__25242_SHARP_));
}),goog.object.getKeys((goog.dependencies_.requires[figwheel.client.file_reloading.name__GT_path.call(null,ns)]))));
});
if(typeof figwheel.client.file_reloading.dependency_data !== 'undefined'){
} else {
figwheel.client.file_reloading.dependency_data = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"dependents","dependents",136812837),cljs.core.PersistentArrayMap.EMPTY], null));
}
figwheel.client.file_reloading.path_to_name_BANG_ = (function figwheel$client$file_reloading$path_to_name_BANG_(path,name){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.fromArray([name], true));
});
/**
 * Setup a path to name dependencies map.
 * That goes from path -> #{ ns-names }
 */
figwheel.client.file_reloading.setup_path__GT_name_BANG_ = (function figwheel$client$file_reloading$setup_path__GT_name_BANG_(){
var nameToPath = goog.object.filter(goog.dependencies_.nameToPath,(function (v,k,o){
return goog.string.startsWith(v,"../");
}));
return goog.object.forEach(nameToPath,((function (nameToPath){
return (function (v,k,o){
return figwheel.client.file_reloading.path_to_name_BANG_.call(null,v,k);
});})(nameToPath))
);
});
/**
 * returns a set of namespaces defined by a path
 */
figwheel.client.file_reloading.path__GT_name = (function figwheel$client$file_reloading$path__GT_name(path){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null));
});
figwheel.client.file_reloading.name_to_parent_BANG_ = (function figwheel$client$file_reloading$name_to_parent_BANG_(ns,parent_ns){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.fromArray([parent_ns], true));
});
/**
 * This reverses the goog.dependencies_.requires for looking up ns-dependents.
 */
figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_ = (function figwheel$client$file_reloading$setup_ns__GT_dependents_BANG_(){
var requires = goog.object.filter(goog.dependencies_.requires,(function (v,k,o){
return goog.string.startsWith(k,"../");
}));
return goog.object.forEach(requires,((function (requires){
return (function (v,k,_){
return goog.object.forEach(v,((function (requires){
return (function (v_SINGLEQUOTE_,k_SINGLEQUOTE_,___$1){
var seq__25247 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__25248 = null;
var count__25249 = (0);
var i__25250 = (0);
while(true){
if((i__25250 < count__25249)){
var n = cljs.core._nth.call(null,chunk__25248,i__25250);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__25251 = seq__25247;
var G__25252 = chunk__25248;
var G__25253 = count__25249;
var G__25254 = (i__25250 + (1));
seq__25247 = G__25251;
chunk__25248 = G__25252;
count__25249 = G__25253;
i__25250 = G__25254;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__25247);
if(temp__4425__auto__){
var seq__25247__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25247__$1)){
var c__17332__auto__ = cljs.core.chunk_first.call(null,seq__25247__$1);
var G__25255 = cljs.core.chunk_rest.call(null,seq__25247__$1);
var G__25256 = c__17332__auto__;
var G__25257 = cljs.core.count.call(null,c__17332__auto__);
var G__25258 = (0);
seq__25247 = G__25255;
chunk__25248 = G__25256;
count__25249 = G__25257;
i__25250 = G__25258;
continue;
} else {
var n = cljs.core.first.call(null,seq__25247__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__25259 = cljs.core.next.call(null,seq__25247__$1);
var G__25260 = null;
var G__25261 = (0);
var G__25262 = (0);
seq__25247 = G__25259;
chunk__25248 = G__25260;
count__25249 = G__25261;
i__25250 = G__25262;
continue;
}
} else {
return null;
}
}
break;
}
});})(requires))
);
});})(requires))
);
});
figwheel.client.file_reloading.ns__GT_dependents = (function figwheel$client$file_reloading$ns__GT_dependents(ns){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null));
});
figwheel.client.file_reloading.build_topo_sort = (function figwheel$client$file_reloading$build_topo_sort(get_deps){
var get_deps__$1 = cljs.core.memoize.call(null,get_deps);
var topo_sort_helper_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_topo_sort_helper_STAR_(x,depth,state){
var deps = get_deps__$1.call(null,x);
if(cljs.core.empty_QMARK_.call(null,deps)){
return null;
} else {
return topo_sort_STAR_.call(null,deps,depth,state);
}
});})(get_deps__$1))
;
var topo_sort_STAR_ = ((function (get_deps__$1){
return (function() {
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = null;
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1 = (function (deps){
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.call(null,deps,(0),cljs.core.atom.call(null,cljs.core.sorted_map.call(null)));
});
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3 = (function (deps,depth,state){
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [depth], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentHashSet.EMPTY),deps);

var seq__25301_25308 = cljs.core.seq.call(null,deps);
var chunk__25302_25309 = null;
var count__25303_25310 = (0);
var i__25304_25311 = (0);
while(true){
if((i__25304_25311 < count__25303_25310)){
var dep_25312 = cljs.core._nth.call(null,chunk__25302_25309,i__25304_25311);
topo_sort_helper_STAR_.call(null,dep_25312,(depth + (1)),state);

var G__25313 = seq__25301_25308;
var G__25314 = chunk__25302_25309;
var G__25315 = count__25303_25310;
var G__25316 = (i__25304_25311 + (1));
seq__25301_25308 = G__25313;
chunk__25302_25309 = G__25314;
count__25303_25310 = G__25315;
i__25304_25311 = G__25316;
continue;
} else {
var temp__4425__auto___25317 = cljs.core.seq.call(null,seq__25301_25308);
if(temp__4425__auto___25317){
var seq__25301_25318__$1 = temp__4425__auto___25317;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25301_25318__$1)){
var c__17332__auto___25319 = cljs.core.chunk_first.call(null,seq__25301_25318__$1);
var G__25320 = cljs.core.chunk_rest.call(null,seq__25301_25318__$1);
var G__25321 = c__17332__auto___25319;
var G__25322 = cljs.core.count.call(null,c__17332__auto___25319);
var G__25323 = (0);
seq__25301_25308 = G__25320;
chunk__25302_25309 = G__25321;
count__25303_25310 = G__25322;
i__25304_25311 = G__25323;
continue;
} else {
var dep_25324 = cljs.core.first.call(null,seq__25301_25318__$1);
topo_sort_helper_STAR_.call(null,dep_25324,(depth + (1)),state);

var G__25325 = cljs.core.next.call(null,seq__25301_25318__$1);
var G__25326 = null;
var G__25327 = (0);
var G__25328 = (0);
seq__25301_25308 = G__25325;
chunk__25302_25309 = G__25326;
count__25303_25310 = G__25327;
i__25304_25311 = G__25328;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,depth,(0))){
return elim_dups_STAR_.call(null,cljs.core.reverse.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,state))));
} else {
return null;
}
});
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = function(deps,depth,state){
switch(arguments.length){
case 1:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1.call(this,deps);
case 3:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3.call(this,deps,depth,state);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1;
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$3 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3;
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_;
})()
;})(get_deps__$1))
;
var elim_dups_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__25305){
var vec__25307 = p__25305;
var x = cljs.core.nth.call(null,vec__25307,(0),null);
var xs = cljs.core.nthnext.call(null,vec__25307,(1));
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__25307,x,xs,get_deps__$1){
return (function (p1__25263_SHARP_){
return clojure.set.difference.call(null,p1__25263_SHARP_,x);
});})(vec__25307,x,xs,get_deps__$1))
,xs)));
}
});})(get_deps__$1))
;
return topo_sort_STAR_;
});
figwheel.client.file_reloading.get_all_dependencies = (function figwheel$client$file_reloading$get_all_dependencies(ns){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.get_requires);
return cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns], null))));
});
figwheel.client.file_reloading.get_all_dependents = (function figwheel$client$file_reloading$get_all_dependents(nss){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.ns__GT_dependents);
return cljs.core.reverse.call(null,cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,nss))));
});
figwheel.client.file_reloading.unprovide_BANG_ = (function figwheel$client$file_reloading$unprovide_BANG_(ns){
var path = figwheel.client.file_reloading.name__GT_path.call(null,ns);
goog.object.remove(goog.dependencies_.visited,path);

goog.object.remove(goog.dependencies_.written,path);

return goog.object.remove(goog.dependencies_.written,[cljs.core.str(goog.basePath),cljs.core.str(path)].join(''));
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){
return [cljs.core.str(goog.basePath),cljs.core.str(figwheel.client.file_reloading.name__GT_path.call(null,ns))].join('');
});
figwheel.client.file_reloading.addDependency = (function figwheel$client$file_reloading$addDependency(path,provides,requires){
var seq__25341 = cljs.core.seq.call(null,provides);
var chunk__25342 = null;
var count__25343 = (0);
var i__25344 = (0);
while(true){
if((i__25344 < count__25343)){
var prov = cljs.core._nth.call(null,chunk__25342,i__25344);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__25345_25353 = cljs.core.seq.call(null,requires);
var chunk__25346_25354 = null;
var count__25347_25355 = (0);
var i__25348_25356 = (0);
while(true){
if((i__25348_25356 < count__25347_25355)){
var req_25357 = cljs.core._nth.call(null,chunk__25346_25354,i__25348_25356);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_25357,prov);

var G__25358 = seq__25345_25353;
var G__25359 = chunk__25346_25354;
var G__25360 = count__25347_25355;
var G__25361 = (i__25348_25356 + (1));
seq__25345_25353 = G__25358;
chunk__25346_25354 = G__25359;
count__25347_25355 = G__25360;
i__25348_25356 = G__25361;
continue;
} else {
var temp__4425__auto___25362 = cljs.core.seq.call(null,seq__25345_25353);
if(temp__4425__auto___25362){
var seq__25345_25363__$1 = temp__4425__auto___25362;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25345_25363__$1)){
var c__17332__auto___25364 = cljs.core.chunk_first.call(null,seq__25345_25363__$1);
var G__25365 = cljs.core.chunk_rest.call(null,seq__25345_25363__$1);
var G__25366 = c__17332__auto___25364;
var G__25367 = cljs.core.count.call(null,c__17332__auto___25364);
var G__25368 = (0);
seq__25345_25353 = G__25365;
chunk__25346_25354 = G__25366;
count__25347_25355 = G__25367;
i__25348_25356 = G__25368;
continue;
} else {
var req_25369 = cljs.core.first.call(null,seq__25345_25363__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_25369,prov);

var G__25370 = cljs.core.next.call(null,seq__25345_25363__$1);
var G__25371 = null;
var G__25372 = (0);
var G__25373 = (0);
seq__25345_25353 = G__25370;
chunk__25346_25354 = G__25371;
count__25347_25355 = G__25372;
i__25348_25356 = G__25373;
continue;
}
} else {
}
}
break;
}

var G__25374 = seq__25341;
var G__25375 = chunk__25342;
var G__25376 = count__25343;
var G__25377 = (i__25344 + (1));
seq__25341 = G__25374;
chunk__25342 = G__25375;
count__25343 = G__25376;
i__25344 = G__25377;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__25341);
if(temp__4425__auto__){
var seq__25341__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25341__$1)){
var c__17332__auto__ = cljs.core.chunk_first.call(null,seq__25341__$1);
var G__25378 = cljs.core.chunk_rest.call(null,seq__25341__$1);
var G__25379 = c__17332__auto__;
var G__25380 = cljs.core.count.call(null,c__17332__auto__);
var G__25381 = (0);
seq__25341 = G__25378;
chunk__25342 = G__25379;
count__25343 = G__25380;
i__25344 = G__25381;
continue;
} else {
var prov = cljs.core.first.call(null,seq__25341__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__25349_25382 = cljs.core.seq.call(null,requires);
var chunk__25350_25383 = null;
var count__25351_25384 = (0);
var i__25352_25385 = (0);
while(true){
if((i__25352_25385 < count__25351_25384)){
var req_25386 = cljs.core._nth.call(null,chunk__25350_25383,i__25352_25385);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_25386,prov);

var G__25387 = seq__25349_25382;
var G__25388 = chunk__25350_25383;
var G__25389 = count__25351_25384;
var G__25390 = (i__25352_25385 + (1));
seq__25349_25382 = G__25387;
chunk__25350_25383 = G__25388;
count__25351_25384 = G__25389;
i__25352_25385 = G__25390;
continue;
} else {
var temp__4425__auto___25391__$1 = cljs.core.seq.call(null,seq__25349_25382);
if(temp__4425__auto___25391__$1){
var seq__25349_25392__$1 = temp__4425__auto___25391__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25349_25392__$1)){
var c__17332__auto___25393 = cljs.core.chunk_first.call(null,seq__25349_25392__$1);
var G__25394 = cljs.core.chunk_rest.call(null,seq__25349_25392__$1);
var G__25395 = c__17332__auto___25393;
var G__25396 = cljs.core.count.call(null,c__17332__auto___25393);
var G__25397 = (0);
seq__25349_25382 = G__25394;
chunk__25350_25383 = G__25395;
count__25351_25384 = G__25396;
i__25352_25385 = G__25397;
continue;
} else {
var req_25398 = cljs.core.first.call(null,seq__25349_25392__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_25398,prov);

var G__25399 = cljs.core.next.call(null,seq__25349_25392__$1);
var G__25400 = null;
var G__25401 = (0);
var G__25402 = (0);
seq__25349_25382 = G__25399;
chunk__25350_25383 = G__25400;
count__25351_25384 = G__25401;
i__25352_25385 = G__25402;
continue;
}
} else {
}
}
break;
}

var G__25403 = cljs.core.next.call(null,seq__25341__$1);
var G__25404 = null;
var G__25405 = (0);
var G__25406 = (0);
seq__25341 = G__25403;
chunk__25342 = G__25404;
count__25343 = G__25405;
i__25344 = G__25406;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.file_reloading.figwheel_require = (function figwheel$client$file_reloading$figwheel_require(src,reload){
goog.require = figwheel$client$file_reloading$figwheel_require;

if(cljs.core._EQ_.call(null,reload,"reload-all")){
var seq__25411_25415 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__25412_25416 = null;
var count__25413_25417 = (0);
var i__25414_25418 = (0);
while(true){
if((i__25414_25418 < count__25413_25417)){
var ns_25419 = cljs.core._nth.call(null,chunk__25412_25416,i__25414_25418);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_25419);

var G__25420 = seq__25411_25415;
var G__25421 = chunk__25412_25416;
var G__25422 = count__25413_25417;
var G__25423 = (i__25414_25418 + (1));
seq__25411_25415 = G__25420;
chunk__25412_25416 = G__25421;
count__25413_25417 = G__25422;
i__25414_25418 = G__25423;
continue;
} else {
var temp__4425__auto___25424 = cljs.core.seq.call(null,seq__25411_25415);
if(temp__4425__auto___25424){
var seq__25411_25425__$1 = temp__4425__auto___25424;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25411_25425__$1)){
var c__17332__auto___25426 = cljs.core.chunk_first.call(null,seq__25411_25425__$1);
var G__25427 = cljs.core.chunk_rest.call(null,seq__25411_25425__$1);
var G__25428 = c__17332__auto___25426;
var G__25429 = cljs.core.count.call(null,c__17332__auto___25426);
var G__25430 = (0);
seq__25411_25415 = G__25427;
chunk__25412_25416 = G__25428;
count__25413_25417 = G__25429;
i__25414_25418 = G__25430;
continue;
} else {
var ns_25431 = cljs.core.first.call(null,seq__25411_25425__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_25431);

var G__25432 = cljs.core.next.call(null,seq__25411_25425__$1);
var G__25433 = null;
var G__25434 = (0);
var G__25435 = (0);
seq__25411_25415 = G__25432;
chunk__25412_25416 = G__25433;
count__25413_25417 = G__25434;
i__25414_25418 = G__25435;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(reload)){
figwheel.client.file_reloading.unprovide_BANG_.call(null,src);
} else {
}

return goog.require_figwheel_backup_(src);
});
/**
 * Reusable browser REPL bootstrapping. Patches the essential functions
 *   in goog.base to support re-loading of namespaces after page load.
 */
figwheel.client.file_reloading.bootstrap_goog_base = (function figwheel$client$file_reloading$bootstrap_goog_base(){
if(cljs.core.truth_(COMPILED)){
return null;
} else {
goog.require_figwheel_backup_ = (function (){var or__16529__auto__ = goog.require__;
if(cljs.core.truth_(or__16529__auto__)){
return or__16529__auto__;
} else {
return goog.require;
}
})();

goog.isProvided_ = (function (name){
return false;
});

figwheel.client.file_reloading.setup_path__GT_name_BANG_.call(null);

figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_.call(null);

goog.addDependency_figwheel_backup_ = goog.addDependency;

goog.addDependency = (function() { 
var G__25436__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__25436 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__25437__i = 0, G__25437__a = new Array(arguments.length -  0);
while (G__25437__i < G__25437__a.length) {G__25437__a[G__25437__i] = arguments[G__25437__i + 0]; ++G__25437__i;}
  args = new cljs.core.IndexedSeq(G__25437__a,0);
} 
return G__25436__delegate.call(this,args);};
G__25436.cljs$lang$maxFixedArity = 0;
G__25436.cljs$lang$applyTo = (function (arglist__25438){
var args = cljs.core.seq(arglist__25438);
return G__25436__delegate(args);
});
G__25436.cljs$core$IFn$_invoke$arity$variadic = G__25436__delegate;
return G__25436;
})()
;

goog.constructNamespace_("cljs.user");

goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.queued_file_reload;

return goog.require = figwheel.client.file_reloading.figwheel_require;
}
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
if(typeof figwheel.client.file_reloading.bootstrapped_cljs !== 'undefined'){
return null;
} else {
figwheel.client.file_reloading.bootstrapped_cljs = (function (){
figwheel.client.file_reloading.bootstrap_goog_base.call(null);

return true;
})()
;
}
});
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__25439 = cljs.core._EQ_;
var expr__25440 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__25439.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__25440))){
return ((function (pred__25439,expr__25440){
return (function (request_url,callback){

var root = clojure.string.join.call(null,"/",cljs.core.reverse.call(null,cljs.core.drop.call(null,(2),cljs.core.reverse.call(null,clojure.string.split.call(null,__dirname,"/")))));
var path = [cljs.core.str(root),cljs.core.str("/"),cljs.core.str(figwheel.client.file_reloading.fix_node_request_url.call(null,request_url))].join('');
(require.cache[path] = null);

return callback.call(null,(function (){try{return require(path);
}catch (e25442){if((e25442 instanceof Error)){
var e = e25442;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e25442;

}
}})());
});
;})(pred__25439,expr__25440))
} else {
if(cljs.core.truth_(pred__25439.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__25440))){
return ((function (pred__25439,expr__25440){
return (function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),{"cleanupWhenDone": true});
deferred.addCallback(((function (deferred,pred__25439,expr__25440){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred,pred__25439,expr__25440))
);

return deferred.addErrback(((function (deferred,pred__25439,expr__25440){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred,pred__25439,expr__25440))
);
});
;})(pred__25439,expr__25440))
} else {
return ((function (pred__25439,expr__25440){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__25439,expr__25440))
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__25443,callback){
var map__25446 = p__25443;
var map__25446__$1 = ((((!((map__25446 == null)))?((((map__25446.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25446.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25446):map__25446);
var file_msg = map__25446__$1;
var request_url = cljs.core.get.call(null,map__25446__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__25446,map__25446__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfully loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__25446,map__25446__$1,file_msg,request_url))
);
});
if(typeof figwheel.client.file_reloading.reload_chan !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_chan = cljs.core.async.chan.call(null);
}
if(typeof figwheel.client.file_reloading.on_load_callbacks !== 'undefined'){
} else {
figwheel.client.file_reloading.on_load_callbacks = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if(typeof figwheel.client.file_reloading.dependencies_loaded !== 'undefined'){
} else {
figwheel.client.file_reloading.dependencies_loaded = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
figwheel.client.file_reloading.blocking_load = (function figwheel$client$file_reloading$blocking_load(url){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.reload_file.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"request-url","request-url",2100346596),url], null),((function (out){
return (function (file_msg){
cljs.core.async.put_BANG_.call(null,out,file_msg);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
if(typeof figwheel.client.file_reloading.reloader_loop !== 'undefined'){
} else {
figwheel.client.file_reloading.reloader_loop = (function (){var c__19830__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19830__auto__){
return (function (){
var f__19831__auto__ = (function (){var switch__19765__auto__ = ((function (c__19830__auto__){
return (function (state_25470){
var state_val_25471 = (state_25470[(1)]);
if((state_val_25471 === (7))){
var inst_25466 = (state_25470[(2)]);
var state_25470__$1 = state_25470;
var statearr_25472_25492 = state_25470__$1;
(statearr_25472_25492[(2)] = inst_25466);

(statearr_25472_25492[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25471 === (1))){
var state_25470__$1 = state_25470;
var statearr_25473_25493 = state_25470__$1;
(statearr_25473_25493[(2)] = null);

(statearr_25473_25493[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25471 === (4))){
var inst_25450 = (state_25470[(7)]);
var inst_25450__$1 = (state_25470[(2)]);
var state_25470__$1 = (function (){var statearr_25474 = state_25470;
(statearr_25474[(7)] = inst_25450__$1);

return statearr_25474;
})();
if(cljs.core.truth_(inst_25450__$1)){
var statearr_25475_25494 = state_25470__$1;
(statearr_25475_25494[(1)] = (5));

} else {
var statearr_25476_25495 = state_25470__$1;
(statearr_25476_25495[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25471 === (6))){
var state_25470__$1 = state_25470;
var statearr_25477_25496 = state_25470__$1;
(statearr_25477_25496[(2)] = null);

(statearr_25477_25496[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25471 === (3))){
var inst_25468 = (state_25470[(2)]);
var state_25470__$1 = state_25470;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25470__$1,inst_25468);
} else {
if((state_val_25471 === (2))){
var state_25470__$1 = state_25470;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25470__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_25471 === (11))){
var inst_25462 = (state_25470[(2)]);
var state_25470__$1 = (function (){var statearr_25478 = state_25470;
(statearr_25478[(8)] = inst_25462);

return statearr_25478;
})();
var statearr_25479_25497 = state_25470__$1;
(statearr_25479_25497[(2)] = null);

(statearr_25479_25497[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25471 === (9))){
var inst_25456 = (state_25470[(9)]);
var inst_25454 = (state_25470[(10)]);
var inst_25458 = inst_25456.call(null,inst_25454);
var state_25470__$1 = state_25470;
var statearr_25480_25498 = state_25470__$1;
(statearr_25480_25498[(2)] = inst_25458);

(statearr_25480_25498[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25471 === (5))){
var inst_25450 = (state_25470[(7)]);
var inst_25452 = figwheel.client.file_reloading.blocking_load.call(null,inst_25450);
var state_25470__$1 = state_25470;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25470__$1,(8),inst_25452);
} else {
if((state_val_25471 === (10))){
var inst_25454 = (state_25470[(10)]);
var inst_25460 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_25454);
var state_25470__$1 = state_25470;
var statearr_25481_25499 = state_25470__$1;
(statearr_25481_25499[(2)] = inst_25460);

(statearr_25481_25499[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25471 === (8))){
var inst_25450 = (state_25470[(7)]);
var inst_25456 = (state_25470[(9)]);
var inst_25454 = (state_25470[(2)]);
var inst_25455 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_25456__$1 = cljs.core.get.call(null,inst_25455,inst_25450);
var state_25470__$1 = (function (){var statearr_25482 = state_25470;
(statearr_25482[(9)] = inst_25456__$1);

(statearr_25482[(10)] = inst_25454);

return statearr_25482;
})();
if(cljs.core.truth_(inst_25456__$1)){
var statearr_25483_25500 = state_25470__$1;
(statearr_25483_25500[(1)] = (9));

} else {
var statearr_25484_25501 = state_25470__$1;
(statearr_25484_25501[(1)] = (10));

}

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
});})(c__19830__auto__))
;
return ((function (switch__19765__auto__,c__19830__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__19766__auto__ = null;
var figwheel$client$file_reloading$state_machine__19766__auto____0 = (function (){
var statearr_25488 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_25488[(0)] = figwheel$client$file_reloading$state_machine__19766__auto__);

(statearr_25488[(1)] = (1));

return statearr_25488;
});
var figwheel$client$file_reloading$state_machine__19766__auto____1 = (function (state_25470){
while(true){
var ret_value__19767__auto__ = (function (){try{while(true){
var result__19768__auto__ = switch__19765__auto__.call(null,state_25470);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19768__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19768__auto__;
}
break;
}
}catch (e25489){if((e25489 instanceof Object)){
var ex__19769__auto__ = e25489;
var statearr_25490_25502 = state_25470;
(statearr_25490_25502[(5)] = ex__19769__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25470);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25489;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19767__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25503 = state_25470;
state_25470 = G__25503;
continue;
} else {
return ret_value__19767__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__19766__auto__ = function(state_25470){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__19766__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__19766__auto____1.call(this,state_25470);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__19766__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__19766__auto____0;
figwheel$client$file_reloading$state_machine__19766__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__19766__auto____1;
return figwheel$client$file_reloading$state_machine__19766__auto__;
})()
;})(switch__19765__auto__,c__19830__auto__))
})();
var state__19832__auto__ = (function (){var statearr_25491 = f__19831__auto__.call(null);
(statearr_25491[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19830__auto__);

return statearr_25491;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19832__auto__);
});})(c__19830__auto__))
);

return c__19830__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__25504,callback){
var map__25507 = p__25504;
var map__25507__$1 = ((((!((map__25507 == null)))?((((map__25507.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25507.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25507):map__25507);
var file_msg = map__25507__$1;
var namespace = cljs.core.get.call(null,map__25507__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__25507,map__25507__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__25507,map__25507__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__25509){
var map__25512 = p__25509;
var map__25512__$1 = ((((!((map__25512 == null)))?((((map__25512.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25512.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25512):map__25512);
var file_msg = map__25512__$1;
var namespace = cljs.core.get.call(null,map__25512__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__16517__auto__ = cljs.core.not.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas));
if(and__16517__auto__){
var or__16529__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__16529__auto__)){
return or__16529__auto__;
} else {
var or__16529__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__16529__auto____$1)){
return or__16529__auto____$1;
} else {
return figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
}
}
} else {
return and__16517__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__25514,callback){
var map__25517 = p__25514;
var map__25517__$1 = ((((!((map__25517 == null)))?((((map__25517.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25517.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25517):map__25517);
var file_msg = map__25517__$1;
var request_url = cljs.core.get.call(null,map__25517__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__25517__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.require_with_callback.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Figwheel: Not trying to load file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__19830__auto___25605 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19830__auto___25605,out){
return (function (){
var f__19831__auto__ = (function (){var switch__19765__auto__ = ((function (c__19830__auto___25605,out){
return (function (state_25587){
var state_val_25588 = (state_25587[(1)]);
if((state_val_25588 === (1))){
var inst_25565 = cljs.core.nth.call(null,files,(0),null);
var inst_25566 = cljs.core.nthnext.call(null,files,(1));
var inst_25567 = files;
var state_25587__$1 = (function (){var statearr_25589 = state_25587;
(statearr_25589[(7)] = inst_25567);

(statearr_25589[(8)] = inst_25566);

(statearr_25589[(9)] = inst_25565);

return statearr_25589;
})();
var statearr_25590_25606 = state_25587__$1;
(statearr_25590_25606[(2)] = null);

(statearr_25590_25606[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25588 === (2))){
var inst_25567 = (state_25587[(7)]);
var inst_25570 = (state_25587[(10)]);
var inst_25570__$1 = cljs.core.nth.call(null,inst_25567,(0),null);
var inst_25571 = cljs.core.nthnext.call(null,inst_25567,(1));
var inst_25572 = (inst_25570__$1 == null);
var inst_25573 = cljs.core.not.call(null,inst_25572);
var state_25587__$1 = (function (){var statearr_25591 = state_25587;
(statearr_25591[(11)] = inst_25571);

(statearr_25591[(10)] = inst_25570__$1);

return statearr_25591;
})();
if(inst_25573){
var statearr_25592_25607 = state_25587__$1;
(statearr_25592_25607[(1)] = (4));

} else {
var statearr_25593_25608 = state_25587__$1;
(statearr_25593_25608[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25588 === (3))){
var inst_25585 = (state_25587[(2)]);
var state_25587__$1 = state_25587;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25587__$1,inst_25585);
} else {
if((state_val_25588 === (4))){
var inst_25570 = (state_25587[(10)]);
var inst_25575 = figwheel.client.file_reloading.reload_js_file.call(null,inst_25570);
var state_25587__$1 = state_25587;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25587__$1,(7),inst_25575);
} else {
if((state_val_25588 === (5))){
var inst_25581 = cljs.core.async.close_BANG_.call(null,out);
var state_25587__$1 = state_25587;
var statearr_25594_25609 = state_25587__$1;
(statearr_25594_25609[(2)] = inst_25581);

(statearr_25594_25609[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25588 === (6))){
var inst_25583 = (state_25587[(2)]);
var state_25587__$1 = state_25587;
var statearr_25595_25610 = state_25587__$1;
(statearr_25595_25610[(2)] = inst_25583);

(statearr_25595_25610[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25588 === (7))){
var inst_25571 = (state_25587[(11)]);
var inst_25577 = (state_25587[(2)]);
var inst_25578 = cljs.core.async.put_BANG_.call(null,out,inst_25577);
var inst_25567 = inst_25571;
var state_25587__$1 = (function (){var statearr_25596 = state_25587;
(statearr_25596[(7)] = inst_25567);

(statearr_25596[(12)] = inst_25578);

return statearr_25596;
})();
var statearr_25597_25611 = state_25587__$1;
(statearr_25597_25611[(2)] = null);

(statearr_25597_25611[(1)] = (2));


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
});})(c__19830__auto___25605,out))
;
return ((function (switch__19765__auto__,c__19830__auto___25605,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__19766__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__19766__auto____0 = (function (){
var statearr_25601 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25601[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__19766__auto__);

(statearr_25601[(1)] = (1));

return statearr_25601;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__19766__auto____1 = (function (state_25587){
while(true){
var ret_value__19767__auto__ = (function (){try{while(true){
var result__19768__auto__ = switch__19765__auto__.call(null,state_25587);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19768__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19768__auto__;
}
break;
}
}catch (e25602){if((e25602 instanceof Object)){
var ex__19769__auto__ = e25602;
var statearr_25603_25612 = state_25587;
(statearr_25603_25612[(5)] = ex__19769__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25587);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25602;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19767__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25613 = state_25587;
state_25587 = G__25613;
continue;
} else {
return ret_value__19767__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__19766__auto__ = function(state_25587){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__19766__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__19766__auto____1.call(this,state_25587);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__19766__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__19766__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__19766__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__19766__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__19766__auto__;
})()
;})(switch__19765__auto__,c__19830__auto___25605,out))
})();
var state__19832__auto__ = (function (){var statearr_25604 = f__19831__auto__.call(null);
(statearr_25604[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19830__auto___25605);

return statearr_25604;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19832__auto__);
});})(c__19830__auto___25605,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__25614,opts){
var map__25618 = p__25614;
var map__25618__$1 = ((((!((map__25618 == null)))?((((map__25618.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25618.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25618):map__25618);
var eval_body__$1 = cljs.core.get.call(null,map__25618__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__25618__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__16517__auto__ = eval_body__$1;
if(cljs.core.truth_(and__16517__auto__)){
return typeof eval_body__$1 === 'string';
} else {
return and__16517__auto__;
}
})())){
var code = eval_body__$1;
try{figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Evaling file "),cljs.core.str(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e25620){var e = e25620;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Unable to evaluate "),cljs.core.str(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["figwheel.connect",null], null), null),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,((function (deps){
return (function (n){
var temp__4423__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (deps){
return (function (p1__25621_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__25621_SHARP_),n);
});})(deps))
,files));
if(cljs.core.truth_(temp__4423__auto__)){
var file_msg = temp__4423__auto__;
return file_msg;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372),new cljs.core.Keyword(null,"namespace","namespace",-377510372),n], null);
}
});})(deps))
,deps));
});
figwheel.client.file_reloading.sort_files = (function figwheel$client$file_reloading$sort_files(files){
var keep_files = cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,keep_files,new cljs.core.Keyword(null,"namespace","namespace",-377510372)),figwheel.client.file_reloading.expand_files.call(null,files));
});
figwheel.client.file_reloading.get_figwheel_always = (function figwheel$client$file_reloading$get_figwheel_always(){
return cljs.core.map.call(null,(function (p__25626){
var vec__25627 = p__25626;
var k = cljs.core.nth.call(null,vec__25627,(0),null);
var v = cljs.core.nth.call(null,vec__25627,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__25628){
var vec__25629 = p__25628;
var k = cljs.core.nth.call(null,vec__25629,(0),null);
var v = cljs.core.nth.call(null,vec__25629,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__25633,p__25634){
var map__25881 = p__25633;
var map__25881__$1 = ((((!((map__25881 == null)))?((((map__25881.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25881.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25881):map__25881);
var opts = map__25881__$1;
var before_jsload = cljs.core.get.call(null,map__25881__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__25881__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__25881__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__25882 = p__25634;
var map__25882__$1 = ((((!((map__25882 == null)))?((((map__25882.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25882.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25882):map__25882);
var msg = map__25882__$1;
var files = cljs.core.get.call(null,map__25882__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__25882__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__25882__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__19830__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19830__auto__,map__25881,map__25881__$1,opts,before_jsload,on_jsload,reload_dependents,map__25882,map__25882__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__19831__auto__ = (function (){var switch__19765__auto__ = ((function (c__19830__auto__,map__25881,map__25881__$1,opts,before_jsload,on_jsload,reload_dependents,map__25882,map__25882__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_26035){
var state_val_26036 = (state_26035[(1)]);
if((state_val_26036 === (7))){
var inst_25898 = (state_26035[(7)]);
var inst_25899 = (state_26035[(8)]);
var inst_25897 = (state_26035[(9)]);
var inst_25896 = (state_26035[(10)]);
var inst_25904 = cljs.core._nth.call(null,inst_25897,inst_25899);
var inst_25905 = figwheel.client.file_reloading.eval_body.call(null,inst_25904,opts);
var inst_25906 = (inst_25899 + (1));
var tmp26037 = inst_25898;
var tmp26038 = inst_25897;
var tmp26039 = inst_25896;
var inst_25896__$1 = tmp26039;
var inst_25897__$1 = tmp26038;
var inst_25898__$1 = tmp26037;
var inst_25899__$1 = inst_25906;
var state_26035__$1 = (function (){var statearr_26040 = state_26035;
(statearr_26040[(7)] = inst_25898__$1);

(statearr_26040[(8)] = inst_25899__$1);

(statearr_26040[(9)] = inst_25897__$1);

(statearr_26040[(10)] = inst_25896__$1);

(statearr_26040[(11)] = inst_25905);

return statearr_26040;
})();
var statearr_26041_26127 = state_26035__$1;
(statearr_26041_26127[(2)] = null);

(statearr_26041_26127[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26036 === (20))){
var inst_25939 = (state_26035[(12)]);
var inst_25947 = figwheel.client.file_reloading.sort_files.call(null,inst_25939);
var state_26035__$1 = state_26035;
var statearr_26042_26128 = state_26035__$1;
(statearr_26042_26128[(2)] = inst_25947);

(statearr_26042_26128[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26036 === (27))){
var state_26035__$1 = state_26035;
var statearr_26043_26129 = state_26035__$1;
(statearr_26043_26129[(2)] = null);

(statearr_26043_26129[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26036 === (1))){
var inst_25888 = (state_26035[(13)]);
var inst_25885 = before_jsload.call(null,files);
var inst_25886 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_25887 = (function (){return ((function (inst_25888,inst_25885,inst_25886,state_val_26036,c__19830__auto__,map__25881,map__25881__$1,opts,before_jsload,on_jsload,reload_dependents,map__25882,map__25882__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__25630_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__25630_SHARP_);
});
;})(inst_25888,inst_25885,inst_25886,state_val_26036,c__19830__auto__,map__25881,map__25881__$1,opts,before_jsload,on_jsload,reload_dependents,map__25882,map__25882__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_25888__$1 = cljs.core.filter.call(null,inst_25887,files);
var inst_25889 = cljs.core.not_empty.call(null,inst_25888__$1);
var state_26035__$1 = (function (){var statearr_26044 = state_26035;
(statearr_26044[(14)] = inst_25886);

(statearr_26044[(15)] = inst_25885);

(statearr_26044[(13)] = inst_25888__$1);

return statearr_26044;
})();
if(cljs.core.truth_(inst_25889)){
var statearr_26045_26130 = state_26035__$1;
(statearr_26045_26130[(1)] = (2));

} else {
var statearr_26046_26131 = state_26035__$1;
(statearr_26046_26131[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26036 === (24))){
var state_26035__$1 = state_26035;
var statearr_26047_26132 = state_26035__$1;
(statearr_26047_26132[(2)] = null);

(statearr_26047_26132[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26036 === (39))){
var inst_25989 = (state_26035[(16)]);
var state_26035__$1 = state_26035;
var statearr_26048_26133 = state_26035__$1;
(statearr_26048_26133[(2)] = inst_25989);

(statearr_26048_26133[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26036 === (46))){
var inst_26030 = (state_26035[(2)]);
var state_26035__$1 = state_26035;
var statearr_26049_26134 = state_26035__$1;
(statearr_26049_26134[(2)] = inst_26030);

(statearr_26049_26134[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26036 === (4))){
var inst_25933 = (state_26035[(2)]);
var inst_25934 = cljs.core.List.EMPTY;
var inst_25935 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_25934);
var inst_25936 = (function (){return ((function (inst_25933,inst_25934,inst_25935,state_val_26036,c__19830__auto__,map__25881,map__25881__$1,opts,before_jsload,on_jsload,reload_dependents,map__25882,map__25882__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__25631_SHARP_){
var and__16517__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__25631_SHARP_);
if(cljs.core.truth_(and__16517__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__25631_SHARP_));
} else {
return and__16517__auto__;
}
});
;})(inst_25933,inst_25934,inst_25935,state_val_26036,c__19830__auto__,map__25881,map__25881__$1,opts,before_jsload,on_jsload,reload_dependents,map__25882,map__25882__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_25937 = cljs.core.filter.call(null,inst_25936,files);
var inst_25938 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_25939 = cljs.core.concat.call(null,inst_25937,inst_25938);
var state_26035__$1 = (function (){var statearr_26050 = state_26035;
(statearr_26050[(17)] = inst_25933);

(statearr_26050[(18)] = inst_25935);

(statearr_26050[(12)] = inst_25939);

return statearr_26050;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_26051_26135 = state_26035__$1;
(statearr_26051_26135[(1)] = (16));

} else {
var statearr_26052_26136 = state_26035__$1;
(statearr_26052_26136[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26036 === (15))){
var inst_25923 = (state_26035[(2)]);
var state_26035__$1 = state_26035;
var statearr_26053_26137 = state_26035__$1;
(statearr_26053_26137[(2)] = inst_25923);

(statearr_26053_26137[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26036 === (21))){
var inst_25949 = (state_26035[(19)]);
var inst_25949__$1 = (state_26035[(2)]);
var inst_25950 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_25949__$1);
var state_26035__$1 = (function (){var statearr_26054 = state_26035;
(statearr_26054[(19)] = inst_25949__$1);

return statearr_26054;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26035__$1,(22),inst_25950);
} else {
if((state_val_26036 === (31))){
var inst_26033 = (state_26035[(2)]);
var state_26035__$1 = state_26035;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26035__$1,inst_26033);
} else {
if((state_val_26036 === (32))){
var inst_25989 = (state_26035[(16)]);
var inst_25994 = inst_25989.cljs$lang$protocol_mask$partition0$;
var inst_25995 = (inst_25994 & (64));
var inst_25996 = inst_25989.cljs$core$ISeq$;
var inst_25997 = (inst_25995) || (inst_25996);
var state_26035__$1 = state_26035;
if(cljs.core.truth_(inst_25997)){
var statearr_26055_26138 = state_26035__$1;
(statearr_26055_26138[(1)] = (35));

} else {
var statearr_26056_26139 = state_26035__$1;
(statearr_26056_26139[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26036 === (40))){
var inst_26010 = (state_26035[(20)]);
var inst_26009 = (state_26035[(2)]);
var inst_26010__$1 = cljs.core.get.call(null,inst_26009,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_26011 = cljs.core.get.call(null,inst_26009,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_26012 = cljs.core.not_empty.call(null,inst_26010__$1);
var state_26035__$1 = (function (){var statearr_26057 = state_26035;
(statearr_26057[(20)] = inst_26010__$1);

(statearr_26057[(21)] = inst_26011);

return statearr_26057;
})();
if(cljs.core.truth_(inst_26012)){
var statearr_26058_26140 = state_26035__$1;
(statearr_26058_26140[(1)] = (41));

} else {
var statearr_26059_26141 = state_26035__$1;
(statearr_26059_26141[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26036 === (33))){
var state_26035__$1 = state_26035;
var statearr_26060_26142 = state_26035__$1;
(statearr_26060_26142[(2)] = false);

(statearr_26060_26142[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26036 === (13))){
var inst_25909 = (state_26035[(22)]);
var inst_25913 = cljs.core.chunk_first.call(null,inst_25909);
var inst_25914 = cljs.core.chunk_rest.call(null,inst_25909);
var inst_25915 = cljs.core.count.call(null,inst_25913);
var inst_25896 = inst_25914;
var inst_25897 = inst_25913;
var inst_25898 = inst_25915;
var inst_25899 = (0);
var state_26035__$1 = (function (){var statearr_26061 = state_26035;
(statearr_26061[(7)] = inst_25898);

(statearr_26061[(8)] = inst_25899);

(statearr_26061[(9)] = inst_25897);

(statearr_26061[(10)] = inst_25896);

return statearr_26061;
})();
var statearr_26062_26143 = state_26035__$1;
(statearr_26062_26143[(2)] = null);

(statearr_26062_26143[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26036 === (22))){
var inst_25952 = (state_26035[(23)]);
var inst_25957 = (state_26035[(24)]);
var inst_25949 = (state_26035[(19)]);
var inst_25953 = (state_26035[(25)]);
var inst_25952__$1 = (state_26035[(2)]);
var inst_25953__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_25952__$1);
var inst_25954 = (function (){var all_files = inst_25949;
var res_SINGLEQUOTE_ = inst_25952__$1;
var res = inst_25953__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_25952,inst_25957,inst_25949,inst_25953,inst_25952__$1,inst_25953__$1,state_val_26036,c__19830__auto__,map__25881,map__25881__$1,opts,before_jsload,on_jsload,reload_dependents,map__25882,map__25882__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__25632_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__25632_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_25952,inst_25957,inst_25949,inst_25953,inst_25952__$1,inst_25953__$1,state_val_26036,c__19830__auto__,map__25881,map__25881__$1,opts,before_jsload,on_jsload,reload_dependents,map__25882,map__25882__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_25955 = cljs.core.filter.call(null,inst_25954,inst_25952__$1);
var inst_25956 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_25957__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_25956);
var inst_25958 = cljs.core.not_empty.call(null,inst_25957__$1);
var state_26035__$1 = (function (){var statearr_26063 = state_26035;
(statearr_26063[(23)] = inst_25952__$1);

(statearr_26063[(24)] = inst_25957__$1);

(statearr_26063[(25)] = inst_25953__$1);

(statearr_26063[(26)] = inst_25955);

return statearr_26063;
})();
if(cljs.core.truth_(inst_25958)){
var statearr_26064_26144 = state_26035__$1;
(statearr_26064_26144[(1)] = (23));

} else {
var statearr_26065_26145 = state_26035__$1;
(statearr_26065_26145[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26036 === (36))){
var state_26035__$1 = state_26035;
var statearr_26066_26146 = state_26035__$1;
(statearr_26066_26146[(2)] = false);

(statearr_26066_26146[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26036 === (41))){
var inst_26010 = (state_26035[(20)]);
var inst_26014 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_26015 = cljs.core.map.call(null,inst_26014,inst_26010);
var inst_26016 = cljs.core.pr_str.call(null,inst_26015);
var inst_26017 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_26016)].join('');
var inst_26018 = figwheel.client.utils.log.call(null,inst_26017);
var state_26035__$1 = state_26035;
var statearr_26067_26147 = state_26035__$1;
(statearr_26067_26147[(2)] = inst_26018);

(statearr_26067_26147[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26036 === (43))){
var inst_26011 = (state_26035[(21)]);
var inst_26021 = (state_26035[(2)]);
var inst_26022 = cljs.core.not_empty.call(null,inst_26011);
var state_26035__$1 = (function (){var statearr_26068 = state_26035;
(statearr_26068[(27)] = inst_26021);

return statearr_26068;
})();
if(cljs.core.truth_(inst_26022)){
var statearr_26069_26148 = state_26035__$1;
(statearr_26069_26148[(1)] = (44));

} else {
var statearr_26070_26149 = state_26035__$1;
(statearr_26070_26149[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26036 === (29))){
var inst_25989 = (state_26035[(16)]);
var inst_25952 = (state_26035[(23)]);
var inst_25957 = (state_26035[(24)]);
var inst_25949 = (state_26035[(19)]);
var inst_25953 = (state_26035[(25)]);
var inst_25955 = (state_26035[(26)]);
var inst_25985 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_25988 = (function (){var all_files = inst_25949;
var res_SINGLEQUOTE_ = inst_25952;
var res = inst_25953;
var files_not_loaded = inst_25955;
var dependencies_that_loaded = inst_25957;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_25989,inst_25952,inst_25957,inst_25949,inst_25953,inst_25955,inst_25985,state_val_26036,c__19830__auto__,map__25881,map__25881__$1,opts,before_jsload,on_jsload,reload_dependents,map__25882,map__25882__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__25987){
var map__26071 = p__25987;
var map__26071__$1 = ((((!((map__26071 == null)))?((((map__26071.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26071.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26071):map__26071);
var namespace = cljs.core.get.call(null,map__26071__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.truth_(meta_data.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179)))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_25989,inst_25952,inst_25957,inst_25949,inst_25953,inst_25955,inst_25985,state_val_26036,c__19830__auto__,map__25881,map__25881__$1,opts,before_jsload,on_jsload,reload_dependents,map__25882,map__25882__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_25989__$1 = cljs.core.group_by.call(null,inst_25988,inst_25955);
var inst_25991 = (inst_25989__$1 == null);
var inst_25992 = cljs.core.not.call(null,inst_25991);
var state_26035__$1 = (function (){var statearr_26073 = state_26035;
(statearr_26073[(16)] = inst_25989__$1);

(statearr_26073[(28)] = inst_25985);

return statearr_26073;
})();
if(inst_25992){
var statearr_26074_26150 = state_26035__$1;
(statearr_26074_26150[(1)] = (32));

} else {
var statearr_26075_26151 = state_26035__$1;
(statearr_26075_26151[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26036 === (44))){
var inst_26011 = (state_26035[(21)]);
var inst_26024 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_26011);
var inst_26025 = cljs.core.pr_str.call(null,inst_26024);
var inst_26026 = [cljs.core.str("not required: "),cljs.core.str(inst_26025)].join('');
var inst_26027 = figwheel.client.utils.log.call(null,inst_26026);
var state_26035__$1 = state_26035;
var statearr_26076_26152 = state_26035__$1;
(statearr_26076_26152[(2)] = inst_26027);

(statearr_26076_26152[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26036 === (6))){
var inst_25930 = (state_26035[(2)]);
var state_26035__$1 = state_26035;
var statearr_26077_26153 = state_26035__$1;
(statearr_26077_26153[(2)] = inst_25930);

(statearr_26077_26153[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26036 === (28))){
var inst_25955 = (state_26035[(26)]);
var inst_25982 = (state_26035[(2)]);
var inst_25983 = cljs.core.not_empty.call(null,inst_25955);
var state_26035__$1 = (function (){var statearr_26078 = state_26035;
(statearr_26078[(29)] = inst_25982);

return statearr_26078;
})();
if(cljs.core.truth_(inst_25983)){
var statearr_26079_26154 = state_26035__$1;
(statearr_26079_26154[(1)] = (29));

} else {
var statearr_26080_26155 = state_26035__$1;
(statearr_26080_26155[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26036 === (25))){
var inst_25953 = (state_26035[(25)]);
var inst_25969 = (state_26035[(2)]);
var inst_25970 = cljs.core.not_empty.call(null,inst_25953);
var state_26035__$1 = (function (){var statearr_26081 = state_26035;
(statearr_26081[(30)] = inst_25969);

return statearr_26081;
})();
if(cljs.core.truth_(inst_25970)){
var statearr_26082_26156 = state_26035__$1;
(statearr_26082_26156[(1)] = (26));

} else {
var statearr_26083_26157 = state_26035__$1;
(statearr_26083_26157[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26036 === (34))){
var inst_26004 = (state_26035[(2)]);
var state_26035__$1 = state_26035;
if(cljs.core.truth_(inst_26004)){
var statearr_26084_26158 = state_26035__$1;
(statearr_26084_26158[(1)] = (38));

} else {
var statearr_26085_26159 = state_26035__$1;
(statearr_26085_26159[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26036 === (17))){
var state_26035__$1 = state_26035;
var statearr_26086_26160 = state_26035__$1;
(statearr_26086_26160[(2)] = recompile_dependents);

(statearr_26086_26160[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26036 === (3))){
var state_26035__$1 = state_26035;
var statearr_26087_26161 = state_26035__$1;
(statearr_26087_26161[(2)] = null);

(statearr_26087_26161[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26036 === (12))){
var inst_25926 = (state_26035[(2)]);
var state_26035__$1 = state_26035;
var statearr_26088_26162 = state_26035__$1;
(statearr_26088_26162[(2)] = inst_25926);

(statearr_26088_26162[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26036 === (2))){
var inst_25888 = (state_26035[(13)]);
var inst_25895 = cljs.core.seq.call(null,inst_25888);
var inst_25896 = inst_25895;
var inst_25897 = null;
var inst_25898 = (0);
var inst_25899 = (0);
var state_26035__$1 = (function (){var statearr_26089 = state_26035;
(statearr_26089[(7)] = inst_25898);

(statearr_26089[(8)] = inst_25899);

(statearr_26089[(9)] = inst_25897);

(statearr_26089[(10)] = inst_25896);

return statearr_26089;
})();
var statearr_26090_26163 = state_26035__$1;
(statearr_26090_26163[(2)] = null);

(statearr_26090_26163[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26036 === (23))){
var inst_25952 = (state_26035[(23)]);
var inst_25957 = (state_26035[(24)]);
var inst_25949 = (state_26035[(19)]);
var inst_25953 = (state_26035[(25)]);
var inst_25955 = (state_26035[(26)]);
var inst_25960 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_25962 = (function (){var all_files = inst_25949;
var res_SINGLEQUOTE_ = inst_25952;
var res = inst_25953;
var files_not_loaded = inst_25955;
var dependencies_that_loaded = inst_25957;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_25952,inst_25957,inst_25949,inst_25953,inst_25955,inst_25960,state_val_26036,c__19830__auto__,map__25881,map__25881__$1,opts,before_jsload,on_jsload,reload_dependents,map__25882,map__25882__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__25961){
var map__26091 = p__25961;
var map__26091__$1 = ((((!((map__26091 == null)))?((((map__26091.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26091.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26091):map__26091);
var request_url = cljs.core.get.call(null,map__26091__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_25952,inst_25957,inst_25949,inst_25953,inst_25955,inst_25960,state_val_26036,c__19830__auto__,map__25881,map__25881__$1,opts,before_jsload,on_jsload,reload_dependents,map__25882,map__25882__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_25963 = cljs.core.reverse.call(null,inst_25957);
var inst_25964 = cljs.core.map.call(null,inst_25962,inst_25963);
var inst_25965 = cljs.core.pr_str.call(null,inst_25964);
var inst_25966 = figwheel.client.utils.log.call(null,inst_25965);
var state_26035__$1 = (function (){var statearr_26093 = state_26035;
(statearr_26093[(31)] = inst_25960);

return statearr_26093;
})();
var statearr_26094_26164 = state_26035__$1;
(statearr_26094_26164[(2)] = inst_25966);

(statearr_26094_26164[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26036 === (35))){
var state_26035__$1 = state_26035;
var statearr_26095_26165 = state_26035__$1;
(statearr_26095_26165[(2)] = true);

(statearr_26095_26165[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26036 === (19))){
var inst_25939 = (state_26035[(12)]);
var inst_25945 = figwheel.client.file_reloading.expand_files.call(null,inst_25939);
var state_26035__$1 = state_26035;
var statearr_26096_26166 = state_26035__$1;
(statearr_26096_26166[(2)] = inst_25945);

(statearr_26096_26166[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26036 === (11))){
var state_26035__$1 = state_26035;
var statearr_26097_26167 = state_26035__$1;
(statearr_26097_26167[(2)] = null);

(statearr_26097_26167[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26036 === (9))){
var inst_25928 = (state_26035[(2)]);
var state_26035__$1 = state_26035;
var statearr_26098_26168 = state_26035__$1;
(statearr_26098_26168[(2)] = inst_25928);

(statearr_26098_26168[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26036 === (5))){
var inst_25898 = (state_26035[(7)]);
var inst_25899 = (state_26035[(8)]);
var inst_25901 = (inst_25899 < inst_25898);
var inst_25902 = inst_25901;
var state_26035__$1 = state_26035;
if(cljs.core.truth_(inst_25902)){
var statearr_26099_26169 = state_26035__$1;
(statearr_26099_26169[(1)] = (7));

} else {
var statearr_26100_26170 = state_26035__$1;
(statearr_26100_26170[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26036 === (14))){
var inst_25909 = (state_26035[(22)]);
var inst_25918 = cljs.core.first.call(null,inst_25909);
var inst_25919 = figwheel.client.file_reloading.eval_body.call(null,inst_25918,opts);
var inst_25920 = cljs.core.next.call(null,inst_25909);
var inst_25896 = inst_25920;
var inst_25897 = null;
var inst_25898 = (0);
var inst_25899 = (0);
var state_26035__$1 = (function (){var statearr_26101 = state_26035;
(statearr_26101[(7)] = inst_25898);

(statearr_26101[(8)] = inst_25899);

(statearr_26101[(9)] = inst_25897);

(statearr_26101[(32)] = inst_25919);

(statearr_26101[(10)] = inst_25896);

return statearr_26101;
})();
var statearr_26102_26171 = state_26035__$1;
(statearr_26102_26171[(2)] = null);

(statearr_26102_26171[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26036 === (45))){
var state_26035__$1 = state_26035;
var statearr_26103_26172 = state_26035__$1;
(statearr_26103_26172[(2)] = null);

(statearr_26103_26172[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26036 === (26))){
var inst_25952 = (state_26035[(23)]);
var inst_25957 = (state_26035[(24)]);
var inst_25949 = (state_26035[(19)]);
var inst_25953 = (state_26035[(25)]);
var inst_25955 = (state_26035[(26)]);
var inst_25972 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_25974 = (function (){var all_files = inst_25949;
var res_SINGLEQUOTE_ = inst_25952;
var res = inst_25953;
var files_not_loaded = inst_25955;
var dependencies_that_loaded = inst_25957;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_25952,inst_25957,inst_25949,inst_25953,inst_25955,inst_25972,state_val_26036,c__19830__auto__,map__25881,map__25881__$1,opts,before_jsload,on_jsload,reload_dependents,map__25882,map__25882__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__25973){
var map__26104 = p__25973;
var map__26104__$1 = ((((!((map__26104 == null)))?((((map__26104.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26104.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26104):map__26104);
var namespace = cljs.core.get.call(null,map__26104__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__26104__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_25952,inst_25957,inst_25949,inst_25953,inst_25955,inst_25972,state_val_26036,c__19830__auto__,map__25881,map__25881__$1,opts,before_jsload,on_jsload,reload_dependents,map__25882,map__25882__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_25975 = cljs.core.map.call(null,inst_25974,inst_25953);
var inst_25976 = cljs.core.pr_str.call(null,inst_25975);
var inst_25977 = figwheel.client.utils.log.call(null,inst_25976);
var inst_25978 = (function (){var all_files = inst_25949;
var res_SINGLEQUOTE_ = inst_25952;
var res = inst_25953;
var files_not_loaded = inst_25955;
var dependencies_that_loaded = inst_25957;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_25952,inst_25957,inst_25949,inst_25953,inst_25955,inst_25972,inst_25974,inst_25975,inst_25976,inst_25977,state_val_26036,c__19830__auto__,map__25881,map__25881__$1,opts,before_jsload,on_jsload,reload_dependents,map__25882,map__25882__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_25952,inst_25957,inst_25949,inst_25953,inst_25955,inst_25972,inst_25974,inst_25975,inst_25976,inst_25977,state_val_26036,c__19830__auto__,map__25881,map__25881__$1,opts,before_jsload,on_jsload,reload_dependents,map__25882,map__25882__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_25979 = setTimeout(inst_25978,(10));
var state_26035__$1 = (function (){var statearr_26106 = state_26035;
(statearr_26106[(33)] = inst_25972);

(statearr_26106[(34)] = inst_25977);

return statearr_26106;
})();
var statearr_26107_26173 = state_26035__$1;
(statearr_26107_26173[(2)] = inst_25979);

(statearr_26107_26173[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26036 === (16))){
var state_26035__$1 = state_26035;
var statearr_26108_26174 = state_26035__$1;
(statearr_26108_26174[(2)] = reload_dependents);

(statearr_26108_26174[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26036 === (38))){
var inst_25989 = (state_26035[(16)]);
var inst_26006 = cljs.core.apply.call(null,cljs.core.hash_map,inst_25989);
var state_26035__$1 = state_26035;
var statearr_26109_26175 = state_26035__$1;
(statearr_26109_26175[(2)] = inst_26006);

(statearr_26109_26175[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26036 === (30))){
var state_26035__$1 = state_26035;
var statearr_26110_26176 = state_26035__$1;
(statearr_26110_26176[(2)] = null);

(statearr_26110_26176[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26036 === (10))){
var inst_25909 = (state_26035[(22)]);
var inst_25911 = cljs.core.chunked_seq_QMARK_.call(null,inst_25909);
var state_26035__$1 = state_26035;
if(inst_25911){
var statearr_26111_26177 = state_26035__$1;
(statearr_26111_26177[(1)] = (13));

} else {
var statearr_26112_26178 = state_26035__$1;
(statearr_26112_26178[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26036 === (18))){
var inst_25943 = (state_26035[(2)]);
var state_26035__$1 = state_26035;
if(cljs.core.truth_(inst_25943)){
var statearr_26113_26179 = state_26035__$1;
(statearr_26113_26179[(1)] = (19));

} else {
var statearr_26114_26180 = state_26035__$1;
(statearr_26114_26180[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26036 === (42))){
var state_26035__$1 = state_26035;
var statearr_26115_26181 = state_26035__$1;
(statearr_26115_26181[(2)] = null);

(statearr_26115_26181[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26036 === (37))){
var inst_26001 = (state_26035[(2)]);
var state_26035__$1 = state_26035;
var statearr_26116_26182 = state_26035__$1;
(statearr_26116_26182[(2)] = inst_26001);

(statearr_26116_26182[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26036 === (8))){
var inst_25909 = (state_26035[(22)]);
var inst_25896 = (state_26035[(10)]);
var inst_25909__$1 = cljs.core.seq.call(null,inst_25896);
var state_26035__$1 = (function (){var statearr_26117 = state_26035;
(statearr_26117[(22)] = inst_25909__$1);

return statearr_26117;
})();
if(inst_25909__$1){
var statearr_26118_26183 = state_26035__$1;
(statearr_26118_26183[(1)] = (10));

} else {
var statearr_26119_26184 = state_26035__$1;
(statearr_26119_26184[(1)] = (11));

}

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
});})(c__19830__auto__,map__25881,map__25881__$1,opts,before_jsload,on_jsload,reload_dependents,map__25882,map__25882__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__19765__auto__,c__19830__auto__,map__25881,map__25881__$1,opts,before_jsload,on_jsload,reload_dependents,map__25882,map__25882__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__19766__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__19766__auto____0 = (function (){
var statearr_26123 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26123[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__19766__auto__);

(statearr_26123[(1)] = (1));

return statearr_26123;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__19766__auto____1 = (function (state_26035){
while(true){
var ret_value__19767__auto__ = (function (){try{while(true){
var result__19768__auto__ = switch__19765__auto__.call(null,state_26035);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19768__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19768__auto__;
}
break;
}
}catch (e26124){if((e26124 instanceof Object)){
var ex__19769__auto__ = e26124;
var statearr_26125_26185 = state_26035;
(statearr_26125_26185[(5)] = ex__19769__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26035);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26124;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19767__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26186 = state_26035;
state_26035 = G__26186;
continue;
} else {
return ret_value__19767__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__19766__auto__ = function(state_26035){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__19766__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__19766__auto____1.call(this,state_26035);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__19766__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__19766__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__19766__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__19766__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__19766__auto__;
})()
;})(switch__19765__auto__,c__19830__auto__,map__25881,map__25881__$1,opts,before_jsload,on_jsload,reload_dependents,map__25882,map__25882__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__19832__auto__ = (function (){var statearr_26126 = f__19831__auto__.call(null);
(statearr_26126[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19830__auto__);

return statearr_26126;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19832__auto__);
});})(c__19830__auto__,map__25881,map__25881__$1,opts,before_jsload,on_jsload,reload_dependents,map__25882,map__25882__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__19830__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__26189,link){
var map__26192 = p__26189;
var map__26192__$1 = ((((!((map__26192 == null)))?((((map__26192.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26192.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26192):map__26192);
var file = cljs.core.get.call(null,map__26192__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4425__auto__ = link.href;
if(cljs.core.truth_(temp__4425__auto__)){
var link_href = temp__4425__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4425__auto__,map__26192,map__26192__$1,file){
return (function (p1__26187_SHARP_,p2__26188_SHARP_){
if(cljs.core._EQ_.call(null,p1__26187_SHARP_,p2__26188_SHARP_)){
return p1__26187_SHARP_;
} else {
return false;
}
});})(link_href,temp__4425__auto__,map__26192,map__26192__$1,file))
,cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = cljs.core.count.call(null,match);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),cljs.core.count.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href))], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__4425__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__26198){
var map__26199 = p__26198;
var map__26199__$1 = ((((!((map__26199 == null)))?((((map__26199.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26199.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26199):map__26199);
var match_length = cljs.core.get.call(null,map__26199__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__26199__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__26194_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__26194_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__4425__auto__)){
var res = temp__4425__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.add_link_to_doc = (function figwheel$client$file_reloading$add_link_to_doc(var_args){
var args26201 = [];
var len__17587__auto___26204 = arguments.length;
var i__17588__auto___26205 = (0);
while(true){
if((i__17588__auto___26205 < len__17587__auto___26204)){
args26201.push((arguments[i__17588__auto___26205]));

var G__26206 = (i__17588__auto___26205 + (1));
i__17588__auto___26205 = G__26206;
continue;
} else {
}
break;
}

var G__26203 = args26201.length;
switch (G__26203) {
case 1:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26201.length)].join('')));

}
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1 = (function (new_link){
return (document.getElementsByTagName("head")[(0)]).appendChild(new_link);
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2 = (function (orig_link,klone){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
return parent.removeChild(orig_link);
});})(parent))
,(300));
});

figwheel.client.file_reloading.add_link_to_doc.cljs$lang$maxFixedArity = 2;
figwheel.client.file_reloading.distictify = (function figwheel$client$file_reloading$distictify(key,seqq){
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__26208_SHARP_,p2__26209_SHARP_){
return cljs.core.assoc.call(null,p1__26208_SHARP_,cljs.core.get.call(null,p2__26209_SHARP_,key),p2__26209_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(p__26210){
var map__26213 = p__26210;
var map__26213__$1 = ((((!((map__26213 == null)))?((((map__26213.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26213.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26213):map__26213);
var f_data = map__26213__$1;
var file = cljs.core.get.call(null,map__26213__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4425__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4425__auto__)){
var link = temp__4425__auto__;
return figwheel.client.file_reloading.add_link_to_doc.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href));
} else {
return null;
}
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__26215,files_msg){
var map__26222 = p__26215;
var map__26222__$1 = ((((!((map__26222 == null)))?((((map__26222.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26222.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26222):map__26222);
var opts = map__26222__$1;
var on_cssload = cljs.core.get.call(null,map__26222__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var seq__26224_26228 = cljs.core.seq.call(null,figwheel.client.file_reloading.distictify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));
var chunk__26225_26229 = null;
var count__26226_26230 = (0);
var i__26227_26231 = (0);
while(true){
if((i__26227_26231 < count__26226_26230)){
var f_26232 = cljs.core._nth.call(null,chunk__26225_26229,i__26227_26231);
figwheel.client.file_reloading.reload_css_file.call(null,f_26232);

var G__26233 = seq__26224_26228;
var G__26234 = chunk__26225_26229;
var G__26235 = count__26226_26230;
var G__26236 = (i__26227_26231 + (1));
seq__26224_26228 = G__26233;
chunk__26225_26229 = G__26234;
count__26226_26230 = G__26235;
i__26227_26231 = G__26236;
continue;
} else {
var temp__4425__auto___26237 = cljs.core.seq.call(null,seq__26224_26228);
if(temp__4425__auto___26237){
var seq__26224_26238__$1 = temp__4425__auto___26237;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26224_26238__$1)){
var c__17332__auto___26239 = cljs.core.chunk_first.call(null,seq__26224_26238__$1);
var G__26240 = cljs.core.chunk_rest.call(null,seq__26224_26238__$1);
var G__26241 = c__17332__auto___26239;
var G__26242 = cljs.core.count.call(null,c__17332__auto___26239);
var G__26243 = (0);
seq__26224_26228 = G__26240;
chunk__26225_26229 = G__26241;
count__26226_26230 = G__26242;
i__26227_26231 = G__26243;
continue;
} else {
var f_26244 = cljs.core.first.call(null,seq__26224_26238__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_26244);

var G__26245 = cljs.core.next.call(null,seq__26224_26238__$1);
var G__26246 = null;
var G__26247 = (0);
var G__26248 = (0);
seq__26224_26228 = G__26245;
chunk__26225_26229 = G__26246;
count__26226_26230 = G__26247;
i__26227_26231 = G__26248;
continue;
}
} else {
}
}
break;
}

return setTimeout(((function (map__26222,map__26222__$1,opts,on_cssload){
return (function (){
return on_cssload.call(null,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg));
});})(map__26222,map__26222__$1,opts,on_cssload))
,(100));
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1448369130908