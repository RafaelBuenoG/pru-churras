import { Component } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  pontos = 1;
  time1 = 0;
  time2 = 0;
  resultado1 = 0;
  resultado2 = 0;
  vitoria1 = 0;
  vitoria2 = 0;

  constructor() {}

  valendo1()
  {
    this.pontos = 1;
  }

  valendo3()
  {
    this.pontos = 3;
  }

  valendo6()
  {
    this.pontos = 6;
  }

  valendo9()
  {
    this.pontos = 9;
  }

  valendo12()
  {
    this.pontos = 12;
  }

  soma1()
  {
    if (this.time1 < 12)
    {
      this.resultado1 = this.resultado1 + this.pontos;
      if (this.resultado1 < 12)
      {
        this.time1 = this.time1 + this.pontos;
        this.valendo1()
      }
      else
      {
        this.vitoria1++
        this.time1 = 0;
        this.time2 = 0;
        this.resultado1 = 0;
        this.valendo1()
      }
    }
  }

  soma2()
  {
    if (this.time2 < 12)
    {
      this.resultado2 = this.resultado2 + this.pontos;
      if (this.resultado2 < 12)
      {
        this.time2 = this.time2 + this.pontos;
        this.valendo1()
      }
      else
      {
        this.vitoria1++
        this.time1 = 0;
        this.time2 = 0;
        this.resultado2 = 0;
        this.valendo1()
      }
    }
  }

  subtracao1()
  {
    if (this.time1 > 0)
    {
      this.resultado1 = this.resultado1 - this.pontos;
      if (this.resultado1 < 0)
      {
        this.time1 = this.time1 - this.pontos;
      }
      else
      {
        return;
      }
    }
  }

  subtracao2()
  {
    if (this.time2 > 0)
    {
      this.time2 = this.time2 - this.pontos;
    }
  }

  limpar()
  {
    this.valendo1()
    this.resultado1 = 0;
    this.resultado2 = 0;
    this.time1 = 0;
    this.time2 = 0;
    this.vitoria1 = 0;
    this.vitoria2 = 0;
  }


}
