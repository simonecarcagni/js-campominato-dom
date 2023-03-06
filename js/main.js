const containerDom = document.querySelector('.container');

const buttonDom = document.getElementById('playerForm');

const difficultDom = document.getElementById('difficulties');



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

        if (squareGen.innerHTML == newBomb){
            this.classList.toggle('clicked-red');
        }
    }

    
    
    
}
)

function generatoreDiQuadrati(min, max) {

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

            this.classList.toggle('clicked-blue');
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







