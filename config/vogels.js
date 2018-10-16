'use strict';

let AWS = require('aws-sdk');
let vogels = require('vogels-promisified');


new AWS.CredentialProviderChain().resolve((err, cred)=>{
    if (err) {
        throw err;
    }
    vogels.AWS.config.credentials = cred;
});
//vogels.AWS.config.update({"region": config.get('aws.region')});

module.exports = vogels;
