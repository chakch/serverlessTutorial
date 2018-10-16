const feedparser = require('feedparser-promised');
const AWS_FEED = 'https://aws.amazon.com/en/new/feed/';
extractor = require('unfluff');
var http = require('http');
const entities = require('html-entities').AllHtmlEntities;
const FeedParser = require('feedparser');
const request = require('request');
const striptags = require('striptags');

/*
const read = function(){
    let req = request(AWS_FEED);
    let feedparser = new FeedParser(null);
    let items = [];
    req.on('response', function (res) {
        let stream = this;
        if (res.statusCode === 200) {
            stream.pipe(feedparser);
        } else {
            return stream.emit('error', new Error('Bad status code'));
        }
    });
    req.on('error', function (err) {
        return callback(err, null);
    });
    feedparser.on('readable', function() {
        let stream = this;
        let item;
        while (item = stream.read()) {
            let feedItem = {};
            // Process feedItem item and push it to items data if it exists
            if (item['title'] && item['date']) {
                feedItem['title'] = item['title'];
                feedItem['title'] = entities.decode(striptags(feedItem['title']));
                feedItem['title'] = feedItem['title'].trim();
                feedItem['title'] = feedItem['title'].replace(/[&]/g,'and').replace(/[<>]/g,'');

                feedItem['date'] = new Date(item['date']).toUTCString();

                if (item['description']) {
                    feedItem['description'] = item['description'];
                    feedItem['description'] = entities.decode(striptags(feedItem['description']));
                    feedItem['description'] = feedItem['description'].trim();
                    feedItem['description'] = feedItem['description'].replace(/[&]/g,'and').replace(/[<>]/g,'');
                }

                if (item['link']) {
                    feedItem['link'] = item['link'];
                }

                if (item['image'] && item['image'].url) {
                    feedItem['imageUrl'] = item['image'].url;
                }
                items.push(feedItem);
            }
        }
    });
    feedparser.on('finish', function () {
        return items;
    })
};
*/


const read = async () => {
    const result = new Array();
    const items = await feedparser.parse(AWS_FEED);

    items.forEach(async item => {
        const feedItem ={};
        if (item['title'] && item['date'] && item['description'] ) {
            feedItem['title'] = item['title'];
            feedItem['title'] = entities.decode(striptags(feedItem['title']));
            feedItem['title'] = feedItem['title'].trim();
            feedItem['title'] = feedItem['title'].replace(/[&]/g,'and').replace(/[<>]/g,'');

            feedItem['date'] = new Date(item['date']).toUTCString();

            if (item['description']) {
                feedItem['description'] = item['description'];
                feedItem['description'] = entities.decode(striptags(feedItem['description']));
                feedItem['description'] = feedItem['description'].trim();
                feedItem['description'] = feedItem['description'].replace(/[&]/g,'and').replace(/[<>]/g,'');
            }

            if (item['link']) {
                feedItem['link'] = item['link'];
            }

            if (item['image'] && item['image'].url) {
                feedItem['imageUrl'] = item['image'].url;
            }
            result.push(feedItem);
        }
    });

    return result;
};
exports.read = read;

