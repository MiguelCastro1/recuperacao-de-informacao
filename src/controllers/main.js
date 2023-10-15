/*const elastic = require('elasticsearch');

elasticClient = elastic.Client({
    host: 'https://localhost:9200/',
    httpAuth: 'elastic:yr*Y_wWrpiA+99jEYKQ5'
});
*/
exports.hello = (req, res) => {
    res.redirect("/seach")
};

exports.search = (req, res) => {
    let datas = []
    if (req.params.query) {

        /*const searchText = req.params.query;
        console.log(searchText)
        // Se o texto da busca estiver vazio, retornamos um erro.
        if (!searchText) {
            return res.status(400).json({ "message": "Texto de busca não pode ser vazio." });
        }
        console.log("1")
        elasticClient.search({
            index: 'documentos2',
            body: {
                size: 50,
                query: {
                    wildcard: { "body": `*${searchText}*` }
                }
            }

        })
            .then(response => {
                console.log("2")
                // Aqui, presumimos que os resultados da busca estão no response.hits.hits.
                // Adapte conforme necessário se sua estrutura for diferente.
                const datas = response.hits.hits.map(hit => hit._source);
                console.log("3")
                // Renderiza a página com os resultados da busca
                res.render('main/search2', { seach: searchText, datas: datas });
            })
            .catch(err => {
                console.log("4")
                return res.status(500).json({ "message": err.message || "Erro ao buscar dados." });
            });
            */
        datas = [

            { titulo: "Texte de apoio", body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eget ligula eu lectus lobortis condimentum. Aliquam nonummy auctor massa. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nulla at risus. Quisque purus magna, auctor et, sagittis ac, posuere eu, lectus. Nam mattis, felis ut adipiscing." },
            { titulo: "Texte de apoio", body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eget ligula eu lectus lobortis condimentum. Aliquam nonummy auctor massa. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nulla at risus. Quisque purus magna, auctor et, sagittis ac, posuere eu, lectus. Nam mattis, felis ut adipiscing." },
            { titulo: "Texte de apoio", body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eget ligula eu lectus lobortis condimentum. Aliquam nonummy auctor massa. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nulla at risus. Quisque purus magna, auctor et, sagittis ac, posuere eu, lectus. Nam mattis, felis ut adipiscing." },
            { titulo: "Texte de apoio", body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eget ligula eu lectus lobortis condimentum. Aliquam nonummy auctor massa. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nulla at risus. Quisque purus magna, auctor et, sagittis ac, posuere eu, lectus. Nam mattis, felis ut adipiscing." },
            { titulo: "Texte de apoio", body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eget ligula eu lectus lobortis condimentum. Aliquam nonummy auctor massa. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nulla at risus. Quisque purus magna, auctor et, sagittis ac, posuere eu, lectus. Nam mattis, felis ut adipiscing." },

        ]
        res.render('main/search2', { seach: req.params.query, datas: datas });

    } else {
        datas = [

            { titulo: "Texte de apoio", body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eget ligula eu lectus lobortis condimentum. Aliquam nonummy auctor massa. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nulla at risus. Quisque purus magna, auctor et, sagittis ac, posuere eu, lectus. Nam mattis, felis ut adipiscing." },
            { titulo: "Texte de apoio", body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eget ligula eu lectus lobortis condimentum. Aliquam nonummy auctor massa. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nulla at risus. Quisque purus magna, auctor et, sagittis ac, posuere eu, lectus. Nam mattis, felis ut adipiscing." },

        ]
        res.render('main/search2', { seach: req.params.query, datas: datas });
    }



};
