Template.simpleHangoutButton.events({
   'click #render-simple-hangout': function() {
        Meteor.call('renderSimpleHangout');
    }
});