Meteor.methods({hangout: function (err, value) {
    this.unblock();
    if (err) {
        console.log(err);
    } else {
        try {
            var result = HTTP.call('GET', 'https://apis.google.com/js/platform.js');
            return result;
        } catch (err) {
            // Got a network error, time-out or HTTP error in the 400 or 500 range.
            return false;
        }
    }
}});

var Hangout = Meteor.call('hangout');


// Hangout Methods

Meteor.methods({
    renderSimpleHangout: function () {
        console.log('render simple hangout');
        console.log(Hangout);
    }
});