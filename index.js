import express from 'express';
import { retornaColecaoCompleta, verificaParametroVazio,
       validacoes, retornaHistoricoAno,
       retornaRegistroID, validaParametrosCalculo, 
       retornaCalculoReajuste } from './servicos/servico.js';
const app = express();

app.get('/historicoIPCA', (req, res) => {
    let anoRequisitado = (req.query.ano);   
    if (verificaParametroVazio(anoRequisitado)){
        const resultado = retornaColecaoCompleta();
        res.json(resultado);
    }
    else if (validacoes(anoRequisitado)) {
        const resultado = retornaHistoricoAno(anoRequisitado);
        res.json(resultado);       
    }   
    else {
         res.status(404).send({"erro": "Nenhum histórico para o ano especificado"});
    }    
});

app.get('/historicoIPCA/calculo', (req, res) => {
    const valorCalcular = parseFloat(req.query.valor);
    const dataInicialMes = parseInt(req.query.mesInicial);
    const dataInicialAno = parseInt(req.query.anoInicial);
    const dataFinalMes = parseInt(req.query.mesFinal);
    const dataFinalAno = parseInt(req.query.anoFinal);
    if (validaParametrosCalculo(valorCalcular, dataInicialMes, dataInicialAno, dataFinalMes, dataFinalAno)) {
            if (!(dataInicialAno > dataFinalAno)) {
                const resultado = retornaCalculoReajuste(valorCalcular, dataInicialMes, dataInicialAno, dataFinalMes, dataFinalAno);
                res.json({"valor reajustado" : resultado});
            } else {
                res.json({"parametros": "invalidos"});                
            }         
    } else {
        res.json({"parametros": "invalidos"});
    }    
});

app.get('/historicoIPCA/:id', (req, res) => {
    let idRequisitado = parseInt(req.params.id);
    if (isNaN(idRequisitado)) {
        res.status(404).send({erro: "ID inválido"});
        return;
    }

    const elemento = retornaRegistroID(idRequisitado);
    if (elemento) {
        res.json(elemento);
    } else {
        res.status(404).json({erro: "Elemento não encontrado"})
    }
});

app.listen(8080, () => {
    console.log('API IPCA iniciado');
});
