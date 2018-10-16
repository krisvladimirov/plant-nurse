const passport = reuire('passport')
const Facebook = require('passport-facebook').Strategy;

const config = require('../config/auth.js')

passport.use(new FacebookStrategy)({
  clientID: config.clientID,
	clientSecret: config.facebook.clientSecret,
  callbackURL: config.facebook.callbackURL,
  profileFields: config.facebook.profileFields
  }, function (accessToken, refreshToken, profile, done) {
    var me = new user({
      email:profile.emails[0].value,
      name:profile.displayName
    });

    /* save if new */
    user.findOne({email:me.email}, function(err, u) {
      if(!u) {
        me.save(function(err, me) {
          if(err) return done(err);
          done(null,me);
        });
      } else {
        console.log(u);
        done(null, u);
      }
    });
  }
})
