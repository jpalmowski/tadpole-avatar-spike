import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-avatar',
  templateUrl: './avatar.component.html',
  styleUrls: ['./avatar.component.css'],
  imports: [CommonModule],
  standalone: true,
})
export class AvatarComponent implements OnInit {
  @Input()
  public initials: string = '';

  @Input()
  public name: string = '';

  @Input()
  public colour: string = '#777';

  constructor() {}

  ngOnInit() {}
}
