import { revenue, revenueByState } from "./assets.mjs";

function calcSum() {
  const limit = 13;
  let index = 0;
  let sum = 0;

  while (index < limit) {
    sum += index;
    index++;
  }

  console.log(`result: ${sum}`);
}

function fibonacci(n) {
  if (n < 0) return false;

  let prev = 0;
  let curr = 1;
  let next;

  for (let i = 2; i <= n; i++) {
    if (curr === n) return true;
    next = prev + curr;
    prev = curr;
    curr = next;
  }

  return false;
}

function findInFibonacci(n) {
    const result = fibonacci(n);

    console.log(`${n} está em fibonacci: ${result ? 'sim' : 'nao'}`);
}

function calcRevenue() {
  if (!revenue || revenue.length === 0) return;

  let min = revenue[0].valor;
  let max = revenue[0].valor;
  let total = 0;

  revenue.forEach(({ valor }) => {
    if (valor < min) min = valor;
    if (valor > max) max = valor;
    total += valor;
  });

  const med = total / revenue.length;
  const countAboveMed = revenue.filter(({ valor }) => valor > med).length;

  console.log(`
    min: ${min}, 
    Qtd Acima da média: ${countAboveMed}, 
    max: ${max}
  `);
}

function calcRevenueByState() {
    const total = revenueByState.reduce((sum, state) => sum + state.value, 0);
    const result = revenueByState.map(state => 
        `Porcentagem de ${state.name}: ${(state.value / total * 100).toFixed(2)}%`
    );

    console.log(result.join('\n'));
}

function revertString (str) {
    const limit = str.length-1;
    let result = '';

    for(let i = limit; i >= 0; i--) {
        result += str[i];
    }
    
    console.log(`input: ${str}`);
    console.log(`output: ${result}`);
}


function runAnswers() {
    const awnsers = {
        'questão 1': calcSum,
        'questão 2': () => findInFibonacci(10),
        'questão 3': calcRevenue,
        'questão 4': calcRevenueByState,
        'questão 5': () => revertString('hello, world!')
    }
    Object.keys(awnsers).forEach(key => {
        console.log(`Questão ${key}:`)
        awnsers[key]();
        console.log(`---------------`)
    });
}

runAnswers();