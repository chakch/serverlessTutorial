'use strict';
const reader = require('./RssReader');
const Polly = require('./Polly');
const S3 = require('./S3');
const Fs = require('fs');
const uuid = require('uuid');



module.exports.hello = (event, context, callback) => {
   reader.read()
       .then((text) => {
           console.log('---------------');
           console.log(text);
            /*return Polly.convertTextToVoice(text)
                    .then(data =>{
                        console.log(data);
                        if (data.AudioStream instanceof Buffer) {
                    const filePath = "/tmp/" + uuid.v4() + ".mp3";

                    Fs.writeFile(filePath, data.AudioStream, function(err) {
                        if (err) {
                            console.log('error');
                        }
                    });
                            S3.saveFile(data.AudioStream)
                                .then(() => console.log("save on S3 ok"))
                                .catch((e) => console.log("eeee",e));
                             }
                     })
                     .catch((e) => console.log(e));*/
    })
    .catch((e) => console.log(e));
  callback(null, 'feed read ok');
};
