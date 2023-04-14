import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Domanda } from 'src/app/interfaces/domanda';
import { Risposta } from 'src/app/interfaces/risposta';
import { PopuppubblicoComponent } from '../popuppubblico/popuppubblico.component';
import { PopupcasaComponent } from '../popupcasa/popupcasa.component';

@Component({
  selector: 'app-aiuto',
  templateUrl: './aiuto.component.html',
  styleUrls: ['./aiuto.component.css']
})
export class AiutoComponent implements OnInit{

  @Input() domanda!:Domanda
  ris:Risposta[] = []
  variabile: any;
  max!:number
  constructor(private dialog : MatDialog){
  }

  ngOnInit(): void {
    this.ris = this.domanda.risposte
  }

  casa() {
    let trovato = 0
    for (let index = 0; index < this.ris.length; index++) {
      if(this.ris[index].corretto == true){
        trovato = index
      }
    }
    this.variabile = this.ris[trovato].testo
    
    this.dialog.open(PopupcasaComponent,{
      minWidth:"500px",
      data: this.variabile
    })
  }

  pubblico() {
    let sum = 100
    const numbers = []
    for (let i = 0; i < 3; i++) {
        const randomNumber = Math.floor(Math.random() * sum)
        sum -= randomNumber < 0 ? 0 : randomNumber
        numbers.push(randomNumber < 0 ? 0 : randomNumber)
    }
    numbers.push(sum)
    console.log(numbers)
    this.dialog.open(PopuppubblicoComponent,{
      minWidth:"500px",
      data: {
        valori:numbers,
        risposte:this.domanda.risposte
      }
    })
  }

  cinquanta() {
    let trovato = 0
    for (let index = 0; index < this.ris.length; index++) {
      if(this.ris[index].corretto == true){
        trovato = index
      }
    }
    this.variabile = this.ris[trovato].testo
     this.max = 0
    do{
      this.max = Math.floor(Math.random() * this.ris.length);
    } while (this.max == trovato)
    //Non so come disabilitare i due tasti
  }

}
