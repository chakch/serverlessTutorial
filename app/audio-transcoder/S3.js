const AWS = require('aws-sdk');


const saveFile = (file) => {
    const S3 = new AWS.S3();
    let params = {
        Bucket : "serverless-xke-demo",
        Key : "key.mp3",
        Body : file,
        ContentType:'audio/mp3'
    };
    return S3.putObject(params).promise();
};

exports.saveFile = saveFile;
