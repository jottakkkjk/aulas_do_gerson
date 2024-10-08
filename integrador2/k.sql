DROP DATABASE jogos;
CREATE DATABASE jogos;
USE jogos;

CREATE TABLE plataforma(
    id_P INT AUTO_INCREMENT PRIMARY KEY NOT NULL,
    tipo VARCHAR (100) not null
);

CREATE TABLE genero(
    id_G INT AUTO_INCREMENT PRIMARY KEY NOT NULL,
    nome VARCHAR (100) not null
);

CREATE TABLE desenvolvedor(
    id_D INT AUTO_INCREMENT PRIMARY KEY NOT NULL,
    nome VARCHAR (100) not null
);

CREATE TABLE jogos(
    id_J INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(255) NOT NULL,
    data_lancamento DATE NOT NULL,
    descricao TEXT NOT NULL,
    id_D INT NOT NULL,
    id_G INT NOT NULL,
    id_P INT NOT NULL,
    FOREIGN KEY (id_D) REFERENCES desenvolvedor (id_D),
    FOREIGN KEY (id_G) REFERENCES genero (id_G),
    FOREIGN KEY (id_P) REFERENCES plataforma (id_P)
);


INSERT INTO plataforma (tipo) VALUES 
('PS4'),
('PS5'),
('Xbox One'),
('Xbox Series'),
('PC');

INSERT INTO genero (nome) VALUES 
('Ação'), 
('Aventura'), 
('RPG'), 
('Metroidvania'), 
('Tiro em primeira pessoa');

INSERT INTO desenvolvedor (nome) VALUES 
('Activision'), 
('FromSoftware'), 
('Rockstar North'), 
('Team Cherry'), 
('Valve'),
('Bandai Namco'), 
('Psyonix'), 
('Blizzard Entertainment');

INSERT INTO jogos (nome, data_lancamento, descricao, id_D, id_G, id_P) VALUES 
('Call of Duty', '2023-01-01', 'Call of Duty é uma série de jogos eletrônicos de tiro em primeira pessoa e franquia de mídia publicada pela Activision.', 1, 5, 1),  
('Elden Ring', '2022-02-25', 'Elden Ring é um jogo eletrônico de RPG de ação em terceira pessoa, desenvolvido pela FromSoftware e publicado pela Bandai Namco Entertainment.', 2, 3, 1),
('GTA V', '2013-09-17', 'Grand Theft Auto V é um jogo eletrônico de ação-aventura desenvolvido pela Rockstar North e publicado pela Rockstar Games.', 3, 2, 1),  
('Hollow Knight', '2017-02-24', 'Hollow Knight é um jogo indie de gênero metroidvania desenvolvido e publicado pela Team Cherry.', 4, 4, 1),
('Counter Strike', '1999-11-09', 'Counter-Strike é uma série de jogos eletrônicos multijogador de tiro em primeira pessoa, no qual times de terroristas e contra-terroristas batalham entre si.', 5, 5, 2),
('The Legend of Zelda: Breath of the Wild', '2017-03-03', 'Um jogo de ação-aventura em mundo aberto, onde os jogadores controlam Link em sua missão para salvar a princesa Zelda.', 6, 2, 1), 
('Dark Souls III', '2016-03-24', 'Um RPG de ação conhecido por sua dificuldade desafiadora e combate profundo, desenvolvido pela FromSoftware.', 2, 3, 1), 
('Rocket League', '2015-07-07', 'Um jogo que combina futebol com carros em alta velocidade, onde os jogadores competem em partidas em equipes.', 7, 1, 2),
('Overwatch', '2016-05-24', 'Um jogo de tiro em equipe com heróis únicos, cada um com habilidades especiais, desenvolvido pela Blizzard Entertainment.', 8, 5, 2);
