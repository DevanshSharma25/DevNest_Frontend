var library = [ { author: 'Bill Gates',
 title: 'The Road Ahead',
 readingStatus: true },
             { author: 'Steve Jobs', 
title: 'Walter Isaacson',
 readingStatus: true },
             { author: 'Suzanne Collins',
 title: 'Mockingjay: The Final Book of The Hunger Games',
 readingStatus: false }]; 
for(item in library){
console.log(library[item].author);}
for(item in library){
console.log(library[item].title);}
for(item in library){
console.log(library[item].readingStatus);
}
