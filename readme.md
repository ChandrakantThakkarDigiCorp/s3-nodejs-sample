## s3-nodejs-sample
#### Author: Chandrakant Thakkar
##### Created on: 13th January,2017

---
###### This is a node module illustrating usage of the AWS SDK for Node.js.To use this just dowload this module,create config.js file to set credentials and use below functions.
---

## Requirements

The only requirement of this application is the Node Package Manager. All other
dependencies (including the AWS SDK for Node.js) can be installed with:

     npm install

## Basic Configuration

You need to set up your AWS security credentials before the sample code is able
to connect to AWS. You can do this by creating setting accessKeyId,secretAccessKey,proxy parameters in config.js file.
Open config.js file and set the parameters:

    credentials={
     "accessKeyId" : "****",
     "secretAccessKey" :"****",
     "proxy":"****"
    }
    module.exports={
     credentials:credentials
    }

See the [Security Credentials](http://aws.amazon.com/security-credentials) page.
It's also possible to configure your credentials via a configuration file or
directly in source. See the AWS SDK for Node.js [Developer Guide](http://docs.aws.amazon.com/AWSJavaScriptSDK/guide/node-configuring.html)
for more information.

"accessKeyId" and "secretAccessKey" are provided when you create an aws account.

Proxy is required if you are using your company's internet else set "localhost" in proxy.

## Running the S3 sample

     node sampleFile.js

## List of Functions
1. createBucket()
2. createFile()
3. uploadFile()
4. getUploadedFile()
5. getFileData()
6. listAllBucket()
7. listAllFiles()
8. removeFile()
9. removeBucket()
10. getBucketPermission()
11. isBucketExist()
12. getObject()

#### 1.  createBucket()


* _Example_

```javascript
var s3BucketMgt=require("s3-nodejs-sample");
var config=require("./config.js");
var bucketName="node-sdk-sample-cbt-003";
s3BucketMgt.createBucket(bucketName,config,function(data){
 if(data.status==false){
  console.log("Error in Bucket Creation:"+data.error);
 }else{
  console.log("Bucket Created");
 }
});
```

#### 2.  createFile()


* _Example_

```javascript
s3BucketMgt=require("s3-nodejs-sample");
var config=require("./config.js");
var bucketName="node-sdk-sample-cbt-003";
var fileName="sampleFile.txt";
var fileContents="This is demo created by Chandrakant Thakkar.";
s3BucketMgt.createFile(bucketName,fileName,fileContents,config,function(data){
 if(data.status==false){
  console.log("Error in File Creation:"+data.error);
 }else{
  console.log("File Created in Bucket.");
 }
});
```

#### 3.  uploadFile()


* _Example_

```javascript
s3BucketMgt=require("s3-nodejs-sample");
var config=require("./config.js");
var bucketName="node-sdk-sample-cbt-003";
var fileToUpload = "D:/gitHub/awt-nodejs-sample/s3-nodejs-sample/logo.jpg";
s3BucketMgt.uploadFile(bucketName,fileToUpload,"null",config,function(data){
 if(data.status==false){
  console.log("Error in Upload file:"+data.error);
 }else{
  console.log("File Uploaded in Bucket.");
 }
});

or
//CBT:create file with specific name
var fileToCreate="sample.jpg"
s3BucketMgt.uploadFile(bucketName,fileToUpload,fileToCreate,config,function(data){
 if(data.status==false){
  console.log("Error in Upload file:"+data.error);
 }else{
  console.log("File Uploaded in Bucket.");
 }
});

```

#### 4.  getUploadedFile()


* _Example_

```javascript
s3BucketMgt=require("s3-nodejs-sample");
var config=require("./config.js");
var bucketName="node-sdk-sample-cbt-003";
s3BucketMgt.getUploadedFile(bucketName,"logo.jpg","null",config,function(data){
 if(data.status==false){
  console.log("Error in getting uploaded File:"+data.error);
 }else{
  console.log("File created on Local.");
 }
});
```

#### 5.  getFileData()


* _Example_

```javascript
s3BucketMgt=require("s3-nodejs-sample");
var config=require("./config.js");
var bucketName="node-sdk-sample-cbt-003";
var fileName="sampleFile.txt";
s3BucketMgt.getFileData(bucketName,fileName,"null",config,function(data){
 if(data.status==false){
  console.log("Error in getting File data:"+data.error);
 }else{
  console.log("File created on Local.");
 }
});
```

#### 6.  listAllBucket()


* _Example_

```javascript
s3BucketMgt=require("s3-nodejs-sample");
var config=require("./config.js");
s3BucketMgt.listAllBucket(config,function(data){
 if(data.status==false){
  console.log("Error in getting list of Buckets:"+data.error);
 }else{
  console.log("Buckets:"+JSON.stringify(data.content));
 }
});
```

#### 7.  listAllFiles()


* _Example_

```javascript
s3BucketMgt=require("s3-nodejs-sample");
var config=require("./config.js");
var bucketName="node-sdk-sample-cbt-003";
s3BucketMgt.listAllFiles(bucketName,config,function(data){
 if(data.status==false){
  console.log("Error in getting list of Files:"+data.error);
 }else{
  console.log("Files In Bucket:"+(data.content));
 }
});
```

#### 8.  removeFile()


* _Example_

```javascript
s3BucketMgt=require("s3-nodejs-sample");
var config=require("./config.js");
var bucketName="node-sdk-sample-cbt-003";
var fileName="sampleFile.txt";
s3BucketMgt.removeFile(bucketName,fileName,config,function(data){
 if(data.status==false){
  console.log("Error in Remove file:"+data.error);
 }else{
  console.log("File removed on from Bucket:"+bucketName);
 }
});
```

#### 9.  removeBucket()


* _Example_

```javascript
s3BucketMgt=require("s3-nodejs-sample");
var config=require("./config.js");
var bucketName="node-sdk-sample-cbt-003";
s3BucketMgt.removeBucket(bucketName,config,function(data){
 if(data.status==false){
  console.log("Error in Remove Bucket:"+data.error);
 }else{
  console.log("Bucket is removed:"+bucketName);
 }
});
```

#### 10.  getBucketPermission()


* _Example_

```javascript
s3BucketMgt=require("s3-nodejs-sample");
var config=require("./config.js");
var bucketName="node-sdk-sample-cbt-003";
s3BucketMgt.getBucketPermission(bucketName,config,function(data){
 if(data.status==false){
  console.log("Error in getting list of Buckets:"+data.error);
 }else{
  console.log("Buckets:"+JSON.stringify(data.content));
 }
});
```

#### 11.  isBucketExist()


* _Example_

```javascript
s3BucketMgt=require("s3-nodejs-sample");
var config=require("./config.js");
var bucketName="node-sdk-sample-cbt-003";
s3BucketMgt.isBucketExist(bucketName,config,function(data){
 if(data.status==false){
  console.log("error in isBucketExist:"+data.error);
 }else{
  console.log("Bucket exist:"+data.isExist);
 }
});
```

#### 12.  getObject()


* _Example_

```javascript
//CBT:It will return binary format of data
s3BucketMgt=require("s3-nodejs-sample");
var config=require("./config.js");
var bucketName="node-sdk-sample-cbt-003";
var fileName="logo.jpg";
s3BucketMgt.getObject(bucketName,fileName,config,function(data){
 if(data.status==false){
  console.log("error in getObject:"+data.error.code);
 }else{
  console.log("Object data in Binary:"+data.content.Body);
 }
});
```
