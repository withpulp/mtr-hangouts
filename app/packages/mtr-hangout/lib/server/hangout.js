// Hangout Methods

Meteor.methods({
    Hangout: function () {
        this.unblock();
        return Meteor.http.call('GET', 'https://apis.google.com/js/platform.js');
    },
    renderSimpleHangout: function () {
        console.log('open hangout');
    }
});