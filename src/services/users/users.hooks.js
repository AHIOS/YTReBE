const { authenticate } = require('@feathersjs/authentication').hooks;

function customizeGoogleProfile() {
  return function(context) {
    console.log('Customizing Google Profile');
    // If there is a google field they signed up or
    // signed in with google so let's pull the primary account email.
    if (context.data.google) {
      context.arguments.forEach(arg => {
        if ( !!arg.googleId) {
            arg.displayName = arg.google.profile.displayName || '';
            arg.photoUrl = arg.google.profile.photos[0].value || '';
            arg.email = arg.google.profile.emails[0].value || '';
        }
      });
    return Promise.resolve(context);
    };
  }
}


module.exports = {
  before: {
    all: [],
    find: [ authenticate('jwt') ],
    get: [ authenticate('jwt') ],
    create: [ customizeGoogleProfile() ],
    update: [ customizeGoogleProfile(),  authenticate('jwt') ],
    patch: [ customizeGoogleProfile(), authenticate('jwt') ],
    remove: [ authenticate('jwt') ]
  },

  after: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  },

  error: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  }
};
