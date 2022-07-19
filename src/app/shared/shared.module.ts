import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { LayoutComponent } from './components/layout/layout.component';
import { SidebarRightComponent } from './components/sidebar-right/sidebar-right.component';
import { SuggestionsComponent } from './components/suggestions/suggestions.component';
import { SuggestionAccountComponent } from './components/suggestion-account/suggestion-account.component';
import { LatestPostActivityComponent } from './components/latest-post-activity/latest-post-activity.component';



@NgModule({
  declarations: [
    SidebarComponent,
    LayoutComponent,
    SidebarRightComponent,
    SuggestionsComponent,
    SuggestionAccountComponent,
    LatestPostActivityComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports:[SidebarComponent]
})
export class SharedModule { }
