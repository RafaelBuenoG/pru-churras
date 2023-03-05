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

  valendo(qtde: number)
  {
    if (qtde == 1)
    {
      this.pontos = 1;
    }
    if (qtde == 3)
    {
      this.pontos = 3;
    }
    if (qtde == 6)
    {
      this.pontos = 6;
    }
    if (qtde == 9)
    {
      this.pontos = 9;
    }
    if (qtde == 12)
    {
      this.pontos = 12;
    }
  }

  soma1()
  {
    if (this.time1 < 12)
    {
      this.resultado1 = this.resultado1 + this.pontos;
      if (this.resultado1 < 12)
      {
        this.time1 = this.time1 + this.pontos;
        this.valendo(1);
      }
      else
      {
        this.vitoria1++;
        this.time1 = 0;
        this.time2 = 0;
        this.resultado1 = 0;
        this.valendo(1);
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
        this.valendo(1);
      }
      else
      {
        this.vitoria2++;
        this.time1 = 0;
        this.time2 = 0;
        this.resultado2 = 0;
        this.valendo(1);
      }
    }
  }

  subtracao1()
  {
    if (this.time1 > 0)
    {
      this.resultado1 = this.resultado1 - this.pontos;
      if (this.resultado1 >= 0)
      {
        this.time1 = this.time1 - this.pontos;
        this.valendo(1);
      }
      else
      {
        this.time1 = 0;
        this.resultado1 = this.time1;
        this.valendo(1);
      }
    }
  }

  subtracao2()
  {
    if (this.time2 > 0)
    {
      this.resultado2 = this.resultado2 - this.pontos;
      if (this.resultado2 >= 0)
      {
        this.time2 = this.time2 - this.pontos;
        this.valendo(1);
      }
      else
      {
        this.time2 = 0;
        this.resultado2 = this.time2;
        this.valendo(1);
      }
    }
  }

  limpar()
  {
    this.valendo(1);
    this.pontos = 1;
    this.time1 = 0;
    this.time2 = 0;
    this.resultado1 = 0;
    this.resultado2 = 0;
    this.vitoria1 = 0;
    this.vitoria2 = 0;
  }
}
