class PrintEditionItem {
    constructor (name, releaseDate, pagesCount) {
        this.name = name;
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;
        this.state = 100;
        this.type = null;
    }

     fix(){
        this.state = this.state * 1.5;
    }
 


    set state(state){
        
        if (state < 0) {
            this._state = 0;
        }
        else if (state > 100) {
            this._state = 100;
        }
        else {
            this._state = state;
        }
    }

    get state() { 
        return this._state;
    }
}

class Magazine extends PrintEditionItem {
    constructor(name,releaseDate,pagesCount) {
        super (name,releaseDate,pagesCount);
        this.type = 'magazine';
    }
}

class Book extends PrintEditionItem {
    constructor (author, name, releaseDate, pagesCount) {
        super (name,releaseDate,pagesCount);
        this.type = 'book'; 
        this.author = author;
    }
 }


class NovelBook  extends Book {
    constructor (author, name, releaseDate, pagesCount) {
        super (author, name, releaseDate, pagesCount);
        this.type = 'novel'; 
    }
}

class FantasticBook   extends Book {
    constructor (author, name, releaseDate, pagesCount) {
        super (author, name, releaseDate, pagesCount);
        this.type = 'fantastic'; 
    }
}

class DetectiveBook   extends Book {
    constructor (author, name, releaseDate, pagesCount) {
        super (author, name, releaseDate, pagesCount);
        this.type = 'detective'; 
    }
}

class Library {
    constructor(name){
        this.name = name;
        this.books = [];
    }

    addBook (book){
        
        if (book.state > 30){
            this.books.push(book);
        }
    }

    findBookBy(type, value){
        
        for (let k = 0; k < this.books.length; k++) {
           
            for (let key in this.books[k]){
           
                if ( (key === type)  && (this.books[k][key] === value) ) {
                    return (this.books[k]);
                 }
           
                }
         
            }
        return(null);
    }

    giveBookByName(bookName) {
        let givenBook;
        
        for (let k = 0; k < this.books.length; k++) {
            
            for (let key in this.books[k]){
                
                if (this.books[k].name === bookName) {
                    givenBook = this.books[k];
                    this.books.splice(k,1);
                    return (givenBook);
                } 
            
            }
        }    
        return (null);
    }
}