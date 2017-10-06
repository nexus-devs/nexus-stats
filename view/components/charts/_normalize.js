/**
 * Helper function for charts to normalize null values
 */
 function normalize(arr, raw) {
   const result = []
   let min = Number.POSITIVE_INFINITY
   let max = Number.NEGATIVE_INFINITY

   arr.forEach((y, x) => {

     // Raw flag specifying that we want raw numbers in the output instead of
     // custom objects with visible/actual keys
     if (raw) {
       let val = y

       if (!y) {
         const n = findNearestNeighbours(arr, x)
         val = (n[0] + n[1]) / 2
       }
       result.push(val)
     }

     // No raw request specified -> retrieve full object by default
     else {
       let val = {
         actualX: x,
         actualY: y,
         visibleX: x,
         visibleY: y,
         isMin: false,
         isMax: false
       }
       min = y < min ? y : min
       max = y > max ? y : max

       // Normalize null value from nearest neighbours
       if (!val.actual) {
         const n = findNearestNeighbours(arr, x)
         val.visibleY = (n[0] + n[1]) / 2
       }
       result.push(val)
     }
   })

   // Apply min/max values to data object
   if (!raw) {
     let minObj = result.find(d => d.actualY === min)
     let maxObj = result.find(d => d.actualY === max)
     minObj.isMin = true
     maxObj.isMax = true
   }

   return result
 }

 // Helper function to get nearest neighbour with actual value
 function findNearestNeighbours(arr, index) {
   const result = [null, null]
   let i = index
   let j = index

   // Left of index
   for (null; i >= 0; i--) {
     if (arr[i]) {
       result[0] = arr[i]
       break
     }
   }

   // Right of index
   for (null; j < arr.length; j++) {
     if (arr[j]) {
       result[1] = arr[j]
       break
     }
   }

   // If either side has no value, use either for both
   if (!result[0]) {
     result[0] = result[1]
   }
   if (!result[1]) {
     result[1] = result[0]
   }
   return result
 }

export default normalize
