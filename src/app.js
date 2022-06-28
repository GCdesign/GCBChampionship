var app = require('../config/server')
var port = 3000;

app.listen(port, function(){
    console.log(`Serviço rodando na porta ${port}`)
})