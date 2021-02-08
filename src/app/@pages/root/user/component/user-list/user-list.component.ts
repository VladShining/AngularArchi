import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
})
export class UserListComponent implements OnInit {
  constructor() {}
  users = [
    {
      name: 'Rakoto',
      email: '@rakoto',
    },
    {
      name: 'Rabe',
      email: '@rabe',
    },
  ];

  ngOnInit(): void {}
}
