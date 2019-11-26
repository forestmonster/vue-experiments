function eql(arr1, arr2) {
    var falsehood = 0
  
    arr1.forEach((element, index) => {
      if (element !== arr2[index]) {
        falsehood = 1
      }
    })
    
    arr2.forEach((element, index) => {
      if (element !== arr1[index]) {
        falsehood = 1
      }
    })
    
    if (falsehood == 1) {
      return false
    } else {
      return true
    }
  }