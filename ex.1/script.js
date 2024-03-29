
const data = [
{
nome: 'Roger Medeiros',
sexo: 'M',
salario: 3250,
},
{
nome: 'Carolina Silva',
sexo: 'F',
salario: 1200,
},
{
nome: 'Cristina Avila',
sexo: 'F',
salario: 8100,
},
{
nome: 'Gustavo Hoffman',
sexo: 'M',
salario: 5200.35,
},
{
nome: 'Eva Trindade',
sexo: 'F',
salario: 2501,
},
{
nome: 'Andre Mathias',
sexo: 'M',
salario: 1750,
},
{
nome: 'Joice Castro da Silva',
sexo: 'F',
salario: 3350.25,
}
]

//1. Imprima no console a quantidade de pessoas Total.


console.log("Quantidade total de pessoas:", data.length)

//2. Imprima no console a quantidade de pessoas pessoas do sexo Feminino.

const mulheres = data.filter((pessoa) => pessoa.sexo === 'F');
console.log("Quantidade de mulheres:", mulheres.length);

//3. Imprima no console a soma do salário de todas as pessoas.

const somaSalarios = data.reduce((soma, pessoa) => soma + pessoa.salario, 0);
console.log("Soma dos salários de todas as pessoas:", somaSalarios)

//4. Imprima no console a média do salário de todas as pessoas.

const somaSalario = data.reduce((soma, pessoa) => soma + pessoa.salario, 0);
const mediaSalario = somaSalario / data.length;
console.log("Média dos salários de todas as pessoas:", mediaSalario.toFixed(2));

//5. Imprima no console a soma do salário de todos as pessoas do sexo Masculino
const pessoasMasculinas = data.filter(pessoa => pessoa.sexo === 'M');

// Calcula a soma dos salários
const somaSalariosMasculinos = pessoasMasculinas.reduce((soma, pessoa) => soma + pessoa.salario, 0);

// Imprime a soma no console
console.log("Soma dos salários das pessoas do sexo Masculino:", somaSalariosMasculinos);





//6. Imprima no console a média do salário de todas as pessoas do sexo Masculino
const pessoaMaculina= data.filter(pessoa=> pessoa.sexo ==='M');
const mediaSalariosMasculinos = totalSalariosMasculinos / pessoasMasculinas.length;
console.log("Média dos salários das pessoas do sexo Masculino:", mediaSalariosMasculinos.toFixed(2))

//7. Utilize a função Some, para descobrir se existe algum salário 
//superior a R$ 7.000, imprima verdadeiro no console caso exista, caso
//contrário falso.


//8. Utilize a função findIndex, para descobrir a posição da pessoa de
//nome 'Eva Trindade'.


//9. Utilize a função filter, para filtrar todas pessoas que o nome possua o
//sobrenome "Silva".



// 10. Imprima os nomes utilizando o MAP