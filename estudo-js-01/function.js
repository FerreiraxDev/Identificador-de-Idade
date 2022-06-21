function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var idade = document.querySelector('input#number')
    var resultado = document.querySelector('div#res')

    if(idade.value.length == 0 || Number(idade.value) > ano){
        window.alert('[ERRO] Verifique os dados e tente novamente')
    }else{
        var fAno = ano - Number(idade.value)
        var fSex = document.getElementsByName('sex')
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id','foto')
        if(fSex[0].checked){
            genero = 'homem'
            if(fAno == 0 || fAno <= 10){
                img.setAttribute('src','/images/criança-homem.png')
                document.body.style.backgroundColor = '#F57A7A'
            }else if(fAno > 10 && fAno < 18){
                img.setAttribute('src','/images/menino.png')
                document.body.style.backgroundColor = '#B19B9B'           
            }else if(fAno > 18 && fAno <= 50){
                img.setAttribute('src','/images/homem.png')
                document.body.style.backgroundColor = '#454040'         
            }else if(fAno > 50 && fAno <= 115){
                img.setAttribute('src','/images/idoso.png')  
                document.body.style.backgroundColor = '#DEC0C0'             
            }
        }else if(fSex[1].checked){
            genero = 'mulher'
            if(fAno == 0 || fAno <= 10){
                img.setAttribute('src','/images/criança-mulher.png') 
                document.body.style.backgroundColor = '#F57A7A'   
            }else if(fAno > 10 && fAno < 18){
                img.setAttribute('src','/images/menina.png')
                document.body.style.backgroundColor = '#B19B9B'
            }else if(fAno > 18 && fAno <= 50){
                img.setAttribute('src','/images/mulher.png')
                document.body.style.backgroundColor = '#454040'
            }else if(fAno > 50 && fAno <= 115){
                img.setAttribute('src','/images/idosa.png')
                document.body.style.backgroundColor = '#DEC0C0'
            }
        }
        resultado.innerHTML = `Detectamos ${genero} com ${fAno} anos de idade`
        resultado.appendChild(img)
        
    }
    /* DEC0C0 */
}