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

//// API connection
//if (Meteor.isServer) {
//    Meteor.methods({
//        hangoutsResult: function () {
//            this.unblock();
//            return Meteor.http.call("GET", "https://apis.google.com/js/platform.js");
//        }
//    });
//}
//
////invoke the server method
//if (Meteor.isClient) {
//    Meteor.call("hangoutsResult", function(error, results) {
//        console.log('this worked');
//        console.log(results.content); //results.data should be a JSON object
//    });
//}