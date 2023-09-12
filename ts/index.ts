interface book {
  title: string;
  description: string;
  authors: string;
  favorite: string;
  fileCover: string;
  fileName: string;
}

// Пока типы данных не ясны, то ANY
abstract class BooksRepository {
  createBook(book: any) {};
  getBook(id: any) {};
  getBooks() {};
  updateBook(id: any) {};
  deleteBook(id: any) {};
}
