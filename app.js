let dumy = [8, 7, 1, 5, 3]

function quickSort(arr) {

  if(arr.length <= 1) return arr
  
  let pivot = arr[0]
  const greater = []
  const less = []
  
  for (let i = 1; i < arr.length; i++) {
    arr[i] <= pivot ? less.push(arr[i]) : greater.push(arr[i])
  }
  return quickSort(less) + [pivot] + quickSort(greater)
}
