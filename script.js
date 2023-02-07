function converterParaFarenheit () {
    let celsius = document.getElementById('celsius').value;
    let farenheit = 1.8* celsius + 32;
    let textResult = 'A temperatura '+ celsius + '°C é '+ farenheit + '°F'

    console.log(textResult);
    document.getElementsByTagName('p')[0].innerHTML=textResult

    
    //A temperatura 25°C é 150F!
//   alert('clicou no  converter');
// const reset = document.getElementsByTagName('button')
// reset.addEventListener('click', ()=>{
//     textResult='';
}






function limpar(){
    document.getElementsByTagName('p')[0].innerHTML=''
}