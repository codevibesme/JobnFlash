import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import multer from "multer";
import helmet from "helmet";
import morgan from "morgan";
import path from "path";
import { fileURLToPath } from "url";
import authRoutes from "./routes/auth.js";
import { register } from "./controllers/auth.js";
import passport from "./passport_config.js";
import session from "express-session";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config();
var whitelist = [
  "http://localhost:3000",
  "http://localhost:8000/auth/google",
  "https://accounts.google.com/o/oauth2/v2/auth",
  "https://accounts.google.com/o/oauth2/v2/auth?response_type=code&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2Fauth%2Fgoogle%2Fcallback&scope=profile&client_id=386050768892-7mi0jv2752an8090fjbmgueup82oalf7.apps.googleusercontent.com",
];
const corsOptions = {
  credentials: true, // Allow cookies to be sent with the request
  origin: (origin, callback) => {
    // Check if the origin is in the whitelist, or if it's undefined (e.g., from same origin)
    if (whitelist.indexOf(origin) !== -1 || !origin) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
};
const app = express();
app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(morgan("common"));
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors(corsOptions));
app.use("/assets", express.static(path.join(__dirname, "public/assets")));

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "public/assets");
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage });

//passport setup
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: true,
    saveUninitialized: true,
  })
);
app.use(passport.initialize());
app.use(passport.session());

// Routes with File uploaf
app.post("/auth/register", upload.single("picture"), register);

//Routes
app.use("/auth", authRoutes);

// Google authentication route
app.get(
  "/auth/google",
  passport.authenticate("google", {
    scope: ['profile','email'] 
  })
);

app.get(
  "/auth/google/callback",
  passport.authenticate("google", {
    failureRedirect: "/",
  }),
  (req, res) => {
    res.redirect("/");
  }
);


//  GitHub authentication route
// app.get('/auth/github',
//   passport.authenticate('github')
// );

// app.get('/auth/github/callback',
//   passport.authenticate('github', { failureRedirect: '/' }),
//   (req, res) => {
//     res.redirect('/');
//   }
// );

//  LinkedIn authentication route
// app.get('/auth/linkedin',
//   passport.authenticate('linkedin', { state: 'SOME_STATE' })
// );

// app.get('/auth/linkedin/callback',
//   passport.authenticate('linkedin', { failureRedirect: '/' }),
//   (req, res) => {
//     res.redirect('/');
//   }
// );

const PORT = process.env.PORT || 6001;

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    app.listen(PORT, () => console.log(`server port: ${PORT}`));
  })
  .catch((error) => console.log(`${error} did not connect`));
