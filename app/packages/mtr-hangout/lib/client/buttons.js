Template.simpleHangoutButton.onRendered(function() {
    gapi.hangout.render('hangout', {
        'topic': 'javascript',
        'render': 'createhangout',
        'initial_apps': [
            { app_id : 'youtube' }
        ]
    });
});

Template.simpleHangoutButton.events({
   'click #render-simple-hangout': function() {
        Meteor.call('renderSimpleHangout');
    }
});