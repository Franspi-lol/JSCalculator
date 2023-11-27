let arreglo = []


function addNum(num)
{
    console.log(num)
    document.getElementById("total").removeAttribute("hidden")
    document.getElementById("total").innerHTML += num
}

function addAcumulador(accion)
{
    if(document.getElementById("total").innerHTML != "")
    {
        arreglo.push(document.getElementById("total").innerHTML)
        arreglo.push(accion)
        document.getElementById("total").innerHTML=("")
        console.log(arreglo)
    }
    /* arreglo.push(document.getElementById("total").innerHTML)
    arreglo.push(accion)
    document.getElementById("total").innerHTML=("")
    console.log(arreglo) */
}

function realizarCuenta()
{
    arreglo.push(document.getElementById("total").innerHTML)
    let resultado = 0
    
    
    for(let i=0; i<arreglo.length; i++)
    {
        if(i==0 )
        {
            
                resultado = parseInt(arreglo[i])
                console.log('no es +')
            
            
        }
        else
        {
            if(arreglo[i] == "+")
            {
                resultado += parseInt(arreglo[i+1])
            }
            else if(arreglo[i] == "-")
            {
                resultado -= parseInt(arreglo[i+1])
            }
            else if(arreglo[i] == "*")
            {
                resultado *= parseInt(arreglo[i+1])
            }
            else if(arreglo[i] == "/")
            {
                resultado /= parseInt(arreglo[i+1])
            }
        }
    }
    
    document.getElementById("resultado").removeAttribute("hidden")
    document.getElementById("resultado").innerHTML=resultado
    document.getElementById("total").innerHTML=(resultado)
    arreglo = []
    arreglo.push(resultado)
    
}

function limpiar()
{
    document.getElementById('total').innerHTML = ""
    document.getElementById('resultado').innerHTML = ""
    arreglo = []
}
