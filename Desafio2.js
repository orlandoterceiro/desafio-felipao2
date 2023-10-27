let nickname = "Joaquim"


function calculateRanking(win, lose){
    return win - lose;
}

let result = calculateRanking(66, 0)
let level


if (result < 10){level = "Ferro"}
else if (result >= 11 && result <= 20 ){level = "Bronze"}
else if (result >= 21 && result <= 50 ){level = "Prata"}
else if (result >= 51 && result <= 80 ){level = "Ouro"}
else if (result >= 81 && result <= 90 ){level = "Diamante"}
else if (result >= 91 && result <= 100 ){level = "Lendário"}
else {level = "Imortal"}

console.log("O herói " + nickname + " está no nível " + level)

