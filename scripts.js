let arreglo = []


function addNum(num)
{
    console.log(num)
    document.getElementById("total").removeAttribute("hidden")
    document.getElementById("total").innerHTML += num
}

function addAcumulador(accion)
{
    arreglo.push(document.getElementById("total").innerHTML)
    arreglo.push(accion)
    document.getElementById("total").innerHTML=("")
    console.log(arreglo)
}

function realizarCuenta()
{
    arreglo.push(document.getElementById("total").innerHTML)
    let resultado = 0
    let ultimoNro = 0
    
    //console.log(arreglo[arreglo.length-1])
    for (let i=0;i<arreglo.length;i++)
        {
            if(arreglo[i]=='+')
                {
                    resultado= resultado + ultimoNro
                    
                }else
                {
                    console.log(typeof(arreglo[i]))
                    
                    ultimoNro=Number(arreglo[i])
                    
                }
            if(i==arreglo.length-1)
                {
                    if(arreglo[i-1]=='+')
                        {
                            ultimoNro=Number(arreglo[i])
                            resultado=resultado+ultimoNro
                        }
                }
                            
                
        }
    document.getElementById("resultado").removeAttribute("hidden")
    document.getElementById("resultado").innerHTML=resultado
    
}
