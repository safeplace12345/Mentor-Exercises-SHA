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

export const addToLstore =  (arg) => {
    localStorage.setItem()
}

// or create both to append to database or the localStorage itself as a new
// delete from localeStorage
