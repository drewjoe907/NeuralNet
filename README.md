# drewjoe907
# NeuralNet

This is a simple neural_net in javascript using supervised 
learning strategy for machine learning.

Why Javascript? This is a training excersise to build up my matrix math 
muscles. But also I think it is super fun to impliment algorithms in 
javascript. A machine learner right there in the browser makes me feel like
we will never be alone. Best Friends!

Algorithms used:

    Perceptron:
    1. for every input multiply that input by its weight.
    2. Sum all the weighted inputs:  x(0)*W(0) + x(1)*w(1)
    3. Compute the output of the perceptron based on that 
    sum passed to the 
    Activation fuction -> sign(n) -> if n>=0 -> 1 if n < 0 -> -1
    
whereever i refer to a neuron below - im really talking about a node 
which performs the perceptron algorithm
    
    Feed Forward: 
    1. use hidden neuron to calculate a weighted sum.
       the hidden neuron takes the input value of the edge
       coming to it & multiplies the input value by the   
       weight of the edge. the weights are set random
       between -1 & 1. then it adds it to the edge's product
       of input value times weight.  It does this over &
       over til it is out of incoming edges.


       if you hade input values 3, 2, 1000, & you had weights
       .5, -.5, 1, then the weighted sum would be:
       (3 * .5) + (2 * -.5) + (1000 * 1) = 1000.5



    2. initiate & fill a matrix. We will also want the to be 
    able to perform matrix operations.
