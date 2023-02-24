window.onload = function() {

    //calculator function
    let keypadNums = Array.from(document.getElementsByClassName("keypad-nums"));;
    let keypadClean = Array.from(document.getElementsByClassName("keypad-clean"));;
    let keyEqual = document.querySelector(".key-equal");  
    let screen = document.getElementById("screen");
    
    keypadNums.forEach(key => {key.addEventListener("click",()=>{
        if(key.innerText == "x"){
            screen.innerText += "*"
        }
        else {
            screen.innerText += key.innerText ;
        }
    })}) 
    
    keypadClean.forEach(key => {key.addEventListener("click",()=>{
        if(key.innerText == "RESET"){
            screen.innerText = "" ;
        }
        if(key.innerText == "DEL"){
            screen.innerText = screen.innerText.slice(0, -1) ;
        }
    })}) 
    
    keyEqual.addEventListener("click",()=>{
        try{
      screen.innerText = eval(screen.innerText);
        }
        catch{
      screen.innerText = "error";
        }
    })
    
    
    let body = document.querySelector("body");
    let header = document.querySelector(".header");
    let theme = document.querySelector(".theme");
    let themeOne = document.querySelector("#theme-1");
    let themeTwo = document.querySelector("#theme-2");  
    let themeThree = document.querySelector("#theme-3");   
    let keypad = document.querySelector("#keypad") ;
    let keyReset = document.querySelector(".key-reset") ; 
    let keyDel = document.querySelector(".key-del")
    
    //theme one
    themeOne.addEventListener("click",()=>{
        themeTwo.style.opacity = "0" ;
        themeOne.style.opacity = "1" ;
        themeThree.style.opacity = "0" ;
        theme.style.backgroundColor = "hsl(223, 31%, 20%)" ;
        body.style.backgroundColor = "hsl(222, 26%, 31%)" ;
        header.style.color = "white" ;
        screen.style.backgroundColor = "hsl(224, 36%, 15%)" ;
        screen.style.color = "white" ;
        keypad.style.backgroundColor = "hsl(223, 31%, 20%)" ;
        keypadNums.forEach(key=>{
            key.className = "keypad-nums";
        })
        keyReset.className = "keypad-clean key-reset"
        keyDel.className = "keypad-clean"
        keyEqual.className = "key-equal"  
    }) 
      
    //theme 2
    themeTwo.addEventListener("click",()=>{
        themeTwo.style.opacity = "1" ;
        themeOne.style.opacity = "0" ;
        themeThree.style.opacity = "0" ;
        theme.style.backgroundColor = "hsl(0, 5%, 81%)" ;
        body.style.backgroundColor = "hsl(0, 0%, 90%)" ;
        header.style.color = "hsl(60, 10%, 19%)" ;
        screen.style.backgroundColor = "hsl(0, 0%, 93%)" ;
        screen.style.color = "hsl(60, 10%, 19%)" ;
        keypad.style.backgroundColor = "hsl(0, 5%, 81%)" ;
        keypadNums.forEach(key=>{
            key.className = "keypad-nums-theme2";
        })
        keyReset.className = "keypad-clean-theme2 key-reset"
        keyDel.className = "keypad-clean-theme2"
        keyEqual.className = "key-equal-theme2"  
    }) 
    
    //theme 3
    themeThree.addEventListener("click",()=>{
        themeTwo.style.opacity = "0" ;
        themeOne.style.opacity = "0" ;
        themeThree.style.opacity = "1" ;
        theme.style.backgroundColor = "hsl(268, 71%, 12%)" ;
        body.style.backgroundColor = "hsl(268, 75%, 9%)" ;
        header.style.color = "hsl(52, 100%, 62%)" ;
        screen.style.backgroundColor = "hsl(268, 71%, 12%)" ;
        screen.style.color = "hsl(52, 100%, 62%)" ;
        keypad.style.backgroundColor = "hsl(268, 71%, 12%)" ;
        keypadNums.forEach(key=>{
            key.className = "keypad-nums-theme3";
        })
        keyReset.className = "keypad-clean-theme3 key-reset"
        keyDel.className = "keypad-clean-theme3"
        keyEqual.className = "key-equal-theme3"  
    }) 
    }