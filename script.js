function computerSelection(){
    switch (Math.floor(Math.random() * 3) + 1){
        case 1:
            return 'rock';
            break;
        case 2:
            return 'paper';
            break;
        case 3:
            return 'scissors';
    }

}