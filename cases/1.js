var a = ko.observable(1);
var foo = ko.observable(2);
var c = ko.observable(3);
var d = ko.observable(4);

var bar = ko.computed(function() {
    return a() + d();
});

module.exports = ko.computed(function() {
    if (a()) {
        return foo() + bar();
    } else {
        return c() + d();
    }
});
