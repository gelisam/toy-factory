var id = function(x) {
    return x;
};
var map = function(f, xs) {
    var ys = [];
    var step = function(i) {
        return (function() {
            if(i == cast(xs).length) {
                return ys;
            } else {
                var x = xs[i];
                var y = f(x);
                cast(ys).push(y);
                return step((i + 1));
            }
        })();
    };
    return step(0);
};
var fold = function(f, y0, xs) {
    var step = function(i, y) {
        return (function() {
            if(i == cast(xs).length) {
                return y;
            } else {
                var x = xs[i];
                return step((i + 1), f(y, x));
            }
        })();
    };
    return step(0, y0);
};
//@ sourceMappingURL=prelude.js.map
