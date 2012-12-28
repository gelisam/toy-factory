var mkPair = function(text) {
    var expr = ko.observable(text);
    var expected = ko.observable(text);
    return {
        "expr": expr,
        "expected": expected,
        "result": expr,
        "selected": false
    };
};
var mkApp = function() {
    var pairs = ko.observableArray([mkPair("Hello"), mkPair("World")]);
    return {
        "pairs": pairs,
        "selected_pair": value(pairs)[1],
        "new_expr": ko.observable(("")),
        "new_pair": function() {
            var expr = value(this.new_expr);
            var pair = mkPair(expr);
            pairs.push(pair);
            return this.new_expr("");
        },
        "remove": pairs.remove,
        "maybe_remove": function(pair) {
            return (function() {
                if(value(pair.expr) == "") {
                    return pairs.remove(pair);
                } else {
                    return null;
                }
            })();
        }
    };
};
ko.applyBindings(value(mkApp));
//@ sourceMappingURL=main.js.map
