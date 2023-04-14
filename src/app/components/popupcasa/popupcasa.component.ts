import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-popupcasa',
  templateUrl: './popupcasa.component.html',
  styleUrls: ['./popupcasa.component.css']
})
export class PopupcasaComponent implements OnInit{
  risposta!:any

constructor(private dialogRef:MatDialogRef<PopupcasaComponent>,@Inject(MAT_DIALOG_DATA) private data:any){
  this.risposta = this.data
}

  chiudi(){
    this.dialogRef.close()
  }
  ngOnInit(): void {
  }
}
