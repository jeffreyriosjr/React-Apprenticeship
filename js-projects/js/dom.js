console.log(window);

// Selectors Tool that allows us to grab data from our document
// getElementByID

let mainHeading = document.getElementById('main-heading');
console.log(mainHeading);

// getElementByClassName()
let rowClasses = document.getElementsByClassName('row');
console.log(rowClasses);

// getElementsByTagName
let divTags = document.getElementsByTagName('div');
console.log(divTags);
let spanTags = document.getElementsByTagName('span');
//console.log(spanTags);

//querySelector ()
let divContainer = document.querySelector('.container');
//console.log(divContainer);
let mainIdHeading = document.querySelector('#main-heading');
//console.log(mainIdHeading);
let spanTag = document.querySelector('span');
//console.log(spanTag);

let divTag = document.querySelector('div');
console.log(divTag);


// querySelectorAll()
let allDivTags = document.querySelectorAll('div');
console.log(allDivTags);

let allRowClasses = document.querySelectorAll('.row');
console.log(allRowClasses)

let docObject = {
    html: {
        head: {},
            body: {
                nav:{},
                div: {
                    div: {} 
                },
                footer: {}
            }
        }
    }
        
    
