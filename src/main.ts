import 'zone.js/dist/zone';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { bootstrapApplication } from '@angular/platform-browser';
import { AvatarComponent } from './avatar/avatar.component';
import { AvatarListComponent } from './avatar-list/avatar-list.component';

@Component({
  selector: 'my-app',
  standalone: true,
  imports: [CommonModule, AvatarListComponent],
  template: `
    <app-avatar-list></app-avatar-list>
  `,
})
export class App {
  name = 'Angular';
}

bootstrapApplication(App);
