var mkPair = function(text) {
    return {
        "expr": ko.observable(text),
        "expected": ko.observable(text)
    };
};
var mkApp = function() {
    var pairs = ko.observableArray([mkPair("Hello"), mkPair("World")]);
    return {
        "pairs": pairs,
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
