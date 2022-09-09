const { template } = require('@babel/core')

function concatArray(array1, array2) {
  if(array1 === null && array2 === null ){// case 1
    return undefined
  }
  else if(array1 === undefined && array2 === undefined ){
    return undefined
  }
  else if(array1 === null ){
    return array2
  }
  else if(array2 === null ){
    return array1
  }
  else if(array1 === undefined ){
    return array2
  }
  else if(array2 === undefined){
    return array1
  }
  return array1.concat(array2)
  
  
  
  
  // else if(array2 === null || array2 === undefined ){
  //   return undefined
  // }
  // return array1.concat(array2)



  // else if(array1|array2 === null || array1|array2 === undefined || array1|array2 == []){
  //   return undefined
  // }
  // return array1.concat(array2)
  // else if(array1 === null && array2 === null ){// case 1
  //   return undefined
  // }
  // else if(array2 === null || array2 === undefined || array2 == []){
  //   return undefined
  // }
  // return array1.concat(array2)
  // else if(array1 === null || array2 === null){ //case 3
  //   return undefined
  // }
  // else if(array1 === undefined || array2 === undefined){ //case 3
  //   return undefined
  // }
  // else if(array1 == [] || array2 == []){// case 3
  //   return undefined
  // }
  // if(array1 === null || array1 === undefined || array1 == []){
  //   return array1.concat(array2)
  // }
  // return undefined
}
module.exports = concatArray
