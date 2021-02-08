import { Component } from '@angular/core';
import {
  DragDropModule,
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';

@Component({
  selector: 'drag-list',
  templateUrl: './drag.list.html',
})
export default class DragList {
  constructor() {}
  List() {
    return this;
  }
  ngOnInit(): void {}
}
