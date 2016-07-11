"use strict";
function invoke(f, o) {
    return function (e) { return f(o(e)); };
}
exports.invoke = invoke;
function get(p) {
    return function (o) { return o[p]; };
}
exports.get = get;
function comp(f, g) {
    return function (x) { return f(g(x)); };
}
exports.comp = comp;
