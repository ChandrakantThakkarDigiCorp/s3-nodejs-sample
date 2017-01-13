// Load the SDK and UUID
var AWS = require('aws-sdk');
var proxy = require('proxy-agent');
var config=require("./config.js");
AWS.config.update({region: 'ap-south-1', credentials: {
 accessKeyId : config.credentials.accessKeyId,
 secretAccessKey :config.credentials.secretAccessKey
},
httpOptions: { agent: proxy(config.credentials.proxy)}});
// Create an S3 client
var s3 = new AWS.S3({apiVersion: '2006-03-01'});

// Create a bucket and upload something into it
var bucketName = 'node-sdk-sample-cbt-002';
var keyName="sampleFile.txt";
console.log("Code execution started:");
var params = {Bucket: bucketName, Key: keyName, Body: 'This is Sapmpe Example By Chandrakant Thakkar'};
 s3.putObject(params, function(err, data) {
  if (err)
  console.log(err)
  else
  console.log("Successfully uploaded data to " + bucketName + "/" + keyName);
 });
