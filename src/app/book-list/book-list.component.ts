import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {Book} from '../shared/book';
import {BookStoreService} from '../shared/book-store.service';

@Component({
  selector: 'bm-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {

  //https://stackoverflow.com/questions/49699067/property-has-no-initializer-and-is-not-definitely-assigned-in-the-construc
  books: Book[];

  constructor(private bs: BookStoreService){}

  ngOnInit(): void {
    this.bs.getAll().subscribe(res => this.books = res);
  }
}
