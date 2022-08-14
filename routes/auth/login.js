const express = require("express");
const route = express.Router();
const { notAuthorize } = require("../../functions/authFunc");
const passport = require("passport");
route.get("/", notAuthorize, (req, res) => {
  res.render("auth/login.ejs", { tabName: "Login Zooper" });
});

function getLocation() {

  const success = (position)=>{
      console.log(position);

  }
  const error = () =>{
      console.log("Unable to get the location");
  }

  global.navigator.geolocation.getCurrentPosition(success, error);
  
}


route.post("/",(req,res)=>{
  getLocation();
  passport.authenticate("local", {
        successRedirect: "/",
        failureRedirect: "/login",
        failureFlash: true,
      })
  // res.redirect("/");
});

  // route.post(
  //   "/",
  //   passport.authenticate("local", {
  //     successRedirect: "/",
  //     failureRedirect: "/login",
  //     failureFlash: true,
  //   })
  // );
module.exports = route;

