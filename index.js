const data = [
    {name:'Элемент 1'},
    {name:'Элемент 2', child:[
          {name:'Элемент 2.1'},  
          {name:'Элемент 2.2' , child:[
                                    {name:'Элемент 2.2.1'},  
                                    {name:'Элемент 2.2.2'}, 
                                    {name:'Элемент 2.2.3'},     
            ]},
          {name:'Элемент 2.3'},
          {name:'Элемент 2.4', child:[
                                    {name:'Элемент 2.4.1'},  
                                    {name:'Элемент 2.4.2'}, 
                                    {name:'Элемент 2.4.3'},
                                    {name:'Элемент 2.4.4'}, 
                                    {name:'Элемент 2.4.5'}, 
                                    {name:'Элемент 2.4.6'}, 
                                    {name:'Элемент 2.4.7'},      
            ]},
          {name:'Элемент 2.5'},
          {name:'Элемент 2.6'}
     ]},
      {name:'Элемент 3'},
      {name:'Элемент 4', child:[
                                {name:'Элемент 4.1'},  
                                {name:'Элемент 4.2'},
      ]},
      {name:'Элемент 5'},
      {name:'Элемент 6'},
  ]
      
let count = 1;
 function getMenuDom(obj){
    
         var ul = document.createElement('ul')
         ul.className='navBlockLvl'+count
         ul.id='lvl-'+count
                obj.forEach ( v => {
                let li = document.createElement('li');
                let span = document.createElement('span')
                span.textContent=v.name;
                li.appendChild(span);
                ul.appendChild(li)
                    if ('child' in v) {
                        count++
                        li.className='arrowBlock'
                        let arow = document.createElement('div');
                            arow.className='arrow'
                            arow.id='lvl-'+count
                            arow.addEventListener('click', arowHandleclick)
                        
                        li.appendChild(arow)
                        
                        li.appendChild(getMenuDom(v.child)) 
                      }  
           }); 
           count--
      return ul 
      
   }

var container = document.getElementById('container');
let burgerContainer = document.createElement('div')
burgerContainer.className='burgerContainer'
let burger = document.createElement('img')
burger.setAttribute('src', './b.svg');
burger.className='burger'
burgerContainer.appendChild(burger)
container.appendChild(burgerContainer)
container.appendChild(getMenuDom(data))
burger.addEventListener('click', burgerHandleChange)
  
  function burgerHandleChange() {

    let nav = document.getElementById('lvl-1')
    if (nav.className==='navBlockLvl1Visible'){
         nav.className = 'navBlockLvl1'
         burger.setAttribute('src', './b.svg');
     } else {
       nav.className='navBlockLvl1Visible'
       burger.setAttribute('src', './2.svg');
     }
}

function arowHandleclick(EO) {
  EO=EO||window.event;
  EO.preventDefault();
  EO.stopPropagation();

let all = document.getElementsByClassName('arrowBlock')
let arrowActives = document.getElementsByClassName('arrowActive')



     if (EO.target.className==='arrow'){
      for (let i = 0; i< all.length; i++) {
        if (EO.target.id=== all[i].lastChild.id){
          all[i].lastChild.className='navBlockLvl3'
        }
        
        for (let i = 0; i < arrowActives.length; i++) {
          if (arrowActives[i].id === EO.target.id){
           arrowActives[i].className='arrow'
          }
        }
       }

        EO.target.parentNode.lastChild.className='navBlockLvl1Visible'
        EO.target.className='arrowActive'
     } else {
    
         EO.target.parentNode.lastChild.className='navBlockLvl2'
         EO.target.className='arrow'
     }
  }












  