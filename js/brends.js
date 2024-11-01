const Breand = [
    {
        id:'b1',
        name:'Valtec',
        img:'img/valtec-foto.png',
    },
    {
        id:'b2',
        name:'Valtec',
        img:'img/valtec-foto.png',
    },
    {
        id:'b3',
        name:'Valtec',
        img:'img/valtec-foto.png',
    },
    {
        id:'b4',
        name:'Valtec',
        img:'img/valtec-foto.png',
    },
    {
        id:'b5',
        name:'Valtec',
        img:'img/valtec-foto.png',
    },
    {
        id:'b6',
        name:'Valtec',
        img:'img/valtec-foto.png',
    },
    {
        id:'b7',
        name:'Valtec',
        img:'img/valtec-foto.png',
    },
    {
        id:'b8',
        name:'Valtec',
        img:'img/valtec-foto.png',
    },
    {
        id:'b9',
        name:'Valtec',
        img:'img/valtec-foto.png',
    },

]




document.addEventListener("DOMContentLoaded", function(){

    const WpBreands = document.querySelector('.brends-main-wp');

    BreandsReander(Breand)


    function BreandsReander(date){
        date.forEach(element => {
            let html ='';
            html +=`
            
                <div class="item-brends" id='${element.id}'>
                        <a class='flex-ref' href="Targetbrend.html?id=${element.name}">
                            <div class='img-wp-brends'>
                                <img src="${element.img}" alt="" class="brends-img">
                            </div>
                            <p class="name-brends">${element.name}</p>
                        </a>
                </div>
            
            `; 
            WpBreands.insertAdjacentHTML("beforeend", html)
        });
    }

})