/* This is a Feed Forward neural net with three
layer perceptron: input layer, hidden layer, output layer.
*/

function setup() {
  // put setup code here
  createCanvas(400, 400);
  brain = new Neural_Net(3, 3, 1);
}

function draw() {
  // put drawing code here
  background(0,255, 0);
}
