import { Component } from '@angular/core';
import { ClassRoom } from '../class-room-list/class-room';

@Component({
  selector: 'hinv-class-room',
  templateUrl: './class-room.component.html',
  styleUrls: ['./class-room.component.scss']
})
export class ClassRoomComponent {
  title : string = 'List Class Room';
  classRooms: ClassRoom[] = [{ClassRoomNo: 'Room1', ClassRoomName: 'NetwordLab', ClassRoomType: 'Lab', ClassRoomCapacity: 50,}]
}
