/*Problem Statement: Library Book Management System
-------------------------------------------------
Objective : Create a Book class and use it to manage a collection of books in a library.
Requirements:
  Create a Book class with the following:
  Properties:
      title (string)
      author (string)
      pages (number)
      isAvailable (boolean, default: true)
  Methods:
      borrow() - Marks the book as not available
      returnBook() - Marks the book as available
      getInfo() - Returns a string with book details (e.g., "The Hobbit by J.R.R. Tolkien (310 pages)")
      isLongBook() - Returns true if pages > 300, false otherwise
  1. Create at least 5 book objects using the class:
      Example: "Harry Potter", "1984", "The Hobbit", etc.
  2. Perform the following operations:
      i. Display info of all books
      ii. Borrow 2 books and show their availability status
      iii. Return 1 book and show updated status
      iv. Count how many books are "long books" (more than 300 pages)
      v. List all available books */
      class Book{
        title;
        author;
        pages;
        isAvailable;
       
        constructor(title,author,pages,isAvailable=true){
            this.title=title;
            this.author=author;
            this.pages=pages;
            this.isAvailable=isAvailable;
        }
        borrow(){
            return "not available"
        }
        returnBook(){
            return "book is available"
        }
        getInfo(){
            return this.title+" "+"by"+" "+this.author+"("+this.pages+")"
        }
        isLongBook(){
           
            if(this.pages>300){
                return true && count.push(this.title)
            }
            return false
        }
      }
  
      const bk1=new Book('Harry potter','JK rowling',400,true)
        const bk2=new Book('1984','George orwell',250,true)
        const bk3=new Book('The hobbit','JRR tolkien',310,'true')
        const bk4=new Book('The great gatsby','F scott fitzgerald',180,'true')
        const bk5=new Book('To kill a mockingbird','Harper lee',281,'true')
  console.log(bk1.getInfo())
    console.log(bk2.getInfo())
    console.log(bk3.getInfo())
    console.log(bk4.getInfo())
    console.log(bk5.getInfo())
    console.log(bk1.borrow())
    console.log(bk2.borrow())
    console.log(bk1.returnBook())
    let count=[]
    console.log(bk1.isLongBook())
    console.log(bk2.isLongBook())
    console.log(bk3.isLongBook())
    console.log(bk4.isLongBook())
    console.log(bk5.isLongBook())
    console.log(count)
 
