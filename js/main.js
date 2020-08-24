// var titles = document.getElementsByClassName('title')

// console.log(Array.isArray(titles))
// console.log(Array.isArray(Array.from( titles)))

// Array.from(titles).forEach(function(item){
//     console.log(item)
// }) 

// var wmf = document.querySelector('#book-list li:nth-child(2).name');
// console.log(wmf)

//  var books = document.querySelectorAll ('.name');
// // console.log(books)

// Array.from(books).forEach(function(book){
//     // console.log(book.textContent )
//     book.textContent //+= ' {book title}'
// })

// const bookList = document.querySelector('#book-list');
// // console.log(bookList.innerHTML)
// //bookList.innerHTML = '<h2>books and more books</h2>';
// bookList.innerHTML += '<p>This is how you append</p>';
// bookList.innerHTML += '<p>So i have learnt this </p>';


// const banner = document.querySelector('#page-banner');
// console.log('#page-banner node type is', banner.nodeType )
// console.log('#page-banner node name is', banner.nodeName)
// console.log('#page-banner node type is', banner.hasChildNodes())

// const clonedBanner = banner.cloneNode(true);
// console.log(clonedBanner)

// const bookList = document.querySelector('#book-list');
// console.log('the parent node is:', bookList.parentNode);
// console.log('the parent node is:', bookList.parentElement.parentElement);

// console.log(bookList.children);
// console.log('booklist sibling is', bookList.previousElementSibling);

// bookList.previousElementSibling.querySelector('p').innerHTML += '<br> hi... done this before'
// const list = document.querySelector('#book-list ul')


// var btnDelete = document.querySelectorAll('.delete');

// Array.from(btnDelete).forEach(function(btnDelete){
//     btnDelete.addEventListener('click', function(e){

//         const li = e.target.parentElement;
//        li.parentNode.removeChild(li)
//     })
// });
  


const list = document.querySelector('#book-list ul');

list.addEventListener('click', function(e) {
    if (e.target.className === 'delete') {
       const li = e.target.parentElement;
       li.parentNode.removeChild(li);
    }
});

const addForm = document.forms['add-book'];

addForm.addEventListener('submit', function(e){
    e.preventDefault();
    const value = addForm.querySelector('input[type="text"]').value;
    //console.log(value )

    const li = document.createElement('li');
    const bookName = document.createElement('span');
    const deleteBtn = document.createElement('span');

    deleteBtn.textContent = 'delete';
    bookName.textContent = value

    bookName.classList.add('name');
    deleteBtn.classList.add('delete')

    li.appendChild(bookName);
    li.appendChild(deleteBtn)
    list.appendChild(li)
})

const hideBox = document.querySelector('#hide');
    hideBox.addEventListener('change', function(e){
      if (hideBox.checked) {
          list.style.display = 'none'
        } else {
          list.style.display = 'initial '
    }
})

const searchBar = document.forms['search-books'].querySelector('input[type="text"]');
searchBar.addEventListener('keyup', function(e){
    const term = e.target.value.toLowerCase();
    const books = list.getElementsByTagName('li');
    Array.from(books).forEach(function(book){
        const title = book.firstElementChild.textContent;
        if (title.toLowerCase().indexOf(term) != -1) {
            book.style.display = 'block'
        } else {
            book.style.display = 'none'
        }
    })
})

const tabs = document.querySelector('.tabs');
const panels = document.querySelectorAll('.panel ');

tabs.addEventListener('click', function(e){
    if (e.target.tagName == 'li') {
        const targetPanel =document.querySelector(e.target.dataset.target);
        Array.from(panels).forEach(function(panel){
            if (panel == targetPanel){
                panel.classList.add('active')
            } else {
                panel.classList.remove('active')
            }
        })
    }
})
// tabs.addEventListener('click', function(e){
//     if (e.target.tagName == 'LI') {                                                                                             
//         const targetPanel = document.querySelector(e.target.dataset.target);
//         panels.forEach(function (panel) {
//             if (panel === targetPanel) {
//                 panel.classList.add('active');
//             }  else {
//                 panel.classList.remove('active');
//             }
//         })
//     }
// })