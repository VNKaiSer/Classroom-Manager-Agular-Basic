import { Component, Input, OnInit } from '@angular/core';
import { ClassRoom } from './class-room';

@Component({
  selector: 'hinv-class-room-list',
  templateUrl: './class-room-list.component.html',
  styleUrls: ['./class-room-list.component.scss'],
})
export class ClassRoomListComponent implements OnInit {
  constructor() {}
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  @Input() classRooms: ClassRoom[] = [];
}
