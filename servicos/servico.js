import historicoInflacao from "../dados/dados.js";

export const validacoes = (ano) => {
    if (isNaN(ano)) {
        return false;
    }
    else if (ano < 2015 || ano > 2023) {
        return false;
    }
    else {
        return true;
    }
}

export const verificaParametroVazio = (ano) => {
    return ano  == undefined;
}

export const retornaColecaoCompleta = () => {
    return historicoInflacao;
}

export const retornaHistoricoAno = (ano) => {
    return historicoInflacao.filter(registros => registros.ano == ano);    
}

export const retornaRegistroID = (id) => {
    const idIPCA = id;

    return historicoInflacao.find(registro => registro.id === idIPCA);
}

export const validaParametrosCalculo = (valor, mesInicial, anoInicial, mesFinal, anoFinal) => {
    let numeros = !(isNaN(valor && mesInicial && anoInicial && mesFinal && anoFinal)) ? true :  false;
    let anos = !((anoInicial < 2015 || anoFinal < 2015) || (anoInicial > 2023 || anoFinal > 2023)) ? true : false;
     let meses = !((mesInicial < 1  || mesFinal < 1)  || (mesInicial > 12 || mesFinal > 12)) ? true : false;

    const validacaoGeral = (numeros && anos && meses) ? true : false;
    return validacaoGeral;
}

export const retornaCalculoReajuste = (valor, mesInicial, anoInicial, mesFinal, anoFinal) => {
    const registrosCompletos = historicoInflacao.filter(registros => {
        if (anoInicial === anoFinal) {
            return registros.ano === anoInicial && registros.mes >= mesInicial && registros.mes <= mesFinal
        } else {
            return (
                (registros.ano === anoInicial && registros.mes >= mesInicial) ||
                (registros.ano > anoInicial && registros.ano < anoFinal) ||
                (registros.ano === anoFinal && registros.mes <= mesFinal)
            );
        }
    });
    let valorReajustar = valor
    let taxasMensais = 1;
    for (let elementos of registrosCompletos) {
        taxasMensais *= 1 + (elementos.ipca / 100);
        
    }
    const resultado = taxasMensais * valorReajustar;
    return parseFloat(resultado.toFixed(2));
}