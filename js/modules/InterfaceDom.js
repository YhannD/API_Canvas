export function interfaceDom(){
    let navColors = document.querySelectorAll('.color-light div');
    console.log(navColors);
    navColors.forEach(navItem => {
        navItem.addEventListener('click', e => {
            document.querySelector('.color-light div.active').classList.remove('active');
            e.target.classList.add('active');
        });
    })

    let navTools = document.querySelectorAll('.tools-light div');
    console.log(navTools);
    navTools.forEach(navItem => {
        navItem.addEventListener('click', e => {
            document.querySelector('.tools-light div.active').classList.remove('active');
            e.target.classList.add('active');
        });
    })
}