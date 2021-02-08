import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-appareil',
  templateUrl: './appareil.component.html',
  styleUrls: ['./appareil.component.scss'],
})
export class AppareilComponent implements OnInit {
  isActive: boolean;
  @Input() bouttonName: string;
  constructor() {}

  ngOnInit(): void {}
  isChange() {
    this.isActive = !this.isActive;
  }
}
