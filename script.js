document.getElementById('btn').addEventListener('click', function run() {
  let output = document.getElementById('output')
  while(!!output.lastChild) {
    output.removeChild(output.lastChild)
  }

  let steps = []
  let n = document.getElementById('numberInput').value
  if (n !== 0 && n !== '' && n !== null && n !== undefined) steps = collatzCalc(n)
  else console.log('you must input a number')

  output.appendChild(document.createTextNode(`STEPS: ${steps.length}`))
  output.appendChild(document.createElement('br'))

  for (let step of steps) {
    if (step !== 1) output.appendChild(document.createTextNode(`${step}, `))
    else output.appendChild(document.createTextNode(step))
  }
})

function parity(n) {
  return n % 2 === 0 ? 'even' : 'odd'
}

function ifEven(n) {
  return n / 2
}

function ifOdd(n) {
  return (3 * n) + 1
}

function collatzCalc(n) {
  let steps = []
  while (n !== 1) {
    steps.push(Number(n))
    if (parity(n) === 'even') n = ifEven(n)
    else if (parity(n) === 'odd') n = ifOdd(n)
  }
  steps.push(n)
  console.log(steps)
  return steps
}
