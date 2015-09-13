Meteor.startup(function () {
    Meteor.methods({
        getHangoutAPI: function () {
            this.unblock();
            return Meteor.http.call('GET', 'https://apis.google.com/js/platform.js');
        }
    });
});