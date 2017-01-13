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
var s3 = new AWS.S3({apiVersion: '2006-03-01'});

var allKeys = [];
s3.listObjects({Bucket: "node-sdk-sample-cbt-002", Marker: ""}, function(err, data){
 if(err){
  console.log("Error occured:"+err);
 }else{
  data.Contents.forEach(function(data){
   allKeys.push(data.Key);
  });
  console.log("All Files:"+allKeys);
 }
});
