const port = 3000;

const express = require('express');
const webpush = require('web-push');
const bodyParser = require('body-parser');
const path = require('node:path'); 

const config = require( path.resolve( __dirname, "./config.js" ) );

const app = express();

app.use(express.json());
app.use(bodyParser.json());

/*** Storing and setting the VAPID keys ***/
const publicVapidKey = "BJG9iwqjbF2e39piOOhYvSUm8u8rV1jdrE60mlke9RabnHCCZn4i9fp5VbuBtRXKsmSMWSAN2mg9JbjPB9FCjpE";
const privateVapidKey = "Xy-934wWUwFojvRRwD-gFC0erge3TmoA9frOc6Ha8Ho";

webpush.setVapidDetails('mailto:danielwaduka@gmail.com', publicVapidKey,privateVapidKey);

app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});

//subscribe route
app.post('/subscribe', (req, res)=>{
    //get push subscription object from the request
    const subscription = req.body;

    //send status 201 for the request
    res.status(201).json({})

    //create paylod: specified the detals of the push notification
    const payload = JSON.stringify({title: 'YooKatale' });

    //pass the object into sendNotification function and catch any error
    webpush.sendNotification(subscription, payload).catch(err=> console.error(err));
});

app.use(express.static(path.join(__dirname, "client")));