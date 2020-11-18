import { Injectable } from '@angular/core';
import {Book} from './book';

@Injectable({
  providedIn: 'root'
})
export class BookStoreService {

  books: Book[];
  constructor() {
    this.books =[
      {
        isbn: '0001',
        title: 'Die Abenteuer des Tom Sawyer',
        authors: ['Mark Twain'],
        published: new Date(1876, 1, 1),
        thumbnails:[{
          url: 'https://media.giphy.com/media/MKZxRoSup632N5HCHa/giphy.gif',
          title: 'Buchcover'
        }],
      },
      {
        isbn: '0002',
        title: 'Angular',
        authors: ['Ferdinant Malcher', 'Johannes Hoppe','Danny Koppenhagen'],
        published: new Date(2020, 8, 1),
        subtitle: 'Grundlagen...',
        rating: 5,
        thumbnails:[{
          url: 'https://ng-buch.de/angular-cover.jpg',
          title: 'Buchcover'
        }],
        description: 'Book about Angular'
      }
    ];
  }

  getAll(): Book[]{
    return this.books;
  }

  getSingle(isbn: string){//should be ": Book" (=> book-details.component.ts)
    return this.books.find(book => book.isbn === isbn);
  }
}
