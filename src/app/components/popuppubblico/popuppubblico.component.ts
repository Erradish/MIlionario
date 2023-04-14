import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { PopupcasaComponent } from '../popupcasa/popupcasa.component';
import { Domanda } from 'src/app/interfaces/domanda';
import { Risposta } from 'src/app/interfaces/risposta';

@Component({
  selector: 'app-popuppubblico',
  templateUrl: './popuppubblico.component.html',
  styleUrls: ['./popuppubblico.component.css']
})
export class PopuppubblicoComponent {

  risposte:Risposta[] = []
  percentuale:number[] = []

  constructor(private dialogRef:MatDialogRef<PopuppubblicoComponent>,@Inject(MAT_DIALOG_DATA) private data:{
    valori:number[],
    risposte: Risposta[]
    }){
      this.risposte = this.data.risposte
      this.percentuale = this.data.valori

  }

  chiudi() {
    this.dialogRef.close()
    }
}
