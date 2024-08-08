var age = 44
if (age >= 65) {
    console.log("You get your income from your pension")
} else if (age < 65 && age >= 18) {
    console.log("Each month you get a salary")
} else if (age > 18) {
    console.log("You get an allowance")
} else 
    console.log("The value of the age variable is not numerical")


    for (var i = 1; i < 5; i++) {
      console.log(i)
  }
      console.log('Countdown finished!')



      for (var i = 5; i >= 1; i--) {
        console.log(i)
    }
        console.log('Countdown finished!')



        var cubes = 'ABCDEFG';
//styling console output using CSS with a %c format specifier
    for (var i = 0; i < cubes.length; i++) {
    var styles = "font-size: 40px; border-radius: 10px; border: 1px solid blue; background: pink; color: purple";
    console.log("%c" + cubes[i], styles)
}



