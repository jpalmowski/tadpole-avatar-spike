import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { map, Observable, tap } from 'rxjs';
import { AvatarComponent } from '../avatar/avatar.component';
import { UsernamesService } from '../usernames.service';

export interface AvatarUser {
  initials: string;
  name: string;
  colour: string;
}

@Component({
  selector: 'app-avatar-list',
  templateUrl: './avatar-list.component.html',
  styleUrls: ['./avatar-list.component.css'],
  imports: [CommonModule, AvatarComponent],
  standalone: true,
})
export class AvatarListComponent implements OnInit {
  public predefinedColors: string[] = [
    '#1D39C4',
    '#007CAD',
    '#005D5D',
    '#2E8222',
    '#D48806',
    '#CB4226',
  ];

  constructor(public users: UsernamesService) {}

  public avatarUsers$: Observable<AvatarUser[]> = this.users.usernames$.pipe(
    // tap((x) => console.log(x)),
    map((u) => {
      return u.map((un) => {
        return {
          initials: this.getInitials(un),
          name: un,
          colour: this.getColour(un),
        };
      });
    })
  );

  ngOnInit() {
    // this.avatarUsers$.subscribe((x) => console.log(x));
  }

  private getInitials(username: string) {
    return username
      .split(' ')
      .map((name) => name.charAt(0))
      .reduce((p, c, ci, arr) => {
        return arr.length > 2 ? arr[0] + arr[2] : arr[0] + arr[1];
      });
  }

  private getColour(username: string) {
    this.stringToRestrictedColour2(username);
    return this.stringToRestrictedColour1(username);
  }

  private stringToRestrictedColour2(string: string) {
    let hash = 0;
    let i;

    /* eslint-disable no-bitwise */
    for (i = 0; i < string.length; i += 1) {
      hash = string.charCodeAt(i) + ((hash << 5) - hash);
    }

    let color = '#';

    for (i = 0; i < 3; i += 1) {
      const value = (hash >> (i * 8)) & 0xff;
      color += `00${value.toString(16)}`.slice(-2);
    }
    /* eslint-enable no-bitwise */
    console.log(color);
    return color;
  }

  private stringToRestrictedColour1(str: string) {
    let hash = 0;

    // str.split('').forEach((char) => {
    //   hash = char.charCodeAt(0) + ((hash << 5) - hash);
    // });

    str.split('').forEach((char) => {
      hash = hash + char.charCodeAt(0) + 19937;
      // hash =
      //   hash +
      //   (char.charCodeAt(0) + 19477 * this.predefinedColors.length) * 19937;
    });

    // hash = hash * 19937; //?
    const index = hash % this.predefinedColors.length;
    index; //?
    return this.predefinedColors[Math.abs(index)];
  }
}
