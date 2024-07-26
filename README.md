## Projeto Login

Esse projeto consiste em uma criação de email e cpf *cadastro de pessoa física* em que se usa javascript para verificar se o email e se o cpf eram considerados válidos ou verdadeiros.

**Email:**

Nessa parte do código nos criamos uma estrutura html onde o javascript verifica se caixa de informar email está com todos os elementos necessários para a implementação de um email como o espaço de informar não estar vazio, e ter obrigatóriamente o uso de @ e . durante o cadastro do email. Caso algum dos elementos ditos anteriormente fosse real o código daria um print("informe um email válido") e logo após retornaria false para que o código não continuasse a ser executado com a informação dita. 
Caso esses elementos fossem verdadeiros o código informaria ao usuario que o email foi cadastrado, logo após o javascrit está pegando um id de uma div onde ele irá por meio do innerHTML retornar o email cadastrado dentro dessa div pega pelo id.
obs: toda essa aplicação foi alocada por meio do onblur dentro de um input.

**cpf:**
após receber um número de CPF como entrada, ela remove todos os caracteres não numéricos e verifica se o número possui 11 dígitos. Em seguida, calcula os dígitos verificadores do CPF utilizando os algoritmos padrão e compara os resultados com os dígitos verificadores informados. Se todos os cálculos baterem, o CPF é considerado válido. Caso contrário, a função retorna que o CPF é inválido. Essa validação é essencial para evitar erros de digitação e garantir a segurança dos dados.




**índice**

* [Tecnologias_utilizadas](#tecnologias-utilizadas)
* [Informações adicionais](#informações)
* [Recursos](#Recursos)
* [Autores](#autores)


## Tecnologias utilizadas:


* [<code><img height="32" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/html/html.png" alt="HTML5"/></code>](https://developer.mozilla.org/pt-BR/docs/Web/HTML)
* [<code><img height="32" src="https://cdn.worldvectorlogo.com/logos/css-3.svg" alt="CSS3"/></code>](https://developer.mozilla.org/pt-BR/docs/Web/CSS)
* [<code><img height="32" src="https://static.vecteezy.com/system/resources/previews/027/127/560/original/javascript-logo-javascript-icon-transparent-free-png.png" alt="GitHub"/></code>](https://github.com/)
* [<code><img height="32" src="https://www.malwarebytes.com/wp-content/uploads/sites/2/2023/01/asset_upload_file97293_255583.jpg" alt="Git"/></code>](https://git-scm.com/)
* [<code><img height="32" src="https://img.shields.io/badge/VSCode-0078D4?style=for-the-badge&logo=visual%20studio%20code&logoColor=white" alt="VisualStudio"/></code>](https://code.visualstudio.com/)
* [<code><img height="32" src="https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white" alt="Font Awesome "/></code>](https://fontawesome.com/versions)

## Informações adicionais:

* O projeto consiste em duas telas de cadastro:
    * Tela 1 (cpf.html)
    * Tela 2 (email.html)
    * java da tela 1 (cpf.js)
    * java da tela 2 (email.js)
* Cada uma das telas (1,2) são usadas para a informação tanto do cpf quanto do emial.
* a tela 1 tem uma aplicação onde é retornada abaixo de onde é informado o email todos os emails validos informados até o momento.
* As telas possuem validação de preenchimento dos campos.
* O código está organizado e documentado.

## Recursos:

* Documentação HTML5: [https://developer.mozilla.org/pt-BR/docs/Web/HTML](https://developer.mozilla.org/pt-BR/docs/Web/HTML)
* Documentação CSS3: [https://developer.mozilla.org/pt-BR/docs/Web/CSS](https://developer.mozilla.org/pt-BR/docs/Web/CSS)
* Documentação JavaScript: [https://developer.mozilla.org/pt-BR/docs/Web/JavaScript](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript)

## Autores
| [<img loading="lazy" src="https://avatars.githubusercontent.com/u/140712280?v=4" width=115><br><sub>Fellipe Gabriel Zanin</sub>](https://github.com/Fell1pe) |

