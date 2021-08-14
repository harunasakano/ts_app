export default function notExistSample() {
  let name = null
  console.log('primitive sample 1:', typeof name, name)
  name = 'まるなち'
  if (!name) {
    console.log('名前がない。nameは' + name)
  } else {
    console.log('名前がある。nameは' + name)
  }

  let age = undefined
  console.log('primitive sample 2:', typeof age, age)

  age = 26
  if (!age) {
    console.log('年齢不明。' + age)
  } else {
    console.log('年齢は' + age)
  }
}
