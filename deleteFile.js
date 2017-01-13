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

s3.deleteObject({Bucket:"node-sdk-sample-cbt-002",Key:"sampleFile.txt"}, function(err, data) {
  if (err) console.log("Error:",err, err.stack); // an error occurred
  else     console.log("Deleted File:",data);           // successful response
});
