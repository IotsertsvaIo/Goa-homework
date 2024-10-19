class Book {
    constructor(title, author, publicationYear, pages) {
      this.title = title;
      this.author = author;
      this.publicationYear = publicationYear;
      this.pages = pages;
    }
  
    getBookInfo() {
      return this.title + " by " + this.author + ", published in " + this.publicationYear + ". It has " + this.pages + " pages.";
    }
  }
  
  const book1 = new Book("The Great Gatsby", "F. Scott Fitzgerald", 1925, 180);
  console.log(book1.getBookInfo());
  