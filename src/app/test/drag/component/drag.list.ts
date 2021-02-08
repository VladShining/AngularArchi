import { Component, OnInit } from '@angular/core';
import {
  DragDropModule,
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';
import { Input } from '@angular/core';

@Component({
  selector: 'drag-list',
  templateUrl: './drag.list.html',
})
export class DragList implements OnInit {
  constructor() {}
  @Input() label: string;
  @Input() canReceive: string[];
  @Input()
  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
  }
  ngOnInit(): void {}
}
