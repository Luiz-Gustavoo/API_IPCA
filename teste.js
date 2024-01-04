import historicoInflacao from "./dados/dados.js";
import {retornaHistoricoAno} from "./servicos/servico.js";
let valor = 100;
let anoInicial = 2016;
let anoFinal = 2017;
let mesInicial = 1;
let mesFinal = 5;

const historicoFiltrado = historicoInflacao.filter(
    historico => {
      if (anoInicial === anoFinal) {
        return historico.ano === anoInicial && historico.mes >= mesInicial && historico.mes <= mesFinal;
      } else {
        return (
          (historico.ano === anoInicial && historico.mes >= mesInicial) ||
          (historico.ano === anoFinal && historico.mes <= mesFinal)
        );
      }
    }
  );

console.log(historicoFiltrado);

