// Compiled by ClojureScript 1.7.122 {}
goog.provide('cljs_http.client');
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('cljs_http.core');
goog.require('cljs.core.async');
goog.require('no.en.core');
goog.require('cljs_http.util');
goog.require('clojure.string');
goog.require('cljs.reader');
cljs_http.client.if_pos = (function cljs_http$client$if_pos(v){
if(cljs.core.truth_((function (){var and__16517__auto__ = v;
if(cljs.core.truth_(and__16517__auto__)){
return (v > (0));
} else {
return and__16517__auto__;
}
})())){
return v;
} else {
return null;
}
});
/**
 * Parse `s` as query params and return a hash map.
 */
cljs_http.client.parse_query_params = (function cljs_http$client$parse_query_params(s){
if(cljs.core.not.call(null,clojure.string.blank_QMARK_.call(null,s))){
return cljs.core.reduce.call(null,(function (p1__20012_SHARP_,p2__20011_SHARP_){
var vec__20014 = clojure.string.split.call(null,p2__20011_SHARP_,/=/);
var k = cljs.core.nth.call(null,vec__20014,(0),null);
var v = cljs.core.nth.call(null,vec__20014,(1),null);
return cljs.core.assoc.call(null,p1__20012_SHARP_,cljs.core.keyword.call(null,no.en.core.url_decode.call(null,k)),no.en.core.url_decode.call(null,v));
}),cljs.core.PersistentArrayMap.EMPTY,clojure.string.split.call(null,[cljs.core.str(s)].join(''),/&/));
} else {
return null;
}
});
/**
 * Parse `url` into a hash map.
 */
cljs_http.client.parse_url = (function cljs_http$client$parse_url(url){
if(cljs.core.not.call(null,clojure.string.blank_QMARK_.call(null,url))){
var uri = goog.Uri.parse(url);
var query_data = uri.getQueryData();
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"scheme","scheme",90199613),cljs.core.keyword.call(null,uri.getScheme()),new cljs.core.Keyword(null,"server-name","server-name",-1012104295),uri.getDomain(),new cljs.core.Keyword(null,"server-port","server-port",663745648),cljs_http.client.if_pos.call(null,uri.getPort()),new cljs.core.Keyword(null,"uri","uri",-774711847),uri.getPath(),new cljs.core.Keyword(null,"query-string","query-string",-1018845061),((cljs.core.not.call(null,query_data.isEmpty()))?[cljs.core.str(query_data)].join(''):null),new cljs.core.Keyword(null,"query-params","query-params",900640534),((cljs.core.not.call(null,query_data.isEmpty()))?cljs_http.client.parse_query_params.call(null,[cljs.core.str(query_data)].join('')):null)], null);
} else {
return null;
}
});
cljs_http.client.unexceptional_status_QMARK_ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 13, [(205),null,(206),null,(300),null,(204),null,(307),null,(303),null,(301),null,(201),null,(302),null,(202),null,(200),null,(203),null,(207),null], null), null);
cljs_http.client.encode_val = (function cljs_http$client$encode_val(k,v){
return [cljs.core.str(no.en.core.url_encode.call(null,cljs.core.name.call(null,k))),cljs.core.str("="),cljs.core.str(no.en.core.url_encode.call(null,[cljs.core.str(v)].join('')))].join('');
});
cljs_http.client.encode_vals = (function cljs_http$client$encode_vals(k,vs){
return clojure.string.join.call(null,"&",cljs.core.map.call(null,(function (p1__20015_SHARP_){
return cljs_http.client.encode_val.call(null,k,p1__20015_SHARP_);
}),vs));
});
cljs_http.client.encode_param = (function cljs_http$client$encode_param(p__20016){
var vec__20018 = p__20016;
var k = cljs.core.nth.call(null,vec__20018,(0),null);
var v = cljs.core.nth.call(null,vec__20018,(1),null);
if(cljs.core.coll_QMARK_.call(null,v)){
return cljs_http.client.encode_vals.call(null,k,v);
} else {
return cljs_http.client.encode_val.call(null,k,v);
}
});
cljs_http.client.generate_query_string = (function cljs_http$client$generate_query_string(params){
return clojure.string.join.call(null,"&",cljs.core.map.call(null,cljs_http.client.encode_param,params));
});
cljs_http.client.regex_char_esc_smap = (function (){var esc_chars = "()*&^%$#!+";
return cljs.core.zipmap.call(null,esc_chars,cljs.core.map.call(null,((function (esc_chars){
return (function (p1__20019_SHARP_){
return [cljs.core.str("\\"),cljs.core.str(p1__20019_SHARP_)].join('');
});})(esc_chars))
,esc_chars));
})();
/**
 * Escape special characters -- for content-type.
 */
cljs_http.client.escape_special = (function cljs_http$client$escape_special(string){
return cljs.core.reduce.call(null,cljs.core.str,cljs.core.replace.call(null,cljs_http.client.regex_char_esc_smap,string));
});
/**
 * Decocde the :body of `response` with `decode-fn` if the content type matches.
 */
cljs_http.client.decode_body = (function cljs_http$client$decode_body(response,decode_fn,content_type,request_method){
if(cljs.core.truth_((function (){var and__16517__auto__ = cljs.core.not_EQ_.call(null,new cljs.core.Keyword(null,"head","head",-771383919),request_method);
if(and__16517__auto__){
var and__16517__auto____$1 = cljs.core.not_EQ_.call(null,(204),new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(response));
if(and__16517__auto____$1){
return cljs.core.re_find.call(null,cljs.core.re_pattern.call(null,[cljs.core.str("(?i)"),cljs.core.str(cljs_http.client.escape_special.call(null,content_type))].join('')),[cljs.core.str(cljs.core.get.call(null,new cljs.core.Keyword(null,"headers","headers",-835030129).cljs$core$IFn$_invoke$arity$1(response),"content-type",""))].join(''));
} else {
return and__16517__auto____$1;
}
} else {
return and__16517__auto__;
}
})())){
return cljs.core.update_in.call(null,response,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"body","body",-2049205669)], null),decode_fn);
} else {
return response;
}
});
/**
 * Encode :edn-params in the `request` :body and set the appropriate
 *   Content Type header.
 */
cljs_http.client.wrap_edn_params = (function cljs_http$client$wrap_edn_params(client){
return (function (request){
var temp__4423__auto__ = new cljs.core.Keyword(null,"edn-params","edn-params",894273052).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(temp__4423__auto__)){
var params = temp__4423__auto__;
var headers = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, ["content-type","application/edn"], null),new cljs.core.Keyword(null,"headers","headers",-835030129).cljs$core$IFn$_invoke$arity$1(request));
return client.call(null,cljs.core.assoc.call(null,cljs.core.assoc.call(null,cljs.core.dissoc.call(null,request,new cljs.core.Keyword(null,"edn-params","edn-params",894273052)),new cljs.core.Keyword(null,"body","body",-2049205669),cljs.core.pr_str.call(null,params)),new cljs.core.Keyword(null,"headers","headers",-835030129),headers));
} else {
return client.call(null,request);
}
});
});
/**
 * Decode application/edn responses.
 */
cljs_http.client.wrap_edn_response = (function cljs_http$client$wrap_edn_response(client){
return (function (request){
return cljs.core.async.map.call(null,(function (p1__20020_SHARP_){
return cljs_http.client.decode_body.call(null,p1__20020_SHARP_,cljs.reader.read_string,"application/edn",new cljs.core.Keyword(null,"request-method","request-method",1764796830).cljs$core$IFn$_invoke$arity$1(request));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [client.call(null,request)], null));
});
});
cljs_http.client.wrap_default_headers = (function cljs_http$client$wrap_default_headers(var_args){
var args__17594__auto__ = [];
var len__17587__auto___20025 = arguments.length;
var i__17588__auto___20026 = (0);
while(true){
if((i__17588__auto___20026 < len__17587__auto___20025)){
args__17594__auto__.push((arguments[i__17588__auto___20026]));

var G__20027 = (i__17588__auto___20026 + (1));
i__17588__auto___20026 = G__20027;
continue;
} else {
}
break;
}

var argseq__17595__auto__ = ((((1) < args__17594__auto__.length))?(new cljs.core.IndexedSeq(args__17594__auto__.slice((1)),(0))):null);
return cljs_http.client.wrap_default_headers.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17595__auto__);
});

cljs_http.client.wrap_default_headers.cljs$core$IFn$_invoke$arity$variadic = (function (client,p__20023){
var vec__20024 = p__20023;
var default_headers = cljs.core.nth.call(null,vec__20024,(0),null);
return ((function (vec__20024,default_headers){
return (function (request){
var temp__4423__auto__ = (function (){var or__16529__auto__ = new cljs.core.Keyword(null,"default-headers","default-headers",-43146094).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(or__16529__auto__)){
return or__16529__auto__;
} else {
return default_headers;
}
})();
if(cljs.core.truth_(temp__4423__auto__)){
var default_headers__$1 = temp__4423__auto__;
return client.call(null,cljs.core.assoc.call(null,request,new cljs.core.Keyword(null,"default-headers","default-headers",-43146094),default_headers__$1));
} else {
return client.call(null,request);
}
});
;})(vec__20024,default_headers))
});

cljs_http.client.wrap_default_headers.cljs$lang$maxFixedArity = (1);

cljs_http.client.wrap_default_headers.cljs$lang$applyTo = (function (seq20021){
var G__20022 = cljs.core.first.call(null,seq20021);
var seq20021__$1 = cljs.core.next.call(null,seq20021);
return cljs_http.client.wrap_default_headers.cljs$core$IFn$_invoke$arity$variadic(G__20022,seq20021__$1);
});
cljs_http.client.wrap_accept = (function cljs_http$client$wrap_accept(var_args){
var args__17594__auto__ = [];
var len__17587__auto___20032 = arguments.length;
var i__17588__auto___20033 = (0);
while(true){
if((i__17588__auto___20033 < len__17587__auto___20032)){
args__17594__auto__.push((arguments[i__17588__auto___20033]));

var G__20034 = (i__17588__auto___20033 + (1));
i__17588__auto___20033 = G__20034;
continue;
} else {
}
break;
}

var argseq__17595__auto__ = ((((1) < args__17594__auto__.length))?(new cljs.core.IndexedSeq(args__17594__auto__.slice((1)),(0))):null);
return cljs_http.client.wrap_accept.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17595__auto__);
});

cljs_http.client.wrap_accept.cljs$core$IFn$_invoke$arity$variadic = (function (client,p__20030){
var vec__20031 = p__20030;
var accept = cljs.core.nth.call(null,vec__20031,(0),null);
return ((function (vec__20031,accept){
return (function (request){
var temp__4423__auto__ = (function (){var or__16529__auto__ = new cljs.core.Keyword(null,"accept","accept",1874130431).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(or__16529__auto__)){
return or__16529__auto__;
} else {
return accept;
}
})();
if(cljs.core.truth_(temp__4423__auto__)){
var accept__$1 = temp__4423__auto__;
return client.call(null,cljs.core.assoc_in.call(null,request,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"headers","headers",-835030129),"accept"], null),accept__$1));
} else {
return client.call(null,request);
}
});
;})(vec__20031,accept))
});

cljs_http.client.wrap_accept.cljs$lang$maxFixedArity = (1);

cljs_http.client.wrap_accept.cljs$lang$applyTo = (function (seq20028){
var G__20029 = cljs.core.first.call(null,seq20028);
var seq20028__$1 = cljs.core.next.call(null,seq20028);
return cljs_http.client.wrap_accept.cljs$core$IFn$_invoke$arity$variadic(G__20029,seq20028__$1);
});
cljs_http.client.wrap_content_type = (function cljs_http$client$wrap_content_type(var_args){
var args__17594__auto__ = [];
var len__17587__auto___20039 = arguments.length;
var i__17588__auto___20040 = (0);
while(true){
if((i__17588__auto___20040 < len__17587__auto___20039)){
args__17594__auto__.push((arguments[i__17588__auto___20040]));

var G__20041 = (i__17588__auto___20040 + (1));
i__17588__auto___20040 = G__20041;
continue;
} else {
}
break;
}

var argseq__17595__auto__ = ((((1) < args__17594__auto__.length))?(new cljs.core.IndexedSeq(args__17594__auto__.slice((1)),(0))):null);
return cljs_http.client.wrap_content_type.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17595__auto__);
});

cljs_http.client.wrap_content_type.cljs$core$IFn$_invoke$arity$variadic = (function (client,p__20037){
var vec__20038 = p__20037;
var content_type = cljs.core.nth.call(null,vec__20038,(0),null);
return ((function (vec__20038,content_type){
return (function (request){
var temp__4423__auto__ = (function (){var or__16529__auto__ = new cljs.core.Keyword(null,"content-type","content-type",-508222634).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(or__16529__auto__)){
return or__16529__auto__;
} else {
return content_type;
}
})();
if(cljs.core.truth_(temp__4423__auto__)){
var content_type__$1 = temp__4423__auto__;
return client.call(null,cljs.core.assoc_in.call(null,request,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"headers","headers",-835030129),"content-type"], null),content_type__$1));
} else {
return client.call(null,request);
}
});
;})(vec__20038,content_type))
});

cljs_http.client.wrap_content_type.cljs$lang$maxFixedArity = (1);

cljs_http.client.wrap_content_type.cljs$lang$applyTo = (function (seq20035){
var G__20036 = cljs.core.first.call(null,seq20035);
var seq20035__$1 = cljs.core.next.call(null,seq20035);
return cljs_http.client.wrap_content_type.cljs$core$IFn$_invoke$arity$variadic(G__20036,seq20035__$1);
});
cljs_http.client.default_transit_opts = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"encoding","encoding",1728578272),new cljs.core.Keyword(null,"json","json",1279968570),new cljs.core.Keyword(null,"encoding-opts","encoding-opts",-1805664631),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"decoding","decoding",-568180903),new cljs.core.Keyword(null,"json","json",1279968570),new cljs.core.Keyword(null,"decoding-opts","decoding-opts",1050289140),cljs.core.PersistentArrayMap.EMPTY], null);
/**
 * Encode :transit-params in the `request` :body and set the appropriate
 *   Content Type header.
 * 
 *   A :transit-opts map can be optionally provided with the following keys:
 * 
 *   :encoding                #{:json, :json-verbose}
 *   :decoding                #{:json, :json-verbose}
 *   :encoding/decoding-opts  appropriate map of options to be passed to
 *                         transit writer/reader, respectively.
 */
cljs_http.client.wrap_transit_params = (function cljs_http$client$wrap_transit_params(client){
return (function (request){
var temp__4423__auto__ = new cljs.core.Keyword(null,"transit-params","transit-params",357261095).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(temp__4423__auto__)){
var params = temp__4423__auto__;
var map__20044 = cljs.core.merge.call(null,cljs_http.client.default_transit_opts,new cljs.core.Keyword(null,"transit-opts","transit-opts",1104386010).cljs$core$IFn$_invoke$arity$1(request));
var map__20044__$1 = ((((!((map__20044 == null)))?((((map__20044.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20044.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20044):map__20044);
var encoding = cljs.core.get.call(null,map__20044__$1,new cljs.core.Keyword(null,"encoding","encoding",1728578272));
var encoding_opts = cljs.core.get.call(null,map__20044__$1,new cljs.core.Keyword(null,"encoding-opts","encoding-opts",-1805664631));
var headers = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, ["content-type","application/transit+json"], null),new cljs.core.Keyword(null,"headers","headers",-835030129).cljs$core$IFn$_invoke$arity$1(request));
return client.call(null,cljs.core.assoc.call(null,cljs.core.assoc.call(null,cljs.core.dissoc.call(null,request,new cljs.core.Keyword(null,"transit-params","transit-params",357261095)),new cljs.core.Keyword(null,"body","body",-2049205669),cljs_http.util.transit_encode.call(null,params,encoding,encoding_opts)),new cljs.core.Keyword(null,"headers","headers",-835030129),headers));
} else {
return client.call(null,request);
}
});
});
/**
 * Decode application/transit+json responses.
 */
cljs_http.client.wrap_transit_response = (function cljs_http$client$wrap_transit_response(client){
return (function (request){
var map__20050 = cljs.core.merge.call(null,cljs_http.client.default_transit_opts,new cljs.core.Keyword(null,"transit-opts","transit-opts",1104386010).cljs$core$IFn$_invoke$arity$1(request));
var map__20050__$1 = ((((!((map__20050 == null)))?((((map__20050.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20050.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20050):map__20050);
var decoding = cljs.core.get.call(null,map__20050__$1,new cljs.core.Keyword(null,"decoding","decoding",-568180903));
var decoding_opts = cljs.core.get.call(null,map__20050__$1,new cljs.core.Keyword(null,"decoding-opts","decoding-opts",1050289140));
var transit_decode = ((function (map__20050,map__20050__$1,decoding,decoding_opts){
return (function (p1__20046_SHARP_){
return cljs_http.util.transit_decode.call(null,p1__20046_SHARP_,decoding,decoding_opts);
});})(map__20050,map__20050__$1,decoding,decoding_opts))
;
return cljs.core.async.map.call(null,((function (map__20050,map__20050__$1,decoding,decoding_opts,transit_decode){
return (function (p1__20047_SHARP_){
return cljs_http.client.decode_body.call(null,p1__20047_SHARP_,transit_decode,"application/transit+json",new cljs.core.Keyword(null,"request-method","request-method",1764796830).cljs$core$IFn$_invoke$arity$1(request));
});})(map__20050,map__20050__$1,decoding,decoding_opts,transit_decode))
,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [client.call(null,request)], null));
});
});
/**
 * Encode :json-params in the `request` :body and set the appropriate
 *   Content Type header.
 */
cljs_http.client.wrap_json_params = (function cljs_http$client$wrap_json_params(client){
return (function (request){
var temp__4423__auto__ = new cljs.core.Keyword(null,"json-params","json-params",-1112693596).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(temp__4423__auto__)){
var params = temp__4423__auto__;
var headers = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, ["content-type","application/json"], null),new cljs.core.Keyword(null,"headers","headers",-835030129).cljs$core$IFn$_invoke$arity$1(request));
return client.call(null,cljs.core.assoc.call(null,cljs.core.assoc.call(null,cljs.core.dissoc.call(null,request,new cljs.core.Keyword(null,"json-params","json-params",-1112693596)),new cljs.core.Keyword(null,"body","body",-2049205669),cljs_http.util.json_encode.call(null,params)),new cljs.core.Keyword(null,"headers","headers",-835030129),headers));
} else {
return client.call(null,request);
}
});
});
/**
 * Decode application/json responses.
 */
cljs_http.client.wrap_json_response = (function cljs_http$client$wrap_json_response(client){
return (function (request){
return cljs.core.async.map.call(null,(function (p1__20052_SHARP_){
return cljs_http.client.decode_body.call(null,p1__20052_SHARP_,cljs_http.util.json_decode,"application/json",new cljs.core.Keyword(null,"request-method","request-method",1764796830).cljs$core$IFn$_invoke$arity$1(request));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [client.call(null,request)], null));
});
});
cljs_http.client.wrap_query_params = (function cljs_http$client$wrap_query_params(client){
return (function (p__20056){
var map__20057 = p__20056;
var map__20057__$1 = ((((!((map__20057 == null)))?((((map__20057.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20057.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20057):map__20057);
var req = map__20057__$1;
var query_params = cljs.core.get.call(null,map__20057__$1,new cljs.core.Keyword(null,"query-params","query-params",900640534));
if(cljs.core.truth_(query_params)){
return client.call(null,cljs.core.assoc.call(null,cljs.core.dissoc.call(null,req,new cljs.core.Keyword(null,"query-params","query-params",900640534)),new cljs.core.Keyword(null,"query-string","query-string",-1018845061),cljs_http.client.generate_query_string.call(null,query_params)));
} else {
return client.call(null,req);
}
});
});
cljs_http.client.wrap_form_params = (function cljs_http$client$wrap_form_params(client){
return (function (p__20062){
var map__20063 = p__20062;
var map__20063__$1 = ((((!((map__20063 == null)))?((((map__20063.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20063.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20063):map__20063);
var request = map__20063__$1;
var form_params = cljs.core.get.call(null,map__20063__$1,new cljs.core.Keyword(null,"form-params","form-params",1884296467));
var request_method = cljs.core.get.call(null,map__20063__$1,new cljs.core.Keyword(null,"request-method","request-method",1764796830));
var headers = cljs.core.get.call(null,map__20063__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
if(cljs.core.truth_((function (){var and__16517__auto__ = form_params;
if(cljs.core.truth_(and__16517__auto__)){
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"patch","patch",380775109),null,new cljs.core.Keyword(null,"delete","delete",-1768633620),null,new cljs.core.Keyword(null,"post","post",269697687),null,new cljs.core.Keyword(null,"put","put",1299772570),null], null), null).call(null,request_method);
} else {
return and__16517__auto__;
}
})())){
var headers__$1 = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, ["content-type","application/x-www-form-urlencoded"], null),headers);
return client.call(null,cljs.core.assoc.call(null,cljs.core.assoc.call(null,cljs.core.dissoc.call(null,request,new cljs.core.Keyword(null,"form-params","form-params",1884296467)),new cljs.core.Keyword(null,"body","body",-2049205669),cljs_http.client.generate_query_string.call(null,form_params)),new cljs.core.Keyword(null,"headers","headers",-835030129),headers__$1));
} else {
return client.call(null,request);
}
});
});
cljs_http.client.generate_form_data = (function cljs_http$client$generate_form_data(params){
var form_data = (new FormData());
var seq__20071_20077 = cljs.core.seq.call(null,params);
var chunk__20072_20078 = null;
var count__20073_20079 = (0);
var i__20074_20080 = (0);
while(true){
if((i__20074_20080 < count__20073_20079)){
var vec__20075_20081 = cljs.core._nth.call(null,chunk__20072_20078,i__20074_20080);
var k_20082 = cljs.core.nth.call(null,vec__20075_20081,(0),null);
var v_20083 = cljs.core.nth.call(null,vec__20075_20081,(1),null);
if(cljs.core.coll_QMARK_.call(null,v_20083)){
form_data.append(cljs.core.name.call(null,k_20082),cljs.core.first.call(null,v_20083),cljs.core.second.call(null,v_20083));
} else {
form_data.append(cljs.core.name.call(null,k_20082),v_20083);
}

var G__20084 = seq__20071_20077;
var G__20085 = chunk__20072_20078;
var G__20086 = count__20073_20079;
var G__20087 = (i__20074_20080 + (1));
seq__20071_20077 = G__20084;
chunk__20072_20078 = G__20085;
count__20073_20079 = G__20086;
i__20074_20080 = G__20087;
continue;
} else {
var temp__4425__auto___20088 = cljs.core.seq.call(null,seq__20071_20077);
if(temp__4425__auto___20088){
var seq__20071_20089__$1 = temp__4425__auto___20088;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20071_20089__$1)){
var c__17332__auto___20090 = cljs.core.chunk_first.call(null,seq__20071_20089__$1);
var G__20091 = cljs.core.chunk_rest.call(null,seq__20071_20089__$1);
var G__20092 = c__17332__auto___20090;
var G__20093 = cljs.core.count.call(null,c__17332__auto___20090);
var G__20094 = (0);
seq__20071_20077 = G__20091;
chunk__20072_20078 = G__20092;
count__20073_20079 = G__20093;
i__20074_20080 = G__20094;
continue;
} else {
var vec__20076_20095 = cljs.core.first.call(null,seq__20071_20089__$1);
var k_20096 = cljs.core.nth.call(null,vec__20076_20095,(0),null);
var v_20097 = cljs.core.nth.call(null,vec__20076_20095,(1),null);
if(cljs.core.coll_QMARK_.call(null,v_20097)){
form_data.append(cljs.core.name.call(null,k_20096),cljs.core.first.call(null,v_20097),cljs.core.second.call(null,v_20097));
} else {
form_data.append(cljs.core.name.call(null,k_20096),v_20097);
}

var G__20098 = cljs.core.next.call(null,seq__20071_20089__$1);
var G__20099 = null;
var G__20100 = (0);
var G__20101 = (0);
seq__20071_20077 = G__20098;
chunk__20072_20078 = G__20099;
count__20073_20079 = G__20100;
i__20074_20080 = G__20101;
continue;
}
} else {
}
}
break;
}

return form_data;
});
cljs_http.client.wrap_multipart_params = (function cljs_http$client$wrap_multipart_params(client){
return (function (p__20105){
var map__20106 = p__20105;
var map__20106__$1 = ((((!((map__20106 == null)))?((((map__20106.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20106.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20106):map__20106);
var request = map__20106__$1;
var multipart_params = cljs.core.get.call(null,map__20106__$1,new cljs.core.Keyword(null,"multipart-params","multipart-params",-1033508707));
var request_method = cljs.core.get.call(null,map__20106__$1,new cljs.core.Keyword(null,"request-method","request-method",1764796830));
if(cljs.core.truth_((function (){var and__16517__auto__ = multipart_params;
if(cljs.core.truth_(and__16517__auto__)){
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"patch","patch",380775109),null,new cljs.core.Keyword(null,"delete","delete",-1768633620),null,new cljs.core.Keyword(null,"post","post",269697687),null,new cljs.core.Keyword(null,"put","put",1299772570),null], null), null).call(null,request_method);
} else {
return and__16517__auto__;
}
})())){
return client.call(null,cljs.core.assoc.call(null,cljs.core.dissoc.call(null,request,new cljs.core.Keyword(null,"multipart-params","multipart-params",-1033508707)),new cljs.core.Keyword(null,"body","body",-2049205669),cljs_http.client.generate_form_data.call(null,multipart_params)));
} else {
return client.call(null,request);
}
});
});
cljs_http.client.wrap_method = (function cljs_http$client$wrap_method(client){
return (function (req){
var temp__4423__auto__ = new cljs.core.Keyword(null,"method","method",55703592).cljs$core$IFn$_invoke$arity$1(req);
if(cljs.core.truth_(temp__4423__auto__)){
var m = temp__4423__auto__;
return client.call(null,cljs.core.assoc.call(null,cljs.core.dissoc.call(null,req,new cljs.core.Keyword(null,"method","method",55703592)),new cljs.core.Keyword(null,"request-method","request-method",1764796830),m));
} else {
return client.call(null,req);
}
});
});
cljs_http.client.wrap_server_name = (function cljs_http$client$wrap_server_name(client,server_name){
return (function (p1__20108_SHARP_){
return client.call(null,cljs.core.assoc.call(null,p1__20108_SHARP_,new cljs.core.Keyword(null,"server-name","server-name",-1012104295),server_name));
});
});
cljs_http.client.wrap_url = (function cljs_http$client$wrap_url(client){
return (function (p__20113){
var map__20114 = p__20113;
var map__20114__$1 = ((((!((map__20114 == null)))?((((map__20114.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20114.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20114):map__20114);
var req = map__20114__$1;
var query_params = cljs.core.get.call(null,map__20114__$1,new cljs.core.Keyword(null,"query-params","query-params",900640534));
var temp__4423__auto__ = cljs_http.client.parse_url.call(null,new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(req));
if(cljs.core.truth_(temp__4423__auto__)){
var spec = temp__4423__auto__;
return client.call(null,cljs.core.update_in.call(null,cljs.core.dissoc.call(null,cljs.core.merge.call(null,req,spec),new cljs.core.Keyword(null,"url","url",276297046)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"query-params","query-params",900640534)], null),((function (spec,temp__4423__auto__,map__20114,map__20114__$1,req,query_params){
return (function (p1__20109_SHARP_){
return cljs.core.merge.call(null,p1__20109_SHARP_,query_params);
});})(spec,temp__4423__auto__,map__20114,map__20114__$1,req,query_params))
));
} else {
return client.call(null,req);
}
});
});
/**
 * Middleware converting the :basic-auth option or `credentials` into
 *   an Authorization header.
 */
cljs_http.client.wrap_basic_auth = (function cljs_http$client$wrap_basic_auth(var_args){
var args__17594__auto__ = [];
var len__17587__auto___20120 = arguments.length;
var i__17588__auto___20121 = (0);
while(true){
if((i__17588__auto___20121 < len__17587__auto___20120)){
args__17594__auto__.push((arguments[i__17588__auto___20121]));

var G__20122 = (i__17588__auto___20121 + (1));
i__17588__auto___20121 = G__20122;
continue;
} else {
}
break;
}

var argseq__17595__auto__ = ((((1) < args__17594__auto__.length))?(new cljs.core.IndexedSeq(args__17594__auto__.slice((1)),(0))):null);
return cljs_http.client.wrap_basic_auth.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17595__auto__);
});

cljs_http.client.wrap_basic_auth.cljs$core$IFn$_invoke$arity$variadic = (function (client,p__20118){
var vec__20119 = p__20118;
var credentials = cljs.core.nth.call(null,vec__20119,(0),null);
return ((function (vec__20119,credentials){
return (function (req){
var credentials__$1 = (function (){var or__16529__auto__ = new cljs.core.Keyword(null,"basic-auth","basic-auth",-673163332).cljs$core$IFn$_invoke$arity$1(req);
if(cljs.core.truth_(or__16529__auto__)){
return or__16529__auto__;
} else {
return credentials;
}
})();
if(!(cljs.core.empty_QMARK_.call(null,credentials__$1))){
return client.call(null,cljs.core.assoc_in.call(null,cljs.core.dissoc.call(null,req,new cljs.core.Keyword(null,"basic-auth","basic-auth",-673163332)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"headers","headers",-835030129),"authorization"], null),cljs_http.util.basic_auth.call(null,credentials__$1)));
} else {
return client.call(null,req);
}
});
;})(vec__20119,credentials))
});

cljs_http.client.wrap_basic_auth.cljs$lang$maxFixedArity = (1);

cljs_http.client.wrap_basic_auth.cljs$lang$applyTo = (function (seq20116){
var G__20117 = cljs.core.first.call(null,seq20116);
var seq20116__$1 = cljs.core.next.call(null,seq20116);
return cljs_http.client.wrap_basic_auth.cljs$core$IFn$_invoke$arity$variadic(G__20117,seq20116__$1);
});
/**
 * Middleware converting the :oauth-token option into an Authorization header.
 */
cljs_http.client.wrap_oauth = (function cljs_http$client$wrap_oauth(client){
return (function (req){
var temp__4423__auto__ = new cljs.core.Keyword(null,"oauth-token","oauth-token",311415191).cljs$core$IFn$_invoke$arity$1(req);
if(cljs.core.truth_(temp__4423__auto__)){
var oauth_token = temp__4423__auto__;
return client.call(null,cljs.core.assoc_in.call(null,cljs.core.dissoc.call(null,req,new cljs.core.Keyword(null,"oauth-token","oauth-token",311415191)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"headers","headers",-835030129),"authorization"], null),[cljs.core.str("Bearer "),cljs.core.str(oauth_token)].join('')));
} else {
return client.call(null,req);
}
});
});
/**
 * Pipe the response-channel into the request-map's
 * custom channel (e.g. to enable transducers)
 */
cljs_http.client.wrap_channel_from_request_map = (function cljs_http$client$wrap_channel_from_request_map(client){
return (function (request){
var temp__4423__auto__ = new cljs.core.Keyword(null,"channel","channel",734187692).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(temp__4423__auto__)){
var custom_channel = temp__4423__auto__;
return cljs.core.async.pipe.call(null,client.call(null,request),custom_channel);
} else {
return client.call(null,request);
}
});
});
/**
 * Returns a batteries-included HTTP request function coresponding to the given
 * core client. See client/request
 */
cljs_http.client.wrap_request = (function cljs_http$client$wrap_request(request){
return cljs_http.client.wrap_default_headers.call(null,cljs_http.client.wrap_channel_from_request_map.call(null,cljs_http.client.wrap_url.call(null,cljs_http.client.wrap_method.call(null,cljs_http.client.wrap_oauth.call(null,cljs_http.client.wrap_basic_auth.call(null,cljs_http.client.wrap_query_params.call(null,cljs_http.client.wrap_content_type.call(null,cljs_http.client.wrap_json_response.call(null,cljs_http.client.wrap_json_params.call(null,cljs_http.client.wrap_transit_response.call(null,cljs_http.client.wrap_transit_params.call(null,cljs_http.client.wrap_edn_response.call(null,cljs_http.client.wrap_edn_params.call(null,cljs_http.client.wrap_multipart_params.call(null,cljs_http.client.wrap_form_params.call(null,cljs_http.client.wrap_accept.call(null,request)))))))))))))))));
});
/**
 * Executes the HTTP request corresponding to the given map and returns the
 * response map for corresponding to the resulting HTTP response.
 * 
 * In addition to the standard Ring request keys, the following keys are also
 * recognized:
 * * :url
 * * :method
 * * :query-params
 */
cljs_http.client.request = cljs_http.client.wrap_request.call(null,cljs_http.core.request);
/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.delete$ = (function cljs_http$client$delete(var_args){
var args__17594__auto__ = [];
var len__17587__auto___20127 = arguments.length;
var i__17588__auto___20128 = (0);
while(true){
if((i__17588__auto___20128 < len__17587__auto___20127)){
args__17594__auto__.push((arguments[i__17588__auto___20128]));

var G__20129 = (i__17588__auto___20128 + (1));
i__17588__auto___20128 = G__20129;
continue;
} else {
}
break;
}

var argseq__17595__auto__ = ((((1) < args__17594__auto__.length))?(new cljs.core.IndexedSeq(args__17594__auto__.slice((1)),(0))):null);
return cljs_http.client.delete$.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17595__auto__);
});

cljs_http.client.delete$.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__20125){
var vec__20126 = p__20125;
var req = cljs.core.nth.call(null,vec__20126,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"delete","delete",-1768633620),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
});

cljs_http.client.delete$.cljs$lang$maxFixedArity = (1);

cljs_http.client.delete$.cljs$lang$applyTo = (function (seq20123){
var G__20124 = cljs.core.first.call(null,seq20123);
var seq20123__$1 = cljs.core.next.call(null,seq20123);
return cljs_http.client.delete$.cljs$core$IFn$_invoke$arity$variadic(G__20124,seq20123__$1);
});
/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.get = (function cljs_http$client$get(var_args){
var args__17594__auto__ = [];
var len__17587__auto___20134 = arguments.length;
var i__17588__auto___20135 = (0);
while(true){
if((i__17588__auto___20135 < len__17587__auto___20134)){
args__17594__auto__.push((arguments[i__17588__auto___20135]));

var G__20136 = (i__17588__auto___20135 + (1));
i__17588__auto___20135 = G__20136;
continue;
} else {
}
break;
}

var argseq__17595__auto__ = ((((1) < args__17594__auto__.length))?(new cljs.core.IndexedSeq(args__17594__auto__.slice((1)),(0))):null);
return cljs_http.client.get.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17595__auto__);
});

cljs_http.client.get.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__20132){
var vec__20133 = p__20132;
var req = cljs.core.nth.call(null,vec__20133,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"get","get",1683182755),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
});

cljs_http.client.get.cljs$lang$maxFixedArity = (1);

cljs_http.client.get.cljs$lang$applyTo = (function (seq20130){
var G__20131 = cljs.core.first.call(null,seq20130);
var seq20130__$1 = cljs.core.next.call(null,seq20130);
return cljs_http.client.get.cljs$core$IFn$_invoke$arity$variadic(G__20131,seq20130__$1);
});
/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.head = (function cljs_http$client$head(var_args){
var args__17594__auto__ = [];
var len__17587__auto___20141 = arguments.length;
var i__17588__auto___20142 = (0);
while(true){
if((i__17588__auto___20142 < len__17587__auto___20141)){
args__17594__auto__.push((arguments[i__17588__auto___20142]));

var G__20143 = (i__17588__auto___20142 + (1));
i__17588__auto___20142 = G__20143;
continue;
} else {
}
break;
}

var argseq__17595__auto__ = ((((1) < args__17594__auto__.length))?(new cljs.core.IndexedSeq(args__17594__auto__.slice((1)),(0))):null);
return cljs_http.client.head.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17595__auto__);
});

cljs_http.client.head.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__20139){
var vec__20140 = p__20139;
var req = cljs.core.nth.call(null,vec__20140,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"head","head",-771383919),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
});

cljs_http.client.head.cljs$lang$maxFixedArity = (1);

cljs_http.client.head.cljs$lang$applyTo = (function (seq20137){
var G__20138 = cljs.core.first.call(null,seq20137);
var seq20137__$1 = cljs.core.next.call(null,seq20137);
return cljs_http.client.head.cljs$core$IFn$_invoke$arity$variadic(G__20138,seq20137__$1);
});
/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.jsonp = (function cljs_http$client$jsonp(var_args){
var args__17594__auto__ = [];
var len__17587__auto___20148 = arguments.length;
var i__17588__auto___20149 = (0);
while(true){
if((i__17588__auto___20149 < len__17587__auto___20148)){
args__17594__auto__.push((arguments[i__17588__auto___20149]));

var G__20150 = (i__17588__auto___20149 + (1));
i__17588__auto___20149 = G__20150;
continue;
} else {
}
break;
}

var argseq__17595__auto__ = ((((1) < args__17594__auto__.length))?(new cljs.core.IndexedSeq(args__17594__auto__.slice((1)),(0))):null);
return cljs_http.client.jsonp.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17595__auto__);
});

cljs_http.client.jsonp.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__20146){
var vec__20147 = p__20146;
var req = cljs.core.nth.call(null,vec__20147,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"jsonp","jsonp",226119588),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
});

cljs_http.client.jsonp.cljs$lang$maxFixedArity = (1);

cljs_http.client.jsonp.cljs$lang$applyTo = (function (seq20144){
var G__20145 = cljs.core.first.call(null,seq20144);
var seq20144__$1 = cljs.core.next.call(null,seq20144);
return cljs_http.client.jsonp.cljs$core$IFn$_invoke$arity$variadic(G__20145,seq20144__$1);
});
/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.move = (function cljs_http$client$move(var_args){
var args__17594__auto__ = [];
var len__17587__auto___20155 = arguments.length;
var i__17588__auto___20156 = (0);
while(true){
if((i__17588__auto___20156 < len__17587__auto___20155)){
args__17594__auto__.push((arguments[i__17588__auto___20156]));

var G__20157 = (i__17588__auto___20156 + (1));
i__17588__auto___20156 = G__20157;
continue;
} else {
}
break;
}

var argseq__17595__auto__ = ((((1) < args__17594__auto__.length))?(new cljs.core.IndexedSeq(args__17594__auto__.slice((1)),(0))):null);
return cljs_http.client.move.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17595__auto__);
});

cljs_http.client.move.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__20153){
var vec__20154 = p__20153;
var req = cljs.core.nth.call(null,vec__20154,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"move","move",-2110884309),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
});

cljs_http.client.move.cljs$lang$maxFixedArity = (1);

cljs_http.client.move.cljs$lang$applyTo = (function (seq20151){
var G__20152 = cljs.core.first.call(null,seq20151);
var seq20151__$1 = cljs.core.next.call(null,seq20151);
return cljs_http.client.move.cljs$core$IFn$_invoke$arity$variadic(G__20152,seq20151__$1);
});
/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.options = (function cljs_http$client$options(var_args){
var args__17594__auto__ = [];
var len__17587__auto___20162 = arguments.length;
var i__17588__auto___20163 = (0);
while(true){
if((i__17588__auto___20163 < len__17587__auto___20162)){
args__17594__auto__.push((arguments[i__17588__auto___20163]));

var G__20164 = (i__17588__auto___20163 + (1));
i__17588__auto___20163 = G__20164;
continue;
} else {
}
break;
}

var argseq__17595__auto__ = ((((1) < args__17594__auto__.length))?(new cljs.core.IndexedSeq(args__17594__auto__.slice((1)),(0))):null);
return cljs_http.client.options.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17595__auto__);
});

cljs_http.client.options.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__20160){
var vec__20161 = p__20160;
var req = cljs.core.nth.call(null,vec__20161,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
});

cljs_http.client.options.cljs$lang$maxFixedArity = (1);

cljs_http.client.options.cljs$lang$applyTo = (function (seq20158){
var G__20159 = cljs.core.first.call(null,seq20158);
var seq20158__$1 = cljs.core.next.call(null,seq20158);
return cljs_http.client.options.cljs$core$IFn$_invoke$arity$variadic(G__20159,seq20158__$1);
});
/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.patch = (function cljs_http$client$patch(var_args){
var args__17594__auto__ = [];
var len__17587__auto___20169 = arguments.length;
var i__17588__auto___20170 = (0);
while(true){
if((i__17588__auto___20170 < len__17587__auto___20169)){
args__17594__auto__.push((arguments[i__17588__auto___20170]));

var G__20171 = (i__17588__auto___20170 + (1));
i__17588__auto___20170 = G__20171;
continue;
} else {
}
break;
}

var argseq__17595__auto__ = ((((1) < args__17594__auto__.length))?(new cljs.core.IndexedSeq(args__17594__auto__.slice((1)),(0))):null);
return cljs_http.client.patch.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17595__auto__);
});

cljs_http.client.patch.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__20167){
var vec__20168 = p__20167;
var req = cljs.core.nth.call(null,vec__20168,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"patch","patch",380775109),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
});

cljs_http.client.patch.cljs$lang$maxFixedArity = (1);

cljs_http.client.patch.cljs$lang$applyTo = (function (seq20165){
var G__20166 = cljs.core.first.call(null,seq20165);
var seq20165__$1 = cljs.core.next.call(null,seq20165);
return cljs_http.client.patch.cljs$core$IFn$_invoke$arity$variadic(G__20166,seq20165__$1);
});
/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.post = (function cljs_http$client$post(var_args){
var args__17594__auto__ = [];
var len__17587__auto___20176 = arguments.length;
var i__17588__auto___20177 = (0);
while(true){
if((i__17588__auto___20177 < len__17587__auto___20176)){
args__17594__auto__.push((arguments[i__17588__auto___20177]));

var G__20178 = (i__17588__auto___20177 + (1));
i__17588__auto___20177 = G__20178;
continue;
} else {
}
break;
}

var argseq__17595__auto__ = ((((1) < args__17594__auto__.length))?(new cljs.core.IndexedSeq(args__17594__auto__.slice((1)),(0))):null);
return cljs_http.client.post.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17595__auto__);
});

cljs_http.client.post.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__20174){
var vec__20175 = p__20174;
var req = cljs.core.nth.call(null,vec__20175,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"post","post",269697687),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
});

cljs_http.client.post.cljs$lang$maxFixedArity = (1);

cljs_http.client.post.cljs$lang$applyTo = (function (seq20172){
var G__20173 = cljs.core.first.call(null,seq20172);
var seq20172__$1 = cljs.core.next.call(null,seq20172);
return cljs_http.client.post.cljs$core$IFn$_invoke$arity$variadic(G__20173,seq20172__$1);
});
/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.put = (function cljs_http$client$put(var_args){
var args__17594__auto__ = [];
var len__17587__auto___20183 = arguments.length;
var i__17588__auto___20184 = (0);
while(true){
if((i__17588__auto___20184 < len__17587__auto___20183)){
args__17594__auto__.push((arguments[i__17588__auto___20184]));

var G__20185 = (i__17588__auto___20184 + (1));
i__17588__auto___20184 = G__20185;
continue;
} else {
}
break;
}

var argseq__17595__auto__ = ((((1) < args__17594__auto__.length))?(new cljs.core.IndexedSeq(args__17594__auto__.slice((1)),(0))):null);
return cljs_http.client.put.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17595__auto__);
});

cljs_http.client.put.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__20181){
var vec__20182 = p__20181;
var req = cljs.core.nth.call(null,vec__20182,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"put","put",1299772570),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
});

cljs_http.client.put.cljs$lang$maxFixedArity = (1);

cljs_http.client.put.cljs$lang$applyTo = (function (seq20179){
var G__20180 = cljs.core.first.call(null,seq20179);
var seq20179__$1 = cljs.core.next.call(null,seq20179);
return cljs_http.client.put.cljs$core$IFn$_invoke$arity$variadic(G__20180,seq20179__$1);
});

//# sourceMappingURL=client.js.map?rel=1448371003435