const { render } = require("ejs");
const database = require("../routes/db-config");
const express = require('express');
const router = express.Router(); 


exports.booking = (req, res) => {
    res.render("/booking");
};


exports.bookingform = (req, res) => {
    
        const date = req.body.date;
        const startTime = req.body.startTime;
        const endTime = req.body.endTime;
        const uID = req.body.uID;
        const lot = req.body.lot;


        req.session.appdate= date;
        req.session.startTime=startTime;
        req.session.endTime=endTime;

        
      
        console.log(date);
        console.log(uID);
        console.log(startTime);


        if (!date || !startTime || !endTime || !uID){
            res.render("/booking");

        }else{
            res.redirect ("/parkinglot");

            
        

      } 
};

exports.lot = (req,res) =>{
    const lot = req.body.spot;

    req.session.lotnumber= lot;


    console.log("user selected Parking spot: ", lot);
    res.redirect('/confirm');
    
};

exports.confirm = (req, res) => {
    const { lotnumber, appdate, startTime, endTime } = req.session;
    
    console.log("Received data for confirmation:");
    console.log("Lot Number:", lotnumber);
    console.log("Appointment Date:", appdate);
    console.log("Start Time:", startTime);
    console.log("End Time:", endTime);

    res.send("Booking confirmed successfully!");
};





