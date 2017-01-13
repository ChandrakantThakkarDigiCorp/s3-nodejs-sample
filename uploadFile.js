// Load the AWS SDK for Node.js
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
// call S3 to retrieve upload file to specified bucket
var uploadParams = {Bucket: "node-sdk-sample-cbt-002", Key: '', Body: ''};
var file = "D:/gitHub/awt-nodejs-sample/s3-nodejs-sample/logo.jpg";

var fs = require('fs');
var fileStream = fs.createReadStream(file);
fileStream.on('error', function(err) {
  console.log('File Error:', err);
});
uploadParams.Body = fileStream;

var path = require('path');
uploadParams.Key = path.basename(file);

// call S3 to retrieve upload file to specified bucket
s3.upload (uploadParams, function (err, data) {
  if (err) {
    console.log("Error upload File:", err);
  } if (data) {
    console.log("Upload Success:", data.Location);
  }
});
