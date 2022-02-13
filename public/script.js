eruda.init({
  defaults: {
    theme: "Dark"
  }
});
eruda.show();

const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

canvas.width = innerWidth;
canvas.height = innerHeight;

class WeightMatrix {
  constructor(rows, columns) {
    this.array = [];

    for(let row = 0;row < rows; row++) {
      this.array.unshift([]);
      for(let column = 0;column < columns; column++) {
        this.array[0].push((Math.random()*2)-1);
      }
    }
  }
  add(matrix2) {
    var addedMatrix = [];
    for(let row = 0;row < matrix2.array.length; row++) {
      addedMatrix.push([]);
      for(let column = 0;column < matrix2.array[row].length; column++) {
        addedMatrix[addedMatrix.length-1].push(matrix2.array[row][column] + this.array[row][column]);
      }
    }
    return addedMatrix;
  }
}

class BiasVector {
  constructor(length) {
    this.array = [];
    for(let i = 0;i < length;i++) {
      this.array.push((Math.random()*2)-1);
    }
  }
}

class NeuronVector {
  constructor(length) {
    this.array = [];
    for(let i = 0;i < length;i++) {
      this.array.push(0);
    }
  }
}

let w0 = new WeightMatrix(9, 7);
let w1 = new WeightMatrix(7, 5);
let w2 = new WeightMatrix(5, 7);
let w3 = new WeightMatrix(7, 9);

function Start() {
  Update();
}

function Update() {
  //requestAnimationFrame(Update);
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "white";
}

window.onload = function() {
  Start();
}

window.onresize = () => {
  canvas.width = innerWidth;
  canvas.height = innerHeight;
}
