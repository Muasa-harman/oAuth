const express = require ('express');
const cookieSession = require("cookie-session")
const session = require('express-session')
const passport = require('passport');
require("dotenv").config();
require("./passport");
const authRoute = require("./routes/auth");
const cors = require("cors");
const app = express();

// middleware
app.use(cookieSession({name:"session",
keys:["keysession"],
maxAge: 24*60*60*1000
}));
app.use(passport.initialize());
app.use(passport.session());
app.use(cors({
    origin: "http://localhost:3000",
    methods:"GET,POST,PUT,DELETE",
    credentials:true,
}))

app.use("/auth",authRoute);

app.listen(process.env.PORT,()=>{
    console.log("server is")
});