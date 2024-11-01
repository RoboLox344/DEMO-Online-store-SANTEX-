const ROOT_MAKING_STEP = document.querySelector('.MakingOrder-stages-main-wp');
const Button_next = document.querySelectorAll('.button-makorder');
const Button_Back = document.querySelectorAll('.status-text');
Button_next.forEach(({id}) => {
    let TargetId = document.getElementById(id);
    TargetId.addEventListener('click', function(e){
        if(e.target.id == id){
            
                let container =  TargetId.parentElement.parentElement;
                if(container.id == 'ProductsInTheOrder'){
                container.classList.add('MakingOrder-stages-wp-ready')
                let ButtonCahang = container.querySelector('.MakingOrder-status-wp')
                ButtonCahang.classList.add('MakingOrder-status-wp-ready')
                console.log('popa')
            }else{
                let container =  TargetId.parentElement.parentElement;
                container.classList.add('MakingOrder-stages-wp-ready')
                let ButtonCahang = container.querySelector('.MakingOrder-status-wp')
                ButtonCahang.classList.add('MakingOrder-status-wp-ready')
                let Nextelement = container.nextElementSibling
                Nextelement.classList.remove('MakingOrder-stages-wp-ready')
            }

        }
    })
});
Button_Back.forEach(({id}) => {
    let TargetElement = document.getElementById(id);
    TargetElement.addEventListener('click', function(e){
        if(e.target.id = id){
            let container =  TargetElement.parentElement.parentElement.parentElement;
            if(container.id == 'ProductsInTheOrder'){
                container.classList.remove('MakingOrder-stages-wp-ready');
                let Prew = container.previousElementSibling;
                Prew.classList.add('MakingOrder-stages-wp-ready')
            }
            else if(container.id == 'RecipientDetails'){
                container.classList.remove('MakingOrder-stages-wp-ready');
                let Next = container.nextElementSibling;
                Next.classList.add('MakingOrder-stages-wp-ready')
            }else{

            container.classList.remove('MakingOrder-stages-wp-ready');
            /* let b  = document.getElementById(id).parentElement
            b.classList.remove('MakingOrder-status-wp-ready') */
            let Next = container.nextElementSibling;
            let Prew = container.previousElementSibling;
            Next.classList.add('MakingOrder-stages-wp-ready')
            Prew.classList.add('MakingOrder-stages-wp-ready')
            }

        }
    })
});
console.log(Button_Back)


const INPUTS_FORM = document.querySelector('.inputs-basket-info-delivir-method-wp');
/* console.log(INPUTS_FORM); */
INPUTS_FORM.addEventListener('click', function(e){
    var Input_Items = INPUTS_FORM.getElementsByTagName("input")
/*     console.log(Input_Items) */
    let Arr_Inputs_Items = Array.from(Input_Items);
/*     console.log(Arr_Inputs_Items) */
    Arr_Inputs_Items.forEach(({id}) => {
 /*        console.log(id); */
        /* console.log(e.target.id) */
        if(id == e.target.id){
            let a = document.getElementById(id);
            let b = a.parentElement.querySelector('.deliviri-method-radio-custom-before');
            b.classList.add('deliviri-method-radio-custom-before-active');
            let round = b.querySelector('.deliviri-method-radio-custom-after');
            round.classList.add('deliviri-method-radio-custom-after-active');
            console.log(`Радио ${id} актив`)
            console.log(a)
        }else if(id != e.target.id){
            let a = document.getElementById(id);
            let b = a.parentElement.querySelector('.deliviri-method-radio-custom-before');
            b.classList.remove('deliviri-method-radio-custom-before-active');
            let round = b.querySelector('.deliviri-method-radio-custom-after');
            round.classList.remove('deliviri-method-radio-custom-after-active');
            console.log(`Радио ${id} пасив`)
            
        }
    });
})


/* document.addEventListener('DOMContentLoaded', function(){
    let User = []
    if( JSON.parse(localStorage.getItem('User') != null){

    }
}) */