import { Component } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})

export class DataBindingComponent {

  url: string = "https://loiane.training";
  cursoAngular: boolean = true;
  isMouseOver: boolean = false;
  urlImagem: string;
  valorAtual: string = "";
  valorSalvo: string = "";

  constructor() {
    this.urlImagem = "data:image/jpeg;base64,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";
  }

  getValor() {
    return 1;
  }

  getCurtirCurso() {
    return true;
  }

  botaoClicado() {
    alert("Botão clicado!");
  }

  onKeyUp(evento: KeyboardEvent) {
    this.valorAtual = (<HTMLInputElement>evento.target).value;
  }

  salvarValor(evento: Event) {
    this.valorSalvo = (<HTMLInputElement>evento.target).value;
  }

  onMouseOverOut() {
    this.isMouseOver = !this.isMouseOver;
  }
}
