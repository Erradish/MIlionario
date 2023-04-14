import { Component } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-popupsconfitta',
  templateUrl: './popupsconfitta.component.html',
  styleUrls: ['./popupsconfitta.component.css']
})
export class PopupsconfittaComponent {

  constructor(private dialogRef:MatDialogRef<PopupsconfittaComponent>,){

  }
  chiudi(){
    window.location.reload()
  }
}
