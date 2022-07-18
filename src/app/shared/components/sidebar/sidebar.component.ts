import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {
   menu = [
    {
      name: 'home',
      icon: 'fa-solid fa-house',
      active: true,
    },
    {
      name: 'messages',
      icon: 'fa-solid fa-comment-dots',
      active: false,
    },
     {
      name: 'profile',
      icon: 'fa-solid fa-user',
      active: false,
    },
    {
      name: 'saved post',
      icon: 'fa-solid fa-bookmark',
      active: false,
    },
    {
      name: 'settings',
      icon: 'fa-solid fa-gear',
      active: false,
    },
  ];

   constructor() {}

  ngOnInit(): void {}
}
