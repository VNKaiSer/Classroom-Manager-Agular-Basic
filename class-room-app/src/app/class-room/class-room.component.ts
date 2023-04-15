import { Component, ViewChild } from '@angular/core';
import { ClassRoom } from '../class-room-list/class-room';
import { MatDialog } from '@angular/material/dialog';
import { AddClassModalComponent } from '../add-class-modal/add-class-modal.component';
import { ClassRoomListComponent } from '../class-room-list/class-room-list.component';


@Component({
  selector: 'hinv-class-room',
  templateUrl: './class-room.component.html',
  styleUrls: ['./class-room.component.scss']
})
export class ClassRoomComponent {
  title : string = 'List Class Room';
  classRooms: ClassRoom[] = [{ClassRoomNo: 'Room1', ClassRoomName: 'NetwordLab', ClassRoomType: 'Lab', ClassRoomCapacity: 50},
                             {ClassRoomNo: 'Room2', ClassRoomName: 'H3.2', ClassRoomType: 'Lab', ClassRoomCapacity: 50},
                             {ClassRoomNo: 'Room2', ClassRoomName: 'TeachingRoom', ClassRoomType: 'Lab', ClassRoomCapacity: 50}]
  @ViewChild(ClassRoomListComponent) datasource!: ClassRoomListComponent;
  constructor(public dialog: MatDialog) {}
  openDialog(): void {
    const dialogRef = this.dialog.open(AddClassModalComponent);
    dialogRef.componentInstance.classAdded.subscribe((newClass: ClassRoom) => {
      this.addClass(newClass);
      this.datasource.dataSource.data = this.classRooms;
      console.log(this.classRooms);

    });
  }
  addClass(newClass: ClassRoom) {
    this.classRooms.push(newClass);
  }
}
