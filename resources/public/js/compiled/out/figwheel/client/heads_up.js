// Compiled by ClojureScript 1.7.122 {}
goog.provide('figwheel.client.heads_up');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('figwheel.client.socket');
goog.require('cljs.core.async');
goog.require('goog.string');
figwheel.client.heads_up.clear;

figwheel.client.heads_up.cljs_logo_svg;
figwheel.client.heads_up.node = (function figwheel$client$heads_up$node(var_args){
var args__17594__auto__ = [];
var len__17587__auto___24942 = arguments.length;
var i__17588__auto___24943 = (0);
while(true){
if((i__17588__auto___24943 < len__17587__auto___24942)){
args__17594__auto__.push((arguments[i__17588__auto___24943]));

var G__24944 = (i__17588__auto___24943 + (1));
i__17588__auto___24943 = G__24944;
continue;
} else {
}
break;
}

var argseq__17595__auto__ = ((((2) < args__17594__auto__.length))?(new cljs.core.IndexedSeq(args__17594__auto__.slice((2)),(0))):null);
return figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__17595__auto__);
});

figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic = (function (t,attrs,children){
var e = document.createElement(cljs.core.name.call(null,t));
var seq__24934_24945 = cljs.core.seq.call(null,cljs.core.keys.call(null,attrs));
var chunk__24935_24946 = null;
var count__24936_24947 = (0);
var i__24937_24948 = (0);
while(true){
if((i__24937_24948 < count__24936_24947)){
var k_24949 = cljs.core._nth.call(null,chunk__24935_24946,i__24937_24948);
e.setAttribute(cljs.core.name.call(null,k_24949),cljs.core.get.call(null,attrs,k_24949));

var G__24950 = seq__24934_24945;
var G__24951 = chunk__24935_24946;
var G__24952 = count__24936_24947;
var G__24953 = (i__24937_24948 + (1));
seq__24934_24945 = G__24950;
chunk__24935_24946 = G__24951;
count__24936_24947 = G__24952;
i__24937_24948 = G__24953;
continue;
} else {
var temp__4425__auto___24954 = cljs.core.seq.call(null,seq__24934_24945);
if(temp__4425__auto___24954){
var seq__24934_24955__$1 = temp__4425__auto___24954;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24934_24955__$1)){
var c__17332__auto___24956 = cljs.core.chunk_first.call(null,seq__24934_24955__$1);
var G__24957 = cljs.core.chunk_rest.call(null,seq__24934_24955__$1);
var G__24958 = c__17332__auto___24956;
var G__24959 = cljs.core.count.call(null,c__17332__auto___24956);
var G__24960 = (0);
seq__24934_24945 = G__24957;
chunk__24935_24946 = G__24958;
count__24936_24947 = G__24959;
i__24937_24948 = G__24960;
continue;
} else {
var k_24961 = cljs.core.first.call(null,seq__24934_24955__$1);
e.setAttribute(cljs.core.name.call(null,k_24961),cljs.core.get.call(null,attrs,k_24961));

var G__24962 = cljs.core.next.call(null,seq__24934_24955__$1);
var G__24963 = null;
var G__24964 = (0);
var G__24965 = (0);
seq__24934_24945 = G__24962;
chunk__24935_24946 = G__24963;
count__24936_24947 = G__24964;
i__24937_24948 = G__24965;
continue;
}
} else {
}
}
break;
}

var seq__24938_24966 = cljs.core.seq.call(null,children);
var chunk__24939_24967 = null;
var count__24940_24968 = (0);
var i__24941_24969 = (0);
while(true){
if((i__24941_24969 < count__24940_24968)){
var ch_24970 = cljs.core._nth.call(null,chunk__24939_24967,i__24941_24969);
e.appendChild(ch_24970);

var G__24971 = seq__24938_24966;
var G__24972 = chunk__24939_24967;
var G__24973 = count__24940_24968;
var G__24974 = (i__24941_24969 + (1));
seq__24938_24966 = G__24971;
chunk__24939_24967 = G__24972;
count__24940_24968 = G__24973;
i__24941_24969 = G__24974;
continue;
} else {
var temp__4425__auto___24975 = cljs.core.seq.call(null,seq__24938_24966);
if(temp__4425__auto___24975){
var seq__24938_24976__$1 = temp__4425__auto___24975;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24938_24976__$1)){
var c__17332__auto___24977 = cljs.core.chunk_first.call(null,seq__24938_24976__$1);
var G__24978 = cljs.core.chunk_rest.call(null,seq__24938_24976__$1);
var G__24979 = c__17332__auto___24977;
var G__24980 = cljs.core.count.call(null,c__17332__auto___24977);
var G__24981 = (0);
seq__24938_24966 = G__24978;
chunk__24939_24967 = G__24979;
count__24940_24968 = G__24980;
i__24941_24969 = G__24981;
continue;
} else {
var ch_24982 = cljs.core.first.call(null,seq__24938_24976__$1);
e.appendChild(ch_24982);

var G__24983 = cljs.core.next.call(null,seq__24938_24976__$1);
var G__24984 = null;
var G__24985 = (0);
var G__24986 = (0);
seq__24938_24966 = G__24983;
chunk__24939_24967 = G__24984;
count__24940_24968 = G__24985;
i__24941_24969 = G__24986;
continue;
}
} else {
}
}
break;
}

return e;
});

figwheel.client.heads_up.node.cljs$lang$maxFixedArity = (2);

figwheel.client.heads_up.node.cljs$lang$applyTo = (function (seq24931){
var G__24932 = cljs.core.first.call(null,seq24931);
var seq24931__$1 = cljs.core.next.call(null,seq24931);
var G__24933 = cljs.core.first.call(null,seq24931__$1);
var seq24931__$2 = cljs.core.next.call(null,seq24931__$1);
return figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic(G__24932,G__24933,seq24931__$2);
});
if(typeof figwheel.client.heads_up.heads_up_event_dispatch !== 'undefined'){
} else {
figwheel.client.heads_up.heads_up_event_dispatch = (function (){var method_table__17442__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__17443__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__17444__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__17445__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__17446__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"figwheel.client.heads-up","heads-up-event-dispatch"),((function (method_table__17442__auto__,prefer_table__17443__auto__,method_cache__17444__auto__,cached_hierarchy__17445__auto__,hierarchy__17446__auto__){
return (function (dataset){
return dataset.figwheelEvent;
});})(method_table__17442__auto__,prefer_table__17443__auto__,method_cache__17444__auto__,cached_hierarchy__17445__auto__,hierarchy__17446__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__17446__auto__,method_table__17442__auto__,prefer_table__17443__auto__,method_cache__17444__auto__,cached_hierarchy__17445__auto__));
})();
}
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,new cljs.core.Keyword(null,"default","default",-1987822328),(function (_){
return cljs.core.PersistentArrayMap.EMPTY;
}));
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,"file-selected",(function (dataset){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"file-selected",new cljs.core.Keyword(null,"file-name","file-name",-1654217259),dataset.fileName,new cljs.core.Keyword(null,"file-line","file-line",-1228823138),dataset.fileLine], null));
}));
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,"close-heads-up",(function (dataset){
return figwheel.client.heads_up.clear.call(null);
}));
figwheel.client.heads_up.ancestor_nodes = (function figwheel$client$heads_up$ancestor_nodes(el){
return cljs.core.iterate.call(null,(function (e){
return e.parentNode;
}),el);
});
figwheel.client.heads_up.get_dataset = (function figwheel$client$heads_up$get_dataset(el){
return cljs.core.first.call(null,cljs.core.keep.call(null,(function (x){
if(cljs.core.truth_(x.dataset.figwheelEvent)){
return x.dataset;
} else {
return null;
}
}),cljs.core.take.call(null,(4),figwheel.client.heads_up.ancestor_nodes.call(null,el))));
});
figwheel.client.heads_up.heads_up_onclick_handler = (function figwheel$client$heads_up$heads_up_onclick_handler(event){
var dataset = figwheel.client.heads_up.get_dataset.call(null,event.target);
event.preventDefault();

if(cljs.core.truth_(dataset)){
return figwheel.client.heads_up.heads_up_event_dispatch.call(null,dataset);
} else {
return null;
}
});
figwheel.client.heads_up.ensure_container = (function figwheel$client$heads_up$ensure_container(){
var cont_id = "figwheel-heads-up-container";
var content_id = "figwheel-heads-up-content-area";
if(cljs.core.not.call(null,document.querySelector([cljs.core.str("#"),cljs.core.str(cont_id)].join('')))){
var el_24987 = figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),cont_id,new cljs.core.Keyword(null,"style","style",-496642736),[cljs.core.str("-webkit-transition: all 0.2s ease-in-out;"),cljs.core.str("-moz-transition: all 0.2s ease-in-out;"),cljs.core.str("-o-transition: all 0.2s ease-in-out;"),cljs.core.str("transition: all 0.2s ease-in-out;"),cljs.core.str("font-size: 13px;"),cljs.core.str("border-top: 1px solid #f5f5f5;"),cljs.core.str("box-shadow: 0px 0px 1px #aaaaaa;"),cljs.core.str("line-height: 18px;"),cljs.core.str("color: #333;"),cljs.core.str("font-family: monospace;"),cljs.core.str("padding: 0px 10px 0px 70px;"),cljs.core.str("position: fixed;"),cljs.core.str("bottom: 0px;"),cljs.core.str("left: 0px;"),cljs.core.str("height: 0px;"),cljs.core.str("opacity: 0.0;"),cljs.core.str("box-sizing: border-box;"),cljs.core.str("z-index: 10000;")].join('')], null));
el_24987.onclick = figwheel.client.heads_up.heads_up_onclick_handler;

el_24987.innerHTML = figwheel.client.heads_up.cljs_logo_svg;

el_24987.appendChild(figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),content_id], null)));

document.body.appendChild(el_24987);
} else {
}

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"container-el","container-el",109664205),document.getElementById(cont_id),new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187),document.getElementById(content_id)], null);
});
figwheel.client.heads_up.set_style_BANG_ = (function figwheel$client$heads_up$set_style_BANG_(p__24988,st_map){
var map__24993 = p__24988;
var map__24993__$1 = ((((!((map__24993 == null)))?((((map__24993.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24993.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24993):map__24993);
var container_el = cljs.core.get.call(null,map__24993__$1,new cljs.core.Keyword(null,"container-el","container-el",109664205));
return cljs.core.mapv.call(null,((function (map__24993,map__24993__$1,container_el){
return (function (p__24995){
var vec__24996 = p__24995;
var k = cljs.core.nth.call(null,vec__24996,(0),null);
var v = cljs.core.nth.call(null,vec__24996,(1),null);
return (container_el.style[cljs.core.name.call(null,k)] = v);
});})(map__24993,map__24993__$1,container_el))
,st_map);
});
figwheel.client.heads_up.set_content_BANG_ = (function figwheel$client$heads_up$set_content_BANG_(p__24997,dom_str){
var map__25000 = p__24997;
var map__25000__$1 = ((((!((map__25000 == null)))?((((map__25000.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25000.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25000):map__25000);
var c = map__25000__$1;
var content_area_el = cljs.core.get.call(null,map__25000__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML = dom_str;
});
figwheel.client.heads_up.get_content = (function figwheel$client$heads_up$get_content(p__25002){
var map__25005 = p__25002;
var map__25005__$1 = ((((!((map__25005 == null)))?((((map__25005.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25005.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25005):map__25005);
var content_area_el = cljs.core.get.call(null,map__25005__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML;
});
figwheel.client.heads_up.close_link = (function figwheel$client$heads_up$close_link(){
return [cljs.core.str("<a style=\""),cljs.core.str("float: right;"),cljs.core.str("font-size: 18px;"),cljs.core.str("text-decoration: none;"),cljs.core.str("text-align: right;"),cljs.core.str("width: 30px;"),cljs.core.str("height: 30px;"),cljs.core.str("color: rgba(84,84,84, 0.5);"),cljs.core.str("\" href=\"#\"  data-figwheel-event=\"close-heads-up\">"),cljs.core.str("x"),cljs.core.str("</a>")].join('');
});
figwheel.client.heads_up.display_heads_up = (function figwheel$client$heads_up$display_heads_up(style,msg){
var c__19830__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19830__auto__){
return (function (){
var f__19831__auto__ = (function (){var switch__19765__auto__ = ((function (c__19830__auto__){
return (function (state_25048){
var state_val_25049 = (state_25048[(1)]);
if((state_val_25049 === (1))){
var inst_25033 = (state_25048[(7)]);
var inst_25033__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_25034 = [new cljs.core.Keyword(null,"paddingTop","paddingTop",-1088692345),new cljs.core.Keyword(null,"paddingBottom","paddingBottom",-916694489),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_25035 = ["10px","10px","100%","68px","1.0"];
var inst_25036 = cljs.core.PersistentHashMap.fromArrays(inst_25034,inst_25035);
var inst_25037 = cljs.core.merge.call(null,inst_25036,style);
var inst_25038 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_25033__$1,inst_25037);
var inst_25039 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_25033__$1,msg);
var inst_25040 = cljs.core.async.timeout.call(null,(300));
var state_25048__$1 = (function (){var statearr_25050 = state_25048;
(statearr_25050[(7)] = inst_25033__$1);

(statearr_25050[(8)] = inst_25039);

(statearr_25050[(9)] = inst_25038);

return statearr_25050;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25048__$1,(2),inst_25040);
} else {
if((state_val_25049 === (2))){
var inst_25033 = (state_25048[(7)]);
var inst_25042 = (state_25048[(2)]);
var inst_25043 = [new cljs.core.Keyword(null,"height","height",1025178622)];
var inst_25044 = ["auto"];
var inst_25045 = cljs.core.PersistentHashMap.fromArrays(inst_25043,inst_25044);
var inst_25046 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_25033,inst_25045);
var state_25048__$1 = (function (){var statearr_25051 = state_25048;
(statearr_25051[(10)] = inst_25042);

return statearr_25051;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25048__$1,inst_25046);
} else {
return null;
}
}
});})(c__19830__auto__))
;
return ((function (switch__19765__auto__,c__19830__auto__){
return (function() {
var figwheel$client$heads_up$display_heads_up_$_state_machine__19766__auto__ = null;
var figwheel$client$heads_up$display_heads_up_$_state_machine__19766__auto____0 = (function (){
var statearr_25055 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_25055[(0)] = figwheel$client$heads_up$display_heads_up_$_state_machine__19766__auto__);

(statearr_25055[(1)] = (1));

return statearr_25055;
});
var figwheel$client$heads_up$display_heads_up_$_state_machine__19766__auto____1 = (function (state_25048){
while(true){
var ret_value__19767__auto__ = (function (){try{while(true){
var result__19768__auto__ = switch__19765__auto__.call(null,state_25048);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19768__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19768__auto__;
}
break;
}
}catch (e25056){if((e25056 instanceof Object)){
var ex__19769__auto__ = e25056;
var statearr_25057_25059 = state_25048;
(statearr_25057_25059[(5)] = ex__19769__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25048);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25056;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19767__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25060 = state_25048;
state_25048 = G__25060;
continue;
} else {
return ret_value__19767__auto__;
}
break;
}
});
figwheel$client$heads_up$display_heads_up_$_state_machine__19766__auto__ = function(state_25048){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$display_heads_up_$_state_machine__19766__auto____0.call(this);
case 1:
return figwheel$client$heads_up$display_heads_up_$_state_machine__19766__auto____1.call(this,state_25048);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$display_heads_up_$_state_machine__19766__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$display_heads_up_$_state_machine__19766__auto____0;
figwheel$client$heads_up$display_heads_up_$_state_machine__19766__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$display_heads_up_$_state_machine__19766__auto____1;
return figwheel$client$heads_up$display_heads_up_$_state_machine__19766__auto__;
})()
;})(switch__19765__auto__,c__19830__auto__))
})();
var state__19832__auto__ = (function (){var statearr_25058 = f__19831__auto__.call(null);
(statearr_25058[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19830__auto__);

return statearr_25058;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19832__auto__);
});})(c__19830__auto__))
);

return c__19830__auto__;
});
figwheel.client.heads_up.heading = (function figwheel$client$heads_up$heading(s){
return [cljs.core.str("<div style=\""),cljs.core.str("font-size: 26px;"),cljs.core.str("line-height: 26px;"),cljs.core.str("margin-bottom: 2px;"),cljs.core.str("padding-top: 1px;"),cljs.core.str("\">"),cljs.core.str(s),cljs.core.str("</div>")].join('');
});
figwheel.client.heads_up.file_and_line_number = (function figwheel$client$heads_up$file_and_line_number(msg){
if(cljs.core.truth_(cljs.core.re_matches.call(null,/.*at\sline.*/,msg))){
return cljs.core.take.call(null,(2),cljs.core.reverse.call(null,clojure.string.split.call(null,msg," ")));
} else {
return null;
}
});
figwheel.client.heads_up.file_selector_div = (function figwheel$client$heads_up$file_selector_div(file_name,line_number,msg){
return [cljs.core.str("<div data-figwheel-event=\"file-selected\" data-file-name=\""),cljs.core.str(file_name),cljs.core.str("\" data-file-line=\""),cljs.core.str(line_number),cljs.core.str("\">"),cljs.core.str(msg),cljs.core.str("</div>")].join('');
});
figwheel.client.heads_up.format_line = (function figwheel$client$heads_up$format_line(msg){
var msg__$1 = goog.string.htmlEscape(msg);
var temp__4423__auto__ = figwheel.client.heads_up.file_and_line_number.call(null,msg__$1);
if(cljs.core.truth_(temp__4423__auto__)){
var vec__25062 = temp__4423__auto__;
var f = cljs.core.nth.call(null,vec__25062,(0),null);
var ln = cljs.core.nth.call(null,vec__25062,(1),null);
return figwheel.client.heads_up.file_selector_div.call(null,f,ln,msg__$1);
} else {
return [cljs.core.str("<div>"),cljs.core.str(msg__$1),cljs.core.str("</div>")].join('');
}
});
figwheel.client.heads_up.display_error = (function figwheel$client$heads_up$display_error(formatted_messages,cause){
var vec__25065 = (cljs.core.truth_(cause)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause),new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause),new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause)], null):cljs.core.first.call(null,cljs.core.keep.call(null,figwheel.client.heads_up.file_and_line_number,formatted_messages)));
var file_name = cljs.core.nth.call(null,vec__25065,(0),null);
var file_line = cljs.core.nth.call(null,vec__25065,(1),null);
var file_column = cljs.core.nth.call(null,vec__25065,(2),null);
var msg = cljs.core.apply.call(null,cljs.core.str,cljs.core.map.call(null,((function (vec__25065,file_name,file_line,file_column){
return (function (p1__25063_SHARP_){
return [cljs.core.str("<div>"),cljs.core.str(goog.string.htmlEscape(p1__25063_SHARP_)),cljs.core.str("</div>")].join('');
});})(vec__25065,file_name,file_line,file_column))
,formatted_messages));
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(255, 161, 161, 0.95)"], null),[cljs.core.str(figwheel.client.heads_up.close_link.call(null)),cljs.core.str(figwheel.client.heads_up.heading.call(null,"Compile Error")),cljs.core.str(figwheel.client.heads_up.file_selector_div.call(null,file_name,(function (){var or__16529__auto__ = file_line;
if(cljs.core.truth_(or__16529__auto__)){
return or__16529__auto__;
} else {
var and__16517__auto__ = cause;
if(cljs.core.truth_(and__16517__auto__)){
return new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause);
} else {
return and__16517__auto__;
}
}
})(),[cljs.core.str(msg),cljs.core.str((cljs.core.truth_(cause)?[cljs.core.str("Error on file "),cljs.core.str(goog.string.htmlEscape(new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause))),cljs.core.str(", line "),cljs.core.str(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", column "),cljs.core.str(new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause))].join(''):""))].join('')))].join(''));
});
figwheel.client.heads_up.display_system_warning = (function figwheel$client$heads_up$display_system_warning(header,msg){
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(255, 220, 110, 0.95)"], null),[cljs.core.str(figwheel.client.heads_up.close_link.call(null)),cljs.core.str(figwheel.client.heads_up.heading.call(null,header)),cljs.core.str(figwheel.client.heads_up.format_line.call(null,msg))].join(''));
});
figwheel.client.heads_up.display_warning = (function figwheel$client$heads_up$display_warning(msg){
return figwheel.client.heads_up.display_system_warning.call(null,"Compile Warning",msg);
});
figwheel.client.heads_up.append_message = (function figwheel$client$heads_up$append_message(message){
var map__25068 = figwheel.client.heads_up.ensure_container.call(null);
var map__25068__$1 = ((((!((map__25068 == null)))?((((map__25068.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25068.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25068):map__25068);
var content_area_el = cljs.core.get.call(null,map__25068__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
var el = document.createElement("div");
el.innerHTML = figwheel.client.heads_up.format_line.call(null,message);

return content_area_el.appendChild(el);
});
figwheel.client.heads_up.clear = (function figwheel$client$heads_up$clear(){
var c__19830__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19830__auto__){
return (function (){
var f__19831__auto__ = (function (){var switch__19765__auto__ = ((function (c__19830__auto__){
return (function (state_25116){
var state_val_25117 = (state_25116[(1)]);
if((state_val_25117 === (1))){
var inst_25099 = (state_25116[(7)]);
var inst_25099__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_25100 = [new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_25101 = ["0.0"];
var inst_25102 = cljs.core.PersistentHashMap.fromArrays(inst_25100,inst_25101);
var inst_25103 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_25099__$1,inst_25102);
var inst_25104 = cljs.core.async.timeout.call(null,(300));
var state_25116__$1 = (function (){var statearr_25118 = state_25116;
(statearr_25118[(7)] = inst_25099__$1);

(statearr_25118[(8)] = inst_25103);

return statearr_25118;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25116__$1,(2),inst_25104);
} else {
if((state_val_25117 === (2))){
var inst_25099 = (state_25116[(7)]);
var inst_25106 = (state_25116[(2)]);
var inst_25107 = [new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491)];
var inst_25108 = ["auto","0px","0px","0px 10px 0px 70px","0px","transparent"];
var inst_25109 = cljs.core.PersistentHashMap.fromArrays(inst_25107,inst_25108);
var inst_25110 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_25099,inst_25109);
var inst_25111 = cljs.core.async.timeout.call(null,(200));
var state_25116__$1 = (function (){var statearr_25119 = state_25116;
(statearr_25119[(9)] = inst_25106);

(statearr_25119[(10)] = inst_25110);

return statearr_25119;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25116__$1,(3),inst_25111);
} else {
if((state_val_25117 === (3))){
var inst_25099 = (state_25116[(7)]);
var inst_25113 = (state_25116[(2)]);
var inst_25114 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_25099,"");
var state_25116__$1 = (function (){var statearr_25120 = state_25116;
(statearr_25120[(11)] = inst_25113);

return statearr_25120;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25116__$1,inst_25114);
} else {
return null;
}
}
}
});})(c__19830__auto__))
;
return ((function (switch__19765__auto__,c__19830__auto__){
return (function() {
var figwheel$client$heads_up$clear_$_state_machine__19766__auto__ = null;
var figwheel$client$heads_up$clear_$_state_machine__19766__auto____0 = (function (){
var statearr_25124 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25124[(0)] = figwheel$client$heads_up$clear_$_state_machine__19766__auto__);

(statearr_25124[(1)] = (1));

return statearr_25124;
});
var figwheel$client$heads_up$clear_$_state_machine__19766__auto____1 = (function (state_25116){
while(true){
var ret_value__19767__auto__ = (function (){try{while(true){
var result__19768__auto__ = switch__19765__auto__.call(null,state_25116);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19768__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19768__auto__;
}
break;
}
}catch (e25125){if((e25125 instanceof Object)){
var ex__19769__auto__ = e25125;
var statearr_25126_25128 = state_25116;
(statearr_25126_25128[(5)] = ex__19769__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25116);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25125;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19767__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25129 = state_25116;
state_25116 = G__25129;
continue;
} else {
return ret_value__19767__auto__;
}
break;
}
});
figwheel$client$heads_up$clear_$_state_machine__19766__auto__ = function(state_25116){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$clear_$_state_machine__19766__auto____0.call(this);
case 1:
return figwheel$client$heads_up$clear_$_state_machine__19766__auto____1.call(this,state_25116);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$clear_$_state_machine__19766__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$clear_$_state_machine__19766__auto____0;
figwheel$client$heads_up$clear_$_state_machine__19766__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$clear_$_state_machine__19766__auto____1;
return figwheel$client$heads_up$clear_$_state_machine__19766__auto__;
})()
;})(switch__19765__auto__,c__19830__auto__))
})();
var state__19832__auto__ = (function (){var statearr_25127 = f__19831__auto__.call(null);
(statearr_25127[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19830__auto__);

return statearr_25127;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19832__auto__);
});})(c__19830__auto__))
);

return c__19830__auto__;
});
figwheel.client.heads_up.display_loaded_start = (function figwheel$client$heads_up$display_loaded_start(){
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(211,234,172,1.0)",new cljs.core.Keyword(null,"width","width",-384071477),"68px",new cljs.core.Keyword(null,"height","height",1025178622),"68px",new cljs.core.Keyword(null,"paddingLeft","paddingLeft",262720813),"0px",new cljs.core.Keyword(null,"paddingRight","paddingRight",-1642313463),"0px",new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),"35px"], null),"");
});
figwheel.client.heads_up.flash_loaded = (function figwheel$client$heads_up$flash_loaded(){
var c__19830__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19830__auto__){
return (function (){
var f__19831__auto__ = (function (){var switch__19765__auto__ = ((function (c__19830__auto__){
return (function (state_25161){
var state_val_25162 = (state_25161[(1)]);
if((state_val_25162 === (1))){
var inst_25151 = figwheel.client.heads_up.display_loaded_start.call(null);
var state_25161__$1 = state_25161;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25161__$1,(2),inst_25151);
} else {
if((state_val_25162 === (2))){
var inst_25153 = (state_25161[(2)]);
var inst_25154 = cljs.core.async.timeout.call(null,(400));
var state_25161__$1 = (function (){var statearr_25163 = state_25161;
(statearr_25163[(7)] = inst_25153);

return statearr_25163;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25161__$1,(3),inst_25154);
} else {
if((state_val_25162 === (3))){
var inst_25156 = (state_25161[(2)]);
var inst_25157 = figwheel.client.heads_up.clear.call(null);
var state_25161__$1 = (function (){var statearr_25164 = state_25161;
(statearr_25164[(8)] = inst_25156);

return statearr_25164;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25161__$1,(4),inst_25157);
} else {
if((state_val_25162 === (4))){
var inst_25159 = (state_25161[(2)]);
var state_25161__$1 = state_25161;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25161__$1,inst_25159);
} else {
return null;
}
}
}
}
});})(c__19830__auto__))
;
return ((function (switch__19765__auto__,c__19830__auto__){
return (function() {
var figwheel$client$heads_up$flash_loaded_$_state_machine__19766__auto__ = null;
var figwheel$client$heads_up$flash_loaded_$_state_machine__19766__auto____0 = (function (){
var statearr_25168 = [null,null,null,null,null,null,null,null,null];
(statearr_25168[(0)] = figwheel$client$heads_up$flash_loaded_$_state_machine__19766__auto__);

(statearr_25168[(1)] = (1));

return statearr_25168;
});
var figwheel$client$heads_up$flash_loaded_$_state_machine__19766__auto____1 = (function (state_25161){
while(true){
var ret_value__19767__auto__ = (function (){try{while(true){
var result__19768__auto__ = switch__19765__auto__.call(null,state_25161);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19768__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19768__auto__;
}
break;
}
}catch (e25169){if((e25169 instanceof Object)){
var ex__19769__auto__ = e25169;
var statearr_25170_25172 = state_25161;
(statearr_25170_25172[(5)] = ex__19769__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25161);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25169;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19767__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25173 = state_25161;
state_25161 = G__25173;
continue;
} else {
return ret_value__19767__auto__;
}
break;
}
});
figwheel$client$heads_up$flash_loaded_$_state_machine__19766__auto__ = function(state_25161){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$flash_loaded_$_state_machine__19766__auto____0.call(this);
case 1:
return figwheel$client$heads_up$flash_loaded_$_state_machine__19766__auto____1.call(this,state_25161);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$flash_loaded_$_state_machine__19766__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$flash_loaded_$_state_machine__19766__auto____0;
figwheel$client$heads_up$flash_loaded_$_state_machine__19766__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$flash_loaded_$_state_machine__19766__auto____1;
return figwheel$client$heads_up$flash_loaded_$_state_machine__19766__auto__;
})()
;})(switch__19765__auto__,c__19830__auto__))
})();
var state__19832__auto__ = (function (){var statearr_25171 = f__19831__auto__.call(null);
(statearr_25171[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19830__auto__);

return statearr_25171;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19832__auto__);
});})(c__19830__auto__))
);

return c__19830__auto__;
});
figwheel.client.heads_up.cljs_logo_svg = "<?xml version='1.0' encoding='utf-8'?>\n<!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'>\n<svg width='49px' height='49px' style='position:absolute; top:9px; left: 10px;' version='1.1'\n  xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px'\n  viewBox='0 0 428 428' enable-background='new 0 0 428 428' xml:space='preserve'>\n<circle fill='#fff' cx='213' cy='214' r='213' />\n<g>\n<path fill='#96CA4B' d='M122,266.6c-12.7,0-22.3-3.7-28.9-11.1c-6.6-7.4-9.9-18-9.9-31.8c0-14.1,3.4-24.9,10.3-32.5\n  s16.8-11.4,29.9-11.4c8.8,0,16.8,1.6,23.8,4.9l-5.4,14.3c-7.5-2.9-13.7-4.4-18.6-4.4c-14.5,0-21.7,9.6-21.7,28.8\n  c0,9.4,1.8,16.4,5.4,21.2c3.6,4.7,8.9,7.1,15.9,7.1c7.9,0,15.4-2,22.5-5.9v15.5c-3.2,1.9-6.6,3.2-10.2,4\n  C131.5,266.2,127.1,266.6,122,266.6z'/>\n<path fill='#96CA4B' d='M194.4,265.1h-17.8V147.3h17.8V265.1z'/>\n<path fill='#5F7FBF' d='M222.9,302.3c-5.3,0-9.8-0.6-13.3-1.9v-14.1c3.4,0.9,6.9,1.4,10.5,1.4c7.6,0,11.4-4.3,11.4-12.9v-93.5h17.8\n  v94.7c0,8.6-2.3,15.2-6.8,19.6C237.9,300.1,231.4,302.3,222.9,302.3z M230.4,159.2c0-3.2,0.9-5.6,2.6-7.3c1.7-1.7,4.2-2.6,7.5-2.6\n  c3.1,0,5.6,0.9,7.3,2.6c1.7,1.7,2.6,4.2,2.6,7.3c0,3-0.9,5.4-2.6,7.2c-1.7,1.7-4.2,2.6-7.3,2.6c-3.2,0-5.7-0.9-7.5-2.6\n  C231.2,164.6,230.4,162.2,230.4,159.2z'/>\n<path fill='#5F7FBF' d='M342.5,241.3c0,8.2-3,14.4-8.9,18.8c-6,4.4-14.5,6.5-25.6,6.5c-11.2,0-20.1-1.7-26.9-5.1v-15.4\n  c9.8,4.5,19,6.8,27.5,6.8c10.9,0,16.4-3.3,16.4-9.9c0-2.1-0.6-3.9-1.8-5.3c-1.2-1.4-3.2-2.9-6-4.4c-2.8-1.5-6.6-3.2-11.6-5.1\n  c-9.6-3.7-16.2-7.5-19.6-11.2c-3.4-3.7-5.1-8.6-5.1-14.5c0-7.2,2.9-12.7,8.7-16.7c5.8-4,13.6-5.9,23.6-5.9c9.8,0,19.1,2,27.9,6\n  l-5.8,13.4c-9-3.7-16.6-5.6-22.8-5.6c-9.4,0-14.1,2.7-14.1,8c0,2.6,1.2,4.8,3.7,6.7c2.4,1.8,7.8,4.3,16,7.5\n  c6.9,2.7,11.9,5.1,15.1,7.3c3.1,2.2,5.4,4.8,7,7.7C341.7,233.7,342.5,237.2,342.5,241.3z'/>\n</g>\n<path fill='#96CA4B' stroke='#96CA4B' stroke-width='6' stroke-miterlimit='10' d='M197,392.7c-91.2-8.1-163-85-163-178.3\n  S105.8,44.3,197,36.2V16.1c-102.3,8.2-183,94-183,198.4s80.7,190.2,183,198.4V392.7z'/>\n<path fill='#5F7FBF' stroke='#5F7FBF' stroke-width='6' stroke-miterlimit='10' d='M229,16.1v20.1c91.2,8.1,163,85,163,178.3\n  s-71.8,170.2-163,178.3v20.1c102.3-8.2,183-94,183-198.4S331.3,24.3,229,16.1z'/>\n</svg>";

//# sourceMappingURL=heads_up.js.map?rel=1448369129539