var mkPair = function(text) {
    return {
        "text": ko.observable(text)
    };
};
var mkApp = function() {
    return {
        "pairs": ko.observableArray([mkPair("Hello"), mkPair("World")])
    };
};
ko.applyBindings(mkApp());
//@ sourceMappingURL=main.js.map
