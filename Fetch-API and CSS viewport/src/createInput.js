export const copyRight = () => {
    let mydate = new Date();
    console.log(mydate)
}
export const createInput = (arg,cSs) => {
    let td = document.createElement('td');
    let checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.classList.add = 'check';
    checkbox.checked = arg.completed !== true ? false : true;
    checkbox.addEventListener('click', function (e) {
        console.log(arg)
        cSs(e, arg);
    })
    td.appendChild(checkbox)
    return td;
};

