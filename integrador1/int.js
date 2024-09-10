const prompt = require('prompt-sync')()
games = [
    {
      id: 1,
      nome: "Call of duty",
      descricao: "Call of Duty é uma série de jogos eletrônicos de tiro em primeira pessoa e franquia de mídia publicada pela Activision.",
      plataforma: "Console e PC",
      preco: 50.00
    },
    {
      id: 2,
      nome: "Elden Ring",
      descricao: "Elden Ring é um jogo eletrônico de RPG de ação em terceira pessoa, desenvolvido pela FromSoftware e publicado pela Bandai Namco Entertainment.",
      plataforma: "Console e PC",
      preco: 60.00
    },
    {
      id: 3,
      nome: "GTA V",
      descricao: "Grand Theft Auto V é um jogo eletrônico de ação-aventura desenvolvido pela Rockstar North e publicado pela Rockstar Games.",
      plataforma: "Console e PC",
      preco: 70.00
    },
    {
      id: 4,
      nome: "Hollow Knight",
      descricao: "Hollow Knight é um jogo indie de gênero metroidvania desenvolvido e publicado pela Team Cherry",
      plataforma: "Console e PC",
      preco: 30.00
    },
    {
      id: 5,
      nome: "Counter Strike",
      descricao: "Counter-Strike é uma série de jogos eletrônicos multijogador de tiro em primeira pessoa, no qual times de terroristas e contra-terroristas batalham entre si, respectivamente, realizando um ato de terror e prevenindo-os. A série iniciou-se no Windows em 1999 com o lançamento do primeiro jogo, Counter-Strike.",
      plataforma: "PC",
      preco: 40.00
    }
  ];

  
function exec(){
    console.log("1- Jogos 2- Adicionar 3- Remover 4- Cancelar");
    
    escolha = prompt('>')

    if(escolha == 1){
        jogos()
    }else if(escolha == 2){
        adicionar()
    }else if(escolha == 3){
        remover()
    }else if(escolha == 4){ console.log('fechando');
    
        process.exit(0)
    }

}






function jogos(){

  for (let i = 0; i < games.length; i++) {
    console.log(`Jogo ${i + 1}:`);
    console.log(`Nome: ${games[i].nome}`);
    console.log(`Descrição: ${games[i].descricao}`);
    console.log(`Plataforma: ${games[i].plataforma}`);
    console.log(`Preço: R$ ${games[i].preco.toFixed(2)}`);
    console.log("--------------------");
  }
  exec()
}

function adicionar() {
  const nome = prompt('Digite o nome do jogo: ');
  const descricao = prompt('Digite a descrição do jogo: ');
  const plataforma = prompt('Digite a plataforma do jogo (Browser, PC, Console, etc.): ');
  const preco = parseFloat(prompt('Digite o preço do jogo: '));

  const novoJogo = {
    id: games.length + 1,
    nome,
    descricao,
    plataforma,
    preco
  };

  games.push(novoJogo);

  console.log('Jogo adicionado com sucesso!');
  console.log(`Nome: ${novoJogo.nome}`);
  console.log(`Descrição: ${novoJogo.descricao}`);
  console.log(`Plataforma: ${novoJogo.plataforma}`);
  console.log(`Preço: R$ ${novoJogo.preco.toFixed(2)}`);
  exec()
}

function remover() {
    const idRemover = parseInt(prompt('Digite o ID do jogo que deseja remover: '));
  
    const index = games.findIndex(game => game.id === idRemover);
  
    if (index !== -1) {
      games.splice(index, 1);
      console.log('Jogo removido com sucesso!');
    } else {
      console.log('Jogo não encontrado!');
    }
  
    exec()
  }
exec()