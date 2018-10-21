
const polly = require('./Polly');
const S3 = require('./S3');
module.exports.hello = (event, context, callback) => {

    event.Records.forEach( record => {
        const description = record.dynamodb.NewImage.Message.S;
        polly.convertTextToVoice(description)
            .then(audioStream => S3.saveFile(audioStream))
            .catch((e) , console.log('error',e));
    });

    callback(null, 'audio transcoder ok');

};
