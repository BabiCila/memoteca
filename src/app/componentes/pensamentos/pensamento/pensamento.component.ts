import { Component } from '@angular/core';

@Component({
  selector: 'app-pensamento',
  templateUrl: './pensamento.component.html',
  styleUrls: ['./pensamento.component.css']
})
export class PensamentoComponent {
  pensamento = {
    conteudo: 'Seguimos com o Angular',
    autoria: 'Babi',
    modelo: 'modelo3'
  }
}
