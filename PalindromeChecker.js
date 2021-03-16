function isPalindrome(str) {
    // remove all non-alphanumeric characters !@#$%^&*()-_=+*/?<>
      var strClean = str.replace(/[\W_]/g, "").toLowerCase(); 
      var strConverted = strClean.split("").reverse().join("");
      if (strClean === strConverted){
        return true; 
      } else {
        return false;
      }
  }
  
  //Test1
  console.log("eye:  " + isPalindrome("eye"));
  
  //Test2
  console.log("_eye:  " + isPalindrome("_eye"));
  
  //Test3
  console.log("racecar:  " + isPalindrome("racecar"));
  
  //Test4
  console.log("RaceCar:  " + isPalindrome("RaceCar"));
  
  //Test5
  console.log("race CAR:  " + isPalindrome("race CAR"));
  
  //Test6
  console.log("A man, a plan, a canal. Panama:  " + isPalindrome("A man, a plan, a canal. Panama"));
  
  //Test7
  console.log("My age is 0, 0 si ega ym.:  " + isPalindrome("My age is 0, 0 si ega ym."));
  
  //Test8
  console.log("five|\_/|four:  " + isPalindrome("five|\_/|four"));