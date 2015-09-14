Template.simpleHangoutButton.onCreated(function() {
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = 'https://apis.google.com/js/platform.js';

    document.getElementsByTagName('head')[0].appendChild(script);
});

Template.simpleHangoutButton.onRendered(function() {
    //Meteor.call('Hangout', function(error, results) {
    //    console.log(results.content);
    //});
});

Template.simpleHangoutButton.events({
   'click #render-simple-hangout': function() {
        Meteor.call('renderSimpleHangout');
    }
});