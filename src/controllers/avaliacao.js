module.exports.campeonato_avaliacao = function(app,req, res){
    res.render("avaliacao/formulario_avaliacao")

}
module.exports.avaliacao_salvar = function(app,req, res){
    const participante = req.body;
    let inscricao = participante.inscricao;
    let ritmo = participante.ritmo;

    const conn = require('../utils/db/connectionFactory')
    const Participante = require('../models/Participante');
    let notas = ({ Nota:parseFloat(participante.nota) });
    

    async function atualizaParticipante(){
        let msg = "Sem mensagem!!!";
        
       const findParticipante = await Participante.findOne({ 'Inscricao': inscricao,'Ritmo':ritmo})

        if (!findParticipante) {
            const objparticipacao = {
                Inscricao: parseInt(participante.inscricao),
                Nome:participante.participante,
                Ritmo: participante.ritmo,
                Classe: participante.classe,
                Media: participante.nota,
                Notas: notas
            }
            
            await new Participante(objparticipacao).save();
            if(participante.ritmo === '1'){
                msg = `Cadastro de ${participante.participante} para o ritmo de banguela realizado com sucesso 🤩🤩🤩`;
            }else{
                msg = `Cadastro de ${participante.participante} para o ritmo de São bento Grande realizado com sucesso 🤩🤩🤩`;
            }
            
            res.render('avaliacao/sucesso',{msg:msg});
          } else {
              console.log(notas)
            if(findParticipante.Media > 0){
                findParticipante.Media = ((findParticipante.Media+parseFloat(participante.nota))/2);

            }else{
                findParticipante.Media = parseFloat(participante.nota);

            }
            let quantidade = findParticipante.Notas.length;
            findParticipante.Notas.push(notas);
            
            await findParticipante.save();
            msg = `Nota de número ${quantidade} salva com sucesso` 
            res.render('avaliacao/sucesso',{msg:msg});

    }

}
atualizaParticipante()  

}