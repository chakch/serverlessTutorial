const feedparser = require('feedparser-promised');
const AWS_FEED = 'https://aws.amazon.com/fr/new/feed/';
extractor = require('unfluff');
var http = require('http');


/*const read = function(){
    return feedparser.parse(AWS_FEED)
        .then(items => {
            items.forEach(item => console.log('title:', item.title));
            const regExString = /(<([^>]+)>)/ig; //create reg ex and let it loop (g)
            contentString = items[0].description;// get text from node (no longer an object but string.

            contentString = contentString.replace(regExString, "");
            console.log(contentString);
            return contentString;
        }).catch(console.error);
};*/
let Parser = require('rss-parser');
let parser = new Parser();

const read = async () => {

    let feed = await parser.parseURL(AWS_FEED);
    console.log(feed.title);

    feed.items.forEach(item => {
        console.log(item.title + ':' + item.link)
        //console.log(item);
        data = extractor(item.link, 'en');
        console.log(data);
    });

};
exports.read = read;

