function calcular(){
   var inicio = document.getElementById('txtin')
   var fim = document.getElementById('txtfin')
   var passo = document.getElementById('txtpas')
   var res = window.document.getElementById('res')

   if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
    res.innerText = ''
    window.alert('[Erro] Falta dados!')
   } else {
    res.innerHTML = `Contando:  <br>`  
    let i = Number(inicio.value)
    let f = Number(fim.value)
    let p = Number(passo.value)

    if(p==0){
       alert('O passo não pode ser igual a 0. vamos considerar passo:1')
       p=1
    }

    if (i <f ) {
        for (var n = i ; n <= f ;  n+=p) {
            res.innerText += ` ${n} \u{1F449}` // U+1F449	
        }
      
    } else {
        for (let n = i ; n >= f; n-=p) {
            res.innerText += ` ${n} \u{1F449}`
        }
        
    }       
    res.innerText += `\u{1f3c1}` 
}  
   
}
