window.addEventListener("load", (event) => {
    document.querySelector(".easy").style.display = 'none'
    document.querySelector(".hard").style.display = 'none'
    document.querySelector(".rgb").style.display = 'none'
    document.getElementById("btnD").disabled = true;
    
});


document.getElementById("btnF").addEventListener("click", ()=>{

    document.querySelector(".easy").style.display = 'block'
    document.querySelector(".rgb").style.display = 'block'    

    desabilitarBotoes()
    randomRgb()   

})

document.getElementById("btnD").addEventListener("click", ()=>{

    document.querySelector(".easy").style.display = 'block'
    document.querySelector(".hard").style.display = 'block'
    document.querySelector(".rgb").style.display = 'block'
    desabilitarBotoes()

})


function desabilitarBotoes(){
    document.getElementById("btnF").disabled = true;
    document.getElementById("btnD").disabled = true;
}

function randomRgb(param = 9){

    let count, array = [], n, rep = param;    

    for(count = 0; count < rep; count ++){

        n = parseInt(Math.random() * 251)
        array.push(n)
    }    

    setRgb(array)

}

function setRgb(arrayParam = []){

    choose = parseInt(Math.random() * 3)

    let nameClass = "quad" + choose;
    let newArray = [arrayParam[0], arrayParam[1], arrayParam[2]]
    
    for (let index = 0; index < 3; index++) {

        if(index === choose){
            document.querySelector(".quad" + choose).style.backgroundColor = "RGB(" + arrayParam[0] + ", "+ arrayParam[1] +", "+ arrayParam[2]+")"
            document.getElementById("rgbCores").innerHTML = "RGB("+ arrayParam[0] +","+ arrayParam[1] +","+ arrayParam[2]+")"
        }
        
        document.querySelector(".quad" + index).style.backgroundColor = "RGB(" + arrayParam[0] + ", "+ arrayParam[1] +", "+ arrayParam[2]+")"
        arrayParam.splice(0, 3)
    }    

    check(nameClass, newArray)

}

function check(classe, rbg = []){

    document.querySelector(".quad0").addEventListener("click", ()=>{

        if(classe == "quad0"){
            alert("Parabéns, você acertou!")
            document.querySelector(".quad1").style.display = 'none'
            document.querySelector(".quad2").style.display = 'none'
        }else{
            alert("Que pena, você errou!")
            if(classe == "quad1"){
                document.querySelector(".quad0").style.display = 'none'
                document.querySelector(".quad2").style.display = 'none'
            }else{
                document.querySelector(".quad0").style.display = 'none'
                document.querySelector(".quad1").style.display = 'none'
            }
        }

    })

    document.querySelector(".quad1").addEventListener("click", ()=>{

        if(classe == "quad1"){
            alert("Parabéns, você acertou!")
            document.querySelector(".quad0").style.display = 'none'
            document.querySelector(".quad2").style.display = 'none'
        }else{
            alert("Que pena, você errou!")
            if(classe == "quad2"){
                document.querySelector(".quad0").style.display = 'none'
                document.querySelector(".quad1").style.display = 'none'
            }else{
                document.querySelector(".quad1").style.display = 'none'
                document.querySelector(".quad2").style.display = 'none'
            }          
        }

    })

    document.querySelector(".quad2").addEventListener("click", ()=>{

        if(classe == "quad2"){
            alert("Parabéns, você acertou!")
            document.querySelector(".quad0").style.display = 'none'
            document.querySelector(".quad1").style.display = 'none'
        }else{
            alert("Que pena, você errou!")
            if(classe == "quad1"){
                document.querySelector(".quad0").style.display = 'none'
                document.querySelector(".quad2").style.display = 'none'
            }else{
                document.querySelector(".quad1").style.display = 'none'
                document.querySelector(".quad2").style.display = 'none'
            }
        }

    })

}