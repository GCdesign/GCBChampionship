module.exports = function(app){
    app.get('/campeonato/avaliacao', function(req,res){
        app.src.controllers.avaliacao.campeonato_avaliacao(app,req,res)
    })
    app.post('/avaliacao/salvar', function(req,res){
        app.src.controllers.avaliacao.avaliacao_salvar(app,req,res)
    })
}