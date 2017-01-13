// Load the SDK for JavaScript
var AWS = require('aws-sdk');
var proxy = require('proxy-agent');

var config=require("./config.js");
AWS.config.update({region: 'ap-south-1', credentials: {
 accessKeyId : config.credentials.accessKeyId,
 secretAccessKey :config.credentials.secretAccessKey
},
httpOptions: { agent: proxy(config.credentials.proxy)}});

// Create S3 service object
s3 = new AWS.S3({apiVersion: '2006-03-01'});

// Call S3 to list current buckets
s3.listBuckets(function(err, data) {
   if (err) {
      console.log("Error", err);
   } else {
      console.log("Bucket List", data.Buckets);
   }
});
