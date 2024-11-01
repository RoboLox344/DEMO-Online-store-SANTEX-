/* получаем id карточки  */
let IdCartPrarm = (new URL(document.location)).searchParams.get('id');
console.log(IdCartPrarm)

let CATALOG_BASE_TOVAR_PAGE = JSON.parse(localStorage.getItem('BigBase'))
/* COUNT_SHOW_CART = JSON.parse('BigBase') */
console.log(CATALOG_BASE_TOVAR_PAGE)


/* ---------------------------------------------------------- */

/* --------------------------------------------------------------------------------------- */
 CATALOG_BASE_TOVAR_PAGE.forEach(element => {
    if(element.id == IdCartPrarm){
        document.querySelector('.main-foto-prod').src = element.img;
        document.querySelector('.prod-info-text-art').textContent = `Арт:${element.art}`;
        document.querySelector('.pord-name').textContent = element.name;
        document.querySelector('.prod-info-price').textContent = element.price;
        document.getElementById('Href').textContent = element.category;
        document.getElementById('SbName').textContent = element.sbname;
        if(element.category == 'Отполение'){
            document.getElementById('Href').setAttribute('href', 'otoplenie.html')
        }
        document.getElementById('SbName').setAttribute('href', `Sub-Catalog.html?sbname=${element.sbname}`)
        document.getElementById('NameTov').textContent  = element.name;
    }return
}); 


const TabsCategori = document.querySelectorAll('.tabs-pointer');
console.log(TabsCategori);
TabsCategori.forEach(({id}) => {
    let Stroka = document.getElementById(id);
    const ContentList = document.querySelectorAll('.tabs-panel');
    Stroka.addEventListener('click', function(){
            if(id == 'Char'){
                Stroka.classList.add('tabs-acitve');
                TabsCategori.forEach(({id}) => {
                    if (id !== 'Char'){
                        console.log(id)
                        let DeleteStorka = document.getElementById(id);
                        DeleteStorka.classList.remove('tabs-acitve')
                    }
                });
                ContentList.forEach(({id}) => {
                    let pageCont = document.getElementById(id);
                    if( id == 'CharCont'){ 
                        pageCont.classList.add('tabs-panel--active');
                        document.getElementById('OpisContent').classList.remove('tabs-panel--active');
                        document.getElementById('OtziviContent').classList.remove('tabs-panel--active');
                    } 
                });
            }else if (id == 'Opisanie'){
                Stroka.classList.add('tabs-acitve');
                TabsCategori.forEach(({id}) => {
                    if (id !== 'Opisanie'){
                        console.log(id)
                        let DeleteStorka = document.getElementById(id);
                        DeleteStorka.classList.remove('tabs-acitve')
                    }
                });
                ContentList.forEach(({id}) => {
                    let pageCont = document.getElementById(id);
                    if(id == 'OpisContent'){
                        pageCont.classList.add('tabs-panel--active');
                        document.getElementById('CharCont').classList.remove('tabs-panel--active');
                        document.getElementById('OtziviContent').classList.remove('tabs-panel--active');
                    }
                });
            }else if (id == 'Otzivi'){
                Stroka.classList.add('tabs-acitve');
                TabsCategori.forEach(({id}) => {
                    if (id !== 'Otzivi'){
                        console.log(id)
                        let DeleteStorka = document.getElementById(id);
                        DeleteStorka.classList.remove('tabs-acitve')
                    }
                });
                ContentList.forEach(({id}) => {
                    let pageCont = document.getElementById(id);
                    if(id == 'OtziviContent'){
                        pageCont.classList.add('tabs-panel--active');
                        document.getElementById('CharCont').classList.remove('tabs-panel--active');
                        document.getElementById('OpisContent').classList.remove('tabs-panel--active');
                    }
                });
            }

        
    });
    
 });
 /* замена фото----------------------------------------------------------------------------------------- */
 const MiniFoto = document.querySelectorAll('.dop-foto-prod-item')
 console.log(MiniFoto)
 MiniFoto.forEach(({id}) => {
    let Element = document.getElementById(id)
    let MainFoto = document.getElementById('main').querySelector('.main-foto-prod')
    Element.addEventListener('click', function(){
        let ElementDop = Element.querySelector('.foto-prod-dop')
        let SRCMAin =  MainFoto.getAttribute('src')
        let SRCDOP = ElementDop.getAttribute('src')
        MainFoto.src = SRCDOP;
        ElementDop.src = SRCMAin;
        
     })
 });
 /* ------------------------------------------------------------------------------------------------------- */

 const MainFoto = document.querySelector('.main-foto-wp');

 MainFoto.addEventListener('click', function(){
    CreateFotoPage();
 })

function CreateFotoPage(){
    let HtmlPhotoPage = '';
    HtmlPhotoPage += `

        <div class="Photo-plaz">
        <div class='btn-photo-tovar-page'></div>
            <div class="photo-contnainer">
                <div class="button-prev"></div>
                <div class="button-next"></div>
                <div class="photo-item-wp">
                    <img src="img/dush.png" alt="" class="photo-item">
                </div>
                <div class="photo-item-wp">
                    <img src="img/dush.png" alt="" class="photo-item"">
                </div>
                <div class="photo-item-wp">
                    <img src="img/dush.png" alt="" class="photo-item"">
                </div>
            </div>
        </div>
    
    
    `;

    document.body.insertAdjacentHTML("beforeend",HtmlPhotoPage);

}


 