// Hangout Methods

Meteor.methods({
    renderSimpleHangout: function () {
        console.log('render simple hangout')

        gapi.hangout.render('hangout', {
            'topic': 'hats',
            'render': 'createhangout',
            'initial_apps': [
                { app_id : 'youtube' }
            ]
        });

    }
});