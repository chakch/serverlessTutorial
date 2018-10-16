'use strict';
const reader = require('./RssReader');
const Polly = require('./Polly');
const S3 = require('./S3');
const Fs = require('fs');
const uuid = require('uuid');
const article = require('./model/article');



module.exports.hello = (event, context, callback) => {
    reader.read()
        .then((result) => {
            result.forEach(art => {
                article.create({...art, id: uuid.v4()}, function (err,acc) {
                    console.log(err,acc);
                })
            });
        })
        .catch((e) => console.log(e));
  callback(null, 'feed read ok');
};
