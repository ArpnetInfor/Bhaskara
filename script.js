let calculator = document.getElementById('calcular')

calculator.addEventListener('click', ()=>{
    let a = document.getElementById('num1').value
        let b = document.getElementById('num2').value
            let c = document.getElementById('num3').value
                let condicao = document.getElementById('condicao')
                    let resultado1 = document.getElementById('res1')
                        let resultado2 = document.getElementById('res2')
    let delta
    let x1
    let x2

    delta = (b**2) - 4*a*c

    x1 = (-b + Math.sqrt(delta))/ 2*a
    x2 = (-b - Math.sqrt(delta))/ 2*a


    if (delta == "") {
        alert("Digitar os valores de a, b, c")
        document.getElementById('num1').focus()
    }else if (delta > 0) {
        condicao.innerHTML = (`Delta: ${delta} - Raízes reais e distintas.`)
            resultado1.innerHTML = x1.toFixed(2)
                resultado2.innerHTML = x2.toFixed(2)
                    document.getElementById('num1').value = "" 
                        document.getElementById('num2').value = "" 
                            document.getElementById('num3').value = ""
                                document.getElementById('num1').focus()
    }else if(delta == 0){
        condicao.innerHTML = (`Delta: ${delta} - Somente uma raiz real.`)
            resultado1.innerHTML = x1.toFixed(2)
                resultado2.innerHTML = x2.toFixed(2) 
                    document.getElementById('num1').value = "" 
                        document.getElementById('num2').value = "" 
                            document.getElementById('num3').value = ""
                                document.getElementById('num1').focus() 
    }else if(delta < 0){
        condicao.innerHTML = (`Delta: ${delta} - Não possui raízes reais.`)
            resultado1.innerHTML = "0"
                resultado2.innerHTML = "0"
                    document.getElementById('num1').value = "" 
                        document.getElementById('num2').value = "" 
                            document.getElementById('num3').value = ""
                                document.getElementById('num1').focus()
    }

    

    
    

})