const perguntas = [
    {
      pergunta: "O que é JavaScript?",
      respostas:[
        "Um banco de dados",
        "Uma linguagem de programação",
        "Um sistema operacional",
      ],
      correta: 1
    },
    {
      pergunta: "Qual é a palavra-chave para declarar uma variável em JavaScript?",
      respostas:[
        "let",
        "variable",
        "declare",
      ],
      correta: 0
    },
    {
      pergunta: "O que 'console.log()' faz em JavaScript?",
      respostas:[
        "Exibe dados no console",
        "Inicia uma função",
        "Define uma variável",
      ],
      correta: 0
    },
    {
      pergunta: "Qual método é usado para adicionar um elemento ao final de um array em JavaScript?",
      respostas:[
        "push()",
        "add()",
        "append()",
      ],
      correta: 0
    },
    {
      pergunta: "Qual é o operador de igualdade estrita em JavaScript?",
      respostas:[
        "===",
        "==",
        "=",
      ],
      correta: 0
    },
    {
      pergunta: "Como se inicia um comentário de linha única em JavaScript?",
      respostas:[
        "//",
        "/*",
        "<!--",
      ],
      correta: 0
    },
    {
      pergunta: "Qual é a função do método 'addEventListener()' em JavaScript?",
      respostas:[
        "Adicionar um evento a um elemento",
        "Remover um elemento do DOM",
        "Alterar o estilo de um elemento",
      ],
      correta: 0
    },
    {
      pergunta: "Qual método é usado para converter uma string em um número inteiro em JavaScript?",
      respostas:[
        "parseInt()",
        "toFloat()",
        "parseInteger()",
      ],
      correta: 0
    },
    {
      pergunta: "Qual estrutura de controle de fluxo é usada para tomar decisões em JavaScript?",
      respostas:[
        "if...else",
        "for",
        "while",
      ],
      correta: 0
    },
    {
      pergunta: "Qual é o operador lógico 'AND' em JavaScript?",
      respostas:[
        "&&",
        "||",
        "!",
      ],
      correta: 0
    }
  ];
  
  const quiz = document. querySelector('#quiz')
  const template = document.querySelector('template')
  
  const corretas = new Set()
  const totalDePerguntas = perguntas.length
  const mostrarTotal = document.querySelector('#acertos span')
  
  
  // loop de repetiçao
  for(const item of perguntas) {
    const quizItem = template.content.cloneNode(true)
    quizItem.querySelector('h3').textContent = item.pergunta
  
    for(let resposta of item.respostas) {
      const dt = quizItem.querySelector('dl dt').cloneNode (true)
      dt.querySelector('span').textContent = resposta
      dt.querySelector('input').setAttribute('name', 'pergunta-' + perguntas.indexOf(item))
      dt.querySelector('input').value = item.respostas.indexOf(resposta)
      dt.querySelector('input').onchange = (event) => {
        const estaCorreta = event.target.value == item.correta
  
        corretas.delete(item)
        if(estaCorreta){
          corretas.add(item)
  
        }
  
        mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
      }
      
  
      quizItem.querySelector('dl').appendChild(dt)
  
  }  
  
  quizItem.querySelector('dl dt').remove()
  
  // coloca a pergunta na tela
  quiz.appendChild(quizItem)
    
  }
  