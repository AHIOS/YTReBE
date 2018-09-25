const { authenticate } = require('@feathersjs/authentication').hooks;

const {
  hashPassword, protect
} = require('@feathersjs/authentication-local').hooks;

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
    create: [ hashPassword(), customizeGoogleProfile() ],
    update: [ hashPassword(), customizeGoogleProfile(),  authenticate('jwt') ],
    patch: [ hashPassword(), customizeGoogleProfile(), authenticate('jwt') ],
    remove: [ authenticate('jwt') ]
  },

  after: {
    all: [ 
      // Make sure the password field is never sent to the client
      // Always must be the last hook
      protect('password')
    ],
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
