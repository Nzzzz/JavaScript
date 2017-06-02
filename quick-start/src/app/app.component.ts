/**
 * Created by Administrator on 2017/4/25 0025.
 */
import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template:`
    <h1>{{title}}</h1>
    <nav>
      <a routerLink="/heroes" routerLinkActive="active">heroes</a>
      <a routerLink="/dashboard" routerLinkActive="active">dashboard</a>
    </nav>
    <router-outlet></router-outlet>
  `,
  moduleId:module.id,
  styleUrls: [
    'app.component.css'
  ]
})

export class AppComponent {
  title = 'Tour of Heroes';
}
