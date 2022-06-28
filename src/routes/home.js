
module.exports = function(app){
    app.get('/home', function(req,res){
        app.src.controllers.home.home(app,req,res);        
    })
}