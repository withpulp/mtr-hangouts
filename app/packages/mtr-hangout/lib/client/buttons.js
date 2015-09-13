Template.simpleHangoutButton.onRendered(function() {
    Meteor.call('Hangout', function(error, results) {
        console.log(results.content); //results.data should be a JSON object
    });
});

Template.simpleHangoutButton.events({
   'click #render-simple-hangout': function() {
        Meteor.call('renderSimpleHangout');
    }
});