const vogels = require('../../../config/vogels');
const Joi = require('joi');

const Article = vogels.define('article', {
    hashKey: 'id',
    timestamps: true,
    schema: {
        id: Joi.string(),
        description: Joi.string(),
        title: Joi.string(),
        link: Joi.string(),
        date: Joi.date()
    },
    tableName: 'article'
});


module.exports = Article;
