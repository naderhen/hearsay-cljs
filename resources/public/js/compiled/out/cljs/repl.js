// Compiled by ClojureScript 1.7.122 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
cljs.repl.print_doc = (function cljs$repl$print_doc(m){
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str((function (){var temp__4425__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4425__auto__)){
var ns = temp__4425__auto__;
return [cljs.core.str(ns),cljs.core.str("/")].join('');
} else {
return null;
}
})()),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__25190_25204 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__25191_25205 = null;
var count__25192_25206 = (0);
var i__25193_25207 = (0);
while(true){
if((i__25193_25207 < count__25192_25206)){
var f_25208 = cljs.core._nth.call(null,chunk__25191_25205,i__25193_25207);
cljs.core.println.call(null,"  ",f_25208);

var G__25209 = seq__25190_25204;
var G__25210 = chunk__25191_25205;
var G__25211 = count__25192_25206;
var G__25212 = (i__25193_25207 + (1));
seq__25190_25204 = G__25209;
chunk__25191_25205 = G__25210;
count__25192_25206 = G__25211;
i__25193_25207 = G__25212;
continue;
} else {
var temp__4425__auto___25213 = cljs.core.seq.call(null,seq__25190_25204);
if(temp__4425__auto___25213){
var seq__25190_25214__$1 = temp__4425__auto___25213;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25190_25214__$1)){
var c__17332__auto___25215 = cljs.core.chunk_first.call(null,seq__25190_25214__$1);
var G__25216 = cljs.core.chunk_rest.call(null,seq__25190_25214__$1);
var G__25217 = c__17332__auto___25215;
var G__25218 = cljs.core.count.call(null,c__17332__auto___25215);
var G__25219 = (0);
seq__25190_25204 = G__25216;
chunk__25191_25205 = G__25217;
count__25192_25206 = G__25218;
i__25193_25207 = G__25219;
continue;
} else {
var f_25220 = cljs.core.first.call(null,seq__25190_25214__$1);
cljs.core.println.call(null,"  ",f_25220);

var G__25221 = cljs.core.next.call(null,seq__25190_25214__$1);
var G__25222 = null;
var G__25223 = (0);
var G__25224 = (0);
seq__25190_25204 = G__25221;
chunk__25191_25205 = G__25222;
count__25192_25206 = G__25223;
i__25193_25207 = G__25224;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_25225 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__16529__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__16529__auto__)){
return or__16529__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_25225);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_25225)))?cljs.core.second.call(null,arglists_25225):arglists_25225));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/"),cljs.core.str(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/special_forms#"),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__25194 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__25195 = null;
var count__25196 = (0);
var i__25197 = (0);
while(true){
if((i__25197 < count__25196)){
var vec__25198 = cljs.core._nth.call(null,chunk__25195,i__25197);
var name = cljs.core.nth.call(null,vec__25198,(0),null);
var map__25199 = cljs.core.nth.call(null,vec__25198,(1),null);
var map__25199__$1 = ((((!((map__25199 == null)))?((((map__25199.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25199.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25199):map__25199);
var doc = cljs.core.get.call(null,map__25199__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__25199__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__25226 = seq__25194;
var G__25227 = chunk__25195;
var G__25228 = count__25196;
var G__25229 = (i__25197 + (1));
seq__25194 = G__25226;
chunk__25195 = G__25227;
count__25196 = G__25228;
i__25197 = G__25229;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__25194);
if(temp__4425__auto__){
var seq__25194__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25194__$1)){
var c__17332__auto__ = cljs.core.chunk_first.call(null,seq__25194__$1);
var G__25230 = cljs.core.chunk_rest.call(null,seq__25194__$1);
var G__25231 = c__17332__auto__;
var G__25232 = cljs.core.count.call(null,c__17332__auto__);
var G__25233 = (0);
seq__25194 = G__25230;
chunk__25195 = G__25231;
count__25196 = G__25232;
i__25197 = G__25233;
continue;
} else {
var vec__25201 = cljs.core.first.call(null,seq__25194__$1);
var name = cljs.core.nth.call(null,vec__25201,(0),null);
var map__25202 = cljs.core.nth.call(null,vec__25201,(1),null);
var map__25202__$1 = ((((!((map__25202 == null)))?((((map__25202.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25202.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25202):map__25202);
var doc = cljs.core.get.call(null,map__25202__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__25202__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__25234 = cljs.core.next.call(null,seq__25194__$1);
var G__25235 = null;
var G__25236 = (0);
var G__25237 = (0);
seq__25194 = G__25234;
chunk__25195 = G__25235;
count__25196 = G__25236;
i__25197 = G__25237;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map?rel=1448369129708