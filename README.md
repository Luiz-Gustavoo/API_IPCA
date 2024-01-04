# API_IPCA
API que utiliza dados do índice IPCA para retornar requisições de acordo com o endpoint usado pelo usuário.

-  Rotas da API:
    - A primeira rota deve retornar toda a coleção de dados da aplicação;
    - A segunda rota deve retornar um histórico de dados da coleção, referente a um ano específico;
    - A terceira rota deve retornar um elemento da coleção, conforme o código de identificação (id) do elemento;
    - A quarta rota da API deve retornar um cálculo de reajuste, conforme os seguintes valores:
      - valor;
      - mesInicial;
      - anoInicial;
      - mesFinal;
      - anoFinal

      A ideia é realizar o cálculo de reajuste de um valor, com base nos índices IPCA, no período informado.

-  Tecnologias utilizadas:
    -  JavaScript;
    -  Node.JS;
    -  Express;
    -  Postman
