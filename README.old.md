# Desafio para o processo seletivo SHARENERGY 2022/01

Repositório destinado aos interessados em participar do processo seletivo da SHARENERGY 2022/01. As vagas são voltadas para desenvolvimento de aplicações Web e Mobile.

## Sobre a SHARENERGY

No ramo da produção de energia fotovoltaica, há a modalidade de produção compartilhada. Nessa modalidade, diferentes pessoas investem na construção de uma mesma usina fotovoltaica e dividem o retorno finaceiro referente à energia gerada pela usina.

Acreditamos que as energias renováveis terão um lugar dominante em nossa economia pelo resto de nossas vidas. Trabalhamos no sentido de ampliar o impacto positivo que as energias renováveis podem ter no meio ambiente e nas nossas vidas. O sucesso da SHARENERGY é resultado de nossa equipe apaixonada, juntamente com nosso compromisso de oferecer a melhor solução.

Sabemos que negócios enfrentam desafios únicos e por isso oferecemos soluções turnkey, customizadas, economicamente viáveis e seguras.

A Startup figura entre as top 10 EnergyTechs do ranking 100 Open Startups desde 2018. Prova de que a inovação está enraizada em nossa cultura. Somos uma startup em estágio de crescimento e você trabalhará diretamente com os fundadores, ajudando a definir a visão, o produto e a experiência do usuário.

<p align="left">
  <a href="https://www.linkedin.com/company/sharenergy-brasil/">
    <img src="https://img.shields.io/badge/LinkedIn-%230077B5.svg?&style=flat-square&logo=linkedin&logoColor=white" alt="LinkedIn Button">
  </a>
  <a href="https://sharenergy.com.br/">
    <img src="https://img.shields.io/badge/-Website-red" alt="Sharenergy Website Button">
  </a>
</p>

## Sobre a vaga

Já pensou em potencializar o setor que mais cresce na galáxia e trabalhar com uma solução que utiliza tecnologia web de ponta, altamente distribuída com foco em performance e disponibilidade? 👀

Os desenvolvedores da Sharenergy são responsáveis por criar e manter aplicações para clientes internos e externos, prover soluções escaláveis, resilientes e altamente disponíveis que sustentem picos de acesso além de atuar como referência técnica e tutores de outros desenvolvedores.

Procuramos por pessoas dinâmicas e que queiram estar aprendendo sempre. Nossa equipe é jovem, motivada e estamos sempre em busca de soluções criativas para alcançar os resultados que nossos clientes esperam. Se você tem esse perfil, é autoconfiante, autodidata e tem facilidade para lidar com desafios diários, essa vaga é para você!

# O Desafio

Construir aplicação web ou mobile capaz de requisitar e obter dados do [Spaceflight News API](https://spaceflightnewsapi.net/) a fim de mostrá-los para o usuário final. Deve-se utilizar `ReactJS` ou `React Native`, utilizando `React Router DOM` ou `React Router Native` para as rotas, além de apresentar uma interface amigável, bonita e limpa, na qual o usuário possa navegar através de botões.

## Aplicação

- A tela inicial deve exibir em uma lista (ou tabela) os `articles` mais recentes, exibindo `title` e `publishedAt`.
- A tela inicial deve conter botões para paginar os `articles`.
- A tela inicial deve conter um select que permita ao usuário configurar o tamanho da lista, de forma a listar 10 (padrão), 25, 50 ou 100 `articles` por vez.
- A tela inicial deve conter um input para pesquisa por texto do `title`, utilizando endpoint `https://api.spaceflightnewsapi.net/v3/articles?title_contains=TEXTO`, incluindo "texto com espaços e outros caracteres especiais".
- A tela inicial deve permitir ao usuário a pesquisa de artigos por data de publicação entre duas datas (inicial e final).
- Ao clicar em um elemento da lista, a aplicação deve navegar para uma página que exiba todos os detalhes do `article`, e também a imagem deste.
- A página de detalhes de `article` deve conter botões para navegar para o próximo e para o anterior (ordenados por `id`, notando que é possível haver saltos no número do id.

### Requisitos de código

- Responsividade
- Clean Code

### Aprimoramentos adicionais da aplicação (opcional)

A aplicação criada para o desafio pode ser aprimorada com recursos pensados por você. A seguir, foram listadas algumas sugestões do que poderia ser feito:

- Fazer o projeto em `React Native`, ou ambos (`React` e `React Native`)
- Utilizar `Material-UI` ou `MUI` para a aplicação web; ou `React Native Paper` para a aplicação mobile
- Typescript
- Testes
- Documentação

### Quais ferramentas posso utilizar para resolver o desafio?

Com exceção do ReactJS, React Native e React Router, não será especificado um conjunto de ferramentas específico que pode ser usado. Não obstante, será considerado como um diferencial caso você adote as mesmas ferramentas com as quais nós trabalhamos. 

### Mas, afinal, quais ferramentas a Sharenergy utiliza?

* [Javascript](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript) e [Typescript](https://www.typescriptlang.org/)
* Front-end: [ReactJS](https://reactjs.org/) (web) e [React Native](https://reactnative.dev/) (mobile) com [react-router](https://reactrouter.com/), [react-router-dom](https://www.npmjs.com/package/react-router-dom) e [react-router-native](https://www.npmjs.com/package/react-router-native) para roteamento
* Back-end: [Node.js](https://nodejs.org/en/) e [Go](https://golang.org/)
* Banco de dados: [MongoDB](https://www.mongodb.com/) do lado do servidor e [Minimongo](https://guide.meteor.com/collections.html) do lado do cliente (cache)
* Validação de dados: [Schema-utils](https://www.npmjs.com/package/schema-utils) 
* Gerenciamento de Containers: [Docker](https://www.docker.com/)
* Gerenciamento de Repositórios: [NX](https://nx.dev/)
* Gráficos: [Recharts](https://recharts.org/en-US/)
* UI: [CSS 3](https://www.w3.org/Style/CSS/), [Material-UI](https://v4.mui.com/), [MUI](https://mui.com/), [react-native-paper](https://callstack.github.io/react-native-paper/) e [Reflexbox](https://rebassjs.org/reflexbox/)
* Sistema Operacional (principal): [Linux](https://www.linux.org/), também sendo possível utilizar o [Windows Subsystem for Linux](https://docs.microsoft.com/en-us/windows/wsl/) (WSL)

## O que devo entregar?

Esperamos de você duas entregas: o código no GitHub e um vídeo explicativo no YouTube.

### Instruções

- Faça um fork desse repositório.
- Em seguida, crie uma branch, cujo nome é o seu nome completo, no seguinte formato: meu-nome-completo.
- Resolva o desafio realizando versionamento local e remoto. Fique à vontade em criar outras branches durante o desenvolvimento do código.
- Inclua no README.md uma breve instrução de instalação e de execução da aplicação criada.
- Faça um vídeo que explique o que você fez no desafio, com duração aproximada de 5 minutos. A facecam é opcional, mas bem-vinda. O vídeo deve ser postado no YouTube (pode deixar como não listado) e seu link deve ser colocado no README.md.
- Ao finalizar o desafio, faça um pull request de sua branch para esse repositório.

### Prazo limite de entrega

O pull request com sua solução do desafio deve ser feito até a data especificada no corpo do email que você recebeu com a descrição do desafio.
