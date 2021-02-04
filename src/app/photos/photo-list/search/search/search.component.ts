import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/internal/operators/debounceTime';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit, OnDestroy {

  @Output() onTyping = new EventEmitter<string>()

  debounce: Subject<string> = new Subject<string>();

  constructor() { }

  ngOnInit() {
    this.debounce.pipe(debounceTime(300)).subscribe(filter => this.onTyping.emit(filter))
  }

  ngOnDestroy(): void {
    this.debounce.unsubscribe()
  }

}
