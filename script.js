const boxElements = document.querySelectorAll(".box");
let btn = document.getElementById("btn");
let whoWin = document.getElementById("whoWin");
let b0 = document.getElementById("b0");
let b1 = document.getElementById("b1");
let b2 = document.getElementById("b2");
let b3 = document.getElementById("b3");
let b4 = document.getElementById("b4");
let b5 = document.getElementById("b5");
let b6 = document.getElementById("b6");
let b7 = document.getElementById("b7");
let b8 = document.getElementById("b8");
let vez = document.getElementById("vez");

let controlador = true;
let controladorModal = true;

let playerScore = document.getElementById("playerScore");
let botScore = document.getElementById("botScore");


function storagePlayer () {
  debugger;
 
    let storagePlayer = localStorage.getItem("player");
    let storageBot = localStorage.getItem("bot");

    let totStoragePlayer = 1 + parseInt(storagePlayer)
    let totStorageBot = parseInt(storageBot);
  
    localStorage.setItem("player", JSON.stringify(totStoragePlayer));
   
 
      botScore.innerHTML = `${totStorageBot}`;
      playerScore.innerHTML = `${totStoragePlayer}`

  

}
function storageBot() {
  debugger;
  let storagePlayer = localStorage.getItem("player");
  let storageBot = localStorage.getItem("bot");

  let totStoragePlayer = parseInt(storagePlayer);
  let totStorageBot = 1 + parseInt(storageBot);

  
  localStorage.setItem("bot", JSON.stringify(totStorageBot));

  botScore.innerHTML = `${totStorageBot}`;
  playerScore.innerHTML = `${totStoragePlayer}`;
}

function storage() { 

  let storagePlayer = localStorage.getItem("player");
  let storageBot = localStorage.getItem("bot");
  let totStoragePlayer = parseInt(storagePlayer);
  let totStorageBot =  parseInt(storageBot);
  botScore.innerHTML = `${totStorageBot}`;
  playerScore.innerHTML = `${totStoragePlayer}`;
}

function random(){
  if (Math.floor(Math.random() * 10) % 2 == 0) {
    whereIplay();
  }
  else {
    vez.innerHTML = "Sua Vez"
  }
};
const arrWinning = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [6, 4, 2],
  [0, 4, 8],
];

const resetbtn = () => {
  btn.addEventListener('click', () => {
    for (box of boxElements) {
      box.value = undefined
      box.innerHTML = ''
      
    }

      controladorModal = true;
      random();
      document.querySelector(".winningMessage").classList.remove("active");
  })
}

const verificaVitoria = currentPlayer => {
   
  return arrWinning.some(combinacao => {
     
    return combinacao.every(index => {
       
      return boxElements[index].value == currentPlayer;
    });
  });
  
};
const modalDaVitoria = () => {
   debugger;
 
  if (verificaVitoria("X")) {
    controladorModal = false
    debugger;
    whoWin.innerHTML = `   Vitória!! Rumo ao Hexa!`;
    document.querySelector(".winningMessage").classList.add("active");
    debugger;
     storagePlayer();
    resetbtn();
   
  } else if (verificaVitoria("O")) {
     controladorModal = false;
    debugger;
    whoWin.innerHTML = `Vish, não foi dessa vez!`;
    debugger;
    document.querySelector(".winningMessage").classList.add("active");
    storageBot();
    resetbtn();
   
  }
  
  
};

const verificaDefesa = () => {
   debugger;
  // 1.1
  
  if (
    b0.value == "X" &&
    b4.value == "X" &&
    b8.value == undefined &&
    controlador
  ) {
     debugger;
    b8.value = "O";
    b8.innerHTML = "O";
    controlador = false;
  } else if (
    b0.value == "X" &&
    b8.value == "X" &&
    b4.value == undefined &&
    controlador
  ) {
     debugger;
    b4.value = "O";
    b4.innerHTML = "O";
    controlador = false;
  } else if (
    b4.value == "X" &&
    b8.value == "X" &&
    b0.value == undefined &&
    controlador
  ) {
     debugger;
    b0.value = "O";
    b0.innerHTML = "O";
    controlador = false;
  }
  // 1.2
  else if (
    b6.value == "X" &&
    b4.value == "X" &&
    b2.value == undefined &&
    controlador
  ) {
     debugger;
    b2.value = "O";
    b2.innerHTML = "O";
    controlador = false;
  } else if (
    b6.value == "X" &&
    b2.value == "X" &&
    b4.value == undefined &&
    controlador
  ) {
     debugger;
    b4.value = "O";
    b4.innerHTML = "O";
    controlador = false;
  } else if (
    b2.value == "X" &&
    b4.value == "X" &&
    b6.value == undefined &&
    controlador
  ) {
     debugger;
    b6.value = "O";
    b6.innerHTML = "O";
    controlador = false;
  }
  // 2.1
  else if (
    b0.value == "X" &&
    b1.value == "X" &&
    b2.value == undefined &&
    controlador
  ) {
     debugger;
    b2.value = "O";
    b2.innerHTML = "O";
    controlador = false;
  } else if (
    b0.value == "X" &&
    b2.value == "X" &&
    b1.value == undefined &&
    controlador
  ) {
     debugger;
    b1.value = "O";
    b1.innerHTML = "O";
    controlador = false;
  } else if (
    b2.value == "X" &&
    b1.value == "X" &&
    b0.value == undefined &&
    controlador
  ) {
     debugger;
    b0.value = "O";
    b0.innerHTML = "O";
    controlador = false;
  }
  // 2.3
  else if (
    b0.value == "X" &&
    b3.value == "X" &&
    b6.value == undefined &&
    controlador
  ) {debugger;
     
    b6.value = "O";
    b6.innerHTML = "O";
    controlador = false;
  } else if (
    b0.value == "X" &&
    b6.value == "X" &&
    b3.value == undefined &&
    controlador
  ) {debugger;
     
    b3.value = "O";
    b3.innerHTML = "O";
    controlador = false;
  } else if (
    b6.value == "X" &&
    b3.value == "X" &&
    b0.value == undefined &&
    controlador
  ) {debugger;
     
    b0.value = "O";
    b0.innerHTML = "O";
    controlador = false;
  }

  // 2.4
  else if (
    b2.value == "X" &&
    b5.value == "X" &&
    b8.value == undefined &&
    controlador
  ) {debugger;
     
    b8.value = "O";
    b8.innerHTML = "O";
    controlador = false;
  } else if (
    b2.value == "X" &&
    b8.value == "X" &&
    b5.value == undefined &&
    controlador
  ) {debugger;
     
    b5.value = "O";
    b5.innerHTML = "O";
    controlador = false;
  } else if (
    b8.value == "X" &&
    b5.value == "X" &&
    b2.value == undefined &&
    controlador
  ) {debugger;
     
    b2.value = "O";
    b2.innerHTML = "O";
    controlador = false;
  }
  // 2.5
  else if (
    b6.value == "X" &&
    b7.value == "X" &&
    b8.value == undefined &&
    controlador
  ) {debugger;
     
    b8.value = "O";
    b8.innerHTML = "O";
    controlador = false;
  } else if (
    b6.value == "X" &&
    b8.value == "X" &&
    b7.value == undefined &&
    controlador
  ) {debugger;
     
    b7.value = "O";
    b7.innerHTML = "O";
    controlador = false;
  } else if (
    b8.value == "X" &&
    b7.value == "X" &&
    b6.value == undefined &&
    controlador
  ) {debugger;
     
    b6.value = "O";
    b6.innerHTML = "O";
    controlador = false;
  }
  // 2.6
  else if (
    b3.value == "X" &&
    b4.value == "X" &&
    b5.value == undefined &&
    controlador
  ) {debugger;
     
    b5.value = "O";
    b5.innerHTML = "O";
    controlador = false;
  } else if (
    b3.value == "X" &&
    b5.value == "X" &&
    b4.value == undefined &&
    controlador
  ) {debugger;
     
    b4.value = "O";
    b4.innerHTML = "O";
    controlador = false;
  } else if (
    b5.value == "X" &&
    b4.value == "X" &&
    b3.value == undefined &&
    controlador
  ) {debugger;
     
    b3.value = "O";
    b3.innerHTML = "O";
    controlador = false;
  }
  // 2.6
  else if (
    b1.value == "X" &&
    b4.value == "X" &&
    b7.value == undefined &&
    controlador
  ) {debugger;
     
    b7.value = "O";
    b7.innerHTML = "O";
    controlador = false;
  } else if (
    b1.value == "X" &&
    b7.value == "X" &&
    b4.value == undefined &&
    controlador
  ) {debugger;
     
    b4.value = "O";
    b4.innerHTML = "O";
    controlador = false;
  } else if (
    b7.value == "X" &&
    b4.value == "X" &&
    b1.value == undefined &&
    controlador
  ) {debugger;
     
    b1.value = "O";
    b1.innerHTML = "O";
    controlador = false;
  }
};
const verificaAtaque = () => {
  // 1.1
   debugger;
  if (
    b0.value == "O" &&
    b4.value == "O" &&
    b8.value == undefined &&
    controlador
  ) {
     debugger;
    b8.value = "O";
    b8.innerHTML = "O";
    controlador = false;
  } else if (
    b0.value == "O" &&
    b8.value == "O" &&
    b4.value == undefined &&
    controlador
  ) {debugger;
     
    b4.value = "O";
    b4.innerHTML = "O";
    controlador = false;
  } else if (
    b4.value == "O" &&
    b8.value == "O" &&
    b0.value == undefined &&
    controlador
  ) {debugger;
     
    b0.value = "O";
    b0.innerHTML = "O";
    controlador = false;
  }
  // 1.2
  else if (
    b6.value == "O" &&
    b4.value == "O" &&
    b2.value == undefined &&
    controlador
  ) {debugger;
     
    b2.value = "O";
    b2.innerHTML = "O";
    controlador = false;
  } else if (
    b6.value == "O" &&
    b2.value == "O" &&
    b4.value == undefined &&
    controlador
  ) {debugger;
     
    b4.value = "O";
    b4.innerHTML = "O";
    controlador = false;
  } else if (
    b2.value == "O" &&
    b4.value == "O" &&
    b6.value == undefined &&
    controlador
  ) {debugger;
     
    b6.value = "O";
    b6.innerHTML = "O";
    controlador = false;
  }
  // 2.1
  else if (
    b0.value == "O" &&
    b1.value == "O" &&
    b2.value == undefined &&
    controlador
  ) {debugger;
     
    b2.value = "O";
    b2.innerHTML = "O";
    controlador = false;
  } else if (
    b0.value == "O" &&
    b2.value == "O" &&
    b1.value == undefined &&
    controlador
  ) {debugger;
     
    b1.value = "O";
    b1.innerHTML = "O";
    controlador = false;
  } else if (
    b2.value == "O" &&
    b1.value == "O" &&
    b0.value == undefined &&
    controlador
  ) {debugger;
     
    b0.value = "O";
    b0.innerHTML = "O";
    controlador = false;
  }
  // 2.3
  else if (
    b0.value == "O" &&
    b3.value == "O" &&
    b6.value == undefined &&
    controlador
  ) {debugger;
     
    b6.value = "O";
    b6.innerHTML = "O";
    controlador = false;
  } else if (
    b0.value == "O" &&
    b6.value == "O" &&
    b3.value == undefined &&
    controlador
  ) {debugger;
     
    b3.value = "O";
    b3.innerHTML = "O";
    controlador = false;
  } else if (
    b6.value == "O" &&
    b3.value == "O" &&
    b0.value == undefined &&
    controlador
  ) {debugger;
     
    b0.value = "O";
    b0.innerHTML = "O";
    controlador = false;
  }

  // 2.4
  else if (
    b2.value == "O" &&
    b5.value == "O" &&
    b8.value == undefined &&
    controlador
  ) {debugger;
     
    b8.value = "O";
    b8.innerHTML = "O";
    controlador = false;
  } else if (
    b2.value == "O" &&
    b8.value == "O" &&
    b5.value == undefined &&
    controlador
  ) {debugger;
     
    b5.value = "O";
    b5.innerHTML = "O";
    controlador = false;
  } else if (
    b8.value == "O" &&
    b5.value == "O" &&
    b2.value == undefined &&
    controlador
  ) {debugger;
     
    b2.value = "O";
    b2.innerHTML = "O";
    controlador = false;
  }
  // 2.5
  else if (
    b6.value == "O" &&
    b7.value == "O" &&
    b8.value == undefined &&
    controlador
  ) {debugger;
     
    b8.value = "O";
    b8.innerHTML = "O";
    controlador = false;
  } else if (
    b6.value == "O" &&
    b8.value == "O" &&
    b7.value == undefined &&
    controlador
  ) {debugger;
     
    b7.value = "O";
    b7.innerHTML = "O";
    controlador = false;
  } else if (
    b8.value == "O" &&
    b7.value == "O" &&
    b6.value == undefined &&
    controlador
  ) {debugger;
     
    b6.value = "O";
    b6.innerHTML = "O";
    controlador = false;
  }
  // 2.6
  else if (
    b3.value == "O" &&
    b4.value == "O" &&
    b5.value == undefined &&
    controlador
  ) {debugger;
     
    b5.value = "O";
    b5.innerHTML = "O";
    controlador = false;
  } else if (
    b3.value == "O" &&
    b5.value == "O" &&
    b4.value == undefined &&
    controlador
  ) {debugger;
     
    b4.value = "O";
    b4.innerHTML = "O";
    controlador = false;
  } else if (
    b5.value == "O" &&
    b4.value == "O" &&
    b3.value == undefined &&
    controlador
  ) {debugger;
     
    b3.value = "O";
    b3.innerHTML = "O";
    controlador = false;
  }
  // 2.6
  else if (
    b1.value == "O" &&
    b4.value == "O" &&
    b7.value == undefined &&
    controlador
  ) {debugger;
     
    b7.value = "O";
    b7.innerHTML = "O";
    controlador = false;
  } else if (
    b1.value == "O" &&
    b7.value == "O" &&
    b4.value == undefined &&
    controlador
  ) {debugger;
     
    b4.value = "O";
    b4.innerHTML = "O";
    controlador = false;
  } else if (
    b7.value == "O" &&
    b4.value == "O" &&
    b1.value == undefined &&
    controlador
  ) {debugger;
     
    b1.value = "O";
    b1.innerHTML = "O";
    controlador = false;
  } else {debugger;
    verificaDefesa();
  }

};
const verificaEmpate = () => {
   debugger;
  if (
    b0.value != undefined &&
    b1.value != undefined &&
    b2.value != undefined &&
    b3.value != undefined &&
    b4.value != undefined &&
    b5.value != undefined &&
    b6.value != undefined &&
    b7.value != undefined &&
    b8.value != undefined &&
    controladorModal
  ) {
    
    whoWin.innerHTML = `Coé, impatou menô!!`;
    debugger;
    document.querySelector(".winningMessage").classList.add("active");
    resetbtn();
    
  }
};

const randomMaxMin = (max,min) => Math.floor(Math.random()* (max-min)+min)

const JogadasAleatorias = () => {
    debugger
   verificaAtaque();
   debugger;
  if (
    b0.value == undefined &&
    b2.value == undefined &&
    b6.value == undefined &&
    b8.value == undefined &&
    b4.value == undefined&&
    controlador
  ) {
    debugger;
    switch (randomMaxMin(6, 1)) {
      case 1:
        debugger;
        controlador = false;
        b0.value = "O";
        b0.innerHTML = "O";
        break;

      case 2:
        debugger;
        controlador = false;
        b2.value = "O";
        b2.innerHTML = "O";
        break;

      case 3:
        debugger;
        controlador = false;
        b6.value = "O";
        b6.innerHTML = "O";
        break;

      case 4:
        debugger;
        controlador = false;
        b8.value = "O";
        b8.innerHTML = "O";
        break;
      case 5: 
        controlador = false;
        b4.value = "O";
        b4.innerHTML = "O";
        break;
      
      default:
        return `Erro whereIplay `;
    }
  } else if (
    b0.value == undefined &&
    b2.value == undefined &&
    b6.value == undefined &&
    b8.value == undefined &&
    controlador
  ) {
    debugger;
    switch (randomMaxMin(5, 1)) {
      case 1:
        debugger;
        controlador = false;
        b0.value = "O";
        b0.innerHTML = "O";
        break;

      case 2:
        debugger;
        controlador = false;
        b2.value = "O";
        b2.innerHTML = "O";
        break;

      case 3:
        debugger;
        controlador = false;
        b6.value = "O";
        b6.innerHTML = "O";
        break;

      case 4:
        debugger;
        controlador = false;
        b8.value = "O";
        b8.innerHTML = "O";
        break;
      default:
        return `Erro whereIplay`;
    }
  } else if (
    b0.value == undefined &&
    b2.value == undefined &&
    b6.value == undefined &&
    controlador
  ) {
    switch (randomMaxMin(4, 1)) {
      case 1:
        debugger;
        controlador = false;
        b0.value = "O";
        b0.innerHTML = "O";
        break;

      case 2:
        debugger;
        controlador = false;
        b2.value = "O";
        b2.innerHTML = "O";
        break;

      case 3:
        debugger;
        controlador = false;
        b6.value = "O";
        b6.innerHTML = "O";
        break;
      default:
        return `Erro whereIplay`;
    }
  } else if (
    b0.value == undefined &&
    b2.value == undefined &&
    b8.value == undefined &&
    controlador
  ) {
    switch (randomMaxMin(4, 1)) {
      case 1:
        debugger;
        controlador = false;
        b0.value = "O";
        b0.innerHTML = "O";
        break;

      case 2:
        debugger;
        controlador = false;
        b2.value = "O";
        b2.innerHTML = "O";
        break;

      case 3:
        debugger;
        controlador = false;
        b8.value = "O";
        b8.innerHTML = "O";
        break;
      default:
        return `Erro whereIplay`;
    }
  } else if (
    b0.value == undefined &&
    b6.value == undefined &&
    b8.value == undefined &&
    controlador
  ) {
    debugger;
    switch (randomMaxMin(4, 1)) {
      case 1:
        debugger;
        controlador = false;
        b0.value = "O";
        b0.innerHTML = "O";
        break;

      case 2:
        debugger;
        controlador = false;
        b6.value = "O";
        b6.innerHTML = "O";
        break;

      case 3:
        debugger;
        controlador = false;
        b8.value = "O";
        b8.innerHTML = "O";
        break;
      default:
        return `Erro whereIplay`;
    }
  } else if (
    b2.value == undefined &&
    b6.value == undefined &&
    b8.value == undefined &&
    controlador
  ) {
    debugger;
    switch (randomMaxMin(4, 1)) {
      case 1:
        debugger;
        controlador = false;
        b2.value = "O";
        b2.innerHTML = "O";
        break;

      case 2:
        debugger;
        controlador = false;
        b6.value = "O";
        b6.innerHTML = "O";
        break;

      case 3:
        debugger;
        controlador = false;
        b8.value = "O";
        b8.innerHTML = "O";
        break;
      default:
        return `Erro whereIplay`;
    }
  } else if (b0.value == undefined && b2.value == undefined && controlador) {
    switch (randomMaxMin(3, 1)) {
      case 1:
        debugger;
        controlador = false;
        b2.value = "O";
        b2.innerHTML = "O";
        break;

      case 2:
        debugger;
        controlador = false;
        b0.value = "O";
        b0.innerHTML = "O";
        break;
      default:
        return `Erro whereIplay`;
    }
  } else if (b0.value == undefined && b6.value == undefined && controlador) {
    switch (randomMaxMin(3, 1)) {
      case 1:
        debugger;
        controlador = false;
        b6.value = "O";
        b6.innerHTML = "O";
        break;

      case 2:
        controlador = false;
        debugger;
        b0.value = "O";
        b0.innerHTML = "O";
        break;
      default:
        return `Erro whereIplay`;
    }
  } else if (b0.value == undefined && b8.value == undefined && controlador) {
    switch (randomMaxMin(3, 1)) {
      case 1:
        debugger;
        controlador = false;
        b0.value = "O";
        b0.innerHTML = "O";
        break;

      case 2:
        debugger;
        controlador = false;
        b8.value = "O";
        b8.innerHTML = "O";
        break;
      default:
        return `Erro whereIplay`;
    }
  } else if (b2.value == undefined && b6.value == undefined && controlador) {
    switch (randomMaxMin(3, 1)) {
      case 1:
        debugger;
        controlador = false;
        b2.value = "O";
        b2.innerHTML = "O";
        break;

      case 2:
        debugger;
        controlador = false;
        b6.value = "O";
        b6.innerHTML = "O";
        break;
      default:
        return `Erro whereIplay`;
    }
  } else if (b2.value == undefined && b8.value == undefined && controlador) {
    switch (randomMaxMin(3, 1)) {
      case 1:
        debugger;
        controlador = false;
        b2.value = "O";
        b2.innerHTML = "O";
        break;

      case 2:
        debugger;
        controlador = false;
        b8.value = "O";
        b8.innerHTML = "O";
        break;
      default:
        return `Erro whereIplay`;
    }
  } else if (b6.value == undefined && b8.value == undefined && controlador) {
    switch (randomMaxMin(3, 1)) {
      case 1:
        debugger;
        controlador = false;
        b6.value = "O";
        b6.innerHTML = "O";
        break;

      case 2:
        debugger;
        controlador = false;
        b8.value = "O";
        b8.innerHTML = "O";
        break;
      default:
        return `Erro whereIplay`;
    }
  } else if (b0.value == undefined && controlador) {
    debugger;
    controlador = false;
    b0.value = "O";
    b0.innerHTML = "O";
  } else if (b2.value == undefined && controlador) {
    debugger;
    controlador = false;
    b2.value = "O";
    b2.innerHTML = "O";
  } else if (b6.value == undefined && controlador) {
    controlador = false;
    b6.value = "O";
    b6.innerHTML = "O";
  } else if (b8.value == undefined && controlador) {
    controlador = false;
    b8.value = "O";
    b8.innerHTML = "O";
  } else if (b4.value == undefined && controlador) {
    controlador = false;
    b4.value = "O";
    b4.innerHTML = "O";
  }
  /// lógica de 4 casas de 1 ponto
  else if (
    b1.value == undefined &&
    b3.value == undefined &&
    b5.value == undefined &&
    b7.value == undefined &&
    controlador
  ) {
    debugger;
    switch (randomMaxMin(5, 1)) {
      case 1:
        debugger;
        controlador = false;
        b1.value = "O";
        b1.innerHTML = "O";
        break;

      case 2:
        debugger;
        controlador = false;
        b3.value = "O";
        b3.innerHTML = "O";
        break;

      case 3:
        debugger;
        controlador = false;
        b5.value = "O";
        b5.innerHTML = "O";
        break;

      case 4:
        debugger;
        controlador = false;
        b7.value = "O";
        b7.innerHTML = "O";
        break;

      default:
        return `Erro whereIplay `;
    }
  } else if (
    b1.value == undefined &&
    b3.value == undefined &&
    b5.value == undefined &&
    controlador
  ) {
    switch (randomMaxMin(4, 1)) {
      case 1:
        debugger;
        controlador = false;
        b1.value = "O";
        b1.innerHTML = "O";
        break;

      case 2:
        debugger;
        controlador = false;
        b3.value = "O";
        b3.innerHTML = "O";
        break;

      case 3:
        debugger;
        controlador = false;
        b5.value = "O";
        b5.innerHTML = "O";
        break;
      default:
        return `Erro whereIplay`;
    }
  } else if (
    b1.value == undefined &&
    b5.value == undefined &&
    b7.value == undefined &&
    controlador
  ) {
    switch (randomMaxMin(4, 1)) {
      case 1:
        debugger;
        controlador = false;
        b1.value = "O";
        b1.innerHTML = "O";
        break;

      case 2:
        debugger;
        controlador = false;
        b5.value = "O";
        b5.innerHTML = "O";
        break;

      case 3:
        debugger;
        controlador = false;
        b7.value = "O";
        b7.innerHTML = "O";
        break;
      default:
        return `Erro whereIplay`;
    }
  } else if (
    b3.value == undefined &&
    b5.value == undefined &&
    b7.value == undefined &&
    controlador
  ) {
    debugger;
    switch (randomMaxMin(4, 1)) {
      case 1:
        debugger;
        controlador = false;
        b3.value = "O";
        b3.innerHTML = "O";
        break;

      case 2:
        debugger;
        controlador = false;
        b5.value = "O";
        b5.innerHTML = "O";
        break;

      case 3:
        debugger;
        controlador = false;
        b7.value = "O";
        b7.innerHTML = "O";
        break;
      default:
        return `Erro whereIplay`;
    }
  } else if (
    b1.value == undefined &&
    b7.value == undefined &&
    b3.value == undefined &&
    controlador
  ) {
    debugger;
    switch (randomMaxMin(4, 1)) {
      case 1:
        debugger;
        controlador = false;
        b1.value = "O";
        b1.innerHTML = "O";
        break;

      case 2:
        debugger;
        controlador = false;
        b7.value = "O";
        b7.innerHTML = "O";
        break;

      case 3:
        debugger;
        controlador = false;
        b3.value = "O";
        b3.innerHTML = "O";
        break;
      default:
        return `Erro whereIplay`;
    }
  } else if (b1.value == undefined && b3.value == undefined && controlador) {
    switch (randomMaxMin(3, 1)) {
      case 1:
        debugger;
        controlador = false;
        b1.value = "O";
        b1.innerHTML = "O";
        break;

      case 2:
        debugger;
        controlador = false;
        b3.value = "O";
        b3.innerHTML = "O";
        break;
      default:
        return `Erro whereIplay`;
    }
  } else if (b1.value == undefined && b5.value == undefined && controlador) {
    switch (randomMaxMin(3, 1)) {
      case 1:
        debugger;
        controlador = false;
        b1.value = "O";
        b1.innerHTML = "O";
        break;

      case 2:
        controlador = false;
        debugger;
        b5.value = "O";
        b5.innerHTML = "O";
        break;
      default:
        return `Erro whereIplay`;
    }
  } else if (b1.value == undefined && b7.value == undefined && controlador) {
    switch (randomMaxMin(3, 1)) {
      case 1:
        debugger;
        controlador = false;
        b1.value = "O";
        b1.innerHTML = "O";
        break;

      case 2:
        debugger;
        controlador = false;
        b7.value = "O";
        b7.innerHTML = "O";
        break;
      default:
        return `Erro whereIplay`;
    }
  } else if (b3.value == undefined && b5.value == undefined && controlador) {
    switch (randomMaxMin(3, 1)) {
      case 1:
        debugger;
        controlador = false;
        b3.value = "O";
        b3.innerHTML = "O";
        break;

      case 2:
        debugger;
        controlador = false;
        b5.value = "O";
        b5.innerHTML = "O";
        break;
      default:
        return `Erro whereIplay`;
    }
  } else if (b3.value == undefined && b7.value == undefined && controlador) {
    switch (randomMaxMin(3, 1)) {
      case 1:
        debugger;
        controlador = false;
        b3.value = "O";
        b3.innerHTML = "O";
        break;

      case 2:
        debugger;
        controlador = false;
        b7.value = "O";
        b7.innerHTML = "O";
        break;
      default:
        return `Erro whereIplay`;
    }
  } else if (b7.value == undefined && b5.value == undefined && controlador) {
    switch (randomMaxMin(3, 1)) {
      case 1:
        debugger;
        controlador = false;
        b7.value = "O";
        b7.innerHTML = "O";
        break;

      case 2:
        debugger;
        controlador = false;
        b5.value = "O";
        b5.innerHTML = "O";
        break;
      default:
        return `Erro whereIplay`;
    }
  } else if (b1.value == undefined && controlador) {
    debugger;
    controlador = false;
    b1.value = "O";
    b1.innerHTML = "O";
  } else if (b3.value == undefined && controlador) {
    debugger;
    controlador = false;
    b3.value = "O";
    b3.innerHTML = "O";
  } else if (b5.value == undefined && controlador) {
    controlador = false;
    b5.value = "O";
    b5.innerHTML = "O";
  } else if (b7.value == undefined && controlador) {
    controlador = false;
    b7.value = "O";
    b7.innerHTML = "O";
  }

}

function whereIplay() {

  JogadasAleatorias();
  if (b1.value == undefined && controlador) {
    controlador = false
    b1.value = "O"
    b1.innerHTML = "O";
  }
  else if (b3.value == undefined && controlador) {
    controlador = false;
     b3.value = "O";
     b3.innerHTML = "O";
  }
  else if (b5.value == undefined && controlador) {
    controlador = false;
     b5.value = "O";
     b5.innerHTML = "O";
  }
  else if (b7.value == undefined && controlador) {
    controlador = false;
     b7.value = "O";
     b7.innerHTML = "O";
  }
  else if (b0.value == undefined && controlador) {
    controlador = false;
     b0.value = "O";
     b0.innerHTML = "O";
  }
  else if (b4.value == undefined && controlador) {
    controlador = false;
     b4.value = "O";
     b4.innerHTML = "O";
  }
  else if (b8.value == undefined && controlador) {
    controlador = false;
     b8.value = "O";
     b8.innerHTML = "O";
  }
  else if (b6.value == undefined && controlador) {
     controlador = false;
     b6.value = "O";
     b6.innerHTML = "O";
  }
  else if (b2.value == undefined && controlador) {
    controlador = false;
     b2.value = "O";
     b2.innerHTML = "O";
  }


  controlador = true
  vez.innerHTML = "Sua Vez";
}




random();
const handleClick = e => { 
  const box = e.target;

  if(box.value != 'O'){

  box.innerHTML = "X";
  box.value = "X";
  setTimeout(() => {
    whereIplay();
    modalDaVitoria();
    verificaEmpate();
  }, 800);
    vez.innerHTML = "";
  }
  
  

  
};
for (const box of boxElements) {
  box.addEventListener("click", handleClick,);
  
}
 storage();

