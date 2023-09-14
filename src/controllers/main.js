
exports.hello = (req,res) => {
    res.redirect("/seach")
};

exports.search = (req,res) => {
    let datas = []
    if(req.params.query){
        datas = [
            {titulo: "Texte",texto: req.params.query},
            {titulo: "Texte",texto: req.params.query},
            {titulo: "Texte",texto: req.params.query},
            {titulo: "Texte",texto: req.params.query},
            {titulo: "Texte",texto: req.params.query},
        ]
    }else{
        datas = [
            {titulo: "Texte",texto: "lorem ipsum"},
            {titulo: "Texte",texto: "lorem ipsum"},
            {titulo: "Texte",texto: "lorem ipsum"},
            {titulo: "Texte",texto: "lorem ipsum"},
            {titulo: "Texte",texto: "lorem ipsum"},
            {titulo: "Texte",texto: "lorem ipsum"},
            {titulo: "Texte",texto: "lorem ipsum"},
            {titulo: "Texte",texto: "lorem ipsum"},
            {titulo: "Texte",texto: "lorem ipsum"},
            {titulo: "Texte",texto: "lorem ipsum"},
            {titulo: "Texte",texto: "lorem ipsum"},
            {titulo: "Texte",texto: "lorem ipsum"},
            {titulo: "Texte",texto: "lorem ipsum"},
            {titulo: "Texte",texto: "lorem ipsum"},
            {titulo: "Texte",texto: "lorem ipsum"},
            {titulo: "Texte",texto: "lorem ipsum"},
            {titulo: "Texte",texto: "lorem ipsum"},
            {titulo: "Texte",texto: "lorem ipsum"},
            {titulo: "Texte",texto: "lorem ipsum"},
            {titulo: "Texte",texto: "lorem ipsum"},
            {titulo: "Texte",texto: "lorem ipsum"},
            {titulo: "Texte",texto: "lorem ipsum"},
            {titulo: "Texte",texto: "lorem ipsum"},
            
        ]
    }

    
    res.render('main/search2', { seach :req.params.query, datas: datas });
};
