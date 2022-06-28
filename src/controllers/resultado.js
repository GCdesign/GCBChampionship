module.exports.resultado = function(app, req, res){

    const conn = require('../utils/db/connectionFactory')
    const Participante = require('../models/Participante');
    let resultadoGeralClasseA = [];
    let resultadoGeralClasseB = [];



    async function resultado(){
        for (let inscricao = 1; inscricao <= 16; inscricao++) {
            console.log(`Passei aqui pela ${inscricao} vez`)
            var participante = {}
            const findParticipanteBanguela = await Participante.findOne({ 'Inscricao': inscricao,'Ritmo':'1'});
            const findParticipanteSaoBento = await Participante.findOne({ 'Inscricao': inscricao,'Ritmo':'2'});
            if(findParticipanteBanguela && findParticipanteSaoBento){
                const mediaBanguela = findParticipanteBanguela.Media;
            const mediaSaoBento = findParticipanteSaoBento.Media;
            participante.mediaBanguela = mediaBanguela.toFixed(2);
            participante.mediaSaoBento = mediaSaoBento.toFixed(2);
            participante.Inscricao = findParticipanteBanguela.Inscricao;
            participante.Nome = findParticipanteBanguela.Nome;
            participante.Media = ((parseFloat(findParticipanteBanguela.Media)+parseFloat(findParticipanteSaoBento.Media))/2).toFixed(2);
            participante.Classe = findParticipanteBanguela.Classe;    
            
            if(participante.Classe ==='A'){
                resultadoGeralClasseA.push(participante);
                if(resultadoGeralClasseA.length > 1){
                    console.log('ajustando');
                    resultadoGeralClasseA.sort((a, b) => parseFloat(b.Media) - parseFloat(a.Media));
                    console.log('Após ajuste',resultadoGeralClasseA);
                    
                }
            }else{
                resultadoGeralClasseB.push(participante);
                if(resultadoGeralClasseB.length > 1){
                    console.log('ajustando');
                    resultadoGeralClasseB.sort((a, b) => parseFloat(b.Media) - parseFloat(a.Media));
                    console.log('Após ajuste',resultadoGeralClasseB);
                    
                }
            }
            
            }
    
           
                        

        }
        let rank = {

        }
        rank.Classe_A = resultadoGeralClasseA;
        rank.Classe_B = resultadoGeralClasseB;
        res.render("resultado/resultado",{rank:rank});

    }
    resultado();

    
    //res.render("resultado/resultado")
    

}