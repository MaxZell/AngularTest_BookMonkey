import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {Book} from '../shared/book';

@Component({
  selector: 'bm-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {

  //https://stackoverflow.com/questions/49699067/property-has-no-initializer-and-is-not-definitely-assigned-in-the-construc
  books: Book[];
  @Output() showDetailsEvent = new EventEmitter<Book>();

  ngOnInit(): void {
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

  showDetails(book: Book){
    this.showDetailsEvent.emit(book);
  }
}
