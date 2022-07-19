import { Component, OnInit } from '@angular/core';
import { BrowserDbService } from 'src/app/shared/services/browser-db.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  posts = [
    {
      id: 1,
      title: 'dean winchester',
      img: 'assets/backend.png',
      like: 0,
      activeLike: false,
    },
    {
      id: 2,
      title: 'dean winchester',
      img: 'assets/teams-background.png',
      like: 0,
      activeLike: false,
    },
    {
      id: 3,
      title: 'caver222.jpg',
      img: 'assets/caver222.jpg',
      like: 0,
      activeLike: false,
    },
    {
      id: 4,
      title: 'caver222.jpg',
      img: 'assets/sdsdsd.jpg',
      like: 0,
      activeLike: false,
    },
  ];

  user = [
    {
      name: 'Walter',
      img: 'assets/avatar.jpg',
    },
    {
      name: 'Theodore',
      img: 'assets/avatar1.jpg',
    },
    {
      name: 'Dean',
      img: 'assets/avatar2.jpg',
    },
    {
      name: 'Jesse',
      img: 'assets/avatar3.jpg',
    },
    {
      name: 'Enola',
      img: 'assets/avatar4.jpg',
    },
    {
      name: 'Vian',
      img: 'assets/avatar1.jpg',
    },
    {
      name: 'Assma',
      img: 'assets/avatar6.jpg',
    },
    {
      name: 'Ahmed',
      img: 'assets/avatar7.jpg',
    },
  ];
  constructor(private browserDbService: BrowserDbService) {}

  ngOnInit(): void {
    const posts = this.browserDbService.getItem('posts');
    if (!!posts) this.posts = posts;
  }

  increaseLike(item: any) {
    item.like++;
    item.activeLike = true;
    this.browserDbService.setItem('posts', this.posts);
  }
}
