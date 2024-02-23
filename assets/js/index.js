window.addEventListener("load", (event) => {
    document.querySelector(".easy").style.display = 'none'
    document.querySelector(".hard").style.display = 'none'
    document.querySelector(".rgb").style.display = 'none'
    document.querySelector("#btnResete").style.display = 'none'
});


document.getElementById("btnF").addEventListener("click", ()=>{

    document.querySelector(".easy").style.display = 'block'
    document.querySelector(".rgb").style.display = 'block'    

    desabilitarBotoes()
    randomRgb(9)   

})

document.getElementById("btnD").addEventListener("click", ()=>{

    document.querySelector(".easy").style.display = 'block'
    document.querySelector(".hard").style.display = 'block'
    document.querySelector(".rgb").style.display = 'block'
    randomRgb(18)
    desabilitarBotoes()

})


function desabilitarBotoes(){
    document.getElementById("btnF").disabled = true;
    document.getElementById("btnD").disabled = true;
}

function randomRgb(param){

    let count, array = [], n, rep = param, paramCores, chooseParam;    

    for(count = 0; count < rep; count ++){

        n = parseInt(Math.random() * 251)
        array.push(n)
    }

    if(rep == 9){
        paramCores = 3
        chooseParam = 3
    }else{
        paramCores = 9
        chooseParam = 6
    }

    setRgb(array, chooseParam)

}

function setRgb(arrayParam = [], chooseParam){
    
    choose = parseInt(Math.random() * chooseParam)

    let nameClass = "quad" + choose;

    console.log(nameClass)
    
    for (let index = 0; index < chooseParam; index++) {

        if(index === choose){
            document.querySelector(".quad" + choose).style.backgroundColor = "RGB(" + arrayParam[0] + ", "+ arrayParam[1] +", "+ arrayParam[2]+")"
            document.getElementById("rgbCores").innerHTML = "RGB("+ arrayParam[0] +","+ arrayParam[1] +","+ arrayParam[2]+")"
        }
        
        document.querySelector(".quad" + index).style.backgroundColor = "RGB(" + arrayParam[0] + ", "+ arrayParam[1] +", "+ arrayParam[2]+")"
        arrayParam.splice(0, 3)
    }    

    

    check(nameClass)

}

function check(classe){

    document.querySelector(".quad0").addEventListener("click", ()=>{

        if(classe == "quad0"){
            alert("Parabéns, você acertou!")
            document.querySelector(".quad1").style.display = 'none'
            document.querySelector(".quad2").style.display = 'none'
            reseteGame()
        }else{
            alert("Que pena, você errou!")
            if(classe == "quad1"){
                document.querySelector(".quad0").style.display = 'none'
                document.querySelector(".quad2").style.display = 'none'
                reseteGame()
            }else{
                document.querySelector(".quad0").style.display = 'none'
                document.querySelector(".quad1").style.display = 'none'
                reseteGame()
            }
        }

    })

    document.querySelector(".quad1").addEventListener("click", ()=>{

        if(classe == "quad1"){
            alert("Parabéns, você acertou!")
            document.querySelector(".quad0").style.display = 'none'
            document.querySelector(".quad2").style.display = 'none'
            reseteGame()
        }else{
            alert("Que pena, você errou!")
            if(classe == "quad2"){
                document.querySelector(".quad0").style.display = 'none'
                document.querySelector(".quad1").style.display = 'none'
                reseteGame()
            }else{
                document.querySelector(".quad1").style.display = 'none'
                document.querySelector(".quad2").style.display = 'none'
                reseteGame()
            }          
        }

    })

    document.querySelector(".quad2").addEventListener("click", ()=>{

        if(classe == "quad2"){
            alert("Parabéns, você acertou!")
            document.querySelector(".quad0").style.display = 'none'
            document.querySelector(".quad1").style.display = 'none'
            reseteGame()
        }else{
            alert("Que pena, você errou!")
            if(classe == "quad1"){
                document.querySelector(".quad0").style.display = 'none'
                document.querySelector(".quad2").style.display = 'none'
                reseteGame()
            }else{
                document.querySelector(".quad1").style.display = 'none'
                document.querySelector(".quad2").style.display = 'none'
                reseteGame()
            }
        }

    })

}

function reseteGame(){
    document.querySelector("#btnResete").style.display = 'block'

    document.getElementById("btnResete").addEventListener("click", ()=>{

        window.location.reload(true);

    })
}