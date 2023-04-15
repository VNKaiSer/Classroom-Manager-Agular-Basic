import { Component, Input, OnInit } from '@angular/core';
import { ClassRoom } from './class-room';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'hinv-class-room-list',
  templateUrl: './class-room-list.component.html',
  styleUrls: ['./class-room-list.component.scss'],
})
export class ClassRoomListComponent implements OnInit {
  @Input() classRooms!: ClassRoom[];
  constructor() {}

  ngOnInit(): void {
    this.dataSource.data = this.classRooms;
  }

  displayedColumns: string[] = ['ClassRoomNo', 'ClassRoomName', 'ClassRoomType', 'ClassRoomCapacity', 'Action'];
  dataSource = new MatTableDataSource<ClassRoom>(this.classRooms);

}



