/* 
Precisamos de um código que calcule a tabuada de multiplicação do 7 e imprima a expressão seguido do resultado. 
Exemplo:


    7 x 1 = 7
    7 x 2 = 14
    7 x 3 = 21
    7 x 4 = 28
    7 x 5 = 35
    7 x 6 = 42
    7 x 7 = 49
    7 x 8 = 56
    7 x 9 = 63
    7 x 10 = 70



Lembre-se de fazer a multiplicação do 7 x 1 até 7 x 10! 


Ah, uma última dica, você deve usar a variável i que é nosso contador para concatenar na hora de montar a mensagem “7 x 1”!
Afinal os valores depois do X (1,2,3,4…) são os valores que mudam de acordo com cada interação do loop.
*/
// Escreva seu código aqui
for(c = 1; c < 11; c++){
    console.log("7 x " + c + " = " + 7*c)
}