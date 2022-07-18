import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { PostComponent } from './components/post/post.component';
import { StoryComponent } from './components/story/story.component';

const route: Routes = [
  {
    path: '',
    component: HomeComponent
  },
];

@NgModule({
  declarations: [HomeComponent, PostComponent, StoryComponent],
  imports: [CommonModule, RouterModule.forChild(route)],
})
export class HomeModule {}
