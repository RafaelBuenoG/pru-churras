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
      this.time1++;
    }
    if (this.time1 == 12)
    {
      this.vitoria1++
      this.time1 = 0;
      this.time2 = 0;
      console.log(this.vitoria1)
    }
  }

  soma2()
  {
    if (this.time2 < 12)
    {
      this.time2++;
    }
    if (this.time2 == 12)
    {
      this.vitoria2++
      this.time1 = 0;
      this.time2 = 0;
      console.log(this.vitoria2)
    }
  }

  subtracao1()
  {
    if (this.time1 > 0)
    {
      this.time1--;
    }
  }

  subtracao2()
  {
    if (this.time2 > 0)
    {
      this.time2--;
    }
  }

  limpar()
  {
    this.pontos = 1;
    this.time1 = 0;
    this.time2 = 0;
    this.vitoria1 = 0;
    this.vitoria2 = 0;
  }

  
}
