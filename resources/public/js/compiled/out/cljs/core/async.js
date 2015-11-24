// Compiled by ClojureScript 1.7.122 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(f){
if(typeof cljs.core.async.t_cljs$core$async26315 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26315 = (function (fn_handler,f,meta26316){
this.fn_handler = fn_handler;
this.f = f;
this.meta26316 = meta26316;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async26315.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26317,meta26316__$1){
var self__ = this;
var _26317__$1 = this;
return (new cljs.core.async.t_cljs$core$async26315(self__.fn_handler,self__.f,meta26316__$1));
});

cljs.core.async.t_cljs$core$async26315.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26317){
var self__ = this;
var _26317__$1 = this;
return self__.meta26316;
});

cljs.core.async.t_cljs$core$async26315.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async26315.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async26315.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async26315.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"fn-handler","fn-handler",648785851,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null)], null)))], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"meta26316","meta26316",-1722067232,null)], null);
});

cljs.core.async.t_cljs$core$async26315.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async26315.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26315";

cljs.core.async.t_cljs$core$async26315.cljs$lang$ctorPrWriter = (function (this__17127__auto__,writer__17128__auto__,opt__17129__auto__){
return cljs.core._write.call(null,writer__17128__auto__,"cljs.core.async/t_cljs$core$async26315");
});

cljs.core.async.__GT_t_cljs$core$async26315 = (function cljs$core$async$fn_handler_$___GT_t_cljs$core$async26315(fn_handler__$1,f__$1,meta26316){
return (new cljs.core.async.t_cljs$core$async26315(fn_handler__$1,f__$1,meta26316));
});

}

return (new cljs.core.async.t_cljs$core$async26315(cljs$core$async$fn_handler,f,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if(!((buff == null))){
if((false) || (buff.cljs$core$async$impl$protocols$UnblockingBuffer$)){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var args26320 = [];
var len__17587__auto___26323 = arguments.length;
var i__17588__auto___26324 = (0);
while(true){
if((i__17588__auto___26324 < len__17587__auto___26323)){
args26320.push((arguments[i__17588__auto___26324]));

var G__26325 = (i__17588__auto___26324 + (1));
i__17588__auto___26324 = G__26325;
continue;
} else {
}
break;
}

var G__26322 = args26320.length;
switch (G__26322) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26320.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("buffer must be supplied when transducer is"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"buf-or-n","buf-or-n",-1646815050,null)))].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;
/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var args26327 = [];
var len__17587__auto___26330 = arguments.length;
var i__17588__auto___26331 = (0);
while(true){
if((i__17588__auto___26331 < len__17587__auto___26330)){
args26327.push((arguments[i__17588__auto___26331]));

var G__26332 = (i__17588__auto___26331 + (1));
i__17588__auto___26331 = G__26332;
continue;
} else {
}
break;
}

var G__26329 = args26327.length;
switch (G__26329) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26327.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_26334 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_26334);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_26334,ret){
return (function (){
return fn1.call(null,val_26334);
});})(val_26334,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;
cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var args26335 = [];
var len__17587__auto___26338 = arguments.length;
var i__17588__auto___26339 = (0);
while(true){
if((i__17588__auto___26339 < len__17587__auto___26338)){
args26335.push((arguments[i__17588__auto___26339]));

var G__26340 = (i__17588__auto___26339 + (1));
i__17588__auto___26339 = G__26340;
continue;
} else {
}
break;
}

var G__26337 = args26335.length;
switch (G__26337) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26335.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__4423__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4423__auto__)){
var ret = temp__4423__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4423__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__4423__auto__)){
var retb = temp__4423__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4423__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__4423__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;
cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__17432__auto___26342 = n;
var x_26343 = (0);
while(true){
if((x_26343 < n__17432__auto___26342)){
(a[x_26343] = (0));

var G__26344 = (x_26343 + (1));
x_26343 = G__26344;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__26345 = (i + (1));
i = G__26345;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async26349 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26349 = (function (alt_flag,flag,meta26350){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta26350 = meta26350;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async26349.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_26351,meta26350__$1){
var self__ = this;
var _26351__$1 = this;
return (new cljs.core.async.t_cljs$core$async26349(self__.alt_flag,self__.flag,meta26350__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async26349.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_26351){
var self__ = this;
var _26351__$1 = this;
return self__.meta26350;
});})(flag))
;

cljs.core.async.t_cljs$core$async26349.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async26349.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async26349.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async26349.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta26350","meta26350",836095480,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async26349.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async26349.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26349";

cljs.core.async.t_cljs$core$async26349.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__17127__auto__,writer__17128__auto__,opt__17129__auto__){
return cljs.core._write.call(null,writer__17128__auto__,"cljs.core.async/t_cljs$core$async26349");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async26349 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async26349(alt_flag__$1,flag__$1,meta26350){
return (new cljs.core.async.t_cljs$core$async26349(alt_flag__$1,flag__$1,meta26350));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async26349(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async26355 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26355 = (function (alt_handler,flag,cb,meta26356){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta26356 = meta26356;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async26355.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26357,meta26356__$1){
var self__ = this;
var _26357__$1 = this;
return (new cljs.core.async.t_cljs$core$async26355(self__.alt_handler,self__.flag,self__.cb,meta26356__$1));
});

cljs.core.async.t_cljs$core$async26355.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26357){
var self__ = this;
var _26357__$1 = this;
return self__.meta26356;
});

cljs.core.async.t_cljs$core$async26355.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async26355.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async26355.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async26355.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta26356","meta26356",1418994528,null)], null);
});

cljs.core.async.t_cljs$core$async26355.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async26355.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26355";

cljs.core.async.t_cljs$core$async26355.cljs$lang$ctorPrWriter = (function (this__17127__auto__,writer__17128__auto__,opt__17129__auto__){
return cljs.core._write.call(null,writer__17128__auto__,"cljs.core.async/t_cljs$core$async26355");
});

cljs.core.async.__GT_t_cljs$core$async26355 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async26355(alt_handler__$1,flag__$1,cb__$1,meta26356){
return (new cljs.core.async.t_cljs$core$async26355(alt_handler__$1,flag__$1,cb__$1,meta26356));
});

}

return (new cljs.core.async.t_cljs$core$async26355(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__26358_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__26358_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__26359_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__26359_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__16529__auto__ = wport;
if(cljs.core.truth_(or__16529__auto__)){
return or__16529__auto__;
} else {
return port;
}
})()], null));
} else {
var G__26360 = (i + (1));
i = G__26360;
continue;
}
} else {
return null;
}
break;
}
})();
var or__16529__auto__ = ret;
if(cljs.core.truth_(or__16529__auto__)){
return or__16529__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4425__auto__ = (function (){var and__16517__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__16517__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__16517__auto__;
}
})();
if(cljs.core.truth_(temp__4425__auto__)){
var got = temp__4425__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__17594__auto__ = [];
var len__17587__auto___26366 = arguments.length;
var i__17588__auto___26367 = (0);
while(true){
if((i__17588__auto___26367 < len__17587__auto___26366)){
args__17594__auto__.push((arguments[i__17588__auto___26367]));

var G__26368 = (i__17588__auto___26367 + (1));
i__17588__auto___26367 = G__26368;
continue;
} else {
}
break;
}

var argseq__17595__auto__ = ((((1) < args__17594__auto__.length))?(new cljs.core.IndexedSeq(args__17594__auto__.slice((1)),(0))):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17595__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__26363){
var map__26364 = p__26363;
var map__26364__$1 = ((((!((map__26364 == null)))?((((map__26364.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26364.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26364):map__26364);
var opts = map__26364__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq26361){
var G__26362 = cljs.core.first.call(null,seq26361);
var seq26361__$1 = cljs.core.next.call(null,seq26361);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__26362,seq26361__$1);
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var args26369 = [];
var len__17587__auto___26419 = arguments.length;
var i__17588__auto___26420 = (0);
while(true){
if((i__17588__auto___26420 < len__17587__auto___26419)){
args26369.push((arguments[i__17588__auto___26420]));

var G__26421 = (i__17588__auto___26420 + (1));
i__17588__auto___26420 = G__26421;
continue;
} else {
}
break;
}

var G__26371 = args26369.length;
switch (G__26371) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26369.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__19830__auto___26423 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19830__auto___26423){
return (function (){
var f__19831__auto__ = (function (){var switch__19765__auto__ = ((function (c__19830__auto___26423){
return (function (state_26395){
var state_val_26396 = (state_26395[(1)]);
if((state_val_26396 === (7))){
var inst_26391 = (state_26395[(2)]);
var state_26395__$1 = state_26395;
var statearr_26397_26424 = state_26395__$1;
(statearr_26397_26424[(2)] = inst_26391);

(statearr_26397_26424[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26396 === (1))){
var state_26395__$1 = state_26395;
var statearr_26398_26425 = state_26395__$1;
(statearr_26398_26425[(2)] = null);

(statearr_26398_26425[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26396 === (4))){
var inst_26374 = (state_26395[(7)]);
var inst_26374__$1 = (state_26395[(2)]);
var inst_26375 = (inst_26374__$1 == null);
var state_26395__$1 = (function (){var statearr_26399 = state_26395;
(statearr_26399[(7)] = inst_26374__$1);

return statearr_26399;
})();
if(cljs.core.truth_(inst_26375)){
var statearr_26400_26426 = state_26395__$1;
(statearr_26400_26426[(1)] = (5));

} else {
var statearr_26401_26427 = state_26395__$1;
(statearr_26401_26427[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26396 === (13))){
var state_26395__$1 = state_26395;
var statearr_26402_26428 = state_26395__$1;
(statearr_26402_26428[(2)] = null);

(statearr_26402_26428[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26396 === (6))){
var inst_26374 = (state_26395[(7)]);
var state_26395__$1 = state_26395;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26395__$1,(11),to,inst_26374);
} else {
if((state_val_26396 === (3))){
var inst_26393 = (state_26395[(2)]);
var state_26395__$1 = state_26395;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26395__$1,inst_26393);
} else {
if((state_val_26396 === (12))){
var state_26395__$1 = state_26395;
var statearr_26403_26429 = state_26395__$1;
(statearr_26403_26429[(2)] = null);

(statearr_26403_26429[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26396 === (2))){
var state_26395__$1 = state_26395;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26395__$1,(4),from);
} else {
if((state_val_26396 === (11))){
var inst_26384 = (state_26395[(2)]);
var state_26395__$1 = state_26395;
if(cljs.core.truth_(inst_26384)){
var statearr_26404_26430 = state_26395__$1;
(statearr_26404_26430[(1)] = (12));

} else {
var statearr_26405_26431 = state_26395__$1;
(statearr_26405_26431[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26396 === (9))){
var state_26395__$1 = state_26395;
var statearr_26406_26432 = state_26395__$1;
(statearr_26406_26432[(2)] = null);

(statearr_26406_26432[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26396 === (5))){
var state_26395__$1 = state_26395;
if(cljs.core.truth_(close_QMARK_)){
var statearr_26407_26433 = state_26395__$1;
(statearr_26407_26433[(1)] = (8));

} else {
var statearr_26408_26434 = state_26395__$1;
(statearr_26408_26434[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26396 === (14))){
var inst_26389 = (state_26395[(2)]);
var state_26395__$1 = state_26395;
var statearr_26409_26435 = state_26395__$1;
(statearr_26409_26435[(2)] = inst_26389);

(statearr_26409_26435[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26396 === (10))){
var inst_26381 = (state_26395[(2)]);
var state_26395__$1 = state_26395;
var statearr_26410_26436 = state_26395__$1;
(statearr_26410_26436[(2)] = inst_26381);

(statearr_26410_26436[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26396 === (8))){
var inst_26378 = cljs.core.async.close_BANG_.call(null,to);
var state_26395__$1 = state_26395;
var statearr_26411_26437 = state_26395__$1;
(statearr_26411_26437[(2)] = inst_26378);

(statearr_26411_26437[(1)] = (10));


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
});})(c__19830__auto___26423))
;
return ((function (switch__19765__auto__,c__19830__auto___26423){
return (function() {
var cljs$core$async$state_machine__19766__auto__ = null;
var cljs$core$async$state_machine__19766__auto____0 = (function (){
var statearr_26415 = [null,null,null,null,null,null,null,null];
(statearr_26415[(0)] = cljs$core$async$state_machine__19766__auto__);

(statearr_26415[(1)] = (1));

return statearr_26415;
});
var cljs$core$async$state_machine__19766__auto____1 = (function (state_26395){
while(true){
var ret_value__19767__auto__ = (function (){try{while(true){
var result__19768__auto__ = switch__19765__auto__.call(null,state_26395);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19768__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19768__auto__;
}
break;
}
}catch (e26416){if((e26416 instanceof Object)){
var ex__19769__auto__ = e26416;
var statearr_26417_26438 = state_26395;
(statearr_26417_26438[(5)] = ex__19769__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26395);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26416;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19767__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26439 = state_26395;
state_26395 = G__26439;
continue;
} else {
return ret_value__19767__auto__;
}
break;
}
});
cljs$core$async$state_machine__19766__auto__ = function(state_26395){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19766__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19766__auto____1.call(this,state_26395);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19766__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19766__auto____0;
cljs$core$async$state_machine__19766__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19766__auto____1;
return cljs$core$async$state_machine__19766__auto__;
})()
;})(switch__19765__auto__,c__19830__auto___26423))
})();
var state__19832__auto__ = (function (){var statearr_26418 = f__19831__auto__.call(null);
(statearr_26418[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19830__auto___26423);

return statearr_26418;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19832__auto__);
});})(c__19830__auto___26423))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;
cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"pos?","pos?",-244377722,null),new cljs.core.Symbol(null,"n","n",-2092305744,null))))].join('')));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__26623){
var vec__26624 = p__26623;
var v = cljs.core.nth.call(null,vec__26624,(0),null);
var p = cljs.core.nth.call(null,vec__26624,(1),null);
var job = vec__26624;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__19830__auto___26806 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19830__auto___26806,res,vec__26624,v,p,job,jobs,results){
return (function (){
var f__19831__auto__ = (function (){var switch__19765__auto__ = ((function (c__19830__auto___26806,res,vec__26624,v,p,job,jobs,results){
return (function (state_26629){
var state_val_26630 = (state_26629[(1)]);
if((state_val_26630 === (1))){
var state_26629__$1 = state_26629;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26629__$1,(2),res,v);
} else {
if((state_val_26630 === (2))){
var inst_26626 = (state_26629[(2)]);
var inst_26627 = cljs.core.async.close_BANG_.call(null,res);
var state_26629__$1 = (function (){var statearr_26631 = state_26629;
(statearr_26631[(7)] = inst_26626);

return statearr_26631;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26629__$1,inst_26627);
} else {
return null;
}
}
});})(c__19830__auto___26806,res,vec__26624,v,p,job,jobs,results))
;
return ((function (switch__19765__auto__,c__19830__auto___26806,res,vec__26624,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__19766__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__19766__auto____0 = (function (){
var statearr_26635 = [null,null,null,null,null,null,null,null];
(statearr_26635[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__19766__auto__);

(statearr_26635[(1)] = (1));

return statearr_26635;
});
var cljs$core$async$pipeline_STAR__$_state_machine__19766__auto____1 = (function (state_26629){
while(true){
var ret_value__19767__auto__ = (function (){try{while(true){
var result__19768__auto__ = switch__19765__auto__.call(null,state_26629);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19768__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19768__auto__;
}
break;
}
}catch (e26636){if((e26636 instanceof Object)){
var ex__19769__auto__ = e26636;
var statearr_26637_26807 = state_26629;
(statearr_26637_26807[(5)] = ex__19769__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26629);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26636;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19767__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26808 = state_26629;
state_26629 = G__26808;
continue;
} else {
return ret_value__19767__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__19766__auto__ = function(state_26629){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__19766__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__19766__auto____1.call(this,state_26629);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__19766__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__19766__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__19766__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__19766__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__19766__auto__;
})()
;})(switch__19765__auto__,c__19830__auto___26806,res,vec__26624,v,p,job,jobs,results))
})();
var state__19832__auto__ = (function (){var statearr_26638 = f__19831__auto__.call(null);
(statearr_26638[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19830__auto___26806);

return statearr_26638;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19832__auto__);
});})(c__19830__auto___26806,res,vec__26624,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__26639){
var vec__26640 = p__26639;
var v = cljs.core.nth.call(null,vec__26640,(0),null);
var p = cljs.core.nth.call(null,vec__26640,(1),null);
var job = vec__26640;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__17432__auto___26809 = n;
var __26810 = (0);
while(true){
if((__26810 < n__17432__auto___26809)){
var G__26641_26811 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__26641_26811) {
case "compute":
var c__19830__auto___26813 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__26810,c__19830__auto___26813,G__26641_26811,n__17432__auto___26809,jobs,results,process,async){
return (function (){
var f__19831__auto__ = (function (){var switch__19765__auto__ = ((function (__26810,c__19830__auto___26813,G__26641_26811,n__17432__auto___26809,jobs,results,process,async){
return (function (state_26654){
var state_val_26655 = (state_26654[(1)]);
if((state_val_26655 === (1))){
var state_26654__$1 = state_26654;
var statearr_26656_26814 = state_26654__$1;
(statearr_26656_26814[(2)] = null);

(statearr_26656_26814[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26655 === (2))){
var state_26654__$1 = state_26654;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26654__$1,(4),jobs);
} else {
if((state_val_26655 === (3))){
var inst_26652 = (state_26654[(2)]);
var state_26654__$1 = state_26654;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26654__$1,inst_26652);
} else {
if((state_val_26655 === (4))){
var inst_26644 = (state_26654[(2)]);
var inst_26645 = process.call(null,inst_26644);
var state_26654__$1 = state_26654;
if(cljs.core.truth_(inst_26645)){
var statearr_26657_26815 = state_26654__$1;
(statearr_26657_26815[(1)] = (5));

} else {
var statearr_26658_26816 = state_26654__$1;
(statearr_26658_26816[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26655 === (5))){
var state_26654__$1 = state_26654;
var statearr_26659_26817 = state_26654__$1;
(statearr_26659_26817[(2)] = null);

(statearr_26659_26817[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26655 === (6))){
var state_26654__$1 = state_26654;
var statearr_26660_26818 = state_26654__$1;
(statearr_26660_26818[(2)] = null);

(statearr_26660_26818[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26655 === (7))){
var inst_26650 = (state_26654[(2)]);
var state_26654__$1 = state_26654;
var statearr_26661_26819 = state_26654__$1;
(statearr_26661_26819[(2)] = inst_26650);

(statearr_26661_26819[(1)] = (3));


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
});})(__26810,c__19830__auto___26813,G__26641_26811,n__17432__auto___26809,jobs,results,process,async))
;
return ((function (__26810,switch__19765__auto__,c__19830__auto___26813,G__26641_26811,n__17432__auto___26809,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__19766__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__19766__auto____0 = (function (){
var statearr_26665 = [null,null,null,null,null,null,null];
(statearr_26665[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__19766__auto__);

(statearr_26665[(1)] = (1));

return statearr_26665;
});
var cljs$core$async$pipeline_STAR__$_state_machine__19766__auto____1 = (function (state_26654){
while(true){
var ret_value__19767__auto__ = (function (){try{while(true){
var result__19768__auto__ = switch__19765__auto__.call(null,state_26654);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19768__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19768__auto__;
}
break;
}
}catch (e26666){if((e26666 instanceof Object)){
var ex__19769__auto__ = e26666;
var statearr_26667_26820 = state_26654;
(statearr_26667_26820[(5)] = ex__19769__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26654);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26666;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19767__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26821 = state_26654;
state_26654 = G__26821;
continue;
} else {
return ret_value__19767__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__19766__auto__ = function(state_26654){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__19766__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__19766__auto____1.call(this,state_26654);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__19766__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__19766__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__19766__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__19766__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__19766__auto__;
})()
;})(__26810,switch__19765__auto__,c__19830__auto___26813,G__26641_26811,n__17432__auto___26809,jobs,results,process,async))
})();
var state__19832__auto__ = (function (){var statearr_26668 = f__19831__auto__.call(null);
(statearr_26668[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19830__auto___26813);

return statearr_26668;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19832__auto__);
});})(__26810,c__19830__auto___26813,G__26641_26811,n__17432__auto___26809,jobs,results,process,async))
);


break;
case "async":
var c__19830__auto___26822 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__26810,c__19830__auto___26822,G__26641_26811,n__17432__auto___26809,jobs,results,process,async){
return (function (){
var f__19831__auto__ = (function (){var switch__19765__auto__ = ((function (__26810,c__19830__auto___26822,G__26641_26811,n__17432__auto___26809,jobs,results,process,async){
return (function (state_26681){
var state_val_26682 = (state_26681[(1)]);
if((state_val_26682 === (1))){
var state_26681__$1 = state_26681;
var statearr_26683_26823 = state_26681__$1;
(statearr_26683_26823[(2)] = null);

(statearr_26683_26823[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26682 === (2))){
var state_26681__$1 = state_26681;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26681__$1,(4),jobs);
} else {
if((state_val_26682 === (3))){
var inst_26679 = (state_26681[(2)]);
var state_26681__$1 = state_26681;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26681__$1,inst_26679);
} else {
if((state_val_26682 === (4))){
var inst_26671 = (state_26681[(2)]);
var inst_26672 = async.call(null,inst_26671);
var state_26681__$1 = state_26681;
if(cljs.core.truth_(inst_26672)){
var statearr_26684_26824 = state_26681__$1;
(statearr_26684_26824[(1)] = (5));

} else {
var statearr_26685_26825 = state_26681__$1;
(statearr_26685_26825[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26682 === (5))){
var state_26681__$1 = state_26681;
var statearr_26686_26826 = state_26681__$1;
(statearr_26686_26826[(2)] = null);

(statearr_26686_26826[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26682 === (6))){
var state_26681__$1 = state_26681;
var statearr_26687_26827 = state_26681__$1;
(statearr_26687_26827[(2)] = null);

(statearr_26687_26827[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26682 === (7))){
var inst_26677 = (state_26681[(2)]);
var state_26681__$1 = state_26681;
var statearr_26688_26828 = state_26681__$1;
(statearr_26688_26828[(2)] = inst_26677);

(statearr_26688_26828[(1)] = (3));


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
});})(__26810,c__19830__auto___26822,G__26641_26811,n__17432__auto___26809,jobs,results,process,async))
;
return ((function (__26810,switch__19765__auto__,c__19830__auto___26822,G__26641_26811,n__17432__auto___26809,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__19766__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__19766__auto____0 = (function (){
var statearr_26692 = [null,null,null,null,null,null,null];
(statearr_26692[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__19766__auto__);

(statearr_26692[(1)] = (1));

return statearr_26692;
});
var cljs$core$async$pipeline_STAR__$_state_machine__19766__auto____1 = (function (state_26681){
while(true){
var ret_value__19767__auto__ = (function (){try{while(true){
var result__19768__auto__ = switch__19765__auto__.call(null,state_26681);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19768__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19768__auto__;
}
break;
}
}catch (e26693){if((e26693 instanceof Object)){
var ex__19769__auto__ = e26693;
var statearr_26694_26829 = state_26681;
(statearr_26694_26829[(5)] = ex__19769__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26681);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26693;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19767__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26830 = state_26681;
state_26681 = G__26830;
continue;
} else {
return ret_value__19767__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__19766__auto__ = function(state_26681){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__19766__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__19766__auto____1.call(this,state_26681);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__19766__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__19766__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__19766__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__19766__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__19766__auto__;
})()
;})(__26810,switch__19765__auto__,c__19830__auto___26822,G__26641_26811,n__17432__auto___26809,jobs,results,process,async))
})();
var state__19832__auto__ = (function (){var statearr_26695 = f__19831__auto__.call(null);
(statearr_26695[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19830__auto___26822);

return statearr_26695;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19832__auto__);
});})(__26810,c__19830__auto___26822,G__26641_26811,n__17432__auto___26809,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__26831 = (__26810 + (1));
__26810 = G__26831;
continue;
} else {
}
break;
}

var c__19830__auto___26832 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19830__auto___26832,jobs,results,process,async){
return (function (){
var f__19831__auto__ = (function (){var switch__19765__auto__ = ((function (c__19830__auto___26832,jobs,results,process,async){
return (function (state_26717){
var state_val_26718 = (state_26717[(1)]);
if((state_val_26718 === (1))){
var state_26717__$1 = state_26717;
var statearr_26719_26833 = state_26717__$1;
(statearr_26719_26833[(2)] = null);

(statearr_26719_26833[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26718 === (2))){
var state_26717__$1 = state_26717;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26717__$1,(4),from);
} else {
if((state_val_26718 === (3))){
var inst_26715 = (state_26717[(2)]);
var state_26717__$1 = state_26717;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26717__$1,inst_26715);
} else {
if((state_val_26718 === (4))){
var inst_26698 = (state_26717[(7)]);
var inst_26698__$1 = (state_26717[(2)]);
var inst_26699 = (inst_26698__$1 == null);
var state_26717__$1 = (function (){var statearr_26720 = state_26717;
(statearr_26720[(7)] = inst_26698__$1);

return statearr_26720;
})();
if(cljs.core.truth_(inst_26699)){
var statearr_26721_26834 = state_26717__$1;
(statearr_26721_26834[(1)] = (5));

} else {
var statearr_26722_26835 = state_26717__$1;
(statearr_26722_26835[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26718 === (5))){
var inst_26701 = cljs.core.async.close_BANG_.call(null,jobs);
var state_26717__$1 = state_26717;
var statearr_26723_26836 = state_26717__$1;
(statearr_26723_26836[(2)] = inst_26701);

(statearr_26723_26836[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26718 === (6))){
var inst_26698 = (state_26717[(7)]);
var inst_26703 = (state_26717[(8)]);
var inst_26703__$1 = cljs.core.async.chan.call(null,(1));
var inst_26704 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_26705 = [inst_26698,inst_26703__$1];
var inst_26706 = (new cljs.core.PersistentVector(null,2,(5),inst_26704,inst_26705,null));
var state_26717__$1 = (function (){var statearr_26724 = state_26717;
(statearr_26724[(8)] = inst_26703__$1);

return statearr_26724;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26717__$1,(8),jobs,inst_26706);
} else {
if((state_val_26718 === (7))){
var inst_26713 = (state_26717[(2)]);
var state_26717__$1 = state_26717;
var statearr_26725_26837 = state_26717__$1;
(statearr_26725_26837[(2)] = inst_26713);

(statearr_26725_26837[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26718 === (8))){
var inst_26703 = (state_26717[(8)]);
var inst_26708 = (state_26717[(2)]);
var state_26717__$1 = (function (){var statearr_26726 = state_26717;
(statearr_26726[(9)] = inst_26708);

return statearr_26726;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26717__$1,(9),results,inst_26703);
} else {
if((state_val_26718 === (9))){
var inst_26710 = (state_26717[(2)]);
var state_26717__$1 = (function (){var statearr_26727 = state_26717;
(statearr_26727[(10)] = inst_26710);

return statearr_26727;
})();
var statearr_26728_26838 = state_26717__$1;
(statearr_26728_26838[(2)] = null);

(statearr_26728_26838[(1)] = (2));


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
});})(c__19830__auto___26832,jobs,results,process,async))
;
return ((function (switch__19765__auto__,c__19830__auto___26832,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__19766__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__19766__auto____0 = (function (){
var statearr_26732 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_26732[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__19766__auto__);

(statearr_26732[(1)] = (1));

return statearr_26732;
});
var cljs$core$async$pipeline_STAR__$_state_machine__19766__auto____1 = (function (state_26717){
while(true){
var ret_value__19767__auto__ = (function (){try{while(true){
var result__19768__auto__ = switch__19765__auto__.call(null,state_26717);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19768__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19768__auto__;
}
break;
}
}catch (e26733){if((e26733 instanceof Object)){
var ex__19769__auto__ = e26733;
var statearr_26734_26839 = state_26717;
(statearr_26734_26839[(5)] = ex__19769__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26717);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26733;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19767__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26840 = state_26717;
state_26717 = G__26840;
continue;
} else {
return ret_value__19767__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__19766__auto__ = function(state_26717){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__19766__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__19766__auto____1.call(this,state_26717);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__19766__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__19766__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__19766__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__19766__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__19766__auto__;
})()
;})(switch__19765__auto__,c__19830__auto___26832,jobs,results,process,async))
})();
var state__19832__auto__ = (function (){var statearr_26735 = f__19831__auto__.call(null);
(statearr_26735[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19830__auto___26832);

return statearr_26735;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19832__auto__);
});})(c__19830__auto___26832,jobs,results,process,async))
);


var c__19830__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19830__auto__,jobs,results,process,async){
return (function (){
var f__19831__auto__ = (function (){var switch__19765__auto__ = ((function (c__19830__auto__,jobs,results,process,async){
return (function (state_26773){
var state_val_26774 = (state_26773[(1)]);
if((state_val_26774 === (7))){
var inst_26769 = (state_26773[(2)]);
var state_26773__$1 = state_26773;
var statearr_26775_26841 = state_26773__$1;
(statearr_26775_26841[(2)] = inst_26769);

(statearr_26775_26841[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26774 === (20))){
var state_26773__$1 = state_26773;
var statearr_26776_26842 = state_26773__$1;
(statearr_26776_26842[(2)] = null);

(statearr_26776_26842[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26774 === (1))){
var state_26773__$1 = state_26773;
var statearr_26777_26843 = state_26773__$1;
(statearr_26777_26843[(2)] = null);

(statearr_26777_26843[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26774 === (4))){
var inst_26738 = (state_26773[(7)]);
var inst_26738__$1 = (state_26773[(2)]);
var inst_26739 = (inst_26738__$1 == null);
var state_26773__$1 = (function (){var statearr_26778 = state_26773;
(statearr_26778[(7)] = inst_26738__$1);

return statearr_26778;
})();
if(cljs.core.truth_(inst_26739)){
var statearr_26779_26844 = state_26773__$1;
(statearr_26779_26844[(1)] = (5));

} else {
var statearr_26780_26845 = state_26773__$1;
(statearr_26780_26845[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26774 === (15))){
var inst_26751 = (state_26773[(8)]);
var state_26773__$1 = state_26773;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26773__$1,(18),to,inst_26751);
} else {
if((state_val_26774 === (21))){
var inst_26764 = (state_26773[(2)]);
var state_26773__$1 = state_26773;
var statearr_26781_26846 = state_26773__$1;
(statearr_26781_26846[(2)] = inst_26764);

(statearr_26781_26846[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26774 === (13))){
var inst_26766 = (state_26773[(2)]);
var state_26773__$1 = (function (){var statearr_26782 = state_26773;
(statearr_26782[(9)] = inst_26766);

return statearr_26782;
})();
var statearr_26783_26847 = state_26773__$1;
(statearr_26783_26847[(2)] = null);

(statearr_26783_26847[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26774 === (6))){
var inst_26738 = (state_26773[(7)]);
var state_26773__$1 = state_26773;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26773__$1,(11),inst_26738);
} else {
if((state_val_26774 === (17))){
var inst_26759 = (state_26773[(2)]);
var state_26773__$1 = state_26773;
if(cljs.core.truth_(inst_26759)){
var statearr_26784_26848 = state_26773__$1;
(statearr_26784_26848[(1)] = (19));

} else {
var statearr_26785_26849 = state_26773__$1;
(statearr_26785_26849[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26774 === (3))){
var inst_26771 = (state_26773[(2)]);
var state_26773__$1 = state_26773;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26773__$1,inst_26771);
} else {
if((state_val_26774 === (12))){
var inst_26748 = (state_26773[(10)]);
var state_26773__$1 = state_26773;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26773__$1,(14),inst_26748);
} else {
if((state_val_26774 === (2))){
var state_26773__$1 = state_26773;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26773__$1,(4),results);
} else {
if((state_val_26774 === (19))){
var state_26773__$1 = state_26773;
var statearr_26786_26850 = state_26773__$1;
(statearr_26786_26850[(2)] = null);

(statearr_26786_26850[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26774 === (11))){
var inst_26748 = (state_26773[(2)]);
var state_26773__$1 = (function (){var statearr_26787 = state_26773;
(statearr_26787[(10)] = inst_26748);

return statearr_26787;
})();
var statearr_26788_26851 = state_26773__$1;
(statearr_26788_26851[(2)] = null);

(statearr_26788_26851[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26774 === (9))){
var state_26773__$1 = state_26773;
var statearr_26789_26852 = state_26773__$1;
(statearr_26789_26852[(2)] = null);

(statearr_26789_26852[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26774 === (5))){
var state_26773__$1 = state_26773;
if(cljs.core.truth_(close_QMARK_)){
var statearr_26790_26853 = state_26773__$1;
(statearr_26790_26853[(1)] = (8));

} else {
var statearr_26791_26854 = state_26773__$1;
(statearr_26791_26854[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26774 === (14))){
var inst_26751 = (state_26773[(8)]);
var inst_26753 = (state_26773[(11)]);
var inst_26751__$1 = (state_26773[(2)]);
var inst_26752 = (inst_26751__$1 == null);
var inst_26753__$1 = cljs.core.not.call(null,inst_26752);
var state_26773__$1 = (function (){var statearr_26792 = state_26773;
(statearr_26792[(8)] = inst_26751__$1);

(statearr_26792[(11)] = inst_26753__$1);

return statearr_26792;
})();
if(inst_26753__$1){
var statearr_26793_26855 = state_26773__$1;
(statearr_26793_26855[(1)] = (15));

} else {
var statearr_26794_26856 = state_26773__$1;
(statearr_26794_26856[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26774 === (16))){
var inst_26753 = (state_26773[(11)]);
var state_26773__$1 = state_26773;
var statearr_26795_26857 = state_26773__$1;
(statearr_26795_26857[(2)] = inst_26753);

(statearr_26795_26857[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26774 === (10))){
var inst_26745 = (state_26773[(2)]);
var state_26773__$1 = state_26773;
var statearr_26796_26858 = state_26773__$1;
(statearr_26796_26858[(2)] = inst_26745);

(statearr_26796_26858[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26774 === (18))){
var inst_26756 = (state_26773[(2)]);
var state_26773__$1 = state_26773;
var statearr_26797_26859 = state_26773__$1;
(statearr_26797_26859[(2)] = inst_26756);

(statearr_26797_26859[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26774 === (8))){
var inst_26742 = cljs.core.async.close_BANG_.call(null,to);
var state_26773__$1 = state_26773;
var statearr_26798_26860 = state_26773__$1;
(statearr_26798_26860[(2)] = inst_26742);

(statearr_26798_26860[(1)] = (10));


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
});})(c__19830__auto__,jobs,results,process,async))
;
return ((function (switch__19765__auto__,c__19830__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__19766__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__19766__auto____0 = (function (){
var statearr_26802 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26802[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__19766__auto__);

(statearr_26802[(1)] = (1));

return statearr_26802;
});
var cljs$core$async$pipeline_STAR__$_state_machine__19766__auto____1 = (function (state_26773){
while(true){
var ret_value__19767__auto__ = (function (){try{while(true){
var result__19768__auto__ = switch__19765__auto__.call(null,state_26773);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19768__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19768__auto__;
}
break;
}
}catch (e26803){if((e26803 instanceof Object)){
var ex__19769__auto__ = e26803;
var statearr_26804_26861 = state_26773;
(statearr_26804_26861[(5)] = ex__19769__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26773);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26803;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19767__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26862 = state_26773;
state_26773 = G__26862;
continue;
} else {
return ret_value__19767__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__19766__auto__ = function(state_26773){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__19766__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__19766__auto____1.call(this,state_26773);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__19766__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__19766__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__19766__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__19766__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__19766__auto__;
})()
;})(switch__19765__auto__,c__19830__auto__,jobs,results,process,async))
})();
var state__19832__auto__ = (function (){var statearr_26805 = f__19831__auto__.call(null);
(statearr_26805[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19830__auto__);

return statearr_26805;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19832__auto__);
});})(c__19830__auto__,jobs,results,process,async))
);

return c__19830__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var args26863 = [];
var len__17587__auto___26866 = arguments.length;
var i__17588__auto___26867 = (0);
while(true){
if((i__17588__auto___26867 < len__17587__auto___26866)){
args26863.push((arguments[i__17588__auto___26867]));

var G__26868 = (i__17588__auto___26867 + (1));
i__17588__auto___26867 = G__26868;
continue;
} else {
}
break;
}

var G__26865 = args26863.length;
switch (G__26865) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26863.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var args26870 = [];
var len__17587__auto___26873 = arguments.length;
var i__17588__auto___26874 = (0);
while(true){
if((i__17588__auto___26874 < len__17587__auto___26873)){
args26870.push((arguments[i__17588__auto___26874]));

var G__26875 = (i__17588__auto___26874 + (1));
i__17588__auto___26874 = G__26875;
continue;
} else {
}
break;
}

var G__26872 = args26870.length;
switch (G__26872) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26870.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;
/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var args26877 = [];
var len__17587__auto___26930 = arguments.length;
var i__17588__auto___26931 = (0);
while(true){
if((i__17588__auto___26931 < len__17587__auto___26930)){
args26877.push((arguments[i__17588__auto___26931]));

var G__26932 = (i__17588__auto___26931 + (1));
i__17588__auto___26931 = G__26932;
continue;
} else {
}
break;
}

var G__26879 = args26877.length;
switch (G__26879) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26877.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__19830__auto___26934 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19830__auto___26934,tc,fc){
return (function (){
var f__19831__auto__ = (function (){var switch__19765__auto__ = ((function (c__19830__auto___26934,tc,fc){
return (function (state_26905){
var state_val_26906 = (state_26905[(1)]);
if((state_val_26906 === (7))){
var inst_26901 = (state_26905[(2)]);
var state_26905__$1 = state_26905;
var statearr_26907_26935 = state_26905__$1;
(statearr_26907_26935[(2)] = inst_26901);

(statearr_26907_26935[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26906 === (1))){
var state_26905__$1 = state_26905;
var statearr_26908_26936 = state_26905__$1;
(statearr_26908_26936[(2)] = null);

(statearr_26908_26936[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26906 === (4))){
var inst_26882 = (state_26905[(7)]);
var inst_26882__$1 = (state_26905[(2)]);
var inst_26883 = (inst_26882__$1 == null);
var state_26905__$1 = (function (){var statearr_26909 = state_26905;
(statearr_26909[(7)] = inst_26882__$1);

return statearr_26909;
})();
if(cljs.core.truth_(inst_26883)){
var statearr_26910_26937 = state_26905__$1;
(statearr_26910_26937[(1)] = (5));

} else {
var statearr_26911_26938 = state_26905__$1;
(statearr_26911_26938[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26906 === (13))){
var state_26905__$1 = state_26905;
var statearr_26912_26939 = state_26905__$1;
(statearr_26912_26939[(2)] = null);

(statearr_26912_26939[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26906 === (6))){
var inst_26882 = (state_26905[(7)]);
var inst_26888 = p.call(null,inst_26882);
var state_26905__$1 = state_26905;
if(cljs.core.truth_(inst_26888)){
var statearr_26913_26940 = state_26905__$1;
(statearr_26913_26940[(1)] = (9));

} else {
var statearr_26914_26941 = state_26905__$1;
(statearr_26914_26941[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26906 === (3))){
var inst_26903 = (state_26905[(2)]);
var state_26905__$1 = state_26905;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26905__$1,inst_26903);
} else {
if((state_val_26906 === (12))){
var state_26905__$1 = state_26905;
var statearr_26915_26942 = state_26905__$1;
(statearr_26915_26942[(2)] = null);

(statearr_26915_26942[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26906 === (2))){
var state_26905__$1 = state_26905;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26905__$1,(4),ch);
} else {
if((state_val_26906 === (11))){
var inst_26882 = (state_26905[(7)]);
var inst_26892 = (state_26905[(2)]);
var state_26905__$1 = state_26905;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26905__$1,(8),inst_26892,inst_26882);
} else {
if((state_val_26906 === (9))){
var state_26905__$1 = state_26905;
var statearr_26916_26943 = state_26905__$1;
(statearr_26916_26943[(2)] = tc);

(statearr_26916_26943[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26906 === (5))){
var inst_26885 = cljs.core.async.close_BANG_.call(null,tc);
var inst_26886 = cljs.core.async.close_BANG_.call(null,fc);
var state_26905__$1 = (function (){var statearr_26917 = state_26905;
(statearr_26917[(8)] = inst_26885);

return statearr_26917;
})();
var statearr_26918_26944 = state_26905__$1;
(statearr_26918_26944[(2)] = inst_26886);

(statearr_26918_26944[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26906 === (14))){
var inst_26899 = (state_26905[(2)]);
var state_26905__$1 = state_26905;
var statearr_26919_26945 = state_26905__$1;
(statearr_26919_26945[(2)] = inst_26899);

(statearr_26919_26945[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26906 === (10))){
var state_26905__$1 = state_26905;
var statearr_26920_26946 = state_26905__$1;
(statearr_26920_26946[(2)] = fc);

(statearr_26920_26946[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26906 === (8))){
var inst_26894 = (state_26905[(2)]);
var state_26905__$1 = state_26905;
if(cljs.core.truth_(inst_26894)){
var statearr_26921_26947 = state_26905__$1;
(statearr_26921_26947[(1)] = (12));

} else {
var statearr_26922_26948 = state_26905__$1;
(statearr_26922_26948[(1)] = (13));

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
});})(c__19830__auto___26934,tc,fc))
;
return ((function (switch__19765__auto__,c__19830__auto___26934,tc,fc){
return (function() {
var cljs$core$async$state_machine__19766__auto__ = null;
var cljs$core$async$state_machine__19766__auto____0 = (function (){
var statearr_26926 = [null,null,null,null,null,null,null,null,null];
(statearr_26926[(0)] = cljs$core$async$state_machine__19766__auto__);

(statearr_26926[(1)] = (1));

return statearr_26926;
});
var cljs$core$async$state_machine__19766__auto____1 = (function (state_26905){
while(true){
var ret_value__19767__auto__ = (function (){try{while(true){
var result__19768__auto__ = switch__19765__auto__.call(null,state_26905);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19768__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19768__auto__;
}
break;
}
}catch (e26927){if((e26927 instanceof Object)){
var ex__19769__auto__ = e26927;
var statearr_26928_26949 = state_26905;
(statearr_26928_26949[(5)] = ex__19769__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26905);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26927;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19767__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26950 = state_26905;
state_26905 = G__26950;
continue;
} else {
return ret_value__19767__auto__;
}
break;
}
});
cljs$core$async$state_machine__19766__auto__ = function(state_26905){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19766__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19766__auto____1.call(this,state_26905);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19766__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19766__auto____0;
cljs$core$async$state_machine__19766__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19766__auto____1;
return cljs$core$async$state_machine__19766__auto__;
})()
;})(switch__19765__auto__,c__19830__auto___26934,tc,fc))
})();
var state__19832__auto__ = (function (){var statearr_26929 = f__19831__auto__.call(null);
(statearr_26929[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19830__auto___26934);

return statearr_26929;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19832__auto__);
});})(c__19830__auto___26934,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;
/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__19830__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19830__auto__){
return (function (){
var f__19831__auto__ = (function (){var switch__19765__auto__ = ((function (c__19830__auto__){
return (function (state_26997){
var state_val_26998 = (state_26997[(1)]);
if((state_val_26998 === (1))){
var inst_26983 = init;
var state_26997__$1 = (function (){var statearr_26999 = state_26997;
(statearr_26999[(7)] = inst_26983);

return statearr_26999;
})();
var statearr_27000_27015 = state_26997__$1;
(statearr_27000_27015[(2)] = null);

(statearr_27000_27015[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26998 === (2))){
var state_26997__$1 = state_26997;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26997__$1,(4),ch);
} else {
if((state_val_26998 === (3))){
var inst_26995 = (state_26997[(2)]);
var state_26997__$1 = state_26997;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26997__$1,inst_26995);
} else {
if((state_val_26998 === (4))){
var inst_26986 = (state_26997[(8)]);
var inst_26986__$1 = (state_26997[(2)]);
var inst_26987 = (inst_26986__$1 == null);
var state_26997__$1 = (function (){var statearr_27001 = state_26997;
(statearr_27001[(8)] = inst_26986__$1);

return statearr_27001;
})();
if(cljs.core.truth_(inst_26987)){
var statearr_27002_27016 = state_26997__$1;
(statearr_27002_27016[(1)] = (5));

} else {
var statearr_27003_27017 = state_26997__$1;
(statearr_27003_27017[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26998 === (5))){
var inst_26983 = (state_26997[(7)]);
var state_26997__$1 = state_26997;
var statearr_27004_27018 = state_26997__$1;
(statearr_27004_27018[(2)] = inst_26983);

(statearr_27004_27018[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26998 === (6))){
var inst_26983 = (state_26997[(7)]);
var inst_26986 = (state_26997[(8)]);
var inst_26990 = f.call(null,inst_26983,inst_26986);
var inst_26983__$1 = inst_26990;
var state_26997__$1 = (function (){var statearr_27005 = state_26997;
(statearr_27005[(7)] = inst_26983__$1);

return statearr_27005;
})();
var statearr_27006_27019 = state_26997__$1;
(statearr_27006_27019[(2)] = null);

(statearr_27006_27019[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26998 === (7))){
var inst_26993 = (state_26997[(2)]);
var state_26997__$1 = state_26997;
var statearr_27007_27020 = state_26997__$1;
(statearr_27007_27020[(2)] = inst_26993);

(statearr_27007_27020[(1)] = (3));


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
});})(c__19830__auto__))
;
return ((function (switch__19765__auto__,c__19830__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__19766__auto__ = null;
var cljs$core$async$reduce_$_state_machine__19766__auto____0 = (function (){
var statearr_27011 = [null,null,null,null,null,null,null,null,null];
(statearr_27011[(0)] = cljs$core$async$reduce_$_state_machine__19766__auto__);

(statearr_27011[(1)] = (1));

return statearr_27011;
});
var cljs$core$async$reduce_$_state_machine__19766__auto____1 = (function (state_26997){
while(true){
var ret_value__19767__auto__ = (function (){try{while(true){
var result__19768__auto__ = switch__19765__auto__.call(null,state_26997);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19768__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19768__auto__;
}
break;
}
}catch (e27012){if((e27012 instanceof Object)){
var ex__19769__auto__ = e27012;
var statearr_27013_27021 = state_26997;
(statearr_27013_27021[(5)] = ex__19769__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26997);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27012;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19767__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27022 = state_26997;
state_26997 = G__27022;
continue;
} else {
return ret_value__19767__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__19766__auto__ = function(state_26997){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__19766__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__19766__auto____1.call(this,state_26997);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__19766__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__19766__auto____0;
cljs$core$async$reduce_$_state_machine__19766__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__19766__auto____1;
return cljs$core$async$reduce_$_state_machine__19766__auto__;
})()
;})(switch__19765__auto__,c__19830__auto__))
})();
var state__19832__auto__ = (function (){var statearr_27014 = f__19831__auto__.call(null);
(statearr_27014[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19830__auto__);

return statearr_27014;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19832__auto__);
});})(c__19830__auto__))
);

return c__19830__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var args27023 = [];
var len__17587__auto___27075 = arguments.length;
var i__17588__auto___27076 = (0);
while(true){
if((i__17588__auto___27076 < len__17587__auto___27075)){
args27023.push((arguments[i__17588__auto___27076]));

var G__27077 = (i__17588__auto___27076 + (1));
i__17588__auto___27076 = G__27077;
continue;
} else {
}
break;
}

var G__27025 = args27023.length;
switch (G__27025) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27023.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__19830__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19830__auto__){
return (function (){
var f__19831__auto__ = (function (){var switch__19765__auto__ = ((function (c__19830__auto__){
return (function (state_27050){
var state_val_27051 = (state_27050[(1)]);
if((state_val_27051 === (7))){
var inst_27032 = (state_27050[(2)]);
var state_27050__$1 = state_27050;
var statearr_27052_27079 = state_27050__$1;
(statearr_27052_27079[(2)] = inst_27032);

(statearr_27052_27079[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27051 === (1))){
var inst_27026 = cljs.core.seq.call(null,coll);
var inst_27027 = inst_27026;
var state_27050__$1 = (function (){var statearr_27053 = state_27050;
(statearr_27053[(7)] = inst_27027);

return statearr_27053;
})();
var statearr_27054_27080 = state_27050__$1;
(statearr_27054_27080[(2)] = null);

(statearr_27054_27080[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27051 === (4))){
var inst_27027 = (state_27050[(7)]);
var inst_27030 = cljs.core.first.call(null,inst_27027);
var state_27050__$1 = state_27050;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27050__$1,(7),ch,inst_27030);
} else {
if((state_val_27051 === (13))){
var inst_27044 = (state_27050[(2)]);
var state_27050__$1 = state_27050;
var statearr_27055_27081 = state_27050__$1;
(statearr_27055_27081[(2)] = inst_27044);

(statearr_27055_27081[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27051 === (6))){
var inst_27035 = (state_27050[(2)]);
var state_27050__$1 = state_27050;
if(cljs.core.truth_(inst_27035)){
var statearr_27056_27082 = state_27050__$1;
(statearr_27056_27082[(1)] = (8));

} else {
var statearr_27057_27083 = state_27050__$1;
(statearr_27057_27083[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27051 === (3))){
var inst_27048 = (state_27050[(2)]);
var state_27050__$1 = state_27050;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27050__$1,inst_27048);
} else {
if((state_val_27051 === (12))){
var state_27050__$1 = state_27050;
var statearr_27058_27084 = state_27050__$1;
(statearr_27058_27084[(2)] = null);

(statearr_27058_27084[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27051 === (2))){
var inst_27027 = (state_27050[(7)]);
var state_27050__$1 = state_27050;
if(cljs.core.truth_(inst_27027)){
var statearr_27059_27085 = state_27050__$1;
(statearr_27059_27085[(1)] = (4));

} else {
var statearr_27060_27086 = state_27050__$1;
(statearr_27060_27086[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27051 === (11))){
var inst_27041 = cljs.core.async.close_BANG_.call(null,ch);
var state_27050__$1 = state_27050;
var statearr_27061_27087 = state_27050__$1;
(statearr_27061_27087[(2)] = inst_27041);

(statearr_27061_27087[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27051 === (9))){
var state_27050__$1 = state_27050;
if(cljs.core.truth_(close_QMARK_)){
var statearr_27062_27088 = state_27050__$1;
(statearr_27062_27088[(1)] = (11));

} else {
var statearr_27063_27089 = state_27050__$1;
(statearr_27063_27089[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27051 === (5))){
var inst_27027 = (state_27050[(7)]);
var state_27050__$1 = state_27050;
var statearr_27064_27090 = state_27050__$1;
(statearr_27064_27090[(2)] = inst_27027);

(statearr_27064_27090[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27051 === (10))){
var inst_27046 = (state_27050[(2)]);
var state_27050__$1 = state_27050;
var statearr_27065_27091 = state_27050__$1;
(statearr_27065_27091[(2)] = inst_27046);

(statearr_27065_27091[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27051 === (8))){
var inst_27027 = (state_27050[(7)]);
var inst_27037 = cljs.core.next.call(null,inst_27027);
var inst_27027__$1 = inst_27037;
var state_27050__$1 = (function (){var statearr_27066 = state_27050;
(statearr_27066[(7)] = inst_27027__$1);

return statearr_27066;
})();
var statearr_27067_27092 = state_27050__$1;
(statearr_27067_27092[(2)] = null);

(statearr_27067_27092[(1)] = (2));


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
});})(c__19830__auto__))
;
return ((function (switch__19765__auto__,c__19830__auto__){
return (function() {
var cljs$core$async$state_machine__19766__auto__ = null;
var cljs$core$async$state_machine__19766__auto____0 = (function (){
var statearr_27071 = [null,null,null,null,null,null,null,null];
(statearr_27071[(0)] = cljs$core$async$state_machine__19766__auto__);

(statearr_27071[(1)] = (1));

return statearr_27071;
});
var cljs$core$async$state_machine__19766__auto____1 = (function (state_27050){
while(true){
var ret_value__19767__auto__ = (function (){try{while(true){
var result__19768__auto__ = switch__19765__auto__.call(null,state_27050);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19768__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19768__auto__;
}
break;
}
}catch (e27072){if((e27072 instanceof Object)){
var ex__19769__auto__ = e27072;
var statearr_27073_27093 = state_27050;
(statearr_27073_27093[(5)] = ex__19769__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27050);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27072;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19767__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27094 = state_27050;
state_27050 = G__27094;
continue;
} else {
return ret_value__19767__auto__;
}
break;
}
});
cljs$core$async$state_machine__19766__auto__ = function(state_27050){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19766__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19766__auto____1.call(this,state_27050);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19766__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19766__auto____0;
cljs$core$async$state_machine__19766__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19766__auto____1;
return cljs$core$async$state_machine__19766__auto__;
})()
;})(switch__19765__auto__,c__19830__auto__))
})();
var state__19832__auto__ = (function (){var statearr_27074 = f__19831__auto__.call(null);
(statearr_27074[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19830__auto__);

return statearr_27074;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19832__auto__);
});})(c__19830__auto__))
);

return c__19830__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;
/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__17184__auto__ = (((_ == null))?null:_);
var m__17185__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__17184__auto__)]);
if(!((m__17185__auto__ == null))){
return m__17185__auto__.call(null,_);
} else {
var m__17185__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__17185__auto____$1 == null))){
return m__17185__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__17184__auto__ = (((m == null))?null:m);
var m__17185__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__17184__auto__)]);
if(!((m__17185__auto__ == null))){
return m__17185__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__17185__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__17185__auto____$1 == null))){
return m__17185__auto____$1.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__17184__auto__ = (((m == null))?null:m);
var m__17185__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__17184__auto__)]);
if(!((m__17185__auto__ == null))){
return m__17185__auto__.call(null,m,ch);
} else {
var m__17185__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__17185__auto____$1 == null))){
return m__17185__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__17184__auto__ = (((m == null))?null:m);
var m__17185__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__17184__auto__)]);
if(!((m__17185__auto__ == null))){
return m__17185__auto__.call(null,m);
} else {
var m__17185__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__17185__auto____$1 == null))){
return m__17185__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async27316 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27316 = (function (mult,ch,cs,meta27317){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta27317 = meta27317;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async27316.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_27318,meta27317__$1){
var self__ = this;
var _27318__$1 = this;
return (new cljs.core.async.t_cljs$core$async27316(self__.mult,self__.ch,self__.cs,meta27317__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async27316.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_27318){
var self__ = this;
var _27318__$1 = this;
return self__.meta27317;
});})(cs))
;

cljs.core.async.t_cljs$core$async27316.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async27316.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async27316.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async27316.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async27316.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async27316.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async27316.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta27317","meta27317",608330503,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async27316.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async27316.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27316";

cljs.core.async.t_cljs$core$async27316.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__17127__auto__,writer__17128__auto__,opt__17129__auto__){
return cljs.core._write.call(null,writer__17128__auto__,"cljs.core.async/t_cljs$core$async27316");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async27316 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async27316(mult__$1,ch__$1,cs__$1,meta27317){
return (new cljs.core.async.t_cljs$core$async27316(mult__$1,ch__$1,cs__$1,meta27317));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async27316(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__19830__auto___27537 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19830__auto___27537,cs,m,dchan,dctr,done){
return (function (){
var f__19831__auto__ = (function (){var switch__19765__auto__ = ((function (c__19830__auto___27537,cs,m,dchan,dctr,done){
return (function (state_27449){
var state_val_27450 = (state_27449[(1)]);
if((state_val_27450 === (7))){
var inst_27445 = (state_27449[(2)]);
var state_27449__$1 = state_27449;
var statearr_27451_27538 = state_27449__$1;
(statearr_27451_27538[(2)] = inst_27445);

(statearr_27451_27538[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27450 === (20))){
var inst_27350 = (state_27449[(7)]);
var inst_27360 = cljs.core.first.call(null,inst_27350);
var inst_27361 = cljs.core.nth.call(null,inst_27360,(0),null);
var inst_27362 = cljs.core.nth.call(null,inst_27360,(1),null);
var state_27449__$1 = (function (){var statearr_27452 = state_27449;
(statearr_27452[(8)] = inst_27361);

return statearr_27452;
})();
if(cljs.core.truth_(inst_27362)){
var statearr_27453_27539 = state_27449__$1;
(statearr_27453_27539[(1)] = (22));

} else {
var statearr_27454_27540 = state_27449__$1;
(statearr_27454_27540[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27450 === (27))){
var inst_27397 = (state_27449[(9)]);
var inst_27392 = (state_27449[(10)]);
var inst_27390 = (state_27449[(11)]);
var inst_27321 = (state_27449[(12)]);
var inst_27397__$1 = cljs.core._nth.call(null,inst_27390,inst_27392);
var inst_27398 = cljs.core.async.put_BANG_.call(null,inst_27397__$1,inst_27321,done);
var state_27449__$1 = (function (){var statearr_27455 = state_27449;
(statearr_27455[(9)] = inst_27397__$1);

return statearr_27455;
})();
if(cljs.core.truth_(inst_27398)){
var statearr_27456_27541 = state_27449__$1;
(statearr_27456_27541[(1)] = (30));

} else {
var statearr_27457_27542 = state_27449__$1;
(statearr_27457_27542[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27450 === (1))){
var state_27449__$1 = state_27449;
var statearr_27458_27543 = state_27449__$1;
(statearr_27458_27543[(2)] = null);

(statearr_27458_27543[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27450 === (24))){
var inst_27350 = (state_27449[(7)]);
var inst_27367 = (state_27449[(2)]);
var inst_27368 = cljs.core.next.call(null,inst_27350);
var inst_27330 = inst_27368;
var inst_27331 = null;
var inst_27332 = (0);
var inst_27333 = (0);
var state_27449__$1 = (function (){var statearr_27459 = state_27449;
(statearr_27459[(13)] = inst_27330);

(statearr_27459[(14)] = inst_27331);

(statearr_27459[(15)] = inst_27367);

(statearr_27459[(16)] = inst_27332);

(statearr_27459[(17)] = inst_27333);

return statearr_27459;
})();
var statearr_27460_27544 = state_27449__$1;
(statearr_27460_27544[(2)] = null);

(statearr_27460_27544[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27450 === (39))){
var state_27449__$1 = state_27449;
var statearr_27464_27545 = state_27449__$1;
(statearr_27464_27545[(2)] = null);

(statearr_27464_27545[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27450 === (4))){
var inst_27321 = (state_27449[(12)]);
var inst_27321__$1 = (state_27449[(2)]);
var inst_27322 = (inst_27321__$1 == null);
var state_27449__$1 = (function (){var statearr_27465 = state_27449;
(statearr_27465[(12)] = inst_27321__$1);

return statearr_27465;
})();
if(cljs.core.truth_(inst_27322)){
var statearr_27466_27546 = state_27449__$1;
(statearr_27466_27546[(1)] = (5));

} else {
var statearr_27467_27547 = state_27449__$1;
(statearr_27467_27547[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27450 === (15))){
var inst_27330 = (state_27449[(13)]);
var inst_27331 = (state_27449[(14)]);
var inst_27332 = (state_27449[(16)]);
var inst_27333 = (state_27449[(17)]);
var inst_27346 = (state_27449[(2)]);
var inst_27347 = (inst_27333 + (1));
var tmp27461 = inst_27330;
var tmp27462 = inst_27331;
var tmp27463 = inst_27332;
var inst_27330__$1 = tmp27461;
var inst_27331__$1 = tmp27462;
var inst_27332__$1 = tmp27463;
var inst_27333__$1 = inst_27347;
var state_27449__$1 = (function (){var statearr_27468 = state_27449;
(statearr_27468[(13)] = inst_27330__$1);

(statearr_27468[(14)] = inst_27331__$1);

(statearr_27468[(18)] = inst_27346);

(statearr_27468[(16)] = inst_27332__$1);

(statearr_27468[(17)] = inst_27333__$1);

return statearr_27468;
})();
var statearr_27469_27548 = state_27449__$1;
(statearr_27469_27548[(2)] = null);

(statearr_27469_27548[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27450 === (21))){
var inst_27371 = (state_27449[(2)]);
var state_27449__$1 = state_27449;
var statearr_27473_27549 = state_27449__$1;
(statearr_27473_27549[(2)] = inst_27371);

(statearr_27473_27549[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27450 === (31))){
var inst_27397 = (state_27449[(9)]);
var inst_27401 = done.call(null,null);
var inst_27402 = cljs.core.async.untap_STAR_.call(null,m,inst_27397);
var state_27449__$1 = (function (){var statearr_27474 = state_27449;
(statearr_27474[(19)] = inst_27401);

return statearr_27474;
})();
var statearr_27475_27550 = state_27449__$1;
(statearr_27475_27550[(2)] = inst_27402);

(statearr_27475_27550[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27450 === (32))){
var inst_27391 = (state_27449[(20)]);
var inst_27392 = (state_27449[(10)]);
var inst_27390 = (state_27449[(11)]);
var inst_27389 = (state_27449[(21)]);
var inst_27404 = (state_27449[(2)]);
var inst_27405 = (inst_27392 + (1));
var tmp27470 = inst_27391;
var tmp27471 = inst_27390;
var tmp27472 = inst_27389;
var inst_27389__$1 = tmp27472;
var inst_27390__$1 = tmp27471;
var inst_27391__$1 = tmp27470;
var inst_27392__$1 = inst_27405;
var state_27449__$1 = (function (){var statearr_27476 = state_27449;
(statearr_27476[(20)] = inst_27391__$1);

(statearr_27476[(22)] = inst_27404);

(statearr_27476[(10)] = inst_27392__$1);

(statearr_27476[(11)] = inst_27390__$1);

(statearr_27476[(21)] = inst_27389__$1);

return statearr_27476;
})();
var statearr_27477_27551 = state_27449__$1;
(statearr_27477_27551[(2)] = null);

(statearr_27477_27551[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27450 === (40))){
var inst_27417 = (state_27449[(23)]);
var inst_27421 = done.call(null,null);
var inst_27422 = cljs.core.async.untap_STAR_.call(null,m,inst_27417);
var state_27449__$1 = (function (){var statearr_27478 = state_27449;
(statearr_27478[(24)] = inst_27421);

return statearr_27478;
})();
var statearr_27479_27552 = state_27449__$1;
(statearr_27479_27552[(2)] = inst_27422);

(statearr_27479_27552[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27450 === (33))){
var inst_27408 = (state_27449[(25)]);
var inst_27410 = cljs.core.chunked_seq_QMARK_.call(null,inst_27408);
var state_27449__$1 = state_27449;
if(inst_27410){
var statearr_27480_27553 = state_27449__$1;
(statearr_27480_27553[(1)] = (36));

} else {
var statearr_27481_27554 = state_27449__$1;
(statearr_27481_27554[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27450 === (13))){
var inst_27340 = (state_27449[(26)]);
var inst_27343 = cljs.core.async.close_BANG_.call(null,inst_27340);
var state_27449__$1 = state_27449;
var statearr_27482_27555 = state_27449__$1;
(statearr_27482_27555[(2)] = inst_27343);

(statearr_27482_27555[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27450 === (22))){
var inst_27361 = (state_27449[(8)]);
var inst_27364 = cljs.core.async.close_BANG_.call(null,inst_27361);
var state_27449__$1 = state_27449;
var statearr_27483_27556 = state_27449__$1;
(statearr_27483_27556[(2)] = inst_27364);

(statearr_27483_27556[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27450 === (36))){
var inst_27408 = (state_27449[(25)]);
var inst_27412 = cljs.core.chunk_first.call(null,inst_27408);
var inst_27413 = cljs.core.chunk_rest.call(null,inst_27408);
var inst_27414 = cljs.core.count.call(null,inst_27412);
var inst_27389 = inst_27413;
var inst_27390 = inst_27412;
var inst_27391 = inst_27414;
var inst_27392 = (0);
var state_27449__$1 = (function (){var statearr_27484 = state_27449;
(statearr_27484[(20)] = inst_27391);

(statearr_27484[(10)] = inst_27392);

(statearr_27484[(11)] = inst_27390);

(statearr_27484[(21)] = inst_27389);

return statearr_27484;
})();
var statearr_27485_27557 = state_27449__$1;
(statearr_27485_27557[(2)] = null);

(statearr_27485_27557[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27450 === (41))){
var inst_27408 = (state_27449[(25)]);
var inst_27424 = (state_27449[(2)]);
var inst_27425 = cljs.core.next.call(null,inst_27408);
var inst_27389 = inst_27425;
var inst_27390 = null;
var inst_27391 = (0);
var inst_27392 = (0);
var state_27449__$1 = (function (){var statearr_27486 = state_27449;
(statearr_27486[(20)] = inst_27391);

(statearr_27486[(10)] = inst_27392);

(statearr_27486[(11)] = inst_27390);

(statearr_27486[(21)] = inst_27389);

(statearr_27486[(27)] = inst_27424);

return statearr_27486;
})();
var statearr_27487_27558 = state_27449__$1;
(statearr_27487_27558[(2)] = null);

(statearr_27487_27558[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27450 === (43))){
var state_27449__$1 = state_27449;
var statearr_27488_27559 = state_27449__$1;
(statearr_27488_27559[(2)] = null);

(statearr_27488_27559[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27450 === (29))){
var inst_27433 = (state_27449[(2)]);
var state_27449__$1 = state_27449;
var statearr_27489_27560 = state_27449__$1;
(statearr_27489_27560[(2)] = inst_27433);

(statearr_27489_27560[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27450 === (44))){
var inst_27442 = (state_27449[(2)]);
var state_27449__$1 = (function (){var statearr_27490 = state_27449;
(statearr_27490[(28)] = inst_27442);

return statearr_27490;
})();
var statearr_27491_27561 = state_27449__$1;
(statearr_27491_27561[(2)] = null);

(statearr_27491_27561[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27450 === (6))){
var inst_27381 = (state_27449[(29)]);
var inst_27380 = cljs.core.deref.call(null,cs);
var inst_27381__$1 = cljs.core.keys.call(null,inst_27380);
var inst_27382 = cljs.core.count.call(null,inst_27381__$1);
var inst_27383 = cljs.core.reset_BANG_.call(null,dctr,inst_27382);
var inst_27388 = cljs.core.seq.call(null,inst_27381__$1);
var inst_27389 = inst_27388;
var inst_27390 = null;
var inst_27391 = (0);
var inst_27392 = (0);
var state_27449__$1 = (function (){var statearr_27492 = state_27449;
(statearr_27492[(30)] = inst_27383);

(statearr_27492[(29)] = inst_27381__$1);

(statearr_27492[(20)] = inst_27391);

(statearr_27492[(10)] = inst_27392);

(statearr_27492[(11)] = inst_27390);

(statearr_27492[(21)] = inst_27389);

return statearr_27492;
})();
var statearr_27493_27562 = state_27449__$1;
(statearr_27493_27562[(2)] = null);

(statearr_27493_27562[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27450 === (28))){
var inst_27408 = (state_27449[(25)]);
var inst_27389 = (state_27449[(21)]);
var inst_27408__$1 = cljs.core.seq.call(null,inst_27389);
var state_27449__$1 = (function (){var statearr_27494 = state_27449;
(statearr_27494[(25)] = inst_27408__$1);

return statearr_27494;
})();
if(inst_27408__$1){
var statearr_27495_27563 = state_27449__$1;
(statearr_27495_27563[(1)] = (33));

} else {
var statearr_27496_27564 = state_27449__$1;
(statearr_27496_27564[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27450 === (25))){
var inst_27391 = (state_27449[(20)]);
var inst_27392 = (state_27449[(10)]);
var inst_27394 = (inst_27392 < inst_27391);
var inst_27395 = inst_27394;
var state_27449__$1 = state_27449;
if(cljs.core.truth_(inst_27395)){
var statearr_27497_27565 = state_27449__$1;
(statearr_27497_27565[(1)] = (27));

} else {
var statearr_27498_27566 = state_27449__$1;
(statearr_27498_27566[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27450 === (34))){
var state_27449__$1 = state_27449;
var statearr_27499_27567 = state_27449__$1;
(statearr_27499_27567[(2)] = null);

(statearr_27499_27567[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27450 === (17))){
var state_27449__$1 = state_27449;
var statearr_27500_27568 = state_27449__$1;
(statearr_27500_27568[(2)] = null);

(statearr_27500_27568[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27450 === (3))){
var inst_27447 = (state_27449[(2)]);
var state_27449__$1 = state_27449;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27449__$1,inst_27447);
} else {
if((state_val_27450 === (12))){
var inst_27376 = (state_27449[(2)]);
var state_27449__$1 = state_27449;
var statearr_27501_27569 = state_27449__$1;
(statearr_27501_27569[(2)] = inst_27376);

(statearr_27501_27569[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27450 === (2))){
var state_27449__$1 = state_27449;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27449__$1,(4),ch);
} else {
if((state_val_27450 === (23))){
var state_27449__$1 = state_27449;
var statearr_27502_27570 = state_27449__$1;
(statearr_27502_27570[(2)] = null);

(statearr_27502_27570[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27450 === (35))){
var inst_27431 = (state_27449[(2)]);
var state_27449__$1 = state_27449;
var statearr_27503_27571 = state_27449__$1;
(statearr_27503_27571[(2)] = inst_27431);

(statearr_27503_27571[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27450 === (19))){
var inst_27350 = (state_27449[(7)]);
var inst_27354 = cljs.core.chunk_first.call(null,inst_27350);
var inst_27355 = cljs.core.chunk_rest.call(null,inst_27350);
var inst_27356 = cljs.core.count.call(null,inst_27354);
var inst_27330 = inst_27355;
var inst_27331 = inst_27354;
var inst_27332 = inst_27356;
var inst_27333 = (0);
var state_27449__$1 = (function (){var statearr_27504 = state_27449;
(statearr_27504[(13)] = inst_27330);

(statearr_27504[(14)] = inst_27331);

(statearr_27504[(16)] = inst_27332);

(statearr_27504[(17)] = inst_27333);

return statearr_27504;
})();
var statearr_27505_27572 = state_27449__$1;
(statearr_27505_27572[(2)] = null);

(statearr_27505_27572[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27450 === (11))){
var inst_27330 = (state_27449[(13)]);
var inst_27350 = (state_27449[(7)]);
var inst_27350__$1 = cljs.core.seq.call(null,inst_27330);
var state_27449__$1 = (function (){var statearr_27506 = state_27449;
(statearr_27506[(7)] = inst_27350__$1);

return statearr_27506;
})();
if(inst_27350__$1){
var statearr_27507_27573 = state_27449__$1;
(statearr_27507_27573[(1)] = (16));

} else {
var statearr_27508_27574 = state_27449__$1;
(statearr_27508_27574[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27450 === (9))){
var inst_27378 = (state_27449[(2)]);
var state_27449__$1 = state_27449;
var statearr_27509_27575 = state_27449__$1;
(statearr_27509_27575[(2)] = inst_27378);

(statearr_27509_27575[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27450 === (5))){
var inst_27328 = cljs.core.deref.call(null,cs);
var inst_27329 = cljs.core.seq.call(null,inst_27328);
var inst_27330 = inst_27329;
var inst_27331 = null;
var inst_27332 = (0);
var inst_27333 = (0);
var state_27449__$1 = (function (){var statearr_27510 = state_27449;
(statearr_27510[(13)] = inst_27330);

(statearr_27510[(14)] = inst_27331);

(statearr_27510[(16)] = inst_27332);

(statearr_27510[(17)] = inst_27333);

return statearr_27510;
})();
var statearr_27511_27576 = state_27449__$1;
(statearr_27511_27576[(2)] = null);

(statearr_27511_27576[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27450 === (14))){
var state_27449__$1 = state_27449;
var statearr_27512_27577 = state_27449__$1;
(statearr_27512_27577[(2)] = null);

(statearr_27512_27577[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27450 === (45))){
var inst_27439 = (state_27449[(2)]);
var state_27449__$1 = state_27449;
var statearr_27513_27578 = state_27449__$1;
(statearr_27513_27578[(2)] = inst_27439);

(statearr_27513_27578[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27450 === (26))){
var inst_27381 = (state_27449[(29)]);
var inst_27435 = (state_27449[(2)]);
var inst_27436 = cljs.core.seq.call(null,inst_27381);
var state_27449__$1 = (function (){var statearr_27514 = state_27449;
(statearr_27514[(31)] = inst_27435);

return statearr_27514;
})();
if(inst_27436){
var statearr_27515_27579 = state_27449__$1;
(statearr_27515_27579[(1)] = (42));

} else {
var statearr_27516_27580 = state_27449__$1;
(statearr_27516_27580[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27450 === (16))){
var inst_27350 = (state_27449[(7)]);
var inst_27352 = cljs.core.chunked_seq_QMARK_.call(null,inst_27350);
var state_27449__$1 = state_27449;
if(inst_27352){
var statearr_27517_27581 = state_27449__$1;
(statearr_27517_27581[(1)] = (19));

} else {
var statearr_27518_27582 = state_27449__$1;
(statearr_27518_27582[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27450 === (38))){
var inst_27428 = (state_27449[(2)]);
var state_27449__$1 = state_27449;
var statearr_27519_27583 = state_27449__$1;
(statearr_27519_27583[(2)] = inst_27428);

(statearr_27519_27583[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27450 === (30))){
var state_27449__$1 = state_27449;
var statearr_27520_27584 = state_27449__$1;
(statearr_27520_27584[(2)] = null);

(statearr_27520_27584[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27450 === (10))){
var inst_27331 = (state_27449[(14)]);
var inst_27333 = (state_27449[(17)]);
var inst_27339 = cljs.core._nth.call(null,inst_27331,inst_27333);
var inst_27340 = cljs.core.nth.call(null,inst_27339,(0),null);
var inst_27341 = cljs.core.nth.call(null,inst_27339,(1),null);
var state_27449__$1 = (function (){var statearr_27521 = state_27449;
(statearr_27521[(26)] = inst_27340);

return statearr_27521;
})();
if(cljs.core.truth_(inst_27341)){
var statearr_27522_27585 = state_27449__$1;
(statearr_27522_27585[(1)] = (13));

} else {
var statearr_27523_27586 = state_27449__$1;
(statearr_27523_27586[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27450 === (18))){
var inst_27374 = (state_27449[(2)]);
var state_27449__$1 = state_27449;
var statearr_27524_27587 = state_27449__$1;
(statearr_27524_27587[(2)] = inst_27374);

(statearr_27524_27587[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27450 === (42))){
var state_27449__$1 = state_27449;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27449__$1,(45),dchan);
} else {
if((state_val_27450 === (37))){
var inst_27408 = (state_27449[(25)]);
var inst_27321 = (state_27449[(12)]);
var inst_27417 = (state_27449[(23)]);
var inst_27417__$1 = cljs.core.first.call(null,inst_27408);
var inst_27418 = cljs.core.async.put_BANG_.call(null,inst_27417__$1,inst_27321,done);
var state_27449__$1 = (function (){var statearr_27525 = state_27449;
(statearr_27525[(23)] = inst_27417__$1);

return statearr_27525;
})();
if(cljs.core.truth_(inst_27418)){
var statearr_27526_27588 = state_27449__$1;
(statearr_27526_27588[(1)] = (39));

} else {
var statearr_27527_27589 = state_27449__$1;
(statearr_27527_27589[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27450 === (8))){
var inst_27332 = (state_27449[(16)]);
var inst_27333 = (state_27449[(17)]);
var inst_27335 = (inst_27333 < inst_27332);
var inst_27336 = inst_27335;
var state_27449__$1 = state_27449;
if(cljs.core.truth_(inst_27336)){
var statearr_27528_27590 = state_27449__$1;
(statearr_27528_27590[(1)] = (10));

} else {
var statearr_27529_27591 = state_27449__$1;
(statearr_27529_27591[(1)] = (11));

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
});})(c__19830__auto___27537,cs,m,dchan,dctr,done))
;
return ((function (switch__19765__auto__,c__19830__auto___27537,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__19766__auto__ = null;
var cljs$core$async$mult_$_state_machine__19766__auto____0 = (function (){
var statearr_27533 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27533[(0)] = cljs$core$async$mult_$_state_machine__19766__auto__);

(statearr_27533[(1)] = (1));

return statearr_27533;
});
var cljs$core$async$mult_$_state_machine__19766__auto____1 = (function (state_27449){
while(true){
var ret_value__19767__auto__ = (function (){try{while(true){
var result__19768__auto__ = switch__19765__auto__.call(null,state_27449);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19768__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19768__auto__;
}
break;
}
}catch (e27534){if((e27534 instanceof Object)){
var ex__19769__auto__ = e27534;
var statearr_27535_27592 = state_27449;
(statearr_27535_27592[(5)] = ex__19769__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27449);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27534;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19767__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27593 = state_27449;
state_27449 = G__27593;
continue;
} else {
return ret_value__19767__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__19766__auto__ = function(state_27449){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__19766__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__19766__auto____1.call(this,state_27449);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__19766__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__19766__auto____0;
cljs$core$async$mult_$_state_machine__19766__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__19766__auto____1;
return cljs$core$async$mult_$_state_machine__19766__auto__;
})()
;})(switch__19765__auto__,c__19830__auto___27537,cs,m,dchan,dctr,done))
})();
var state__19832__auto__ = (function (){var statearr_27536 = f__19831__auto__.call(null);
(statearr_27536[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19830__auto___27537);

return statearr_27536;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19832__auto__);
});})(c__19830__auto___27537,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var args27594 = [];
var len__17587__auto___27597 = arguments.length;
var i__17588__auto___27598 = (0);
while(true){
if((i__17588__auto___27598 < len__17587__auto___27597)){
args27594.push((arguments[i__17588__auto___27598]));

var G__27599 = (i__17588__auto___27598 + (1));
i__17588__auto___27598 = G__27599;
continue;
} else {
}
break;
}

var G__27596 = args27594.length;
switch (G__27596) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27594.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;
/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__17184__auto__ = (((m == null))?null:m);
var m__17185__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__17184__auto__)]);
if(!((m__17185__auto__ == null))){
return m__17185__auto__.call(null,m,ch);
} else {
var m__17185__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__17185__auto____$1 == null))){
return m__17185__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__17184__auto__ = (((m == null))?null:m);
var m__17185__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__17184__auto__)]);
if(!((m__17185__auto__ == null))){
return m__17185__auto__.call(null,m,ch);
} else {
var m__17185__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__17185__auto____$1 == null))){
return m__17185__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__17184__auto__ = (((m == null))?null:m);
var m__17185__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__17184__auto__)]);
if(!((m__17185__auto__ == null))){
return m__17185__auto__.call(null,m);
} else {
var m__17185__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__17185__auto____$1 == null))){
return m__17185__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__17184__auto__ = (((m == null))?null:m);
var m__17185__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__17184__auto__)]);
if(!((m__17185__auto__ == null))){
return m__17185__auto__.call(null,m,state_map);
} else {
var m__17185__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__17185__auto____$1 == null))){
return m__17185__auto____$1.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__17184__auto__ = (((m == null))?null:m);
var m__17185__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__17184__auto__)]);
if(!((m__17185__auto__ == null))){
return m__17185__auto__.call(null,m,mode);
} else {
var m__17185__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__17185__auto____$1 == null))){
return m__17185__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__17594__auto__ = [];
var len__17587__auto___27611 = arguments.length;
var i__17588__auto___27612 = (0);
while(true){
if((i__17588__auto___27612 < len__17587__auto___27611)){
args__17594__auto__.push((arguments[i__17588__auto___27612]));

var G__27613 = (i__17588__auto___27612 + (1));
i__17588__auto___27612 = G__27613;
continue;
} else {
}
break;
}

var argseq__17595__auto__ = ((((3) < args__17594__auto__.length))?(new cljs.core.IndexedSeq(args__17594__auto__.slice((3)),(0))):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__17595__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__27605){
var map__27606 = p__27605;
var map__27606__$1 = ((((!((map__27606 == null)))?((((map__27606.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27606.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27606):map__27606);
var opts = map__27606__$1;
var statearr_27608_27614 = state;
(statearr_27608_27614[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4425__auto__ = cljs.core.async.do_alts.call(null,((function (map__27606,map__27606__$1,opts){
return (function (val){
var statearr_27609_27615 = state;
(statearr_27609_27615[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__27606,map__27606__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4425__auto__)){
var cb = temp__4425__auto__;
var statearr_27610_27616 = state;
(statearr_27610_27616[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq27601){
var G__27602 = cljs.core.first.call(null,seq27601);
var seq27601__$1 = cljs.core.next.call(null,seq27601);
var G__27603 = cljs.core.first.call(null,seq27601__$1);
var seq27601__$2 = cljs.core.next.call(null,seq27601__$1);
var G__27604 = cljs.core.first.call(null,seq27601__$2);
var seq27601__$3 = cljs.core.next.call(null,seq27601__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__27602,G__27603,G__27604,seq27601__$3);
});
/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async27780 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27780 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta27781){
this.change = change;
this.mix = mix;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta27781 = meta27781;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async27780.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_27782,meta27781__$1){
var self__ = this;
var _27782__$1 = this;
return (new cljs.core.async.t_cljs$core$async27780(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta27781__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async27780.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_27782){
var self__ = this;
var _27782__$1 = this;
return self__.meta27781;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async27780.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async27780.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async27780.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async27780.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async27780.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async27780.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async27780.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async27780.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null))))].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async27780.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta27781","meta27781",1530986478,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async27780.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async27780.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27780";

cljs.core.async.t_cljs$core$async27780.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__17127__auto__,writer__17128__auto__,opt__17129__auto__){
return cljs.core._write.call(null,writer__17128__auto__,"cljs.core.async/t_cljs$core$async27780");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async27780 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async27780(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta27781){
return (new cljs.core.async.t_cljs$core$async27780(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta27781));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async27780(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__19830__auto___27943 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19830__auto___27943,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__19831__auto__ = (function (){var switch__19765__auto__ = ((function (c__19830__auto___27943,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_27880){
var state_val_27881 = (state_27880[(1)]);
if((state_val_27881 === (7))){
var inst_27798 = (state_27880[(2)]);
var state_27880__$1 = state_27880;
var statearr_27882_27944 = state_27880__$1;
(statearr_27882_27944[(2)] = inst_27798);

(statearr_27882_27944[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27881 === (20))){
var inst_27810 = (state_27880[(7)]);
var state_27880__$1 = state_27880;
var statearr_27883_27945 = state_27880__$1;
(statearr_27883_27945[(2)] = inst_27810);

(statearr_27883_27945[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27881 === (27))){
var state_27880__$1 = state_27880;
var statearr_27884_27946 = state_27880__$1;
(statearr_27884_27946[(2)] = null);

(statearr_27884_27946[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27881 === (1))){
var inst_27786 = (state_27880[(8)]);
var inst_27786__$1 = calc_state.call(null);
var inst_27788 = (inst_27786__$1 == null);
var inst_27789 = cljs.core.not.call(null,inst_27788);
var state_27880__$1 = (function (){var statearr_27885 = state_27880;
(statearr_27885[(8)] = inst_27786__$1);

return statearr_27885;
})();
if(inst_27789){
var statearr_27886_27947 = state_27880__$1;
(statearr_27886_27947[(1)] = (2));

} else {
var statearr_27887_27948 = state_27880__$1;
(statearr_27887_27948[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27881 === (24))){
var inst_27833 = (state_27880[(9)]);
var inst_27854 = (state_27880[(10)]);
var inst_27840 = (state_27880[(11)]);
var inst_27854__$1 = inst_27833.call(null,inst_27840);
var state_27880__$1 = (function (){var statearr_27888 = state_27880;
(statearr_27888[(10)] = inst_27854__$1);

return statearr_27888;
})();
if(cljs.core.truth_(inst_27854__$1)){
var statearr_27889_27949 = state_27880__$1;
(statearr_27889_27949[(1)] = (29));

} else {
var statearr_27890_27950 = state_27880__$1;
(statearr_27890_27950[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27881 === (4))){
var inst_27801 = (state_27880[(2)]);
var state_27880__$1 = state_27880;
if(cljs.core.truth_(inst_27801)){
var statearr_27891_27951 = state_27880__$1;
(statearr_27891_27951[(1)] = (8));

} else {
var statearr_27892_27952 = state_27880__$1;
(statearr_27892_27952[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27881 === (15))){
var inst_27827 = (state_27880[(2)]);
var state_27880__$1 = state_27880;
if(cljs.core.truth_(inst_27827)){
var statearr_27893_27953 = state_27880__$1;
(statearr_27893_27953[(1)] = (19));

} else {
var statearr_27894_27954 = state_27880__$1;
(statearr_27894_27954[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27881 === (21))){
var inst_27832 = (state_27880[(12)]);
var inst_27832__$1 = (state_27880[(2)]);
var inst_27833 = cljs.core.get.call(null,inst_27832__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_27834 = cljs.core.get.call(null,inst_27832__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_27835 = cljs.core.get.call(null,inst_27832__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_27880__$1 = (function (){var statearr_27895 = state_27880;
(statearr_27895[(13)] = inst_27834);

(statearr_27895[(12)] = inst_27832__$1);

(statearr_27895[(9)] = inst_27833);

return statearr_27895;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_27880__$1,(22),inst_27835);
} else {
if((state_val_27881 === (31))){
var inst_27862 = (state_27880[(2)]);
var state_27880__$1 = state_27880;
if(cljs.core.truth_(inst_27862)){
var statearr_27896_27955 = state_27880__$1;
(statearr_27896_27955[(1)] = (32));

} else {
var statearr_27897_27956 = state_27880__$1;
(statearr_27897_27956[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27881 === (32))){
var inst_27839 = (state_27880[(14)]);
var state_27880__$1 = state_27880;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27880__$1,(35),out,inst_27839);
} else {
if((state_val_27881 === (33))){
var inst_27832 = (state_27880[(12)]);
var inst_27810 = inst_27832;
var state_27880__$1 = (function (){var statearr_27898 = state_27880;
(statearr_27898[(7)] = inst_27810);

return statearr_27898;
})();
var statearr_27899_27957 = state_27880__$1;
(statearr_27899_27957[(2)] = null);

(statearr_27899_27957[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27881 === (13))){
var inst_27810 = (state_27880[(7)]);
var inst_27817 = inst_27810.cljs$lang$protocol_mask$partition0$;
var inst_27818 = (inst_27817 & (64));
var inst_27819 = inst_27810.cljs$core$ISeq$;
var inst_27820 = (inst_27818) || (inst_27819);
var state_27880__$1 = state_27880;
if(cljs.core.truth_(inst_27820)){
var statearr_27900_27958 = state_27880__$1;
(statearr_27900_27958[(1)] = (16));

} else {
var statearr_27901_27959 = state_27880__$1;
(statearr_27901_27959[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27881 === (22))){
var inst_27839 = (state_27880[(14)]);
var inst_27840 = (state_27880[(11)]);
var inst_27838 = (state_27880[(2)]);
var inst_27839__$1 = cljs.core.nth.call(null,inst_27838,(0),null);
var inst_27840__$1 = cljs.core.nth.call(null,inst_27838,(1),null);
var inst_27841 = (inst_27839__$1 == null);
var inst_27842 = cljs.core._EQ_.call(null,inst_27840__$1,change);
var inst_27843 = (inst_27841) || (inst_27842);
var state_27880__$1 = (function (){var statearr_27902 = state_27880;
(statearr_27902[(14)] = inst_27839__$1);

(statearr_27902[(11)] = inst_27840__$1);

return statearr_27902;
})();
if(cljs.core.truth_(inst_27843)){
var statearr_27903_27960 = state_27880__$1;
(statearr_27903_27960[(1)] = (23));

} else {
var statearr_27904_27961 = state_27880__$1;
(statearr_27904_27961[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27881 === (36))){
var inst_27832 = (state_27880[(12)]);
var inst_27810 = inst_27832;
var state_27880__$1 = (function (){var statearr_27905 = state_27880;
(statearr_27905[(7)] = inst_27810);

return statearr_27905;
})();
var statearr_27906_27962 = state_27880__$1;
(statearr_27906_27962[(2)] = null);

(statearr_27906_27962[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27881 === (29))){
var inst_27854 = (state_27880[(10)]);
var state_27880__$1 = state_27880;
var statearr_27907_27963 = state_27880__$1;
(statearr_27907_27963[(2)] = inst_27854);

(statearr_27907_27963[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27881 === (6))){
var state_27880__$1 = state_27880;
var statearr_27908_27964 = state_27880__$1;
(statearr_27908_27964[(2)] = false);

(statearr_27908_27964[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27881 === (28))){
var inst_27850 = (state_27880[(2)]);
var inst_27851 = calc_state.call(null);
var inst_27810 = inst_27851;
var state_27880__$1 = (function (){var statearr_27909 = state_27880;
(statearr_27909[(7)] = inst_27810);

(statearr_27909[(15)] = inst_27850);

return statearr_27909;
})();
var statearr_27910_27965 = state_27880__$1;
(statearr_27910_27965[(2)] = null);

(statearr_27910_27965[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27881 === (25))){
var inst_27876 = (state_27880[(2)]);
var state_27880__$1 = state_27880;
var statearr_27911_27966 = state_27880__$1;
(statearr_27911_27966[(2)] = inst_27876);

(statearr_27911_27966[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27881 === (34))){
var inst_27874 = (state_27880[(2)]);
var state_27880__$1 = state_27880;
var statearr_27912_27967 = state_27880__$1;
(statearr_27912_27967[(2)] = inst_27874);

(statearr_27912_27967[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27881 === (17))){
var state_27880__$1 = state_27880;
var statearr_27913_27968 = state_27880__$1;
(statearr_27913_27968[(2)] = false);

(statearr_27913_27968[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27881 === (3))){
var state_27880__$1 = state_27880;
var statearr_27914_27969 = state_27880__$1;
(statearr_27914_27969[(2)] = false);

(statearr_27914_27969[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27881 === (12))){
var inst_27878 = (state_27880[(2)]);
var state_27880__$1 = state_27880;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27880__$1,inst_27878);
} else {
if((state_val_27881 === (2))){
var inst_27786 = (state_27880[(8)]);
var inst_27791 = inst_27786.cljs$lang$protocol_mask$partition0$;
var inst_27792 = (inst_27791 & (64));
var inst_27793 = inst_27786.cljs$core$ISeq$;
var inst_27794 = (inst_27792) || (inst_27793);
var state_27880__$1 = state_27880;
if(cljs.core.truth_(inst_27794)){
var statearr_27915_27970 = state_27880__$1;
(statearr_27915_27970[(1)] = (5));

} else {
var statearr_27916_27971 = state_27880__$1;
(statearr_27916_27971[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27881 === (23))){
var inst_27839 = (state_27880[(14)]);
var inst_27845 = (inst_27839 == null);
var state_27880__$1 = state_27880;
if(cljs.core.truth_(inst_27845)){
var statearr_27917_27972 = state_27880__$1;
(statearr_27917_27972[(1)] = (26));

} else {
var statearr_27918_27973 = state_27880__$1;
(statearr_27918_27973[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27881 === (35))){
var inst_27865 = (state_27880[(2)]);
var state_27880__$1 = state_27880;
if(cljs.core.truth_(inst_27865)){
var statearr_27919_27974 = state_27880__$1;
(statearr_27919_27974[(1)] = (36));

} else {
var statearr_27920_27975 = state_27880__$1;
(statearr_27920_27975[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27881 === (19))){
var inst_27810 = (state_27880[(7)]);
var inst_27829 = cljs.core.apply.call(null,cljs.core.hash_map,inst_27810);
var state_27880__$1 = state_27880;
var statearr_27921_27976 = state_27880__$1;
(statearr_27921_27976[(2)] = inst_27829);

(statearr_27921_27976[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27881 === (11))){
var inst_27810 = (state_27880[(7)]);
var inst_27814 = (inst_27810 == null);
var inst_27815 = cljs.core.not.call(null,inst_27814);
var state_27880__$1 = state_27880;
if(inst_27815){
var statearr_27922_27977 = state_27880__$1;
(statearr_27922_27977[(1)] = (13));

} else {
var statearr_27923_27978 = state_27880__$1;
(statearr_27923_27978[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27881 === (9))){
var inst_27786 = (state_27880[(8)]);
var state_27880__$1 = state_27880;
var statearr_27924_27979 = state_27880__$1;
(statearr_27924_27979[(2)] = inst_27786);

(statearr_27924_27979[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27881 === (5))){
var state_27880__$1 = state_27880;
var statearr_27925_27980 = state_27880__$1;
(statearr_27925_27980[(2)] = true);

(statearr_27925_27980[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27881 === (14))){
var state_27880__$1 = state_27880;
var statearr_27926_27981 = state_27880__$1;
(statearr_27926_27981[(2)] = false);

(statearr_27926_27981[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27881 === (26))){
var inst_27840 = (state_27880[(11)]);
var inst_27847 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_27840);
var state_27880__$1 = state_27880;
var statearr_27927_27982 = state_27880__$1;
(statearr_27927_27982[(2)] = inst_27847);

(statearr_27927_27982[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27881 === (16))){
var state_27880__$1 = state_27880;
var statearr_27928_27983 = state_27880__$1;
(statearr_27928_27983[(2)] = true);

(statearr_27928_27983[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27881 === (38))){
var inst_27870 = (state_27880[(2)]);
var state_27880__$1 = state_27880;
var statearr_27929_27984 = state_27880__$1;
(statearr_27929_27984[(2)] = inst_27870);

(statearr_27929_27984[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27881 === (30))){
var inst_27834 = (state_27880[(13)]);
var inst_27833 = (state_27880[(9)]);
var inst_27840 = (state_27880[(11)]);
var inst_27857 = cljs.core.empty_QMARK_.call(null,inst_27833);
var inst_27858 = inst_27834.call(null,inst_27840);
var inst_27859 = cljs.core.not.call(null,inst_27858);
var inst_27860 = (inst_27857) && (inst_27859);
var state_27880__$1 = state_27880;
var statearr_27930_27985 = state_27880__$1;
(statearr_27930_27985[(2)] = inst_27860);

(statearr_27930_27985[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27881 === (10))){
var inst_27786 = (state_27880[(8)]);
var inst_27806 = (state_27880[(2)]);
var inst_27807 = cljs.core.get.call(null,inst_27806,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_27808 = cljs.core.get.call(null,inst_27806,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_27809 = cljs.core.get.call(null,inst_27806,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_27810 = inst_27786;
var state_27880__$1 = (function (){var statearr_27931 = state_27880;
(statearr_27931[(7)] = inst_27810);

(statearr_27931[(16)] = inst_27807);

(statearr_27931[(17)] = inst_27809);

(statearr_27931[(18)] = inst_27808);

return statearr_27931;
})();
var statearr_27932_27986 = state_27880__$1;
(statearr_27932_27986[(2)] = null);

(statearr_27932_27986[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27881 === (18))){
var inst_27824 = (state_27880[(2)]);
var state_27880__$1 = state_27880;
var statearr_27933_27987 = state_27880__$1;
(statearr_27933_27987[(2)] = inst_27824);

(statearr_27933_27987[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27881 === (37))){
var state_27880__$1 = state_27880;
var statearr_27934_27988 = state_27880__$1;
(statearr_27934_27988[(2)] = null);

(statearr_27934_27988[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27881 === (8))){
var inst_27786 = (state_27880[(8)]);
var inst_27803 = cljs.core.apply.call(null,cljs.core.hash_map,inst_27786);
var state_27880__$1 = state_27880;
var statearr_27935_27989 = state_27880__$1;
(statearr_27935_27989[(2)] = inst_27803);

(statearr_27935_27989[(1)] = (10));


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
});})(c__19830__auto___27943,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__19765__auto__,c__19830__auto___27943,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__19766__auto__ = null;
var cljs$core$async$mix_$_state_machine__19766__auto____0 = (function (){
var statearr_27939 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27939[(0)] = cljs$core$async$mix_$_state_machine__19766__auto__);

(statearr_27939[(1)] = (1));

return statearr_27939;
});
var cljs$core$async$mix_$_state_machine__19766__auto____1 = (function (state_27880){
while(true){
var ret_value__19767__auto__ = (function (){try{while(true){
var result__19768__auto__ = switch__19765__auto__.call(null,state_27880);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19768__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19768__auto__;
}
break;
}
}catch (e27940){if((e27940 instanceof Object)){
var ex__19769__auto__ = e27940;
var statearr_27941_27990 = state_27880;
(statearr_27941_27990[(5)] = ex__19769__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27880);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27940;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19767__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27991 = state_27880;
state_27880 = G__27991;
continue;
} else {
return ret_value__19767__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__19766__auto__ = function(state_27880){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__19766__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__19766__auto____1.call(this,state_27880);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__19766__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__19766__auto____0;
cljs$core$async$mix_$_state_machine__19766__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__19766__auto____1;
return cljs$core$async$mix_$_state_machine__19766__auto__;
})()
;})(switch__19765__auto__,c__19830__auto___27943,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__19832__auto__ = (function (){var statearr_27942 = f__19831__auto__.call(null);
(statearr_27942[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19830__auto___27943);

return statearr_27942;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19832__auto__);
});})(c__19830__auto___27943,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__17184__auto__ = (((p == null))?null:p);
var m__17185__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__17184__auto__)]);
if(!((m__17185__auto__ == null))){
return m__17185__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__17185__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__17185__auto____$1 == null))){
return m__17185__auto____$1.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__17184__auto__ = (((p == null))?null:p);
var m__17185__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__17184__auto__)]);
if(!((m__17185__auto__ == null))){
return m__17185__auto__.call(null,p,v,ch);
} else {
var m__17185__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__17185__auto____$1 == null))){
return m__17185__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var args27992 = [];
var len__17587__auto___27995 = arguments.length;
var i__17588__auto___27996 = (0);
while(true){
if((i__17588__auto___27996 < len__17587__auto___27995)){
args27992.push((arguments[i__17588__auto___27996]));

var G__27997 = (i__17588__auto___27996 + (1));
i__17588__auto___27996 = G__27997;
continue;
} else {
}
break;
}

var G__27994 = args27992.length;
switch (G__27994) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27992.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__17184__auto__ = (((p == null))?null:p);
var m__17185__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__17184__auto__)]);
if(!((m__17185__auto__ == null))){
return m__17185__auto__.call(null,p);
} else {
var m__17185__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__17185__auto____$1 == null))){
return m__17185__auto____$1.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__17184__auto__ = (((p == null))?null:p);
var m__17185__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__17184__auto__)]);
if(!((m__17185__auto__ == null))){
return m__17185__auto__.call(null,p,v);
} else {
var m__17185__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__17185__auto____$1 == null))){
return m__17185__auto____$1.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;

/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var args28000 = [];
var len__17587__auto___28125 = arguments.length;
var i__17588__auto___28126 = (0);
while(true){
if((i__17588__auto___28126 < len__17587__auto___28125)){
args28000.push((arguments[i__17588__auto___28126]));

var G__28127 = (i__17588__auto___28126 + (1));
i__17588__auto___28126 = G__28127;
continue;
} else {
}
break;
}

var G__28002 = args28000.length;
switch (G__28002) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28000.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__16529__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__16529__auto__)){
return or__16529__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__16529__auto__,mults){
return (function (p1__27999_SHARP_){
if(cljs.core.truth_(p1__27999_SHARP_.call(null,topic))){
return p1__27999_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__27999_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__16529__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async28003 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28003 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta28004){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta28004 = meta28004;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async28003.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_28005,meta28004__$1){
var self__ = this;
var _28005__$1 = this;
return (new cljs.core.async.t_cljs$core$async28003(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta28004__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async28003.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_28005){
var self__ = this;
var _28005__$1 = this;
return self__.meta28004;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async28003.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async28003.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async28003.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async28003.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async28003.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4425__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__4425__auto__)){
var m = temp__4425__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async28003.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async28003.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async28003.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta28004","meta28004",-818816852,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async28003.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async28003.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28003";

cljs.core.async.t_cljs$core$async28003.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__17127__auto__,writer__17128__auto__,opt__17129__auto__){
return cljs.core._write.call(null,writer__17128__auto__,"cljs.core.async/t_cljs$core$async28003");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async28003 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async28003(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta28004){
return (new cljs.core.async.t_cljs$core$async28003(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta28004));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async28003(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__19830__auto___28129 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19830__auto___28129,mults,ensure_mult,p){
return (function (){
var f__19831__auto__ = (function (){var switch__19765__auto__ = ((function (c__19830__auto___28129,mults,ensure_mult,p){
return (function (state_28077){
var state_val_28078 = (state_28077[(1)]);
if((state_val_28078 === (7))){
var inst_28073 = (state_28077[(2)]);
var state_28077__$1 = state_28077;
var statearr_28079_28130 = state_28077__$1;
(statearr_28079_28130[(2)] = inst_28073);

(statearr_28079_28130[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28078 === (20))){
var state_28077__$1 = state_28077;
var statearr_28080_28131 = state_28077__$1;
(statearr_28080_28131[(2)] = null);

(statearr_28080_28131[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28078 === (1))){
var state_28077__$1 = state_28077;
var statearr_28081_28132 = state_28077__$1;
(statearr_28081_28132[(2)] = null);

(statearr_28081_28132[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28078 === (24))){
var inst_28056 = (state_28077[(7)]);
var inst_28065 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_28056);
var state_28077__$1 = state_28077;
var statearr_28082_28133 = state_28077__$1;
(statearr_28082_28133[(2)] = inst_28065);

(statearr_28082_28133[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28078 === (4))){
var inst_28008 = (state_28077[(8)]);
var inst_28008__$1 = (state_28077[(2)]);
var inst_28009 = (inst_28008__$1 == null);
var state_28077__$1 = (function (){var statearr_28083 = state_28077;
(statearr_28083[(8)] = inst_28008__$1);

return statearr_28083;
})();
if(cljs.core.truth_(inst_28009)){
var statearr_28084_28134 = state_28077__$1;
(statearr_28084_28134[(1)] = (5));

} else {
var statearr_28085_28135 = state_28077__$1;
(statearr_28085_28135[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28078 === (15))){
var inst_28050 = (state_28077[(2)]);
var state_28077__$1 = state_28077;
var statearr_28086_28136 = state_28077__$1;
(statearr_28086_28136[(2)] = inst_28050);

(statearr_28086_28136[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28078 === (21))){
var inst_28070 = (state_28077[(2)]);
var state_28077__$1 = (function (){var statearr_28087 = state_28077;
(statearr_28087[(9)] = inst_28070);

return statearr_28087;
})();
var statearr_28088_28137 = state_28077__$1;
(statearr_28088_28137[(2)] = null);

(statearr_28088_28137[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28078 === (13))){
var inst_28032 = (state_28077[(10)]);
var inst_28034 = cljs.core.chunked_seq_QMARK_.call(null,inst_28032);
var state_28077__$1 = state_28077;
if(inst_28034){
var statearr_28089_28138 = state_28077__$1;
(statearr_28089_28138[(1)] = (16));

} else {
var statearr_28090_28139 = state_28077__$1;
(statearr_28090_28139[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28078 === (22))){
var inst_28062 = (state_28077[(2)]);
var state_28077__$1 = state_28077;
if(cljs.core.truth_(inst_28062)){
var statearr_28091_28140 = state_28077__$1;
(statearr_28091_28140[(1)] = (23));

} else {
var statearr_28092_28141 = state_28077__$1;
(statearr_28092_28141[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28078 === (6))){
var inst_28056 = (state_28077[(7)]);
var inst_28008 = (state_28077[(8)]);
var inst_28058 = (state_28077[(11)]);
var inst_28056__$1 = topic_fn.call(null,inst_28008);
var inst_28057 = cljs.core.deref.call(null,mults);
var inst_28058__$1 = cljs.core.get.call(null,inst_28057,inst_28056__$1);
var state_28077__$1 = (function (){var statearr_28093 = state_28077;
(statearr_28093[(7)] = inst_28056__$1);

(statearr_28093[(11)] = inst_28058__$1);

return statearr_28093;
})();
if(cljs.core.truth_(inst_28058__$1)){
var statearr_28094_28142 = state_28077__$1;
(statearr_28094_28142[(1)] = (19));

} else {
var statearr_28095_28143 = state_28077__$1;
(statearr_28095_28143[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28078 === (25))){
var inst_28067 = (state_28077[(2)]);
var state_28077__$1 = state_28077;
var statearr_28096_28144 = state_28077__$1;
(statearr_28096_28144[(2)] = inst_28067);

(statearr_28096_28144[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28078 === (17))){
var inst_28032 = (state_28077[(10)]);
var inst_28041 = cljs.core.first.call(null,inst_28032);
var inst_28042 = cljs.core.async.muxch_STAR_.call(null,inst_28041);
var inst_28043 = cljs.core.async.close_BANG_.call(null,inst_28042);
var inst_28044 = cljs.core.next.call(null,inst_28032);
var inst_28018 = inst_28044;
var inst_28019 = null;
var inst_28020 = (0);
var inst_28021 = (0);
var state_28077__$1 = (function (){var statearr_28097 = state_28077;
(statearr_28097[(12)] = inst_28018);

(statearr_28097[(13)] = inst_28019);

(statearr_28097[(14)] = inst_28043);

(statearr_28097[(15)] = inst_28021);

(statearr_28097[(16)] = inst_28020);

return statearr_28097;
})();
var statearr_28098_28145 = state_28077__$1;
(statearr_28098_28145[(2)] = null);

(statearr_28098_28145[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28078 === (3))){
var inst_28075 = (state_28077[(2)]);
var state_28077__$1 = state_28077;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28077__$1,inst_28075);
} else {
if((state_val_28078 === (12))){
var inst_28052 = (state_28077[(2)]);
var state_28077__$1 = state_28077;
var statearr_28099_28146 = state_28077__$1;
(statearr_28099_28146[(2)] = inst_28052);

(statearr_28099_28146[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28078 === (2))){
var state_28077__$1 = state_28077;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28077__$1,(4),ch);
} else {
if((state_val_28078 === (23))){
var state_28077__$1 = state_28077;
var statearr_28100_28147 = state_28077__$1;
(statearr_28100_28147[(2)] = null);

(statearr_28100_28147[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28078 === (19))){
var inst_28008 = (state_28077[(8)]);
var inst_28058 = (state_28077[(11)]);
var inst_28060 = cljs.core.async.muxch_STAR_.call(null,inst_28058);
var state_28077__$1 = state_28077;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28077__$1,(22),inst_28060,inst_28008);
} else {
if((state_val_28078 === (11))){
var inst_28018 = (state_28077[(12)]);
var inst_28032 = (state_28077[(10)]);
var inst_28032__$1 = cljs.core.seq.call(null,inst_28018);
var state_28077__$1 = (function (){var statearr_28101 = state_28077;
(statearr_28101[(10)] = inst_28032__$1);

return statearr_28101;
})();
if(inst_28032__$1){
var statearr_28102_28148 = state_28077__$1;
(statearr_28102_28148[(1)] = (13));

} else {
var statearr_28103_28149 = state_28077__$1;
(statearr_28103_28149[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28078 === (9))){
var inst_28054 = (state_28077[(2)]);
var state_28077__$1 = state_28077;
var statearr_28104_28150 = state_28077__$1;
(statearr_28104_28150[(2)] = inst_28054);

(statearr_28104_28150[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28078 === (5))){
var inst_28015 = cljs.core.deref.call(null,mults);
var inst_28016 = cljs.core.vals.call(null,inst_28015);
var inst_28017 = cljs.core.seq.call(null,inst_28016);
var inst_28018 = inst_28017;
var inst_28019 = null;
var inst_28020 = (0);
var inst_28021 = (0);
var state_28077__$1 = (function (){var statearr_28105 = state_28077;
(statearr_28105[(12)] = inst_28018);

(statearr_28105[(13)] = inst_28019);

(statearr_28105[(15)] = inst_28021);

(statearr_28105[(16)] = inst_28020);

return statearr_28105;
})();
var statearr_28106_28151 = state_28077__$1;
(statearr_28106_28151[(2)] = null);

(statearr_28106_28151[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28078 === (14))){
var state_28077__$1 = state_28077;
var statearr_28110_28152 = state_28077__$1;
(statearr_28110_28152[(2)] = null);

(statearr_28110_28152[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28078 === (16))){
var inst_28032 = (state_28077[(10)]);
var inst_28036 = cljs.core.chunk_first.call(null,inst_28032);
var inst_28037 = cljs.core.chunk_rest.call(null,inst_28032);
var inst_28038 = cljs.core.count.call(null,inst_28036);
var inst_28018 = inst_28037;
var inst_28019 = inst_28036;
var inst_28020 = inst_28038;
var inst_28021 = (0);
var state_28077__$1 = (function (){var statearr_28111 = state_28077;
(statearr_28111[(12)] = inst_28018);

(statearr_28111[(13)] = inst_28019);

(statearr_28111[(15)] = inst_28021);

(statearr_28111[(16)] = inst_28020);

return statearr_28111;
})();
var statearr_28112_28153 = state_28077__$1;
(statearr_28112_28153[(2)] = null);

(statearr_28112_28153[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28078 === (10))){
var inst_28018 = (state_28077[(12)]);
var inst_28019 = (state_28077[(13)]);
var inst_28021 = (state_28077[(15)]);
var inst_28020 = (state_28077[(16)]);
var inst_28026 = cljs.core._nth.call(null,inst_28019,inst_28021);
var inst_28027 = cljs.core.async.muxch_STAR_.call(null,inst_28026);
var inst_28028 = cljs.core.async.close_BANG_.call(null,inst_28027);
var inst_28029 = (inst_28021 + (1));
var tmp28107 = inst_28018;
var tmp28108 = inst_28019;
var tmp28109 = inst_28020;
var inst_28018__$1 = tmp28107;
var inst_28019__$1 = tmp28108;
var inst_28020__$1 = tmp28109;
var inst_28021__$1 = inst_28029;
var state_28077__$1 = (function (){var statearr_28113 = state_28077;
(statearr_28113[(12)] = inst_28018__$1);

(statearr_28113[(13)] = inst_28019__$1);

(statearr_28113[(17)] = inst_28028);

(statearr_28113[(15)] = inst_28021__$1);

(statearr_28113[(16)] = inst_28020__$1);

return statearr_28113;
})();
var statearr_28114_28154 = state_28077__$1;
(statearr_28114_28154[(2)] = null);

(statearr_28114_28154[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28078 === (18))){
var inst_28047 = (state_28077[(2)]);
var state_28077__$1 = state_28077;
var statearr_28115_28155 = state_28077__$1;
(statearr_28115_28155[(2)] = inst_28047);

(statearr_28115_28155[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28078 === (8))){
var inst_28021 = (state_28077[(15)]);
var inst_28020 = (state_28077[(16)]);
var inst_28023 = (inst_28021 < inst_28020);
var inst_28024 = inst_28023;
var state_28077__$1 = state_28077;
if(cljs.core.truth_(inst_28024)){
var statearr_28116_28156 = state_28077__$1;
(statearr_28116_28156[(1)] = (10));

} else {
var statearr_28117_28157 = state_28077__$1;
(statearr_28117_28157[(1)] = (11));

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
});})(c__19830__auto___28129,mults,ensure_mult,p))
;
return ((function (switch__19765__auto__,c__19830__auto___28129,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__19766__auto__ = null;
var cljs$core$async$state_machine__19766__auto____0 = (function (){
var statearr_28121 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28121[(0)] = cljs$core$async$state_machine__19766__auto__);

(statearr_28121[(1)] = (1));

return statearr_28121;
});
var cljs$core$async$state_machine__19766__auto____1 = (function (state_28077){
while(true){
var ret_value__19767__auto__ = (function (){try{while(true){
var result__19768__auto__ = switch__19765__auto__.call(null,state_28077);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19768__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19768__auto__;
}
break;
}
}catch (e28122){if((e28122 instanceof Object)){
var ex__19769__auto__ = e28122;
var statearr_28123_28158 = state_28077;
(statearr_28123_28158[(5)] = ex__19769__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28077);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28122;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19767__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28159 = state_28077;
state_28077 = G__28159;
continue;
} else {
return ret_value__19767__auto__;
}
break;
}
});
cljs$core$async$state_machine__19766__auto__ = function(state_28077){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19766__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19766__auto____1.call(this,state_28077);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19766__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19766__auto____0;
cljs$core$async$state_machine__19766__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19766__auto____1;
return cljs$core$async$state_machine__19766__auto__;
})()
;})(switch__19765__auto__,c__19830__auto___28129,mults,ensure_mult,p))
})();
var state__19832__auto__ = (function (){var statearr_28124 = f__19831__auto__.call(null);
(statearr_28124[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19830__auto___28129);

return statearr_28124;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19832__auto__);
});})(c__19830__auto___28129,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;
/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var args28160 = [];
var len__17587__auto___28163 = arguments.length;
var i__17588__auto___28164 = (0);
while(true){
if((i__17588__auto___28164 < len__17587__auto___28163)){
args28160.push((arguments[i__17588__auto___28164]));

var G__28165 = (i__17588__auto___28164 + (1));
i__17588__auto___28164 = G__28165;
continue;
} else {
}
break;
}

var G__28162 = args28160.length;
switch (G__28162) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28160.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;
/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var args28167 = [];
var len__17587__auto___28170 = arguments.length;
var i__17588__auto___28171 = (0);
while(true){
if((i__17588__auto___28171 < len__17587__auto___28170)){
args28167.push((arguments[i__17588__auto___28171]));

var G__28172 = (i__17588__auto___28171 + (1));
i__17588__auto___28171 = G__28172;
continue;
} else {
}
break;
}

var G__28169 = args28167.length;
switch (G__28169) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28167.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;
/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var args28174 = [];
var len__17587__auto___28245 = arguments.length;
var i__17588__auto___28246 = (0);
while(true){
if((i__17588__auto___28246 < len__17587__auto___28245)){
args28174.push((arguments[i__17588__auto___28246]));

var G__28247 = (i__17588__auto___28246 + (1));
i__17588__auto___28246 = G__28247;
continue;
} else {
}
break;
}

var G__28176 = args28174.length;
switch (G__28176) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28174.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__19830__auto___28249 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19830__auto___28249,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__19831__auto__ = (function (){var switch__19765__auto__ = ((function (c__19830__auto___28249,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_28215){
var state_val_28216 = (state_28215[(1)]);
if((state_val_28216 === (7))){
var state_28215__$1 = state_28215;
var statearr_28217_28250 = state_28215__$1;
(statearr_28217_28250[(2)] = null);

(statearr_28217_28250[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28216 === (1))){
var state_28215__$1 = state_28215;
var statearr_28218_28251 = state_28215__$1;
(statearr_28218_28251[(2)] = null);

(statearr_28218_28251[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28216 === (4))){
var inst_28179 = (state_28215[(7)]);
var inst_28181 = (inst_28179 < cnt);
var state_28215__$1 = state_28215;
if(cljs.core.truth_(inst_28181)){
var statearr_28219_28252 = state_28215__$1;
(statearr_28219_28252[(1)] = (6));

} else {
var statearr_28220_28253 = state_28215__$1;
(statearr_28220_28253[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28216 === (15))){
var inst_28211 = (state_28215[(2)]);
var state_28215__$1 = state_28215;
var statearr_28221_28254 = state_28215__$1;
(statearr_28221_28254[(2)] = inst_28211);

(statearr_28221_28254[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28216 === (13))){
var inst_28204 = cljs.core.async.close_BANG_.call(null,out);
var state_28215__$1 = state_28215;
var statearr_28222_28255 = state_28215__$1;
(statearr_28222_28255[(2)] = inst_28204);

(statearr_28222_28255[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28216 === (6))){
var state_28215__$1 = state_28215;
var statearr_28223_28256 = state_28215__$1;
(statearr_28223_28256[(2)] = null);

(statearr_28223_28256[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28216 === (3))){
var inst_28213 = (state_28215[(2)]);
var state_28215__$1 = state_28215;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28215__$1,inst_28213);
} else {
if((state_val_28216 === (12))){
var inst_28201 = (state_28215[(8)]);
var inst_28201__$1 = (state_28215[(2)]);
var inst_28202 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_28201__$1);
var state_28215__$1 = (function (){var statearr_28224 = state_28215;
(statearr_28224[(8)] = inst_28201__$1);

return statearr_28224;
})();
if(cljs.core.truth_(inst_28202)){
var statearr_28225_28257 = state_28215__$1;
(statearr_28225_28257[(1)] = (13));

} else {
var statearr_28226_28258 = state_28215__$1;
(statearr_28226_28258[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28216 === (2))){
var inst_28178 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_28179 = (0);
var state_28215__$1 = (function (){var statearr_28227 = state_28215;
(statearr_28227[(9)] = inst_28178);

(statearr_28227[(7)] = inst_28179);

return statearr_28227;
})();
var statearr_28228_28259 = state_28215__$1;
(statearr_28228_28259[(2)] = null);

(statearr_28228_28259[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28216 === (11))){
var inst_28179 = (state_28215[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_28215,(10),Object,null,(9));
var inst_28188 = chs__$1.call(null,inst_28179);
var inst_28189 = done.call(null,inst_28179);
var inst_28190 = cljs.core.async.take_BANG_.call(null,inst_28188,inst_28189);
var state_28215__$1 = state_28215;
var statearr_28229_28260 = state_28215__$1;
(statearr_28229_28260[(2)] = inst_28190);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28215__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28216 === (9))){
var inst_28179 = (state_28215[(7)]);
var inst_28192 = (state_28215[(2)]);
var inst_28193 = (inst_28179 + (1));
var inst_28179__$1 = inst_28193;
var state_28215__$1 = (function (){var statearr_28230 = state_28215;
(statearr_28230[(7)] = inst_28179__$1);

(statearr_28230[(10)] = inst_28192);

return statearr_28230;
})();
var statearr_28231_28261 = state_28215__$1;
(statearr_28231_28261[(2)] = null);

(statearr_28231_28261[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28216 === (5))){
var inst_28199 = (state_28215[(2)]);
var state_28215__$1 = (function (){var statearr_28232 = state_28215;
(statearr_28232[(11)] = inst_28199);

return statearr_28232;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28215__$1,(12),dchan);
} else {
if((state_val_28216 === (14))){
var inst_28201 = (state_28215[(8)]);
var inst_28206 = cljs.core.apply.call(null,f,inst_28201);
var state_28215__$1 = state_28215;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28215__$1,(16),out,inst_28206);
} else {
if((state_val_28216 === (16))){
var inst_28208 = (state_28215[(2)]);
var state_28215__$1 = (function (){var statearr_28233 = state_28215;
(statearr_28233[(12)] = inst_28208);

return statearr_28233;
})();
var statearr_28234_28262 = state_28215__$1;
(statearr_28234_28262[(2)] = null);

(statearr_28234_28262[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28216 === (10))){
var inst_28183 = (state_28215[(2)]);
var inst_28184 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_28215__$1 = (function (){var statearr_28235 = state_28215;
(statearr_28235[(13)] = inst_28183);

return statearr_28235;
})();
var statearr_28236_28263 = state_28215__$1;
(statearr_28236_28263[(2)] = inst_28184);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28215__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28216 === (8))){
var inst_28197 = (state_28215[(2)]);
var state_28215__$1 = state_28215;
var statearr_28237_28264 = state_28215__$1;
(statearr_28237_28264[(2)] = inst_28197);

(statearr_28237_28264[(1)] = (5));


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
});})(c__19830__auto___28249,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__19765__auto__,c__19830__auto___28249,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__19766__auto__ = null;
var cljs$core$async$state_machine__19766__auto____0 = (function (){
var statearr_28241 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28241[(0)] = cljs$core$async$state_machine__19766__auto__);

(statearr_28241[(1)] = (1));

return statearr_28241;
});
var cljs$core$async$state_machine__19766__auto____1 = (function (state_28215){
while(true){
var ret_value__19767__auto__ = (function (){try{while(true){
var result__19768__auto__ = switch__19765__auto__.call(null,state_28215);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19768__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19768__auto__;
}
break;
}
}catch (e28242){if((e28242 instanceof Object)){
var ex__19769__auto__ = e28242;
var statearr_28243_28265 = state_28215;
(statearr_28243_28265[(5)] = ex__19769__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28215);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28242;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19767__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28266 = state_28215;
state_28215 = G__28266;
continue;
} else {
return ret_value__19767__auto__;
}
break;
}
});
cljs$core$async$state_machine__19766__auto__ = function(state_28215){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19766__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19766__auto____1.call(this,state_28215);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19766__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19766__auto____0;
cljs$core$async$state_machine__19766__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19766__auto____1;
return cljs$core$async$state_machine__19766__auto__;
})()
;})(switch__19765__auto__,c__19830__auto___28249,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__19832__auto__ = (function (){var statearr_28244 = f__19831__auto__.call(null);
(statearr_28244[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19830__auto___28249);

return statearr_28244;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19832__auto__);
});})(c__19830__auto___28249,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;
/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var args28268 = [];
var len__17587__auto___28324 = arguments.length;
var i__17588__auto___28325 = (0);
while(true){
if((i__17588__auto___28325 < len__17587__auto___28324)){
args28268.push((arguments[i__17588__auto___28325]));

var G__28326 = (i__17588__auto___28325 + (1));
i__17588__auto___28325 = G__28326;
continue;
} else {
}
break;
}

var G__28270 = args28268.length;
switch (G__28270) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28268.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__19830__auto___28328 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19830__auto___28328,out){
return (function (){
var f__19831__auto__ = (function (){var switch__19765__auto__ = ((function (c__19830__auto___28328,out){
return (function (state_28300){
var state_val_28301 = (state_28300[(1)]);
if((state_val_28301 === (7))){
var inst_28280 = (state_28300[(7)]);
var inst_28279 = (state_28300[(8)]);
var inst_28279__$1 = (state_28300[(2)]);
var inst_28280__$1 = cljs.core.nth.call(null,inst_28279__$1,(0),null);
var inst_28281 = cljs.core.nth.call(null,inst_28279__$1,(1),null);
var inst_28282 = (inst_28280__$1 == null);
var state_28300__$1 = (function (){var statearr_28302 = state_28300;
(statearr_28302[(7)] = inst_28280__$1);

(statearr_28302[(8)] = inst_28279__$1);

(statearr_28302[(9)] = inst_28281);

return statearr_28302;
})();
if(cljs.core.truth_(inst_28282)){
var statearr_28303_28329 = state_28300__$1;
(statearr_28303_28329[(1)] = (8));

} else {
var statearr_28304_28330 = state_28300__$1;
(statearr_28304_28330[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28301 === (1))){
var inst_28271 = cljs.core.vec.call(null,chs);
var inst_28272 = inst_28271;
var state_28300__$1 = (function (){var statearr_28305 = state_28300;
(statearr_28305[(10)] = inst_28272);

return statearr_28305;
})();
var statearr_28306_28331 = state_28300__$1;
(statearr_28306_28331[(2)] = null);

(statearr_28306_28331[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28301 === (4))){
var inst_28272 = (state_28300[(10)]);
var state_28300__$1 = state_28300;
return cljs.core.async.ioc_alts_BANG_.call(null,state_28300__$1,(7),inst_28272);
} else {
if((state_val_28301 === (6))){
var inst_28296 = (state_28300[(2)]);
var state_28300__$1 = state_28300;
var statearr_28307_28332 = state_28300__$1;
(statearr_28307_28332[(2)] = inst_28296);

(statearr_28307_28332[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28301 === (3))){
var inst_28298 = (state_28300[(2)]);
var state_28300__$1 = state_28300;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28300__$1,inst_28298);
} else {
if((state_val_28301 === (2))){
var inst_28272 = (state_28300[(10)]);
var inst_28274 = cljs.core.count.call(null,inst_28272);
var inst_28275 = (inst_28274 > (0));
var state_28300__$1 = state_28300;
if(cljs.core.truth_(inst_28275)){
var statearr_28309_28333 = state_28300__$1;
(statearr_28309_28333[(1)] = (4));

} else {
var statearr_28310_28334 = state_28300__$1;
(statearr_28310_28334[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28301 === (11))){
var inst_28272 = (state_28300[(10)]);
var inst_28289 = (state_28300[(2)]);
var tmp28308 = inst_28272;
var inst_28272__$1 = tmp28308;
var state_28300__$1 = (function (){var statearr_28311 = state_28300;
(statearr_28311[(11)] = inst_28289);

(statearr_28311[(10)] = inst_28272__$1);

return statearr_28311;
})();
var statearr_28312_28335 = state_28300__$1;
(statearr_28312_28335[(2)] = null);

(statearr_28312_28335[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28301 === (9))){
var inst_28280 = (state_28300[(7)]);
var state_28300__$1 = state_28300;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28300__$1,(11),out,inst_28280);
} else {
if((state_val_28301 === (5))){
var inst_28294 = cljs.core.async.close_BANG_.call(null,out);
var state_28300__$1 = state_28300;
var statearr_28313_28336 = state_28300__$1;
(statearr_28313_28336[(2)] = inst_28294);

(statearr_28313_28336[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28301 === (10))){
var inst_28292 = (state_28300[(2)]);
var state_28300__$1 = state_28300;
var statearr_28314_28337 = state_28300__$1;
(statearr_28314_28337[(2)] = inst_28292);

(statearr_28314_28337[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28301 === (8))){
var inst_28280 = (state_28300[(7)]);
var inst_28279 = (state_28300[(8)]);
var inst_28272 = (state_28300[(10)]);
var inst_28281 = (state_28300[(9)]);
var inst_28284 = (function (){var cs = inst_28272;
var vec__28277 = inst_28279;
var v = inst_28280;
var c = inst_28281;
return ((function (cs,vec__28277,v,c,inst_28280,inst_28279,inst_28272,inst_28281,state_val_28301,c__19830__auto___28328,out){
return (function (p1__28267_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__28267_SHARP_);
});
;})(cs,vec__28277,v,c,inst_28280,inst_28279,inst_28272,inst_28281,state_val_28301,c__19830__auto___28328,out))
})();
var inst_28285 = cljs.core.filterv.call(null,inst_28284,inst_28272);
var inst_28272__$1 = inst_28285;
var state_28300__$1 = (function (){var statearr_28315 = state_28300;
(statearr_28315[(10)] = inst_28272__$1);

return statearr_28315;
})();
var statearr_28316_28338 = state_28300__$1;
(statearr_28316_28338[(2)] = null);

(statearr_28316_28338[(1)] = (2));


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
});})(c__19830__auto___28328,out))
;
return ((function (switch__19765__auto__,c__19830__auto___28328,out){
return (function() {
var cljs$core$async$state_machine__19766__auto__ = null;
var cljs$core$async$state_machine__19766__auto____0 = (function (){
var statearr_28320 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28320[(0)] = cljs$core$async$state_machine__19766__auto__);

(statearr_28320[(1)] = (1));

return statearr_28320;
});
var cljs$core$async$state_machine__19766__auto____1 = (function (state_28300){
while(true){
var ret_value__19767__auto__ = (function (){try{while(true){
var result__19768__auto__ = switch__19765__auto__.call(null,state_28300);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19768__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19768__auto__;
}
break;
}
}catch (e28321){if((e28321 instanceof Object)){
var ex__19769__auto__ = e28321;
var statearr_28322_28339 = state_28300;
(statearr_28322_28339[(5)] = ex__19769__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28300);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28321;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19767__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28340 = state_28300;
state_28300 = G__28340;
continue;
} else {
return ret_value__19767__auto__;
}
break;
}
});
cljs$core$async$state_machine__19766__auto__ = function(state_28300){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19766__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19766__auto____1.call(this,state_28300);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19766__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19766__auto____0;
cljs$core$async$state_machine__19766__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19766__auto____1;
return cljs$core$async$state_machine__19766__auto__;
})()
;})(switch__19765__auto__,c__19830__auto___28328,out))
})();
var state__19832__auto__ = (function (){var statearr_28323 = f__19831__auto__.call(null);
(statearr_28323[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19830__auto___28328);

return statearr_28323;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19832__auto__);
});})(c__19830__auto___28328,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;
/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var args28341 = [];
var len__17587__auto___28390 = arguments.length;
var i__17588__auto___28391 = (0);
while(true){
if((i__17588__auto___28391 < len__17587__auto___28390)){
args28341.push((arguments[i__17588__auto___28391]));

var G__28392 = (i__17588__auto___28391 + (1));
i__17588__auto___28391 = G__28392;
continue;
} else {
}
break;
}

var G__28343 = args28341.length;
switch (G__28343) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28341.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__19830__auto___28394 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19830__auto___28394,out){
return (function (){
var f__19831__auto__ = (function (){var switch__19765__auto__ = ((function (c__19830__auto___28394,out){
return (function (state_28367){
var state_val_28368 = (state_28367[(1)]);
if((state_val_28368 === (7))){
var inst_28349 = (state_28367[(7)]);
var inst_28349__$1 = (state_28367[(2)]);
var inst_28350 = (inst_28349__$1 == null);
var inst_28351 = cljs.core.not.call(null,inst_28350);
var state_28367__$1 = (function (){var statearr_28369 = state_28367;
(statearr_28369[(7)] = inst_28349__$1);

return statearr_28369;
})();
if(inst_28351){
var statearr_28370_28395 = state_28367__$1;
(statearr_28370_28395[(1)] = (8));

} else {
var statearr_28371_28396 = state_28367__$1;
(statearr_28371_28396[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28368 === (1))){
var inst_28344 = (0);
var state_28367__$1 = (function (){var statearr_28372 = state_28367;
(statearr_28372[(8)] = inst_28344);

return statearr_28372;
})();
var statearr_28373_28397 = state_28367__$1;
(statearr_28373_28397[(2)] = null);

(statearr_28373_28397[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28368 === (4))){
var state_28367__$1 = state_28367;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28367__$1,(7),ch);
} else {
if((state_val_28368 === (6))){
var inst_28362 = (state_28367[(2)]);
var state_28367__$1 = state_28367;
var statearr_28374_28398 = state_28367__$1;
(statearr_28374_28398[(2)] = inst_28362);

(statearr_28374_28398[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28368 === (3))){
var inst_28364 = (state_28367[(2)]);
var inst_28365 = cljs.core.async.close_BANG_.call(null,out);
var state_28367__$1 = (function (){var statearr_28375 = state_28367;
(statearr_28375[(9)] = inst_28364);

return statearr_28375;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28367__$1,inst_28365);
} else {
if((state_val_28368 === (2))){
var inst_28344 = (state_28367[(8)]);
var inst_28346 = (inst_28344 < n);
var state_28367__$1 = state_28367;
if(cljs.core.truth_(inst_28346)){
var statearr_28376_28399 = state_28367__$1;
(statearr_28376_28399[(1)] = (4));

} else {
var statearr_28377_28400 = state_28367__$1;
(statearr_28377_28400[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28368 === (11))){
var inst_28344 = (state_28367[(8)]);
var inst_28354 = (state_28367[(2)]);
var inst_28355 = (inst_28344 + (1));
var inst_28344__$1 = inst_28355;
var state_28367__$1 = (function (){var statearr_28378 = state_28367;
(statearr_28378[(8)] = inst_28344__$1);

(statearr_28378[(10)] = inst_28354);

return statearr_28378;
})();
var statearr_28379_28401 = state_28367__$1;
(statearr_28379_28401[(2)] = null);

(statearr_28379_28401[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28368 === (9))){
var state_28367__$1 = state_28367;
var statearr_28380_28402 = state_28367__$1;
(statearr_28380_28402[(2)] = null);

(statearr_28380_28402[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28368 === (5))){
var state_28367__$1 = state_28367;
var statearr_28381_28403 = state_28367__$1;
(statearr_28381_28403[(2)] = null);

(statearr_28381_28403[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28368 === (10))){
var inst_28359 = (state_28367[(2)]);
var state_28367__$1 = state_28367;
var statearr_28382_28404 = state_28367__$1;
(statearr_28382_28404[(2)] = inst_28359);

(statearr_28382_28404[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28368 === (8))){
var inst_28349 = (state_28367[(7)]);
var state_28367__$1 = state_28367;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28367__$1,(11),out,inst_28349);
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
});})(c__19830__auto___28394,out))
;
return ((function (switch__19765__auto__,c__19830__auto___28394,out){
return (function() {
var cljs$core$async$state_machine__19766__auto__ = null;
var cljs$core$async$state_machine__19766__auto____0 = (function (){
var statearr_28386 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_28386[(0)] = cljs$core$async$state_machine__19766__auto__);

(statearr_28386[(1)] = (1));

return statearr_28386;
});
var cljs$core$async$state_machine__19766__auto____1 = (function (state_28367){
while(true){
var ret_value__19767__auto__ = (function (){try{while(true){
var result__19768__auto__ = switch__19765__auto__.call(null,state_28367);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19768__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19768__auto__;
}
break;
}
}catch (e28387){if((e28387 instanceof Object)){
var ex__19769__auto__ = e28387;
var statearr_28388_28405 = state_28367;
(statearr_28388_28405[(5)] = ex__19769__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28367);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28387;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19767__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28406 = state_28367;
state_28367 = G__28406;
continue;
} else {
return ret_value__19767__auto__;
}
break;
}
});
cljs$core$async$state_machine__19766__auto__ = function(state_28367){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19766__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19766__auto____1.call(this,state_28367);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19766__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19766__auto____0;
cljs$core$async$state_machine__19766__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19766__auto____1;
return cljs$core$async$state_machine__19766__auto__;
})()
;})(switch__19765__auto__,c__19830__auto___28394,out))
})();
var state__19832__auto__ = (function (){var statearr_28389 = f__19831__auto__.call(null);
(statearr_28389[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19830__auto___28394);

return statearr_28389;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19832__auto__);
});})(c__19830__auto___28394,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async28414 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28414 = (function (map_LT_,f,ch,meta28415){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta28415 = meta28415;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async28414.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28416,meta28415__$1){
var self__ = this;
var _28416__$1 = this;
return (new cljs.core.async.t_cljs$core$async28414(self__.map_LT_,self__.f,self__.ch,meta28415__$1));
});

cljs.core.async.t_cljs$core$async28414.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28416){
var self__ = this;
var _28416__$1 = this;
return self__.meta28415;
});

cljs.core.async.t_cljs$core$async28414.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async28414.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async28414.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async28414.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async28414.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async28417 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28417 = (function (map_LT_,f,ch,meta28415,_,fn1,meta28418){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta28415 = meta28415;
this._ = _;
this.fn1 = fn1;
this.meta28418 = meta28418;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async28417.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_28419,meta28418__$1){
var self__ = this;
var _28419__$1 = this;
return (new cljs.core.async.t_cljs$core$async28417(self__.map_LT_,self__.f,self__.ch,self__.meta28415,self__._,self__.fn1,meta28418__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async28417.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_28419){
var self__ = this;
var _28419__$1 = this;
return self__.meta28418;
});})(___$1))
;

cljs.core.async.t_cljs$core$async28417.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async28417.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async28417.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__28407_SHARP_){
return f1.call(null,(((p1__28407_SHARP_ == null))?null:self__.f.call(null,p1__28407_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async28417.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta28415","meta28415",646887389,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async28414","cljs.core.async/t_cljs$core$async28414",2029740051,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta28418","meta28418",2101960821,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async28417.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async28417.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28417";

cljs.core.async.t_cljs$core$async28417.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__17127__auto__,writer__17128__auto__,opt__17129__auto__){
return cljs.core._write.call(null,writer__17128__auto__,"cljs.core.async/t_cljs$core$async28417");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async28417 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async28417(map_LT___$1,f__$1,ch__$1,meta28415__$1,___$2,fn1__$1,meta28418){
return (new cljs.core.async.t_cljs$core$async28417(map_LT___$1,f__$1,ch__$1,meta28415__$1,___$2,fn1__$1,meta28418));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async28417(self__.map_LT_,self__.f,self__.ch,self__.meta28415,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__16517__auto__ = ret;
if(cljs.core.truth_(and__16517__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__16517__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async28414.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async28414.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async28414.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta28415","meta28415",646887389,null)], null);
});

cljs.core.async.t_cljs$core$async28414.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async28414.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28414";

cljs.core.async.t_cljs$core$async28414.cljs$lang$ctorPrWriter = (function (this__17127__auto__,writer__17128__auto__,opt__17129__auto__){
return cljs.core._write.call(null,writer__17128__auto__,"cljs.core.async/t_cljs$core$async28414");
});

cljs.core.async.__GT_t_cljs$core$async28414 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async28414(map_LT___$1,f__$1,ch__$1,meta28415){
return (new cljs.core.async.t_cljs$core$async28414(map_LT___$1,f__$1,ch__$1,meta28415));
});

}

return (new cljs.core.async.t_cljs$core$async28414(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async28423 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28423 = (function (map_GT_,f,ch,meta28424){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta28424 = meta28424;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async28423.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28425,meta28424__$1){
var self__ = this;
var _28425__$1 = this;
return (new cljs.core.async.t_cljs$core$async28423(self__.map_GT_,self__.f,self__.ch,meta28424__$1));
});

cljs.core.async.t_cljs$core$async28423.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28425){
var self__ = this;
var _28425__$1 = this;
return self__.meta28424;
});

cljs.core.async.t_cljs$core$async28423.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async28423.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async28423.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async28423.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async28423.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async28423.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async28423.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta28424","meta28424",-392485533,null)], null);
});

cljs.core.async.t_cljs$core$async28423.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async28423.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28423";

cljs.core.async.t_cljs$core$async28423.cljs$lang$ctorPrWriter = (function (this__17127__auto__,writer__17128__auto__,opt__17129__auto__){
return cljs.core._write.call(null,writer__17128__auto__,"cljs.core.async/t_cljs$core$async28423");
});

cljs.core.async.__GT_t_cljs$core$async28423 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async28423(map_GT___$1,f__$1,ch__$1,meta28424){
return (new cljs.core.async.t_cljs$core$async28423(map_GT___$1,f__$1,ch__$1,meta28424));
});

}

return (new cljs.core.async.t_cljs$core$async28423(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async28429 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28429 = (function (filter_GT_,p,ch,meta28430){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta28430 = meta28430;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async28429.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28431,meta28430__$1){
var self__ = this;
var _28431__$1 = this;
return (new cljs.core.async.t_cljs$core$async28429(self__.filter_GT_,self__.p,self__.ch,meta28430__$1));
});

cljs.core.async.t_cljs$core$async28429.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28431){
var self__ = this;
var _28431__$1 = this;
return self__.meta28430;
});

cljs.core.async.t_cljs$core$async28429.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async28429.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async28429.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async28429.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async28429.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async28429.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async28429.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async28429.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta28430","meta28430",-1657478422,null)], null);
});

cljs.core.async.t_cljs$core$async28429.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async28429.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28429";

cljs.core.async.t_cljs$core$async28429.cljs$lang$ctorPrWriter = (function (this__17127__auto__,writer__17128__auto__,opt__17129__auto__){
return cljs.core._write.call(null,writer__17128__auto__,"cljs.core.async/t_cljs$core$async28429");
});

cljs.core.async.__GT_t_cljs$core$async28429 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async28429(filter_GT___$1,p__$1,ch__$1,meta28430){
return (new cljs.core.async.t_cljs$core$async28429(filter_GT___$1,p__$1,ch__$1,meta28430));
});

}

return (new cljs.core.async.t_cljs$core$async28429(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var args28432 = [];
var len__17587__auto___28476 = arguments.length;
var i__17588__auto___28477 = (0);
while(true){
if((i__17588__auto___28477 < len__17587__auto___28476)){
args28432.push((arguments[i__17588__auto___28477]));

var G__28478 = (i__17588__auto___28477 + (1));
i__17588__auto___28477 = G__28478;
continue;
} else {
}
break;
}

var G__28434 = args28432.length;
switch (G__28434) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28432.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__19830__auto___28480 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19830__auto___28480,out){
return (function (){
var f__19831__auto__ = (function (){var switch__19765__auto__ = ((function (c__19830__auto___28480,out){
return (function (state_28455){
var state_val_28456 = (state_28455[(1)]);
if((state_val_28456 === (7))){
var inst_28451 = (state_28455[(2)]);
var state_28455__$1 = state_28455;
var statearr_28457_28481 = state_28455__$1;
(statearr_28457_28481[(2)] = inst_28451);

(statearr_28457_28481[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28456 === (1))){
var state_28455__$1 = state_28455;
var statearr_28458_28482 = state_28455__$1;
(statearr_28458_28482[(2)] = null);

(statearr_28458_28482[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28456 === (4))){
var inst_28437 = (state_28455[(7)]);
var inst_28437__$1 = (state_28455[(2)]);
var inst_28438 = (inst_28437__$1 == null);
var state_28455__$1 = (function (){var statearr_28459 = state_28455;
(statearr_28459[(7)] = inst_28437__$1);

return statearr_28459;
})();
if(cljs.core.truth_(inst_28438)){
var statearr_28460_28483 = state_28455__$1;
(statearr_28460_28483[(1)] = (5));

} else {
var statearr_28461_28484 = state_28455__$1;
(statearr_28461_28484[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28456 === (6))){
var inst_28437 = (state_28455[(7)]);
var inst_28442 = p.call(null,inst_28437);
var state_28455__$1 = state_28455;
if(cljs.core.truth_(inst_28442)){
var statearr_28462_28485 = state_28455__$1;
(statearr_28462_28485[(1)] = (8));

} else {
var statearr_28463_28486 = state_28455__$1;
(statearr_28463_28486[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28456 === (3))){
var inst_28453 = (state_28455[(2)]);
var state_28455__$1 = state_28455;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28455__$1,inst_28453);
} else {
if((state_val_28456 === (2))){
var state_28455__$1 = state_28455;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28455__$1,(4),ch);
} else {
if((state_val_28456 === (11))){
var inst_28445 = (state_28455[(2)]);
var state_28455__$1 = state_28455;
var statearr_28464_28487 = state_28455__$1;
(statearr_28464_28487[(2)] = inst_28445);

(statearr_28464_28487[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28456 === (9))){
var state_28455__$1 = state_28455;
var statearr_28465_28488 = state_28455__$1;
(statearr_28465_28488[(2)] = null);

(statearr_28465_28488[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28456 === (5))){
var inst_28440 = cljs.core.async.close_BANG_.call(null,out);
var state_28455__$1 = state_28455;
var statearr_28466_28489 = state_28455__$1;
(statearr_28466_28489[(2)] = inst_28440);

(statearr_28466_28489[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28456 === (10))){
var inst_28448 = (state_28455[(2)]);
var state_28455__$1 = (function (){var statearr_28467 = state_28455;
(statearr_28467[(8)] = inst_28448);

return statearr_28467;
})();
var statearr_28468_28490 = state_28455__$1;
(statearr_28468_28490[(2)] = null);

(statearr_28468_28490[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28456 === (8))){
var inst_28437 = (state_28455[(7)]);
var state_28455__$1 = state_28455;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28455__$1,(11),out,inst_28437);
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
});})(c__19830__auto___28480,out))
;
return ((function (switch__19765__auto__,c__19830__auto___28480,out){
return (function() {
var cljs$core$async$state_machine__19766__auto__ = null;
var cljs$core$async$state_machine__19766__auto____0 = (function (){
var statearr_28472 = [null,null,null,null,null,null,null,null,null];
(statearr_28472[(0)] = cljs$core$async$state_machine__19766__auto__);

(statearr_28472[(1)] = (1));

return statearr_28472;
});
var cljs$core$async$state_machine__19766__auto____1 = (function (state_28455){
while(true){
var ret_value__19767__auto__ = (function (){try{while(true){
var result__19768__auto__ = switch__19765__auto__.call(null,state_28455);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19768__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19768__auto__;
}
break;
}
}catch (e28473){if((e28473 instanceof Object)){
var ex__19769__auto__ = e28473;
var statearr_28474_28491 = state_28455;
(statearr_28474_28491[(5)] = ex__19769__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28455);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28473;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19767__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28492 = state_28455;
state_28455 = G__28492;
continue;
} else {
return ret_value__19767__auto__;
}
break;
}
});
cljs$core$async$state_machine__19766__auto__ = function(state_28455){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19766__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19766__auto____1.call(this,state_28455);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19766__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19766__auto____0;
cljs$core$async$state_machine__19766__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19766__auto____1;
return cljs$core$async$state_machine__19766__auto__;
})()
;})(switch__19765__auto__,c__19830__auto___28480,out))
})();
var state__19832__auto__ = (function (){var statearr_28475 = f__19831__auto__.call(null);
(statearr_28475[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19830__auto___28480);

return statearr_28475;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19832__auto__);
});})(c__19830__auto___28480,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args28493 = [];
var len__17587__auto___28496 = arguments.length;
var i__17588__auto___28497 = (0);
while(true){
if((i__17588__auto___28497 < len__17587__auto___28496)){
args28493.push((arguments[i__17588__auto___28497]));

var G__28498 = (i__17588__auto___28497 + (1));
i__17588__auto___28497 = G__28498;
continue;
} else {
}
break;
}

var G__28495 = args28493.length;
switch (G__28495) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28493.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;
cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__19830__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19830__auto__){
return (function (){
var f__19831__auto__ = (function (){var switch__19765__auto__ = ((function (c__19830__auto__){
return (function (state_28665){
var state_val_28666 = (state_28665[(1)]);
if((state_val_28666 === (7))){
var inst_28661 = (state_28665[(2)]);
var state_28665__$1 = state_28665;
var statearr_28667_28708 = state_28665__$1;
(statearr_28667_28708[(2)] = inst_28661);

(statearr_28667_28708[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28666 === (20))){
var inst_28631 = (state_28665[(7)]);
var inst_28642 = (state_28665[(2)]);
var inst_28643 = cljs.core.next.call(null,inst_28631);
var inst_28617 = inst_28643;
var inst_28618 = null;
var inst_28619 = (0);
var inst_28620 = (0);
var state_28665__$1 = (function (){var statearr_28668 = state_28665;
(statearr_28668[(8)] = inst_28642);

(statearr_28668[(9)] = inst_28620);

(statearr_28668[(10)] = inst_28617);

(statearr_28668[(11)] = inst_28619);

(statearr_28668[(12)] = inst_28618);

return statearr_28668;
})();
var statearr_28669_28709 = state_28665__$1;
(statearr_28669_28709[(2)] = null);

(statearr_28669_28709[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28666 === (1))){
var state_28665__$1 = state_28665;
var statearr_28670_28710 = state_28665__$1;
(statearr_28670_28710[(2)] = null);

(statearr_28670_28710[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28666 === (4))){
var inst_28606 = (state_28665[(13)]);
var inst_28606__$1 = (state_28665[(2)]);
var inst_28607 = (inst_28606__$1 == null);
var state_28665__$1 = (function (){var statearr_28671 = state_28665;
(statearr_28671[(13)] = inst_28606__$1);

return statearr_28671;
})();
if(cljs.core.truth_(inst_28607)){
var statearr_28672_28711 = state_28665__$1;
(statearr_28672_28711[(1)] = (5));

} else {
var statearr_28673_28712 = state_28665__$1;
(statearr_28673_28712[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28666 === (15))){
var state_28665__$1 = state_28665;
var statearr_28677_28713 = state_28665__$1;
(statearr_28677_28713[(2)] = null);

(statearr_28677_28713[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28666 === (21))){
var state_28665__$1 = state_28665;
var statearr_28678_28714 = state_28665__$1;
(statearr_28678_28714[(2)] = null);

(statearr_28678_28714[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28666 === (13))){
var inst_28620 = (state_28665[(9)]);
var inst_28617 = (state_28665[(10)]);
var inst_28619 = (state_28665[(11)]);
var inst_28618 = (state_28665[(12)]);
var inst_28627 = (state_28665[(2)]);
var inst_28628 = (inst_28620 + (1));
var tmp28674 = inst_28617;
var tmp28675 = inst_28619;
var tmp28676 = inst_28618;
var inst_28617__$1 = tmp28674;
var inst_28618__$1 = tmp28676;
var inst_28619__$1 = tmp28675;
var inst_28620__$1 = inst_28628;
var state_28665__$1 = (function (){var statearr_28679 = state_28665;
(statearr_28679[(9)] = inst_28620__$1);

(statearr_28679[(10)] = inst_28617__$1);

(statearr_28679[(14)] = inst_28627);

(statearr_28679[(11)] = inst_28619__$1);

(statearr_28679[(12)] = inst_28618__$1);

return statearr_28679;
})();
var statearr_28680_28715 = state_28665__$1;
(statearr_28680_28715[(2)] = null);

(statearr_28680_28715[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28666 === (22))){
var state_28665__$1 = state_28665;
var statearr_28681_28716 = state_28665__$1;
(statearr_28681_28716[(2)] = null);

(statearr_28681_28716[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28666 === (6))){
var inst_28606 = (state_28665[(13)]);
var inst_28615 = f.call(null,inst_28606);
var inst_28616 = cljs.core.seq.call(null,inst_28615);
var inst_28617 = inst_28616;
var inst_28618 = null;
var inst_28619 = (0);
var inst_28620 = (0);
var state_28665__$1 = (function (){var statearr_28682 = state_28665;
(statearr_28682[(9)] = inst_28620);

(statearr_28682[(10)] = inst_28617);

(statearr_28682[(11)] = inst_28619);

(statearr_28682[(12)] = inst_28618);

return statearr_28682;
})();
var statearr_28683_28717 = state_28665__$1;
(statearr_28683_28717[(2)] = null);

(statearr_28683_28717[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28666 === (17))){
var inst_28631 = (state_28665[(7)]);
var inst_28635 = cljs.core.chunk_first.call(null,inst_28631);
var inst_28636 = cljs.core.chunk_rest.call(null,inst_28631);
var inst_28637 = cljs.core.count.call(null,inst_28635);
var inst_28617 = inst_28636;
var inst_28618 = inst_28635;
var inst_28619 = inst_28637;
var inst_28620 = (0);
var state_28665__$1 = (function (){var statearr_28684 = state_28665;
(statearr_28684[(9)] = inst_28620);

(statearr_28684[(10)] = inst_28617);

(statearr_28684[(11)] = inst_28619);

(statearr_28684[(12)] = inst_28618);

return statearr_28684;
})();
var statearr_28685_28718 = state_28665__$1;
(statearr_28685_28718[(2)] = null);

(statearr_28685_28718[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28666 === (3))){
var inst_28663 = (state_28665[(2)]);
var state_28665__$1 = state_28665;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28665__$1,inst_28663);
} else {
if((state_val_28666 === (12))){
var inst_28651 = (state_28665[(2)]);
var state_28665__$1 = state_28665;
var statearr_28686_28719 = state_28665__$1;
(statearr_28686_28719[(2)] = inst_28651);

(statearr_28686_28719[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28666 === (2))){
var state_28665__$1 = state_28665;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28665__$1,(4),in$);
} else {
if((state_val_28666 === (23))){
var inst_28659 = (state_28665[(2)]);
var state_28665__$1 = state_28665;
var statearr_28687_28720 = state_28665__$1;
(statearr_28687_28720[(2)] = inst_28659);

(statearr_28687_28720[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28666 === (19))){
var inst_28646 = (state_28665[(2)]);
var state_28665__$1 = state_28665;
var statearr_28688_28721 = state_28665__$1;
(statearr_28688_28721[(2)] = inst_28646);

(statearr_28688_28721[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28666 === (11))){
var inst_28631 = (state_28665[(7)]);
var inst_28617 = (state_28665[(10)]);
var inst_28631__$1 = cljs.core.seq.call(null,inst_28617);
var state_28665__$1 = (function (){var statearr_28689 = state_28665;
(statearr_28689[(7)] = inst_28631__$1);

return statearr_28689;
})();
if(inst_28631__$1){
var statearr_28690_28722 = state_28665__$1;
(statearr_28690_28722[(1)] = (14));

} else {
var statearr_28691_28723 = state_28665__$1;
(statearr_28691_28723[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28666 === (9))){
var inst_28653 = (state_28665[(2)]);
var inst_28654 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_28665__$1 = (function (){var statearr_28692 = state_28665;
(statearr_28692[(15)] = inst_28653);

return statearr_28692;
})();
if(cljs.core.truth_(inst_28654)){
var statearr_28693_28724 = state_28665__$1;
(statearr_28693_28724[(1)] = (21));

} else {
var statearr_28694_28725 = state_28665__$1;
(statearr_28694_28725[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28666 === (5))){
var inst_28609 = cljs.core.async.close_BANG_.call(null,out);
var state_28665__$1 = state_28665;
var statearr_28695_28726 = state_28665__$1;
(statearr_28695_28726[(2)] = inst_28609);

(statearr_28695_28726[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28666 === (14))){
var inst_28631 = (state_28665[(7)]);
var inst_28633 = cljs.core.chunked_seq_QMARK_.call(null,inst_28631);
var state_28665__$1 = state_28665;
if(inst_28633){
var statearr_28696_28727 = state_28665__$1;
(statearr_28696_28727[(1)] = (17));

} else {
var statearr_28697_28728 = state_28665__$1;
(statearr_28697_28728[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28666 === (16))){
var inst_28649 = (state_28665[(2)]);
var state_28665__$1 = state_28665;
var statearr_28698_28729 = state_28665__$1;
(statearr_28698_28729[(2)] = inst_28649);

(statearr_28698_28729[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28666 === (10))){
var inst_28620 = (state_28665[(9)]);
var inst_28618 = (state_28665[(12)]);
var inst_28625 = cljs.core._nth.call(null,inst_28618,inst_28620);
var state_28665__$1 = state_28665;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28665__$1,(13),out,inst_28625);
} else {
if((state_val_28666 === (18))){
var inst_28631 = (state_28665[(7)]);
var inst_28640 = cljs.core.first.call(null,inst_28631);
var state_28665__$1 = state_28665;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28665__$1,(20),out,inst_28640);
} else {
if((state_val_28666 === (8))){
var inst_28620 = (state_28665[(9)]);
var inst_28619 = (state_28665[(11)]);
var inst_28622 = (inst_28620 < inst_28619);
var inst_28623 = inst_28622;
var state_28665__$1 = state_28665;
if(cljs.core.truth_(inst_28623)){
var statearr_28699_28730 = state_28665__$1;
(statearr_28699_28730[(1)] = (10));

} else {
var statearr_28700_28731 = state_28665__$1;
(statearr_28700_28731[(1)] = (11));

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
});})(c__19830__auto__))
;
return ((function (switch__19765__auto__,c__19830__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__19766__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__19766__auto____0 = (function (){
var statearr_28704 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28704[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__19766__auto__);

(statearr_28704[(1)] = (1));

return statearr_28704;
});
var cljs$core$async$mapcat_STAR__$_state_machine__19766__auto____1 = (function (state_28665){
while(true){
var ret_value__19767__auto__ = (function (){try{while(true){
var result__19768__auto__ = switch__19765__auto__.call(null,state_28665);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19768__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19768__auto__;
}
break;
}
}catch (e28705){if((e28705 instanceof Object)){
var ex__19769__auto__ = e28705;
var statearr_28706_28732 = state_28665;
(statearr_28706_28732[(5)] = ex__19769__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28665);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28705;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19767__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28733 = state_28665;
state_28665 = G__28733;
continue;
} else {
return ret_value__19767__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__19766__auto__ = function(state_28665){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__19766__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__19766__auto____1.call(this,state_28665);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__19766__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__19766__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__19766__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__19766__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__19766__auto__;
})()
;})(switch__19765__auto__,c__19830__auto__))
})();
var state__19832__auto__ = (function (){var statearr_28707 = f__19831__auto__.call(null);
(statearr_28707[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19830__auto__);

return statearr_28707;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19832__auto__);
});})(c__19830__auto__))
);

return c__19830__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args28734 = [];
var len__17587__auto___28737 = arguments.length;
var i__17588__auto___28738 = (0);
while(true){
if((i__17588__auto___28738 < len__17587__auto___28737)){
args28734.push((arguments[i__17588__auto___28738]));

var G__28739 = (i__17588__auto___28738 + (1));
i__17588__auto___28738 = G__28739;
continue;
} else {
}
break;
}

var G__28736 = args28734.length;
switch (G__28736) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28734.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var args28741 = [];
var len__17587__auto___28744 = arguments.length;
var i__17588__auto___28745 = (0);
while(true){
if((i__17588__auto___28745 < len__17587__auto___28744)){
args28741.push((arguments[i__17588__auto___28745]));

var G__28746 = (i__17588__auto___28745 + (1));
i__17588__auto___28745 = G__28746;
continue;
} else {
}
break;
}

var G__28743 = args28741.length;
switch (G__28743) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28741.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var args28748 = [];
var len__17587__auto___28799 = arguments.length;
var i__17588__auto___28800 = (0);
while(true){
if((i__17588__auto___28800 < len__17587__auto___28799)){
args28748.push((arguments[i__17588__auto___28800]));

var G__28801 = (i__17588__auto___28800 + (1));
i__17588__auto___28800 = G__28801;
continue;
} else {
}
break;
}

var G__28750 = args28748.length;
switch (G__28750) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28748.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__19830__auto___28803 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19830__auto___28803,out){
return (function (){
var f__19831__auto__ = (function (){var switch__19765__auto__ = ((function (c__19830__auto___28803,out){
return (function (state_28774){
var state_val_28775 = (state_28774[(1)]);
if((state_val_28775 === (7))){
var inst_28769 = (state_28774[(2)]);
var state_28774__$1 = state_28774;
var statearr_28776_28804 = state_28774__$1;
(statearr_28776_28804[(2)] = inst_28769);

(statearr_28776_28804[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28775 === (1))){
var inst_28751 = null;
var state_28774__$1 = (function (){var statearr_28777 = state_28774;
(statearr_28777[(7)] = inst_28751);

return statearr_28777;
})();
var statearr_28778_28805 = state_28774__$1;
(statearr_28778_28805[(2)] = null);

(statearr_28778_28805[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28775 === (4))){
var inst_28754 = (state_28774[(8)]);
var inst_28754__$1 = (state_28774[(2)]);
var inst_28755 = (inst_28754__$1 == null);
var inst_28756 = cljs.core.not.call(null,inst_28755);
var state_28774__$1 = (function (){var statearr_28779 = state_28774;
(statearr_28779[(8)] = inst_28754__$1);

return statearr_28779;
})();
if(inst_28756){
var statearr_28780_28806 = state_28774__$1;
(statearr_28780_28806[(1)] = (5));

} else {
var statearr_28781_28807 = state_28774__$1;
(statearr_28781_28807[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28775 === (6))){
var state_28774__$1 = state_28774;
var statearr_28782_28808 = state_28774__$1;
(statearr_28782_28808[(2)] = null);

(statearr_28782_28808[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28775 === (3))){
var inst_28771 = (state_28774[(2)]);
var inst_28772 = cljs.core.async.close_BANG_.call(null,out);
var state_28774__$1 = (function (){var statearr_28783 = state_28774;
(statearr_28783[(9)] = inst_28771);

return statearr_28783;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28774__$1,inst_28772);
} else {
if((state_val_28775 === (2))){
var state_28774__$1 = state_28774;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28774__$1,(4),ch);
} else {
if((state_val_28775 === (11))){
var inst_28754 = (state_28774[(8)]);
var inst_28763 = (state_28774[(2)]);
var inst_28751 = inst_28754;
var state_28774__$1 = (function (){var statearr_28784 = state_28774;
(statearr_28784[(7)] = inst_28751);

(statearr_28784[(10)] = inst_28763);

return statearr_28784;
})();
var statearr_28785_28809 = state_28774__$1;
(statearr_28785_28809[(2)] = null);

(statearr_28785_28809[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28775 === (9))){
var inst_28754 = (state_28774[(8)]);
var state_28774__$1 = state_28774;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28774__$1,(11),out,inst_28754);
} else {
if((state_val_28775 === (5))){
var inst_28754 = (state_28774[(8)]);
var inst_28751 = (state_28774[(7)]);
var inst_28758 = cljs.core._EQ_.call(null,inst_28754,inst_28751);
var state_28774__$1 = state_28774;
if(inst_28758){
var statearr_28787_28810 = state_28774__$1;
(statearr_28787_28810[(1)] = (8));

} else {
var statearr_28788_28811 = state_28774__$1;
(statearr_28788_28811[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28775 === (10))){
var inst_28766 = (state_28774[(2)]);
var state_28774__$1 = state_28774;
var statearr_28789_28812 = state_28774__$1;
(statearr_28789_28812[(2)] = inst_28766);

(statearr_28789_28812[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28775 === (8))){
var inst_28751 = (state_28774[(7)]);
var tmp28786 = inst_28751;
var inst_28751__$1 = tmp28786;
var state_28774__$1 = (function (){var statearr_28790 = state_28774;
(statearr_28790[(7)] = inst_28751__$1);

return statearr_28790;
})();
var statearr_28791_28813 = state_28774__$1;
(statearr_28791_28813[(2)] = null);

(statearr_28791_28813[(1)] = (2));


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
});})(c__19830__auto___28803,out))
;
return ((function (switch__19765__auto__,c__19830__auto___28803,out){
return (function() {
var cljs$core$async$state_machine__19766__auto__ = null;
var cljs$core$async$state_machine__19766__auto____0 = (function (){
var statearr_28795 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_28795[(0)] = cljs$core$async$state_machine__19766__auto__);

(statearr_28795[(1)] = (1));

return statearr_28795;
});
var cljs$core$async$state_machine__19766__auto____1 = (function (state_28774){
while(true){
var ret_value__19767__auto__ = (function (){try{while(true){
var result__19768__auto__ = switch__19765__auto__.call(null,state_28774);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19768__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19768__auto__;
}
break;
}
}catch (e28796){if((e28796 instanceof Object)){
var ex__19769__auto__ = e28796;
var statearr_28797_28814 = state_28774;
(statearr_28797_28814[(5)] = ex__19769__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28774);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28796;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19767__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28815 = state_28774;
state_28774 = G__28815;
continue;
} else {
return ret_value__19767__auto__;
}
break;
}
});
cljs$core$async$state_machine__19766__auto__ = function(state_28774){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19766__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19766__auto____1.call(this,state_28774);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19766__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19766__auto____0;
cljs$core$async$state_machine__19766__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19766__auto____1;
return cljs$core$async$state_machine__19766__auto__;
})()
;})(switch__19765__auto__,c__19830__auto___28803,out))
})();
var state__19832__auto__ = (function (){var statearr_28798 = f__19831__auto__.call(null);
(statearr_28798[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19830__auto___28803);

return statearr_28798;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19832__auto__);
});})(c__19830__auto___28803,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args28816 = [];
var len__17587__auto___28886 = arguments.length;
var i__17588__auto___28887 = (0);
while(true){
if((i__17588__auto___28887 < len__17587__auto___28886)){
args28816.push((arguments[i__17588__auto___28887]));

var G__28888 = (i__17588__auto___28887 + (1));
i__17588__auto___28887 = G__28888;
continue;
} else {
}
break;
}

var G__28818 = args28816.length;
switch (G__28818) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28816.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__19830__auto___28890 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19830__auto___28890,out){
return (function (){
var f__19831__auto__ = (function (){var switch__19765__auto__ = ((function (c__19830__auto___28890,out){
return (function (state_28856){
var state_val_28857 = (state_28856[(1)]);
if((state_val_28857 === (7))){
var inst_28852 = (state_28856[(2)]);
var state_28856__$1 = state_28856;
var statearr_28858_28891 = state_28856__$1;
(statearr_28858_28891[(2)] = inst_28852);

(statearr_28858_28891[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28857 === (1))){
var inst_28819 = (new Array(n));
var inst_28820 = inst_28819;
var inst_28821 = (0);
var state_28856__$1 = (function (){var statearr_28859 = state_28856;
(statearr_28859[(7)] = inst_28820);

(statearr_28859[(8)] = inst_28821);

return statearr_28859;
})();
var statearr_28860_28892 = state_28856__$1;
(statearr_28860_28892[(2)] = null);

(statearr_28860_28892[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28857 === (4))){
var inst_28824 = (state_28856[(9)]);
var inst_28824__$1 = (state_28856[(2)]);
var inst_28825 = (inst_28824__$1 == null);
var inst_28826 = cljs.core.not.call(null,inst_28825);
var state_28856__$1 = (function (){var statearr_28861 = state_28856;
(statearr_28861[(9)] = inst_28824__$1);

return statearr_28861;
})();
if(inst_28826){
var statearr_28862_28893 = state_28856__$1;
(statearr_28862_28893[(1)] = (5));

} else {
var statearr_28863_28894 = state_28856__$1;
(statearr_28863_28894[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28857 === (15))){
var inst_28846 = (state_28856[(2)]);
var state_28856__$1 = state_28856;
var statearr_28864_28895 = state_28856__$1;
(statearr_28864_28895[(2)] = inst_28846);

(statearr_28864_28895[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28857 === (13))){
var state_28856__$1 = state_28856;
var statearr_28865_28896 = state_28856__$1;
(statearr_28865_28896[(2)] = null);

(statearr_28865_28896[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28857 === (6))){
var inst_28821 = (state_28856[(8)]);
var inst_28842 = (inst_28821 > (0));
var state_28856__$1 = state_28856;
if(cljs.core.truth_(inst_28842)){
var statearr_28866_28897 = state_28856__$1;
(statearr_28866_28897[(1)] = (12));

} else {
var statearr_28867_28898 = state_28856__$1;
(statearr_28867_28898[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28857 === (3))){
var inst_28854 = (state_28856[(2)]);
var state_28856__$1 = state_28856;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28856__$1,inst_28854);
} else {
if((state_val_28857 === (12))){
var inst_28820 = (state_28856[(7)]);
var inst_28844 = cljs.core.vec.call(null,inst_28820);
var state_28856__$1 = state_28856;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28856__$1,(15),out,inst_28844);
} else {
if((state_val_28857 === (2))){
var state_28856__$1 = state_28856;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28856__$1,(4),ch);
} else {
if((state_val_28857 === (11))){
var inst_28836 = (state_28856[(2)]);
var inst_28837 = (new Array(n));
var inst_28820 = inst_28837;
var inst_28821 = (0);
var state_28856__$1 = (function (){var statearr_28868 = state_28856;
(statearr_28868[(10)] = inst_28836);

(statearr_28868[(7)] = inst_28820);

(statearr_28868[(8)] = inst_28821);

return statearr_28868;
})();
var statearr_28869_28899 = state_28856__$1;
(statearr_28869_28899[(2)] = null);

(statearr_28869_28899[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28857 === (9))){
var inst_28820 = (state_28856[(7)]);
var inst_28834 = cljs.core.vec.call(null,inst_28820);
var state_28856__$1 = state_28856;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28856__$1,(11),out,inst_28834);
} else {
if((state_val_28857 === (5))){
var inst_28824 = (state_28856[(9)]);
var inst_28829 = (state_28856[(11)]);
var inst_28820 = (state_28856[(7)]);
var inst_28821 = (state_28856[(8)]);
var inst_28828 = (inst_28820[inst_28821] = inst_28824);
var inst_28829__$1 = (inst_28821 + (1));
var inst_28830 = (inst_28829__$1 < n);
var state_28856__$1 = (function (){var statearr_28870 = state_28856;
(statearr_28870[(11)] = inst_28829__$1);

(statearr_28870[(12)] = inst_28828);

return statearr_28870;
})();
if(cljs.core.truth_(inst_28830)){
var statearr_28871_28900 = state_28856__$1;
(statearr_28871_28900[(1)] = (8));

} else {
var statearr_28872_28901 = state_28856__$1;
(statearr_28872_28901[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28857 === (14))){
var inst_28849 = (state_28856[(2)]);
var inst_28850 = cljs.core.async.close_BANG_.call(null,out);
var state_28856__$1 = (function (){var statearr_28874 = state_28856;
(statearr_28874[(13)] = inst_28849);

return statearr_28874;
})();
var statearr_28875_28902 = state_28856__$1;
(statearr_28875_28902[(2)] = inst_28850);

(statearr_28875_28902[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28857 === (10))){
var inst_28840 = (state_28856[(2)]);
var state_28856__$1 = state_28856;
var statearr_28876_28903 = state_28856__$1;
(statearr_28876_28903[(2)] = inst_28840);

(statearr_28876_28903[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28857 === (8))){
var inst_28829 = (state_28856[(11)]);
var inst_28820 = (state_28856[(7)]);
var tmp28873 = inst_28820;
var inst_28820__$1 = tmp28873;
var inst_28821 = inst_28829;
var state_28856__$1 = (function (){var statearr_28877 = state_28856;
(statearr_28877[(7)] = inst_28820__$1);

(statearr_28877[(8)] = inst_28821);

return statearr_28877;
})();
var statearr_28878_28904 = state_28856__$1;
(statearr_28878_28904[(2)] = null);

(statearr_28878_28904[(1)] = (2));


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
});})(c__19830__auto___28890,out))
;
return ((function (switch__19765__auto__,c__19830__auto___28890,out){
return (function() {
var cljs$core$async$state_machine__19766__auto__ = null;
var cljs$core$async$state_machine__19766__auto____0 = (function (){
var statearr_28882 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28882[(0)] = cljs$core$async$state_machine__19766__auto__);

(statearr_28882[(1)] = (1));

return statearr_28882;
});
var cljs$core$async$state_machine__19766__auto____1 = (function (state_28856){
while(true){
var ret_value__19767__auto__ = (function (){try{while(true){
var result__19768__auto__ = switch__19765__auto__.call(null,state_28856);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19768__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19768__auto__;
}
break;
}
}catch (e28883){if((e28883 instanceof Object)){
var ex__19769__auto__ = e28883;
var statearr_28884_28905 = state_28856;
(statearr_28884_28905[(5)] = ex__19769__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28856);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28883;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19767__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28906 = state_28856;
state_28856 = G__28906;
continue;
} else {
return ret_value__19767__auto__;
}
break;
}
});
cljs$core$async$state_machine__19766__auto__ = function(state_28856){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19766__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19766__auto____1.call(this,state_28856);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19766__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19766__auto____0;
cljs$core$async$state_machine__19766__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19766__auto____1;
return cljs$core$async$state_machine__19766__auto__;
})()
;})(switch__19765__auto__,c__19830__auto___28890,out))
})();
var state__19832__auto__ = (function (){var statearr_28885 = f__19831__auto__.call(null);
(statearr_28885[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19830__auto___28890);

return statearr_28885;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19832__auto__);
});})(c__19830__auto___28890,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args28907 = [];
var len__17587__auto___28981 = arguments.length;
var i__17588__auto___28982 = (0);
while(true){
if((i__17588__auto___28982 < len__17587__auto___28981)){
args28907.push((arguments[i__17588__auto___28982]));

var G__28983 = (i__17588__auto___28982 + (1));
i__17588__auto___28982 = G__28983;
continue;
} else {
}
break;
}

var G__28909 = args28907.length;
switch (G__28909) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28907.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__19830__auto___28985 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19830__auto___28985,out){
return (function (){
var f__19831__auto__ = (function (){var switch__19765__auto__ = ((function (c__19830__auto___28985,out){
return (function (state_28951){
var state_val_28952 = (state_28951[(1)]);
if((state_val_28952 === (7))){
var inst_28947 = (state_28951[(2)]);
var state_28951__$1 = state_28951;
var statearr_28953_28986 = state_28951__$1;
(statearr_28953_28986[(2)] = inst_28947);

(statearr_28953_28986[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28952 === (1))){
var inst_28910 = [];
var inst_28911 = inst_28910;
var inst_28912 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_28951__$1 = (function (){var statearr_28954 = state_28951;
(statearr_28954[(7)] = inst_28911);

(statearr_28954[(8)] = inst_28912);

return statearr_28954;
})();
var statearr_28955_28987 = state_28951__$1;
(statearr_28955_28987[(2)] = null);

(statearr_28955_28987[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28952 === (4))){
var inst_28915 = (state_28951[(9)]);
var inst_28915__$1 = (state_28951[(2)]);
var inst_28916 = (inst_28915__$1 == null);
var inst_28917 = cljs.core.not.call(null,inst_28916);
var state_28951__$1 = (function (){var statearr_28956 = state_28951;
(statearr_28956[(9)] = inst_28915__$1);

return statearr_28956;
})();
if(inst_28917){
var statearr_28957_28988 = state_28951__$1;
(statearr_28957_28988[(1)] = (5));

} else {
var statearr_28958_28989 = state_28951__$1;
(statearr_28958_28989[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28952 === (15))){
var inst_28941 = (state_28951[(2)]);
var state_28951__$1 = state_28951;
var statearr_28959_28990 = state_28951__$1;
(statearr_28959_28990[(2)] = inst_28941);

(statearr_28959_28990[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28952 === (13))){
var state_28951__$1 = state_28951;
var statearr_28960_28991 = state_28951__$1;
(statearr_28960_28991[(2)] = null);

(statearr_28960_28991[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28952 === (6))){
var inst_28911 = (state_28951[(7)]);
var inst_28936 = inst_28911.length;
var inst_28937 = (inst_28936 > (0));
var state_28951__$1 = state_28951;
if(cljs.core.truth_(inst_28937)){
var statearr_28961_28992 = state_28951__$1;
(statearr_28961_28992[(1)] = (12));

} else {
var statearr_28962_28993 = state_28951__$1;
(statearr_28962_28993[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28952 === (3))){
var inst_28949 = (state_28951[(2)]);
var state_28951__$1 = state_28951;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28951__$1,inst_28949);
} else {
if((state_val_28952 === (12))){
var inst_28911 = (state_28951[(7)]);
var inst_28939 = cljs.core.vec.call(null,inst_28911);
var state_28951__$1 = state_28951;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28951__$1,(15),out,inst_28939);
} else {
if((state_val_28952 === (2))){
var state_28951__$1 = state_28951;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28951__$1,(4),ch);
} else {
if((state_val_28952 === (11))){
var inst_28919 = (state_28951[(10)]);
var inst_28915 = (state_28951[(9)]);
var inst_28929 = (state_28951[(2)]);
var inst_28930 = [];
var inst_28931 = inst_28930.push(inst_28915);
var inst_28911 = inst_28930;
var inst_28912 = inst_28919;
var state_28951__$1 = (function (){var statearr_28963 = state_28951;
(statearr_28963[(11)] = inst_28931);

(statearr_28963[(7)] = inst_28911);

(statearr_28963[(8)] = inst_28912);

(statearr_28963[(12)] = inst_28929);

return statearr_28963;
})();
var statearr_28964_28994 = state_28951__$1;
(statearr_28964_28994[(2)] = null);

(statearr_28964_28994[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28952 === (9))){
var inst_28911 = (state_28951[(7)]);
var inst_28927 = cljs.core.vec.call(null,inst_28911);
var state_28951__$1 = state_28951;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28951__$1,(11),out,inst_28927);
} else {
if((state_val_28952 === (5))){
var inst_28912 = (state_28951[(8)]);
var inst_28919 = (state_28951[(10)]);
var inst_28915 = (state_28951[(9)]);
var inst_28919__$1 = f.call(null,inst_28915);
var inst_28920 = cljs.core._EQ_.call(null,inst_28919__$1,inst_28912);
var inst_28921 = cljs.core.keyword_identical_QMARK_.call(null,inst_28912,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_28922 = (inst_28920) || (inst_28921);
var state_28951__$1 = (function (){var statearr_28965 = state_28951;
(statearr_28965[(10)] = inst_28919__$1);

return statearr_28965;
})();
if(cljs.core.truth_(inst_28922)){
var statearr_28966_28995 = state_28951__$1;
(statearr_28966_28995[(1)] = (8));

} else {
var statearr_28967_28996 = state_28951__$1;
(statearr_28967_28996[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28952 === (14))){
var inst_28944 = (state_28951[(2)]);
var inst_28945 = cljs.core.async.close_BANG_.call(null,out);
var state_28951__$1 = (function (){var statearr_28969 = state_28951;
(statearr_28969[(13)] = inst_28944);

return statearr_28969;
})();
var statearr_28970_28997 = state_28951__$1;
(statearr_28970_28997[(2)] = inst_28945);

(statearr_28970_28997[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28952 === (10))){
var inst_28934 = (state_28951[(2)]);
var state_28951__$1 = state_28951;
var statearr_28971_28998 = state_28951__$1;
(statearr_28971_28998[(2)] = inst_28934);

(statearr_28971_28998[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28952 === (8))){
var inst_28911 = (state_28951[(7)]);
var inst_28919 = (state_28951[(10)]);
var inst_28915 = (state_28951[(9)]);
var inst_28924 = inst_28911.push(inst_28915);
var tmp28968 = inst_28911;
var inst_28911__$1 = tmp28968;
var inst_28912 = inst_28919;
var state_28951__$1 = (function (){var statearr_28972 = state_28951;
(statearr_28972[(7)] = inst_28911__$1);

(statearr_28972[(8)] = inst_28912);

(statearr_28972[(14)] = inst_28924);

return statearr_28972;
})();
var statearr_28973_28999 = state_28951__$1;
(statearr_28973_28999[(2)] = null);

(statearr_28973_28999[(1)] = (2));


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
});})(c__19830__auto___28985,out))
;
return ((function (switch__19765__auto__,c__19830__auto___28985,out){
return (function() {
var cljs$core$async$state_machine__19766__auto__ = null;
var cljs$core$async$state_machine__19766__auto____0 = (function (){
var statearr_28977 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28977[(0)] = cljs$core$async$state_machine__19766__auto__);

(statearr_28977[(1)] = (1));

return statearr_28977;
});
var cljs$core$async$state_machine__19766__auto____1 = (function (state_28951){
while(true){
var ret_value__19767__auto__ = (function (){try{while(true){
var result__19768__auto__ = switch__19765__auto__.call(null,state_28951);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19768__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19768__auto__;
}
break;
}
}catch (e28978){if((e28978 instanceof Object)){
var ex__19769__auto__ = e28978;
var statearr_28979_29000 = state_28951;
(statearr_28979_29000[(5)] = ex__19769__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28951);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28978;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19767__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29001 = state_28951;
state_28951 = G__29001;
continue;
} else {
return ret_value__19767__auto__;
}
break;
}
});
cljs$core$async$state_machine__19766__auto__ = function(state_28951){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19766__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19766__auto____1.call(this,state_28951);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19766__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19766__auto____0;
cljs$core$async$state_machine__19766__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19766__auto____1;
return cljs$core$async$state_machine__19766__auto__;
})()
;})(switch__19765__auto__,c__19830__auto___28985,out))
})();
var state__19832__auto__ = (function (){var statearr_28980 = f__19831__auto__.call(null);
(statearr_28980[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19830__auto___28985);

return statearr_28980;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19832__auto__);
});})(c__19830__auto___28985,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

//# sourceMappingURL=async.js.map?rel=1448369133775