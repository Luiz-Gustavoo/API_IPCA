# API_IPCA
API que utiliza dados do índice IPCA para retornar requisições de acordo com o endpoint usado pelo usuário.

-  Rotas da API:
    - 1ª: retorna toda a coleção de dados da aplicação;     
    - 2ª: retorna um histórico de dados da coleção, referente a um ano específico;
    - 3ª: retorna um elemento da coleção, conforme o código de identificação (id) do elemento;
    - 4ª: retorna um cálculo de reajuste, conforme os seguintes valores:
      - valor;
      - mesInicial;
      - anoInicial;
      - mesFinal;
      - anoFinal

    A ideia é realizar o cálculo de reajuste de um valor, com base nos índices IPCA, no período informado.

-    Exemplo de rotas com parâmetros no Render (os mesmos se aplicam no Azure e também em máquina local):
        -    1ª: https://projetohistoricoipca-f4id.onrender.com/historicoipca;
        -    2ª: https://projetohistoricoipca-f4id.onrender.com/historicoipca/?ano=2022;
        -    3ª: https://projetohistoricoipca-f4id.onrender.com/historicoipca/87;
        -    4ª: https://projetohistoricoipca-f4id.onrender.com/historicoipca/calculo?valor=100&mesInicial=5&anoInicial=2020&mesFinal=12&anoFinal=2022

-    Link das rotas em provedores:
       -    Render: https://projetohistoricoipca-f4id.onrender.com
       -    Azure: historicoipca.azurewebsites.net

-  Tecnologias utilizadas:
    -  JavaScript;
    -  Node.JS;
    -  Express;
    -  Postman
