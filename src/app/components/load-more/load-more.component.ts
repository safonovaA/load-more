import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-load-more',
  templateUrl: './load-more.component.html',
  styleUrls: ['./load-more.component.scss']
})
export class LoadMoreComponent implements OnInit {
  @Output() public loadMoreEvent = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }
  public loadMore() {
    this.loadMoreEvent.emit();
  }

}
