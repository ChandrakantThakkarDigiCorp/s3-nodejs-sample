var s3BucketMgt=require("s3-nodejs-sample");
var config=require("./config.js");
var bucketName="match-media-cbt";
var fileName="sampleFile.txt";
var fileContents="This is demo created by Chandrakant Thakkar."
var fileToUpload = "D:/gitHub/awt-nodejs-sample/s3-nodejs-sample/logo.jpg";

 // s3BucketMgt.createBucket(bucketName,config,function(data){
//  if(data.status==false){
//   console.log("Error in Bucket Creation:"+data.error);
//  }else{
//   console.log("Bucket Created");
//  }
// });
//
// s3BucketMgt.createFile(bucketName,fileName,fileContents,config,function(data){
//  if(data.status==false){
//   console.log("Error in File Creation:"+data.error);
//  }else{
//   console.log("File Created in Bucket.");
//  }
// });

// s3BucketMgt.uploadFile(bucketName,fileToUpload,null,config,function(data){
//  if(data.status==false){
//   console.log("Error in Upload file:"+data.error);
//  }else{
//   console.log("File Uploaded in Bucket.");
//  }
// });

// s3BucketMgt.getUploadedFile(bucketName,"logo.jpg",null,config,function(data){
//  if(data.status==false){
//   console.log("Error in getting uploaded File:"+data.error);
//  }else{
//   console.log("File created on Local.");
//  }
// });

// s3BucketMgt.getObject(bucketName,"logo1.jpg",config,function(data){
//  if(data.status==false){
//   console.log("Error in getting uploaded File:"+data.error.code);
//  }else{
//   console.log("Content of File:"+data.content.Body);
//  }
// });

// s3BucketMgt.getFileData(bucketName,fileName,null,config,function(data){
//  if(data.status==false){
//   console.log("Error in getting File data:"+data.error);
//  }else{
//   console.log("File created on Local.");
//  }
// });

// s3BucketMgt.listAllBucket(config,function(data){
//  if(data.status==false){
//   console.log("Error in getting list of Buckets:"+data.error);
//  }else{
//   console.log("Buckets:"+JSON.stringify(data.content));
//  }
// });

// s3BucketMgt.listAllFiles(bucketName,config,function(data){
//  if(data.status==false){
//   console.log("Error in getting list of Files:"+data.error);
//  }else{
//   console.log("Files In Bucket:"+(data.content));
//  }
// });

// s3BucketMgt.removeFile(bucketName,"logo.jpg",config,function(data){
//  if(data.status==false){
//   console.log("Error in Remove file:"+data.error);
//  }else{
//   console.log("File removed on from Bucket:"+bucketName);
//  }
// });

// s3BucketMgt.removeBucket(bucketName,config,function(data){
//  if(data.status==false){
//   console.log("Error in Remove Bucket:"+data.error);
//  }else{
//   console.log("Bucket is removed:"+bucketName);
//  }
// });

// s3BucketMgt.getBucketPermission(bucketName,config,function(data){
//  if(data.status==false){
//   console.log("Error in getting list of Buckets:"+data.error);
//  }else{
//   console.log("Buckets:"+JSON.stringify(data.content));
//  }
// });

// s3BucketMgt.isBucketExist(bucketName,config,function(data){
//  if(data.status==false){
//   console.log("error in isBucketExist:"+data.error);
//  }else{
//   console.log("Bucket exist:"+data.isExist);
//  }
// });
