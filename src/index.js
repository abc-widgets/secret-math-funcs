export function secretFunction(a, b) {
  return a + b
}

// NOTE: fancy timeout promise. ;)
function timeout(ms) {
  return new Promise(resolve => setTimeout(resolve, ms))
}

export async function secretLongRunningFunction(a, b) {
  await timeout(2000)
  return secretFunction(a, b)
}

export default { secretFunction, secretLongRunningFunction }
