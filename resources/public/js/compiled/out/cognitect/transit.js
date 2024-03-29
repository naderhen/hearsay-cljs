// Compiled by ClojureScript 1.7.122 {}
goog.provide('cognitect.transit');
goog.require('cljs.core');
goog.require('com.cognitect.transit');
goog.require('com.cognitect.transit.types');
goog.require('com.cognitect.transit.eq');
goog.require('goog.math.Long');
cljs.core.UUID.prototype.cljs$core$IEquiv$ = true;

cljs.core.UUID.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
if((other instanceof cljs.core.UUID)){
return (this$__$1.uuid === other.uuid);
} else {
if((other instanceof com.cognitect.transit.types.UUID)){
return (this$__$1.uuid === other.toString());
} else {
return false;

}
}
});
cljs.core.UUID.prototype.cljs$core$IComparable$ = true;

cljs.core.UUID.prototype.cljs$core$IComparable$_compare$arity$2 = (function (this$,other){
var this$__$1 = this;
if(((other instanceof cljs.core.UUID)) || ((other instanceof com.cognitect.transit.types.UUID))){
return cljs.core.compare.call(null,this$__$1.toString(),other.toString());
} else {
throw (new Error([cljs.core.str("Cannot compare "),cljs.core.str(this$__$1),cljs.core.str(" to "),cljs.core.str(other)].join('')));
}
});

com.cognitect.transit.types.UUID.prototype.cljs$core$IComparable$ = true;

com.cognitect.transit.types.UUID.prototype.cljs$core$IComparable$_compare$arity$2 = (function (this$,other){
var this$__$1 = this;
if(((other instanceof cljs.core.UUID)) || ((other instanceof com.cognitect.transit.types.UUID))){
return cljs.core.compare.call(null,this$__$1.toString(),other.toString());
} else {
throw (new Error([cljs.core.str("Cannot compare "),cljs.core.str(this$__$1),cljs.core.str(" to "),cljs.core.str(other)].join('')));
}
});
goog.math.Long.prototype.cljs$core$IEquiv$ = true;

goog.math.Long.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
return this$__$1.equiv(other);
});

com.cognitect.transit.types.UUID.prototype.cljs$core$IEquiv$ = true;

com.cognitect.transit.types.UUID.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
if((other instanceof cljs.core.UUID)){
return cljs.core._equiv.call(null,other,this$__$1);
} else {
return this$__$1.equiv(other);
}
});

com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IEquiv$ = true;

com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
return this$__$1.equiv(other);
});
goog.math.Long.prototype.cljs$core$IHash$ = true;

goog.math.Long.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this$__$1 = this;
return com.cognitect.transit.eq.hashCode.call(null,this$__$1);
});

com.cognitect.transit.types.UUID.prototype.cljs$core$IHash$ = true;

com.cognitect.transit.types.UUID.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this$__$1 = this;
return com.cognitect.transit.eq.hashCode.call(null,this$__$1);
});

com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IHash$ = true;

com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this$__$1 = this;
return com.cognitect.transit.eq.hashCode.call(null,this$__$1);
});
com.cognitect.transit.types.UUID.prototype.cljs$core$IPrintWithWriter$ = true;

com.cognitect.transit.types.UUID.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (uuid,writer,_){
var uuid__$1 = this;
return cljs.core._write.call(null,writer,[cljs.core.str("#uuid \""),cljs.core.str(uuid__$1.toString()),cljs.core.str("\"")].join(''));
});
cognitect.transit.opts_merge = (function cognitect$transit$opts_merge(a,b){
var seq__20207_20211 = cljs.core.seq.call(null,cljs.core.js_keys.call(null,b));
var chunk__20208_20212 = null;
var count__20209_20213 = (0);
var i__20210_20214 = (0);
while(true){
if((i__20210_20214 < count__20209_20213)){
var k_20215 = cljs.core._nth.call(null,chunk__20208_20212,i__20210_20214);
var v_20216 = (b[k_20215]);
(a[k_20215] = v_20216);

var G__20217 = seq__20207_20211;
var G__20218 = chunk__20208_20212;
var G__20219 = count__20209_20213;
var G__20220 = (i__20210_20214 + (1));
seq__20207_20211 = G__20217;
chunk__20208_20212 = G__20218;
count__20209_20213 = G__20219;
i__20210_20214 = G__20220;
continue;
} else {
var temp__4425__auto___20221 = cljs.core.seq.call(null,seq__20207_20211);
if(temp__4425__auto___20221){
var seq__20207_20222__$1 = temp__4425__auto___20221;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20207_20222__$1)){
var c__17332__auto___20223 = cljs.core.chunk_first.call(null,seq__20207_20222__$1);
var G__20224 = cljs.core.chunk_rest.call(null,seq__20207_20222__$1);
var G__20225 = c__17332__auto___20223;
var G__20226 = cljs.core.count.call(null,c__17332__auto___20223);
var G__20227 = (0);
seq__20207_20211 = G__20224;
chunk__20208_20212 = G__20225;
count__20209_20213 = G__20226;
i__20210_20214 = G__20227;
continue;
} else {
var k_20228 = cljs.core.first.call(null,seq__20207_20222__$1);
var v_20229 = (b[k_20228]);
(a[k_20228] = v_20229);

var G__20230 = cljs.core.next.call(null,seq__20207_20222__$1);
var G__20231 = null;
var G__20232 = (0);
var G__20233 = (0);
seq__20207_20211 = G__20230;
chunk__20208_20212 = G__20231;
count__20209_20213 = G__20232;
i__20210_20214 = G__20233;
continue;
}
} else {
}
}
break;
}

return a;
});

/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.MapBuilder = (function (){
})
cognitect.transit.MapBuilder.prototype.init = (function (node){
var self__ = this;
var _ = this;
return cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

cognitect.transit.MapBuilder.prototype.add = (function (m,k,v,node){
var self__ = this;
var _ = this;
return cljs.core.assoc_BANG_.call(null,m,k,v);
});

cognitect.transit.MapBuilder.prototype.finalize = (function (m,node){
var self__ = this;
var _ = this;
return cljs.core.persistent_BANG_.call(null,m);
});

cognitect.transit.MapBuilder.prototype.fromArray = (function (arr,node){
var self__ = this;
var _ = this;
return cljs.core.PersistentArrayMap.fromArray.call(null,arr,true,true);
});

cognitect.transit.MapBuilder.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.MapBuilder.cljs$lang$type = true;

cognitect.transit.MapBuilder.cljs$lang$ctorStr = "cognitect.transit/MapBuilder";

cognitect.transit.MapBuilder.cljs$lang$ctorPrWriter = (function (this__17127__auto__,writer__17128__auto__,opt__17129__auto__){
return cljs.core._write.call(null,writer__17128__auto__,"cognitect.transit/MapBuilder");
});

cognitect.transit.__GT_MapBuilder = (function cognitect$transit$__GT_MapBuilder(){
return (new cognitect.transit.MapBuilder());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.VectorBuilder = (function (){
})
cognitect.transit.VectorBuilder.prototype.init = (function (node){
var self__ = this;
var _ = this;
return cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY);
});

cognitect.transit.VectorBuilder.prototype.add = (function (v,x,node){
var self__ = this;
var _ = this;
return cljs.core.conj_BANG_.call(null,v,x);
});

cognitect.transit.VectorBuilder.prototype.finalize = (function (v,node){
var self__ = this;
var _ = this;
return cljs.core.persistent_BANG_.call(null,v);
});

cognitect.transit.VectorBuilder.prototype.fromArray = (function (arr,node){
var self__ = this;
var _ = this;
return cljs.core.PersistentVector.fromArray.call(null,arr,true);
});

cognitect.transit.VectorBuilder.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.VectorBuilder.cljs$lang$type = true;

cognitect.transit.VectorBuilder.cljs$lang$ctorStr = "cognitect.transit/VectorBuilder";

cognitect.transit.VectorBuilder.cljs$lang$ctorPrWriter = (function (this__17127__auto__,writer__17128__auto__,opt__17129__auto__){
return cljs.core._write.call(null,writer__17128__auto__,"cognitect.transit/VectorBuilder");
});

cognitect.transit.__GT_VectorBuilder = (function cognitect$transit$__GT_VectorBuilder(){
return (new cognitect.transit.VectorBuilder());
});

/**
 * Return a transit reader. type may be either :json or :json-verbose.
 * opts may be a map optionally containing a :handlers entry. The value
 * of :handlers should be map from tag to a decoder function which returns
 * then in-memory representation of the semantic transit value.
 */
cognitect.transit.reader = (function cognitect$transit$reader(var_args){
var args20234 = [];
var len__17587__auto___20237 = arguments.length;
var i__17588__auto___20238 = (0);
while(true){
if((i__17588__auto___20238 < len__17587__auto___20237)){
args20234.push((arguments[i__17588__auto___20238]));

var G__20239 = (i__17588__auto___20238 + (1));
i__17588__auto___20238 = G__20239;
continue;
} else {
}
break;
}

var G__20236 = args20234.length;
switch (G__20236) {
case 1:
return cognitect.transit.reader.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cognitect.transit.reader.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20234.length)].join('')));

}
});

cognitect.transit.reader.cljs$core$IFn$_invoke$arity$1 = (function (type){
return cognitect.transit.reader.call(null,type,null);
});

cognitect.transit.reader.cljs$core$IFn$_invoke$arity$2 = (function (type,opts){
return com.cognitect.transit.reader.call(null,cljs.core.name.call(null,type),cognitect.transit.opts_merge.call(null,{"handlers": cljs.core.clj__GT_js.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 5, ["$",(function (v){
return cljs.core.symbol.call(null,v);
}),":",(function (v){
return cljs.core.keyword.call(null,v);
}),"set",(function (v){
return cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,v);
}),"list",(function (v){
return cljs.core.into.call(null,cljs.core.List.EMPTY,v.reverse());
}),"cmap",(function (v){
var i = (0);
var ret = cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY);
while(true){
if((i < v.length)){
var G__20241 = (i + (2));
var G__20242 = cljs.core.assoc_BANG_.call(null,ret,(v[i]),(v[(i + (1))]));
i = G__20241;
ret = G__20242;
continue;
} else {
return cljs.core.persistent_BANG_.call(null,ret);
}
break;
}
})], null),new cljs.core.Keyword(null,"handlers","handlers",79528781).cljs$core$IFn$_invoke$arity$1(opts))), "mapBuilder": (new cognitect.transit.MapBuilder()), "arrayBuilder": (new cognitect.transit.VectorBuilder()), "prefersStrings": false},cljs.core.clj__GT_js.call(null,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"handlers","handlers",79528781)))));
});

cognitect.transit.reader.cljs$lang$maxFixedArity = 2;
/**
 * Read a transit encoded string into ClojureScript values given a 
 * transit reader.
 */
cognitect.transit.read = (function cognitect$transit$read(r,str){
return r.read(str);
});

/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.KeywordHandler = (function (){
})
cognitect.transit.KeywordHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return ":";
});

cognitect.transit.KeywordHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v.fqn;
});

cognitect.transit.KeywordHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return v.fqn;
});

cognitect.transit.KeywordHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.KeywordHandler.cljs$lang$type = true;

cognitect.transit.KeywordHandler.cljs$lang$ctorStr = "cognitect.transit/KeywordHandler";

cognitect.transit.KeywordHandler.cljs$lang$ctorPrWriter = (function (this__17127__auto__,writer__17128__auto__,opt__17129__auto__){
return cljs.core._write.call(null,writer__17128__auto__,"cognitect.transit/KeywordHandler");
});

cognitect.transit.__GT_KeywordHandler = (function cognitect$transit$__GT_KeywordHandler(){
return (new cognitect.transit.KeywordHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.SymbolHandler = (function (){
})
cognitect.transit.SymbolHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "$";
});

cognitect.transit.SymbolHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v.str;
});

cognitect.transit.SymbolHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return v.str;
});

cognitect.transit.SymbolHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.SymbolHandler.cljs$lang$type = true;

cognitect.transit.SymbolHandler.cljs$lang$ctorStr = "cognitect.transit/SymbolHandler";

cognitect.transit.SymbolHandler.cljs$lang$ctorPrWriter = (function (this__17127__auto__,writer__17128__auto__,opt__17129__auto__){
return cljs.core._write.call(null,writer__17128__auto__,"cognitect.transit/SymbolHandler");
});

cognitect.transit.__GT_SymbolHandler = (function cognitect$transit$__GT_SymbolHandler(){
return (new cognitect.transit.SymbolHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.ListHandler = (function (){
})
cognitect.transit.ListHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "list";
});

cognitect.transit.ListHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
var ret = [];
var seq__20243_20247 = cljs.core.seq.call(null,v);
var chunk__20244_20248 = null;
var count__20245_20249 = (0);
var i__20246_20250 = (0);
while(true){
if((i__20246_20250 < count__20245_20249)){
var x_20251 = cljs.core._nth.call(null,chunk__20244_20248,i__20246_20250);
ret.push(x_20251);

var G__20252 = seq__20243_20247;
var G__20253 = chunk__20244_20248;
var G__20254 = count__20245_20249;
var G__20255 = (i__20246_20250 + (1));
seq__20243_20247 = G__20252;
chunk__20244_20248 = G__20253;
count__20245_20249 = G__20254;
i__20246_20250 = G__20255;
continue;
} else {
var temp__4425__auto___20256 = cljs.core.seq.call(null,seq__20243_20247);
if(temp__4425__auto___20256){
var seq__20243_20257__$1 = temp__4425__auto___20256;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20243_20257__$1)){
var c__17332__auto___20258 = cljs.core.chunk_first.call(null,seq__20243_20257__$1);
var G__20259 = cljs.core.chunk_rest.call(null,seq__20243_20257__$1);
var G__20260 = c__17332__auto___20258;
var G__20261 = cljs.core.count.call(null,c__17332__auto___20258);
var G__20262 = (0);
seq__20243_20247 = G__20259;
chunk__20244_20248 = G__20260;
count__20245_20249 = G__20261;
i__20246_20250 = G__20262;
continue;
} else {
var x_20263 = cljs.core.first.call(null,seq__20243_20257__$1);
ret.push(x_20263);

var G__20264 = cljs.core.next.call(null,seq__20243_20257__$1);
var G__20265 = null;
var G__20266 = (0);
var G__20267 = (0);
seq__20243_20247 = G__20264;
chunk__20244_20248 = G__20265;
count__20245_20249 = G__20266;
i__20246_20250 = G__20267;
continue;
}
} else {
}
}
break;
}

return com.cognitect.transit.tagged.call(null,"array",ret);
});

cognitect.transit.ListHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return null;
});

cognitect.transit.ListHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.ListHandler.cljs$lang$type = true;

cognitect.transit.ListHandler.cljs$lang$ctorStr = "cognitect.transit/ListHandler";

cognitect.transit.ListHandler.cljs$lang$ctorPrWriter = (function (this__17127__auto__,writer__17128__auto__,opt__17129__auto__){
return cljs.core._write.call(null,writer__17128__auto__,"cognitect.transit/ListHandler");
});

cognitect.transit.__GT_ListHandler = (function cognitect$transit$__GT_ListHandler(){
return (new cognitect.transit.ListHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.MapHandler = (function (){
})
cognitect.transit.MapHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "map";
});

cognitect.transit.MapHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v;
});

cognitect.transit.MapHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return null;
});

cognitect.transit.MapHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.MapHandler.cljs$lang$type = true;

cognitect.transit.MapHandler.cljs$lang$ctorStr = "cognitect.transit/MapHandler";

cognitect.transit.MapHandler.cljs$lang$ctorPrWriter = (function (this__17127__auto__,writer__17128__auto__,opt__17129__auto__){
return cljs.core._write.call(null,writer__17128__auto__,"cognitect.transit/MapHandler");
});

cognitect.transit.__GT_MapHandler = (function cognitect$transit$__GT_MapHandler(){
return (new cognitect.transit.MapHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.SetHandler = (function (){
})
cognitect.transit.SetHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "set";
});

cognitect.transit.SetHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
var ret = [];
var seq__20268_20272 = cljs.core.seq.call(null,v);
var chunk__20269_20273 = null;
var count__20270_20274 = (0);
var i__20271_20275 = (0);
while(true){
if((i__20271_20275 < count__20270_20274)){
var x_20276 = cljs.core._nth.call(null,chunk__20269_20273,i__20271_20275);
ret.push(x_20276);

var G__20277 = seq__20268_20272;
var G__20278 = chunk__20269_20273;
var G__20279 = count__20270_20274;
var G__20280 = (i__20271_20275 + (1));
seq__20268_20272 = G__20277;
chunk__20269_20273 = G__20278;
count__20270_20274 = G__20279;
i__20271_20275 = G__20280;
continue;
} else {
var temp__4425__auto___20281 = cljs.core.seq.call(null,seq__20268_20272);
if(temp__4425__auto___20281){
var seq__20268_20282__$1 = temp__4425__auto___20281;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20268_20282__$1)){
var c__17332__auto___20283 = cljs.core.chunk_first.call(null,seq__20268_20282__$1);
var G__20284 = cljs.core.chunk_rest.call(null,seq__20268_20282__$1);
var G__20285 = c__17332__auto___20283;
var G__20286 = cljs.core.count.call(null,c__17332__auto___20283);
var G__20287 = (0);
seq__20268_20272 = G__20284;
chunk__20269_20273 = G__20285;
count__20270_20274 = G__20286;
i__20271_20275 = G__20287;
continue;
} else {
var x_20288 = cljs.core.first.call(null,seq__20268_20282__$1);
ret.push(x_20288);

var G__20289 = cljs.core.next.call(null,seq__20268_20282__$1);
var G__20290 = null;
var G__20291 = (0);
var G__20292 = (0);
seq__20268_20272 = G__20289;
chunk__20269_20273 = G__20290;
count__20270_20274 = G__20291;
i__20271_20275 = G__20292;
continue;
}
} else {
}
}
break;
}

return com.cognitect.transit.tagged.call(null,"array",ret);
});

cognitect.transit.SetHandler.prototype.stringRep = (function (){
var self__ = this;
var v = this;
return null;
});

cognitect.transit.SetHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.SetHandler.cljs$lang$type = true;

cognitect.transit.SetHandler.cljs$lang$ctorStr = "cognitect.transit/SetHandler";

cognitect.transit.SetHandler.cljs$lang$ctorPrWriter = (function (this__17127__auto__,writer__17128__auto__,opt__17129__auto__){
return cljs.core._write.call(null,writer__17128__auto__,"cognitect.transit/SetHandler");
});

cognitect.transit.__GT_SetHandler = (function cognitect$transit$__GT_SetHandler(){
return (new cognitect.transit.SetHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.VectorHandler = (function (){
})
cognitect.transit.VectorHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "array";
});

cognitect.transit.VectorHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
var ret = [];
var seq__20293_20297 = cljs.core.seq.call(null,v);
var chunk__20294_20298 = null;
var count__20295_20299 = (0);
var i__20296_20300 = (0);
while(true){
if((i__20296_20300 < count__20295_20299)){
var x_20301 = cljs.core._nth.call(null,chunk__20294_20298,i__20296_20300);
ret.push(x_20301);

var G__20302 = seq__20293_20297;
var G__20303 = chunk__20294_20298;
var G__20304 = count__20295_20299;
var G__20305 = (i__20296_20300 + (1));
seq__20293_20297 = G__20302;
chunk__20294_20298 = G__20303;
count__20295_20299 = G__20304;
i__20296_20300 = G__20305;
continue;
} else {
var temp__4425__auto___20306 = cljs.core.seq.call(null,seq__20293_20297);
if(temp__4425__auto___20306){
var seq__20293_20307__$1 = temp__4425__auto___20306;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20293_20307__$1)){
var c__17332__auto___20308 = cljs.core.chunk_first.call(null,seq__20293_20307__$1);
var G__20309 = cljs.core.chunk_rest.call(null,seq__20293_20307__$1);
var G__20310 = c__17332__auto___20308;
var G__20311 = cljs.core.count.call(null,c__17332__auto___20308);
var G__20312 = (0);
seq__20293_20297 = G__20309;
chunk__20294_20298 = G__20310;
count__20295_20299 = G__20311;
i__20296_20300 = G__20312;
continue;
} else {
var x_20313 = cljs.core.first.call(null,seq__20293_20307__$1);
ret.push(x_20313);

var G__20314 = cljs.core.next.call(null,seq__20293_20307__$1);
var G__20315 = null;
var G__20316 = (0);
var G__20317 = (0);
seq__20293_20297 = G__20314;
chunk__20294_20298 = G__20315;
count__20295_20299 = G__20316;
i__20296_20300 = G__20317;
continue;
}
} else {
}
}
break;
}

return ret;
});

cognitect.transit.VectorHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return null;
});

cognitect.transit.VectorHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.VectorHandler.cljs$lang$type = true;

cognitect.transit.VectorHandler.cljs$lang$ctorStr = "cognitect.transit/VectorHandler";

cognitect.transit.VectorHandler.cljs$lang$ctorPrWriter = (function (this__17127__auto__,writer__17128__auto__,opt__17129__auto__){
return cljs.core._write.call(null,writer__17128__auto__,"cognitect.transit/VectorHandler");
});

cognitect.transit.__GT_VectorHandler = (function cognitect$transit$__GT_VectorHandler(){
return (new cognitect.transit.VectorHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.UUIDHandler = (function (){
})
cognitect.transit.UUIDHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "u";
});

cognitect.transit.UUIDHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v.uuid;
});

cognitect.transit.UUIDHandler.prototype.stringRep = (function (v){
var self__ = this;
var this$ = this;
return this$.rep(v);
});

cognitect.transit.UUIDHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.UUIDHandler.cljs$lang$type = true;

cognitect.transit.UUIDHandler.cljs$lang$ctorStr = "cognitect.transit/UUIDHandler";

cognitect.transit.UUIDHandler.cljs$lang$ctorPrWriter = (function (this__17127__auto__,writer__17128__auto__,opt__17129__auto__){
return cljs.core._write.call(null,writer__17128__auto__,"cognitect.transit/UUIDHandler");
});

cognitect.transit.__GT_UUIDHandler = (function cognitect$transit$__GT_UUIDHandler(){
return (new cognitect.transit.UUIDHandler());
});

/**
 * Return a transit writer. type maybe either :json or :json-verbose.
 *   opts is a map containing a :handlers entry. :handlers is a map of
 *   type constructors to handler instances.
 */
cognitect.transit.writer = (function cognitect$transit$writer(var_args){
var args20318 = [];
var len__17587__auto___20329 = arguments.length;
var i__17588__auto___20330 = (0);
while(true){
if((i__17588__auto___20330 < len__17587__auto___20329)){
args20318.push((arguments[i__17588__auto___20330]));

var G__20331 = (i__17588__auto___20330 + (1));
i__17588__auto___20330 = G__20331;
continue;
} else {
}
break;
}

var G__20320 = args20318.length;
switch (G__20320) {
case 1:
return cognitect.transit.writer.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cognitect.transit.writer.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20318.length)].join('')));

}
});

cognitect.transit.writer.cljs$core$IFn$_invoke$arity$1 = (function (type){
return cognitect.transit.writer.call(null,type,null);
});

cognitect.transit.writer.cljs$core$IFn$_invoke$arity$2 = (function (type,opts){
var keyword_handler = (new cognitect.transit.KeywordHandler());
var symbol_handler = (new cognitect.transit.SymbolHandler());
var list_handler = (new cognitect.transit.ListHandler());
var map_handler = (new cognitect.transit.MapHandler());
var set_handler = (new cognitect.transit.SetHandler());
var vector_handler = (new cognitect.transit.VectorHandler());
var uuid_handler = (new cognitect.transit.UUIDHandler());
var handlers = cljs.core.merge.call(null,cljs.core.PersistentHashMap.fromArrays([cljs.core.PersistentHashMap,cljs.core.Cons,cljs.core.PersistentArrayMap,cljs.core.NodeSeq,cljs.core.PersistentQueue,cljs.core.IndexedSeq,cljs.core.Keyword,cljs.core.EmptyList,cljs.core.LazySeq,cljs.core.Subvec,cljs.core.PersistentQueueSeq,cljs.core.ArrayNodeSeq,cljs.core.ValSeq,cljs.core.PersistentArrayMapSeq,cljs.core.PersistentVector,cljs.core.List,cljs.core.RSeq,cljs.core.PersistentHashSet,cljs.core.PersistentTreeMap,cljs.core.KeySeq,cljs.core.ChunkedSeq,cljs.core.PersistentTreeSet,cljs.core.ChunkedCons,cljs.core.Symbol,cljs.core.UUID,cljs.core.Range,cljs.core.PersistentTreeMapSeq],[map_handler,list_handler,map_handler,list_handler,list_handler,list_handler,keyword_handler,list_handler,list_handler,vector_handler,list_handler,list_handler,list_handler,list_handler,vector_handler,list_handler,list_handler,set_handler,map_handler,list_handler,list_handler,set_handler,list_handler,symbol_handler,uuid_handler,list_handler,list_handler]),new cljs.core.Keyword(null,"handlers","handlers",79528781).cljs$core$IFn$_invoke$arity$1(opts));
return com.cognitect.transit.writer.call(null,cljs.core.name.call(null,type),cognitect.transit.opts_merge.call(null,{"objectBuilder": ((function (keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (m,kfn,vfn){
return cljs.core.reduce_kv.call(null,((function (keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (obj,k,v){
var G__20321 = obj;
G__20321.push(kfn.call(null,k),vfn.call(null,v));

return G__20321;
});})(keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
,["^ "],m);
});})(keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
, "handlers": (function (){var x20322 = cljs.core.clone.call(null,handlers);
x20322.forEach = ((function (x20322,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (f){
var coll = this;
var seq__20323 = cljs.core.seq.call(null,coll);
var chunk__20324 = null;
var count__20325 = (0);
var i__20326 = (0);
while(true){
if((i__20326 < count__20325)){
var vec__20327 = cljs.core._nth.call(null,chunk__20324,i__20326);
var k = cljs.core.nth.call(null,vec__20327,(0),null);
var v = cljs.core.nth.call(null,vec__20327,(1),null);
f.call(null,v,k);

var G__20333 = seq__20323;
var G__20334 = chunk__20324;
var G__20335 = count__20325;
var G__20336 = (i__20326 + (1));
seq__20323 = G__20333;
chunk__20324 = G__20334;
count__20325 = G__20335;
i__20326 = G__20336;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__20323);
if(temp__4425__auto__){
var seq__20323__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20323__$1)){
var c__17332__auto__ = cljs.core.chunk_first.call(null,seq__20323__$1);
var G__20337 = cljs.core.chunk_rest.call(null,seq__20323__$1);
var G__20338 = c__17332__auto__;
var G__20339 = cljs.core.count.call(null,c__17332__auto__);
var G__20340 = (0);
seq__20323 = G__20337;
chunk__20324 = G__20338;
count__20325 = G__20339;
i__20326 = G__20340;
continue;
} else {
var vec__20328 = cljs.core.first.call(null,seq__20323__$1);
var k = cljs.core.nth.call(null,vec__20328,(0),null);
var v = cljs.core.nth.call(null,vec__20328,(1),null);
f.call(null,v,k);

var G__20341 = cljs.core.next.call(null,seq__20323__$1);
var G__20342 = null;
var G__20343 = (0);
var G__20344 = (0);
seq__20323 = G__20341;
chunk__20324 = G__20342;
count__20325 = G__20343;
i__20326 = G__20344;
continue;
}
} else {
return null;
}
}
break;
}
});})(x20322,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
;

return x20322;
})(), "unpack": ((function (keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (x){
if((x instanceof cljs.core.PersistentArrayMap)){
return x.arr;
} else {
return false;
}
});})(keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
},cljs.core.clj__GT_js.call(null,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"handlers","handlers",79528781)))));
});

cognitect.transit.writer.cljs$lang$maxFixedArity = 2;
/**
 * Encode an object into a transit string given a transit writer.
 */
cognitect.transit.write = (function cognitect$transit$write(w,o){
return w.write(o);
});
/**
 * Construct a read handler. Implemented as identity, exists primarily
 * for API compatiblity with transit-clj
 */
cognitect.transit.read_handler = (function cognitect$transit$read_handler(from_rep){
return from_rep;
});
/**
 * Creates a transit write handler whose tag, rep,
 * stringRep, and verboseWriteHandler methods
 * invoke the provided fns.
 */
cognitect.transit.write_handler = (function cognitect$transit$write_handler(var_args){
var args20345 = [];
var len__17587__auto___20351 = arguments.length;
var i__17588__auto___20352 = (0);
while(true){
if((i__17588__auto___20352 < len__17587__auto___20351)){
args20345.push((arguments[i__17588__auto___20352]));

var G__20353 = (i__17588__auto___20352 + (1));
i__17588__auto___20352 = G__20353;
continue;
} else {
}
break;
}

var G__20347 = args20345.length;
switch (G__20347) {
case 2:
return cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20345.length)].join('')));

}
});

cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$2 = (function (tag_fn,rep_fn){
return cognitect.transit.write_handler.call(null,tag_fn,rep_fn,null,null);
});

cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$3 = (function (tag_fn,rep_fn,str_rep_fn){
return cognitect.transit.write_handler.call(null,tag_fn,rep_fn,str_rep_fn,null);
});

cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$4 = (function (tag_fn,rep_fn,str_rep_fn,verbose_handler_fn){
if(typeof cognitect.transit.t_cognitect$transit20348 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cognitect.transit.Object}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cognitect.transit.t_cognitect$transit20348 = (function (tag_fn,rep_fn,str_rep_fn,verbose_handler_fn,meta20349){
this.tag_fn = tag_fn;
this.rep_fn = rep_fn;
this.str_rep_fn = str_rep_fn;
this.verbose_handler_fn = verbose_handler_fn;
this.meta20349 = meta20349;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cognitect.transit.t_cognitect$transit20348.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20350,meta20349__$1){
var self__ = this;
var _20350__$1 = this;
return (new cognitect.transit.t_cognitect$transit20348(self__.tag_fn,self__.rep_fn,self__.str_rep_fn,self__.verbose_handler_fn,meta20349__$1));
});

cognitect.transit.t_cognitect$transit20348.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20350){
var self__ = this;
var _20350__$1 = this;
return self__.meta20349;
});

cognitect.transit.t_cognitect$transit20348.prototype.tag = (function (o){
var self__ = this;
var _ = this;
return self__.tag_fn.call(null,o);
});

cognitect.transit.t_cognitect$transit20348.prototype.rep = (function (o){
var self__ = this;
var _ = this;
return self__.rep_fn.call(null,o);
});

cognitect.transit.t_cognitect$transit20348.prototype.stringRep = (function (o){
var self__ = this;
var _ = this;
if(cljs.core.truth_(self__.str_rep_fn)){
return self__.str_rep_fn.call(null,o);
} else {
return null;
}
});

cognitect.transit.t_cognitect$transit20348.prototype.getVerboseHandler = (function (){
var self__ = this;
var _ = this;
if(cljs.core.truth_(self__.verbose_handler_fn)){
return self__.verbose_handler_fn.call(null);
} else {
return null;
}
});

cognitect.transit.t_cognitect$transit20348.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"tag-fn","tag-fn",242055482,null),new cljs.core.Symbol(null,"rep-fn","rep-fn",-1724891035,null),new cljs.core.Symbol(null,"str-rep-fn","str-rep-fn",-1179615016,null),new cljs.core.Symbol(null,"verbose-handler-fn","verbose-handler-fn",547340594,null),new cljs.core.Symbol(null,"meta20349","meta20349",-107752524,null)], null);
});

cognitect.transit.t_cognitect$transit20348.cljs$lang$type = true;

cognitect.transit.t_cognitect$transit20348.cljs$lang$ctorStr = "cognitect.transit/t_cognitect$transit20348";

cognitect.transit.t_cognitect$transit20348.cljs$lang$ctorPrWriter = (function (this__17127__auto__,writer__17128__auto__,opt__17129__auto__){
return cljs.core._write.call(null,writer__17128__auto__,"cognitect.transit/t_cognitect$transit20348");
});

cognitect.transit.__GT_t_cognitect$transit20348 = (function cognitect$transit$__GT_t_cognitect$transit20348(tag_fn__$1,rep_fn__$1,str_rep_fn__$1,verbose_handler_fn__$1,meta20349){
return (new cognitect.transit.t_cognitect$transit20348(tag_fn__$1,rep_fn__$1,str_rep_fn__$1,verbose_handler_fn__$1,meta20349));
});

}

return (new cognitect.transit.t_cognitect$transit20348(tag_fn,rep_fn,str_rep_fn,verbose_handler_fn,cljs.core.PersistentArrayMap.EMPTY));
});

cognitect.transit.write_handler.cljs$lang$maxFixedArity = 4;
/**
 * Construct a tagged value. tag must be a string and rep can
 * be any transit encodeable value.
 */
cognitect.transit.tagged_value = (function cognitect$transit$tagged_value(tag,rep){
return com.cognitect.transit.types.taggedValue.call(null,tag,rep);
});
/**
 * Returns true if x is a transit tagged value, false otherwise.
 */
cognitect.transit.tagged_value_QMARK_ = (function cognitect$transit$tagged_value_QMARK_(x){
return com.cognitect.transit.types.isTaggedValue.call(null,x);
});
/**
 * Construct a transit integer value. Returns JavaScript number if
 *   in the 53bit integer range, a goog.math.Long instance if above. s
 *   may be a string or a JavaScript number.
 */
cognitect.transit.integer = (function cognitect$transit$integer(s){
return com.cognitect.transit.types.intValue.call(null,s);
});
/**
 * Returns true if x is an integer value between the 53bit and 64bit
 *   range, false otherwise.
 */
cognitect.transit.integer_QMARK_ = (function cognitect$transit$integer_QMARK_(x){
return com.cognitect.transit.types.isInteger.call(null,x);
});
/**
 * Construct a big integer from a string.
 */
cognitect.transit.bigint = (function cognitect$transit$bigint(s){
return com.cognitect.transit.types.bigInteger.call(null,s);
});
/**
 * Returns true if x is a transit big integer value, false otherwise.
 */
cognitect.transit.bigint_QMARK_ = (function cognitect$transit$bigint_QMARK_(x){
return com.cognitect.transit.types.isBigInteger.call(null,x);
});
/**
 * Construct a big decimal from a string.
 */
cognitect.transit.bigdec = (function cognitect$transit$bigdec(s){
return com.cognitect.transit.types.bigDecimalValue.call(null,s);
});
/**
 * Returns true if x is a transit big decimal value, false otherwise.
 */
cognitect.transit.bigdec_QMARK_ = (function cognitect$transit$bigdec_QMARK_(x){
return com.cognitect.transit.types.isBigDecimal.call(null,x);
});
/**
 * Construct a URI from a string.
 */
cognitect.transit.uri = (function cognitect$transit$uri(s){
return com.cognitect.transit.types.uri.call(null,s);
});
/**
 * Returns true if x is a transit URI value, false otherwise.
 */
cognitect.transit.uri_QMARK_ = (function cognitect$transit$uri_QMARK_(x){
return com.cognitect.transit.types.isURI.call(null,x);
});
/**
 * Construct a UUID from a string.
 */
cognitect.transit.uuid = (function cognitect$transit$uuid(s){
return com.cognitect.transit.types.uuid.call(null,s);
});
/**
 * Returns true if x is a transit UUID value, false otherwise.
 */
cognitect.transit.uuid_QMARK_ = (function cognitect$transit$uuid_QMARK_(x){
return com.cognitect.transit.types.isUUID.call(null,x);
});
/**
 * Construct a transit binary value. s should be base64 encoded
 * string.
 */
cognitect.transit.binary = (function cognitect$transit$binary(s){
return com.cognitect.transit.types.binary.call(null,s);
});
/**
 * Returns true if x is a transit binary value, false otherwise.
 */
cognitect.transit.binary_QMARK_ = (function cognitect$transit$binary_QMARK_(x){
return com.cognitect.transit.types.isBinary.call(null,x);
});
/**
 * Construct a quoted transit value. x should be a transit
 * encodeable value.
 */
cognitect.transit.quoted = (function cognitect$transit$quoted(x){
return com.cognitect.transit.types.quoted.call(null,x);
});
/**
 * Returns true if x is a transit quoted value, false otherwise.
 */
cognitect.transit.quoted_QMARK_ = (function cognitect$transit$quoted_QMARK_(x){
return com.cognitect.transit.types.isQuoted.call(null,x);
});
/**
 * Construct a transit link value. x should be an IMap instance
 * containing at a minimum the following keys: :href, :rel. It
 * may optionall include :name, :render, and :prompt. :href must
 * be a transit URI, all other values are strings, and :render must
 * be either :image or :link.
 */
cognitect.transit.link = (function cognitect$transit$link(x){
return com.cognitect.transit.types.link.call(null,x);
});
/**
 * Returns true if x a transit link value, false if otherwise.
 */
cognitect.transit.link_QMARK_ = (function cognitect$transit$link_QMARK_(x){
return com.cognitect.transit.types.isLink.call(null,x);
});

//# sourceMappingURL=transit.js.map?rel=1448371004032