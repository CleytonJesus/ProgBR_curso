//DESAFIO DO MAP(Criando o meu MAP):
let copiaDoMap = (callback) => {
    //Armazenando a arrow function na variável  
    if (typeof callback === 'function') {
        let newArray = new Array;
        for (const iterator of meuArr) {
            newArray.push(callback(iterator));
        }
        return newArray;
    } else {
        throw "Deve se passar uma função como parâmetro.";
    }
}
let retorno = (iterator) => { return { num: iterator } } //Função que irá modificar o meu array modificado;
let meuArr = [1, 2, 1]; //Meu Array(Original);
let copiaMeuArr = copiaDoMap(retorno);//Armazenando uma cópia do meu array modificado;
copiaMeuArr.push(3, 2)//Alterando o meu array modificado;
console.log(" O Array original: " + meuArr + "\n O Array modificado mas baseado no array original: " + copiaMeuArr);//Verificando se há alterações nos dois arrays(Objetivo: somente a cópia deve haver modificações);


//DESAFIO DO REDUCE
let arr2 = [10,10] //Criando um array
let meuReduce = (callback) => {
    //Armazenando a arrow function na variável
    let total = null;

    for (const iterator in arr2) {
        if (typeof arr2[iterator] === "string") {
            total += arr2[iterator];
        } else {
            if (callback(iterator)) {
                total += arr2[iterator];
            }
        }

    }




    return total;
}
function maiorQueDois(i) {
    //função que dita uma condição,no caso se é maior que dois
    return arr2[i] > 2;
}


console.log(meuReduce(maiorQueDois), arr2)

