interface book {
  title: String;
  description: String;
  authors: String;
  favorite: String;
  fileCover: String;
  fileName: String;
}

// Пока типы данных не ясны, то ANY
abstract class BooksRepository {
  createBook(book: any) {};
  getBook(id: any) {};
  getBooks() {};
  updateBook(id: any) {};
  deleteBook(id: any) {};
}
