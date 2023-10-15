
const elastic = require('elasticsearch');

elasticClient = elastic.Client({
    host: 'https://localhost:9200/'
});

module.exports = elasticClient;