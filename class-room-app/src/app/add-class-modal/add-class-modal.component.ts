import { Component, EventEmitter, Output,Inject  } from '@angular/core';
import { ClassRoom } from '../class-room-list/class-room';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'hinv-add-class-modal',
  templateUrl: './add-class-modal.component.html',
  styleUrls: ['./add-class-modal.component.scss']
})
export class AddClassModalComponent {
  classRoom: ClassRoom = { ClassRoomNo: '', ClassRoomName: '', ClassRoomType: '', ClassRoomCapacity: 0 };
  @Output() classAdded = new EventEmitter<ClassRoom>();
  constructor(
    public dialogRef: MatDialogRef<AddClassModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ClassRoom) {}

    onSubmit() {
        this.classAdded.emit(this.classRoom);
        console.log(this.classRoom);
        this.dialogRef.close();
    }

    onNoClick(): void {
      this.dialogRef.close();
    }
}
