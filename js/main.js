const containerDom = document.querySelector('.container');

const buttonDom = document.getElementById('playerForm');

const difficultDom = document.getElementById('difficulties');

const finalScoreDom = document.getElementById('finalscore');



let bombArray = [];





buttonDom.addEventListener('click', function () {

    containerDom.innerHTML = "";

    let numeroMinimo = 1;

    let difficultChoise = difficultDom.value;

    if (difficultChoise == 'easy') {
        result =  100;
    } else if (difficultChoise == 'normal') {
        result = 81;
    } else if (difficultChoise == 'hard') {
        result = 49;
    };

    let numeroMassimo = result;

    generatoreDiQuadrati(numeroMinimo, numeroMassimo);

    const minBomb = 1;

    for (let i = 1; i <= 16; i++) {

        const newBomb = randomBombGenerator(bombArray, minBomb, result);

        bombArray.push(newBomb);

        
    }

    
    
    
}
)

function generatoreDiQuadrati(min, max) {

    finalScoreDom.innerHTML = `Il tuo punteggio è: 0`;

    const score = [];

    let gameOver = false;

    for (let i = min; i <= max; i++) {

        

        const squareGen = document.createElement('div');

        if (max == 100){
            squareGen.classList.add('square-easy');
        } else if (max == 81){
            squareGen.classList.add('square-normal');
        } else if (max == 49){
            squareGen.classList.add('square-hard');
        };

        squareGen.classList.add('square');

        squareGen.addEventListener('click', function () {
        if(!gameOver){
            if (bombArray.includes(i)) {
                this.classList.add('clicked-red');
                gameOver = true;
            } else {
                this.classList.add('clicked-blue');
                if(!score.includes(i)){
                    score.push(i);
                }
            }
        
            

            finalScoreDom.innerHTML  = `Il tuo punteggio è: ${score.length}`;
        }
            console.log(i);
            
        }
        );

        squareGen.innerHTML += `${i}`;
        containerDom.append(squareGen);

    }

    return containerDom;
}







function randomBombGenerator(bomblist , min, max){

    let bombAlredyPresent = false;

    let numberBomb;

    while(!bombAlredyPresent){
        numberBomb = Math.floor(Math.random() * (max - min + 1)) + min;

        if (!bomblist.includes(numberBomb)){
            bombAlredyPresent = true;
        }
    }

    return numberBomb;
}







