var hangoutsWidgetsLoadedCallback = function () {
    Session.set('hangoutsWidgetsLoaded', true);
};

var hangoutsWidgetsErrorCallback = function (error) {
    Session.set('hangoutsWidgetsLoaded', false);
    console.log(error);
};

//Generate a script tag
var script = document.createElement('script');
script.type = 'text/javascript';
script.src = 'https://apis.google.com/js/platform.js';
script.onload = hangoutsWidgetsLoadedCallback;
script.onerror = hangoutsWidgetsErrorCallback;

Meteor.startup(function () {
    //Load the script tag
    var head = document.getElementsByTagName('head')[0];
    head.appendChild(script);
});

UI.registerHelper("SEql", function (key, val) {
    return Session.equals(key, val);
});