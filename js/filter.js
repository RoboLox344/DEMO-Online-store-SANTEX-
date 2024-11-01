 //root
 const ROOT_PRODUCER = document.querySelector('.producer-list-item--wp');//производители
 const ROOT_characteristic = document.querySelector('.characteristic-list-item--wp');//список характеристик
 const PRODUCER_BASE = [
    {
        id:'099',
        name:'Valtec',
        sum:'14',  
    },
    {
        id:'02',
        name:'KrunS',
        sum:'444',  
    },
    {
        id:'03',
        name:'BUMS',
        sum:'33',  
    },
    {
        id:'04',
        name:'Trub',
        sum:'44',  
    },
    {
        id:'05',
        name:'Sempo',
        sum:'56',  
    },
 ];

 const characteristic_BASE = [
    {
        id:'01-1',
        name:'Большой',
        sum:'56',  
    },
    {
        id:'02-1',
        name:'Средний',
        sum:'34',  
    },
    {
        id:'03-1',
        name:'Маленький',
        sum:'111',  
    },
    {
        id:'04-1',
        name:'Тонкий',
        sum:'56',  
    },
    {
        id:'05-1',
        name:'Толстый',
        sum:'45',  
    },
 ];

 function ProdList(date){

    
    date.forEach(({id, name, sum}) =>{
        let ListProdHtml= '';
        ListProdHtml += `
            <li class="producer-list-item">
                <div class="producer-name" id='${id}'>${name}</div>
                <div class="producer-count">(${sum})</div>
            </li>
        `;

        ROOT_PRODUCER.insertAdjacentHTML("beforeend", ListProdHtml);
    });
    
 };
  ProdList(PRODUCER_BASE);

  function CharList (date){
    date.forEach(({id,name,sum}) => {
        let ListChar = '';
        ListChar += `
            <li class="characteristic-list-item">
                <div class="characteristic-name" id='${id}'>${name}</div>
                <div class="characteristic-count">(${sum})</div>
            </li>
        `;
        ROOT_characteristic.insertAdjacentHTML("beforeend", ListChar);
    });
    
  };
  CharList(characteristic_BASE);
//клик производтиель
function  FunClick(){
    let ProducerItem = document.querySelectorAll('.producer-name');
    
        ProducerItem.forEach(({id}) =>{
            
            var Producer = id;
            
            let Stroka = document.getElementById(id);
            console.log('пизда' + Producer)
            Stroka.addEventListener('click', function(event){
                if( Producer ==  event.target.id){
                    Stroka.parentElement.classList.toggle('producer-list-item--wp--active');
                    
                }
                
            }) ;
        });
    
    
};
FunClick();

   
//клик характеристики
function CharClick(){

    let CharItem = document.querySelectorAll('.characteristic-name');
    CharItem.forEach(({id}) =>{
        var Char = id;
        let CharList = document.getElementById(id);
        console.log('жопа' + Char);
        CharList.addEventListener('click', function(event){
            if( Char ==  event.target.id){
                CharList.parentElement.classList.toggle('producer-list-item--wp--active');
            }
            
        }) 
    });

};
CharClick();


let BtnLeftFilter = document.querySelector('.stick-left');
let BtnRightFilter = document.querySelector('.stick-right')
let FileterMainLine = document.querySelector('.controller-line')
let PriceMin = document.querySelector('.filter-price-min')
PriceMin.textContent = `0$`
let PriceMax = document.querySelector('.filter-price-max')
PriceMax.textContent = `10 000$`


function Price(cursor, textPos){
    minPrice = 0;
    maxPrice = 10000;
    /* FileterMainLine.offsetWidth = 100%  10000 -100%
    cursor = x%                         x  - price% x =10000 * price% / 100 */
    console.log(cursor.replace('px', ' '))
    console.log(FileterMainLine.offsetWidth)
    let Price =  Math.trunc((maxPrice *((cursor.replace('px', ' ') * 100 ) / FileterMainLine.offsetWidth)) / 100) 
    textPos.textContent = `${Price} $`
    console.log(Price) 

    return Price
   /*  let NewPrice =  */
}



BtnLeftFilter.onmousedown = function(event){


    event.preventDefault()

    let shiftX = event.clientX - event.currentTarget.offsetLeft;

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);

    function onMouseMove(event) {
        let newLeft = event.clientX  - shiftX ;

        

        // курсор вышел из слайдера => оставить бегунок в его границах.
        if (newLeft < 0) {
          newLeft = 0;
        }
        let rightEdge = FileterMainLine.offsetWidth - BtnLeftFilter.offsetWidth ;
        if (newLeft > rightEdge) {
          newLeft = rightEdge;
        }

        BtnLeftFilter.style.left = newLeft  + 'px';
        let a = BtnLeftFilter.style.left
        console.log(BtnLeftFilter.style.left)
        Price(a, PriceMin)

      }


      function onMouseUp() {
        document.removeEventListener('mouseup', onMouseUp);
        document.removeEventListener('mousemove', onMouseMove);
      }

      BtnLeftFilter.ondragstart = function() {
        return false;
      };
      
      return PriceMin

    };

    BtnLeftFilter.addEventListener('touchstart', function(event) {
      event.preventDefault();
  
      let touch = event.touches[0]; // Получаем первое касание
      let shiftX = touch.clientX - event.currentTarget.offsetLeft;
  
      document.addEventListener('touchmove', onTouchMove);
      document.addEventListener('touchend', onTouchEnd);
  
      function onTouchMove(event) {
          let touch = event.touches[0]; // Получаем первое касание
          let newLeft = touch.clientX - shiftX;
  
          // Ограничиваем перемещение внутри границ
          if (newLeft < 0) {
              newLeft = 0;
          }
          let rightEdge = FileterMainLine.offsetWidth - BtnLeftFilter.offsetWidth;
          if (newLeft > rightEdge) {
              newLeft = rightEdge;
          }
  
          BtnLeftFilter.style.left = newLeft + 'px';
          let a = BtnLeftFilter.style.left;
          console.log(a);
          Price(a, PriceMin);
      }
  
      function onTouchEnd() {
          document.removeEventListener('touchend', onTouchEnd);
          document.removeEventListener('touchmove', onTouchMove);
      }
  
      BtnLeftFilter.ondragstart = function() {
          return false;
      };
  });
    



    BtnRightFilter.onmousedown = function(event){

        event.preventDefault()
        console.log(BtnRightFilter.getBoundingClientRect())
        
        let shiftX = event.clientX - event.currentTarget.offsetLeft
        console.log('это шифт х')
        console.log(shiftX)
    
        document.addEventListener('mousemove', onMouseMove);
        document.addEventListener('mouseup', onMouseUp);
    
        function onMouseMove(event) {
            let newLeft = event.clientX - shiftX  ;
            console.log('лево')
            console.log(newLeft)
    
            // курсор вышел из слайдера => оставить бегунок в его границах.
            if (newLeft < 0) {
              newLeft = 0;
            }
            let rightEdge = FileterMainLine.offsetWidth - BtnRightFilter.offsetWidth ;
            if (newLeft > rightEdge) {
              newLeft = rightEdge;
            }
    
            BtnRightFilter.style.left = newLeft  + 'px';
            console.log(BtnRightFilter.style.right)

            let a = BtnRightFilter.style.left
            
            Price(a, PriceMax)
            }
    

          function onMouseUp() {
            document.removeEventListener('mouseup', onMouseUp);
            document.removeEventListener('mousemove', onMouseMove);
          }

          BtnRightFilter.ondragstart = function() {
            return false;
          };
    
        };

        BtnRightFilter.addEventListener('touchstart', function(event) {
          event.preventDefault();
          console.log(BtnRightFilter.getBoundingClientRect());
      
          let touch = event.touches[0]; // Получаем первое касание
          let shiftX = touch.clientX - event.currentTarget.offsetLeft;
          console.log('это шифт х (touch)');
          console.log(shiftX);
      
          document.addEventListener('touchmove', onTouchMove);
          document.addEventListener('touchend', onTouchEnd);
      
          function onTouchMove(event) {
              let touch = event.touches[0]; // Получаем первое касание
              let newLeft = touch.clientX - shiftX;
              console.log('лево (touch)');
              console.log(newLeft);
      
              // Ограничиваем перемещение внутри границ
              if (newLeft < 0) {
                  newLeft = 0;
              }
              let rightEdge = FileterMainLine.offsetWidth - BtnRightFilter.offsetWidth;
              if (newLeft > rightEdge) {
                  newLeft = rightEdge;
              }
      
              BtnRightFilter.style.left = newLeft + 'px';
              console.log(BtnRightFilter.style.left); // Исправлено с right на left
      
              let a = BtnRightFilter.style.left;
              Price(a, PriceMax);
          }
      
          function onTouchEnd() {
              document.removeEventListener('touchend', onTouchEnd);
              document.removeEventListener('touchmove', onTouchMove);
          }
      
          BtnRightFilter.ondragstart = function() {
              return false;
          };
      });
      
    

const BtnFilter = document.querySelector('.button-filter');
BtnFilter.addEventListener('click', function(){
  let min = PriceMin.textContent.replace('$', '')
  let max = PriceMax.textContent.replace('$', '')
  max.replaceAll(' ', '')
  console.log(max)
  max  = Number(max)
  min = Number(min)
  console.log('Мни')
  console.log(min)
  FilterPrice(max, min);
})

function FilterPrice(maxPr, minPr){
  let ArrCart = document.querySelectorAll('.cart-wrapper');
  ArrCart.forEach(element => {
    let a = element.querySelector('.text-cost').textContent.replace('$', '');
    let price = a.replaceAll(' ', '')
    price = Number(price)
    console.log(price)
    
    if( price > maxPr ||  price < minPr){
      element.classList.add('cart-wrapper-none')
    }else
    element.classList.remove('cart-wrapper-none')
    
  });
}


let Filter = document.querySelector('.filter-wp')

Filter.addEventListener('click', FillterOpenClose)

function FillterOpenClose(event){
  const Btn  = event.target.closest('.haeding-filter');
  if(!Btn){
    return
  }
  let conntainer = Btn.parentElement.parentElement
  conntainer.classList.toggle('filter-passiv')
  conntainer.querySelector('.svg-filter-item').classList.toggle('svg-filter-item-active')
  console.log(Btn.parentElement.parentElement)
}






    


