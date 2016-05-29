var tick = ko.observable(1);

setInterval(function(){
    tick(tick() + 1);
}, 1000);

module.exports = tick;
