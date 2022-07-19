import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
})
export class PostComponent implements OnInit {
  @Input() image: string = '';
  @Input() avatar: string = '';
  @Input() like: number = 0;
  @Input() active: boolean = false;
  @Output() increaseLike: EventEmitter<number> = new EventEmitter<number>();
  constructor() {}

  ngOnInit(): void {}

  increaseLikes() {
    this.increaseLike.emit(1);
  }
}
