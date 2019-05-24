class Book {
    constructor(title, author, pages, description, currentPage, read) {
      this.title = title;
      this.author = author;
      this.pages = pages;
      this.description = description;
      this.currentPage = 1;
      this.read = false;
    }
    
    readBook(pageNumber) {
      if (pageNumber > this.pages) {
        alert('Page number is invalid!');
      } else {
        if (pageNumber == this.pages) {
          this.read = true;
        } else {
          this.currentPage = pageNumber;
        }
      }
        
    }
  }
  
  export { Book };
  