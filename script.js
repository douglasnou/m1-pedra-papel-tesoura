/* Desenvolva seu código abaixo */


function playRockPaperScissor (player1, player2) {
    const jogador1 = player1;
    const jogador2 = player2;
    let pedra = 'Pedra';
    let papel = 'Papel';
    let tesoura = 'Tesoura';

    if(jogador1 == 'Pedra' && jogador2 =='Papel'||
    jogador1 == 'Tesoura' && jogador2 == 'Pedra'||
    jogador1 == 'Papel' && jogador2 == 'Tesoura') {
        return 'Jogador 2 venceu!'
    }else if(jogador1 == 'Pedra' && jogador2 == 'Tesoura'||
    jogador1 == 'Papel' && jogador2 == 'Pedra'||
    jogador1 == 'Tesoura' && jogador2 == 'Papel') {
        return 'Jogador 1 venceu!'
    }else if(jogador1 == 'Pedra' && jogador2 == 'Pedra'||
    jogador1 == 'Papel' && jogador2 == 'Papel'||
    jogador1 == 'Tesoura' && jogador2 == 'Tesoura') {
        return 'Empate!'
    }
}
console.log(playRockPaperScissor('',''));