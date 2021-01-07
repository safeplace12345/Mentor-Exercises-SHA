export const lStorage = () => {
 let ul = document.querySelector('#lStorage');
 ul.addEventListener('input', (e) => {
     let reply = e.target.innerHTML;
     localStorage.setItem('reply' , reply)
 });
 if(localStorage.getItem('reply')){
     ul.innerHTML = localStorage.getItem('reply');
 }

}

export const Local_store = (arg) =>{
    const toJson = JSON.stringify(arg)
    if(localStorage){
        localStorage.setItem('data' , toJson);
    }
    let data = localStorage.getItem('data')
    let dataBase = JSON.parse(data);
    return dataBase;   
}