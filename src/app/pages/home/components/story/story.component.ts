import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-story',
  templateUrl: './story.component.html',
  styleUrls: ['./story.component.scss'],
})
export class StoryComponent implements OnInit {
  @Input() fixed: boolean = false;
  @Input() active: boolean = false;
  @Input() avatar: string = '';
  @Input() username: string = '';
  
  constructor() {}

  ngOnInit(): void {}
}
