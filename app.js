let dumy = [8, 7, 1, 5, 3]

function quiclkSort(arr) {
  console.log(arr)
  if(arr.length <= 1) return arr
  
  let pivot = arr.shift()
  const greater = []
  const less = []
  
  for (let i = 0; i < arr.length; i++) {
    arr[i] > pivot ? greater.push(arr[i]) : less.push(arr[i])
  }
  
  return quiclkSort(less) + [pivot] + quiclkSort(greater)
}
// driver code
console.log("sorted.",quiclkSort(dumy));
