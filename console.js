let formDOM = document.querySelector('#userForm') 

formDOM.addEventListener('submit',formSubmit)


function formSubmit(event){
    event.preventDefault()
    console.log("Bilgiler Kaydedildi.")
    let forinfoNameDOM = document.querySelector('#infoName') 
    console.log(forinfoNameDOM.value)
    localStorage.setItem('name',forinfoNameDOM.value)

   


}