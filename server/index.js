import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors"
import dotenv from "dotenv";
import multer from "multer";
import helmet from "helmet";
import morgan from "morgan";
import path from "path";
import { fileURLToPath } from "url";
import authRoutes from "./routes/auth.js"
import { register } from "./controllers/auth.js";
import passport from './passport_config.js';
import session from 'express-session';


const __filename =fileURLToPath(import.meta.url);
const __dirname=path.dirname(__filename);



dotenv.config();

const app=express();
app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({policy:"cross-origin"}));
app.use(morgan("common"));
app.use(bodyParser.json({limit: "30mb", extended:true}));
app.use(bodyParser.urlencoded({limit: "30mb", extended:true}));
app.use(cors());
app.use("/assets", express.static(path.join(__dirname, "public/assets")));

const storage = multer.diskStorage({
    destination: function(req,file,cb){
        cb(null,"public/assets")
    },
    filename: function(req,file,cb){
        cb(null,file.originalname)
    }
});

const upload =multer({storage});

//passport setup
app.use(session({ secret: process.env.SESSION_SECRET, resave: true, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());

// Routes with File uploaf
app.post("/auth/register",upload.single("picture"),register)

//Routes
app.use("/auth",authRoutes)

// Google authentication route
app.get('/auth/google',
  passport.authenticate('google', { scope: ['https://www.googleapis.com/auth/plus.login'] })
);

app.get('/auth/google/callback',
  passport.authenticate('google', { failureRedirect: '/' }),
  (req, res) => {
    res.redirect('/');
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

mongoose.connect(process.env.MONGO_URL,{
    useNewUrlParser:true,
    useUnifiedTopology:true,
}).then(()=>{
    app.listen(PORT,()=> console.log(`server port: ${PORT}`));
}).catch((error)=> console.log(`${error} did not connect`))


