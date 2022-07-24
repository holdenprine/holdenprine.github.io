

var rainbow = "&#x1f308"
var bomb = "&#x2620"
var tree = "&#x1f332"
var count = 0
    
let iconRand = [rainbow, bomb, tree, tree, tree, tree, tree, tree, tree]
const choices = iconRand.sort(() => Math.random()-0.5).slice(0.9)

const gamePlay = (click) => {
    
    // do {
                
    // }while(count > 4)
    
    
    if(click ===flask0) {
        document.getElementById("flask0").innerHTML=choices[0]
    }else if(click === flask1) {
        document.getElementById("flask1").innerHTML=choices[1]
    }else if(click === flask2) {
        document.getElementById("flask2").innerHTML=choices[2]
    }else if(click === flask3) {
        document.getElementById("flask3").innerHTML=choices[3]
    }else if(click === flask4) {
        document.getElementById("flask4").innerHTML=choices[4]
    }else if(click === flask5) {
        document.getElementById("flask5").innerHTML=choices[5]
    }else if(click === flask6) {
        document.getElementById("flask6").innerHTML=choices[6]
    }else if(click === flask7) {
        document.getElementById("flask7").innerHTML=choices[7]
    }else if(click === flask8) {
        document.getElementById("flask8").innerHTML=choices[8]
    }

    count++
    
    if(count > 4) {
        gameOver()
    }
   
    
}

const gameOver = (count) => {
    alert("game over")
}