## s3-nodejs-sample
#### Author: Chandrakant Thakkar
##### Created on: 13th January,2017

---
###### These are simple Node.js applications illustrating usage of the AWS SDK for Node.js.To use this just dowload this example and follow below steps.
---

## Requirements

The only requirement of this application is the Node Package Manager. All other
dependencies (including the AWS SDK for Node.js) can be installed with:

     npm install

## Basic Configuration

You need to set up your AWS security credentials before the sample code is able
to connect to AWS. You can do this by creating setting accessKeyId,secretAccessKey,proxy parameters in config.js file.
Open config.js file and set the parameters:

    [default]
    credentials={
     "accessKeyId" : "****",
     "secretAccessKey" :"****",
     "proxy":"****"
    }

See the [Security Credentials](http://aws.amazon.com/security-credentials) page.
It's also possible to configure your credentials via a configuration file or
directly in source. See the AWS SDK for Node.js [Developer Guide](http://docs.aws.amazon.com/AWSJavaScriptSDK/guide/node-configuring.html)
for more information.

"accessKeyId" and "secretAccessKey" are provided when you create an aws account.

Proxy is required if you are using your company's internet else set "localhost" in proxy.

## Running the S3 sample

#### Create Bucket

     node createBucket.js

#### Create File in Bucket

     node createFile.js

#### Get file data to local storage

     node getFileData.js

#### upload image to Bucket

     node uploadFile.js

#### get uploaded image to local storage

     node getUploadedFile.js    

#### List all Buckets from your AWS account

     node listAllBucket.js

#### List all file from Bucket

     node listAllFiles.js

#### Remove file from Bucket

     node deleteFile.js

#### Remove Bucket

     node removeBucket.js
