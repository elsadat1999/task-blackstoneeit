import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-suggestion-account',
  templateUrl: './suggestion-account.component.html',
  styleUrls: ['./suggestion-account.component.scss'],
})
export class SuggestionAccountComponent implements OnInit {
  @Input() avatar: string = '';
  @Input() username: string = '';
  constructor() {}

  ngOnInit(): void {}
}
