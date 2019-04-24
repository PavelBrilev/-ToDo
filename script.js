

var item = document.querySelectorAll('.item');
var add_to_do = document.querySelector('.btn-add'); 
var sidebar = document.querySelector('.sidebar');
var modal = document.querySelector('.modal');
var settings = document.querySelector('.btn-settings');
var btn_red = modal.querySelector('.button-red');
var btn_blue = modal.querySelector('.button-blue');


add_to_do.addEventListener('click', function () {
       
       
       var cardsData = [
        {
        title: 'Задача №1',
        text: 'попасть в инкубатор',
        date: '20 марта 2019',
        priority: 'Low'
      }
    ];
    
    
    var makeElement = function (tagName, className, text) {
        var element = document.createElement(tagName);
        element.classList.add(className);
        if (text) {
          element.textContent = text;
        }
        return element;
      };
      
      var createCard = function (product) {
        var listItem = makeElement('li', 'item');
      
        var date = makeElement('a', 'date', product.date);
        listItem.appendChild(date);
        date.href="#";
    
        var priority = makeElement('a', 'priority', product.priority);
        listItem.appendChild(priority);
    
        var title = makeElement('h3', 'title-h3', product.title);
        listItem.appendChild(title);
      
        var text = makeElement('p', 'todo-p', product.text);
        listItem.appendChild(text);
      
        return listItem;
      };
      
      var cardList = document.querySelector('.plane');
            
      for (var i = 0; i < cardsData.length; i++) {
        var cardItem = createCard(cardsData[i]);
        cardList.appendChild(cardItem);
        
         }

     });


settings.addEventListener('click', function (evt) {
  evt.preventDefault();
  modal.classList.add('modal--show');
});

btn_red.addEventListener('click', function (evt) {
  evt.preventDefault();
  sidebar.classList.add('red');
  modal.classList.remove('modal--show');
});

btn_blue.addEventListener('click', function (evt) {
  evt.preventDefault();
  sidebar.classList.remove('red');
  modal.classList.remove('modal--show');
});

document.addEventListener('keydown', function (evt) {
  if (evt.keyCode === 27) {
    modal.classList.remove('modal--show');
  }
});
   
 


   
     

  

  
  