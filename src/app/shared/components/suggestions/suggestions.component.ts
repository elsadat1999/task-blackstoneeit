import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-suggestions',
  templateUrl: './suggestions.component.html',
  styleUrls: ['./suggestions.component.scss']
})
export class SuggestionsComponent implements OnInit {
  user = [
    {
      name: 'Walter Tancred',
      img: 'assets/avatar7.jpg',
    },
    {
      name: 'Theodore Shelby',
      img: 'assets/avatar1.jpg',
    },
    {
      name: 'Dean Diesel',
      img: 'assets/avatar2.jpg',
    },
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
