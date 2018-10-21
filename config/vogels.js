'use strict';

const AWS = require('aws-sdk');
const vogels = require('vogels-promisified');


new AWS.CredentialProviderChain().resolve((err, cred)=>{
    if (err) {
        throw err;
    }
    vogels.AWS.config.credentials = cred;
});
//vogels.AWS.config.update({"region": config.get('aws.region')});
vogels.AWS.config.update({"region": 'us-east-1'});
console.log('vogels.AWS.config',vogels.AWS.config.region);
module.exports = vogels;
