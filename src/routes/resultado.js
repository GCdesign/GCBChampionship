module.exports = function(app){
app.get('/campeonato/resultado', function(req,res){
    app.src.controllers.resultado.resultado(app,req,res)
})
}