import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'actividad-9';
  num1: number = 0;
  num2: number = 0;
  operacion: string = 'defecto';

  resultado: number = 0;

  onSumar(): void {
    this.resultado = this.num1 + this.num2;
  }
  onRestar(): void {
    this.resultado = this.num1 - this.num2;
  }
  onMultiplicar(): void {
    this.resultado = this.num1 * this.num2;
  }
  onDividir(): void {
    this.resultado = this.num1 / this.num2;
  }

  calcular(): number {
    if (this.operacion === 'sumar') {
      this.onSumar();
      return this.resultado;
    } else if (this.operacion === 'restar') {
      this.onRestar();
      return this.resultado;
    } else if (this.operacion === 'multiplicar') {
      this.onMultiplicar();
      return this.resultado;
    } else if (this.operacion === 'dividir') {
      this.onDividir();
      return this.resultado;
    }

    return 0;
  }
}
