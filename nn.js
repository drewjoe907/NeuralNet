function sigmoid(x) {
  return 1 / (1 + Math.exp(-x));
}

class NeuralNetwork {
  constructor(input_nodes, hidden_nodes, output_nodes) {
    this.input_nodes = input_nodes;
    this.hidden_nodes = hidden_nodes;
    this.output_nodes = output_nodes;

    this.weights_ih = new Matrix(this.hidden_nodes, this.input_nodes); // Matrix of weights with hidden nodes as the number of rows & input nodes as the number of columns
    this.weights_ho = new Matrix(this.output_nodes, this.hidden_nodes); // Matrix of weights with output nodes as the number of rows & hidden nodes as the number of columns
    this.weights_ih.randomize();
    this.weights_ho.randomize();
    
    this.bias_h = new Matrix(this.hidden_nodes, 1);
    this.bias_o = new Matrix(this.output_nodes, 1);
    this.bias_h.randomize();
    this.bias_o.randomize();
  }

  feedforward(input_array) {

    let inputs = Matrix.fromArray(input_array);

    // LOTS OF MATRIX MATH
    let hidden = Matrix.multiply(this.weights_ih, inputs);

    hidden.add(this.bias_h);


    // activation function!
    hidden.map(sigmoid);
    


    // Generating output
    let output = Matrix.multiply(this.weights_ho, hidden);

    output.add(this.bias_o);


    output.map(sigmoid);
    

    return output.toArray();
  }

}