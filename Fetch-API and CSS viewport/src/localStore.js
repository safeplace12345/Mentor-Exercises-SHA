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