// Load the SDK and UUID
var AWS = require('aws-sdk');
var uuid = require('node-uuid');
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
var bucketName = 'node-sdk-sample-cbt-002';//+ uuid.v4();
console.log("Code execution started:");
s3.createBucket({Bucket: bucketName}, function(err, data) {
 if (err) {
    console.log("Error while create bucket:"+err);
   }else{
   console.log("SuccessFully created Bucket:"+data);
   }
});
