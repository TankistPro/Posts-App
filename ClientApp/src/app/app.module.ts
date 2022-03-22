import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { PostItemComponent } from './posts/post-item/post-item.component';
import { OrganizationsComponent } from './organizations/organizations.component';
import { PostsComponent } from './posts/posts.component';
import { EventEmmiterService } from '../services/eventEmmiter';

const appRoutes: Routes = [
  {
    path: '',
    component: PostsComponent,
  },
  {
    path: 'organizations',
    component: OrganizationsComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    PostItemComponent,
    OrganizationsComponent,
    PostsComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
