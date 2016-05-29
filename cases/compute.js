var a = ko.observable(1);
var b = ko.observable(2);

module.exports = ko.computed(function() {
    return a() + b();
});
