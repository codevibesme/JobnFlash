import passport from "passport";
import { Strategy as GoogleStrategy } from "passport-google-oauth20";
// import { Strategy as GitHubStrategy } from 'passport-github';
// import { Strategy as LinkedInStrategy } from 'passport-linkedin-oauth2';
import User from "./models/User.js";

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  User.findById(id, (err, user) => {
    done(err, user);
  });
});

passport.use(
  new GoogleStrategy(
    {
      clientID:
        "386050768892-7mi0jv2752an8090fjbmgueup82oalf7.apps.googleusercontent.com",
      clientSecret: "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",
      callbackURL: "http://localhost:3000/auth/google/callback",
    },
    (accessToken, refreshToken, profile, done) => {
      User.findOne({ googleId: profile.id }, (err, user) => {
        if (err) return done(err);

        if (!user) {
          user = new User({
            googleId: profile.id,
          });
          user.save((err) => {
            if (err) console.log(err);
            return done(err, user);
          });
        } else {
          return done(err, user);
        }
      });
    }
  )
);

// passport.use(new GitHubStrategy({
//   clientID: 'YOUR_GITHUB_CLIENT_ID',
//   clientSecret: 'YOUR_GITHUB_CLIENT_SECRET',
//   callbackURL: 'http://localhost:3000/auth/github/callback',
// },
// (accessToken, refreshToken, profile, done) => {
//   User.findOne({ githubId: profile.id }, (err, user) => {
//     if (err) return done(err);

//     if (!user) {
//       user = new User({
//         githubId: profile.id,
//       });
//       user.save((err) => {
//         if (err) console.log(err);
//         return done(err, user);
//       });
//     } else {
//       return done(err, user);
//     }
//   });
// }));

// passport.use(new LinkedInStrategy({
//   clientID: 'YOUR_LINKEDIN_CLIENT_ID',
//   clientSecret: 'YOUR_LINKEDIN_CLIENT_SECRET',
//   callbackURL: 'http://localhost:3000/auth/linkedin/callback',
// },
// (accessToken, refreshToken, profile, done) => {
//   User.findOne({ linkedinId: profile.id }, (err, user) => {
//     if (err) return done(err);

//     if (!user) {
//       user = new User({
//         linkedinId: profile.id,
//       });
//       user.save((err) => {
//         if (err) console.log(err);
//         return done(err, user);
//       });
//     } else {
//       return done(err, user);
//     }
//   });
// }));

export default passport;
