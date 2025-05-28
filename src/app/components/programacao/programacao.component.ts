import { Component } from '@angular/core';
import { EventoCardComponent } from '../evento-card/evento-card.component';
import { HoverBorderDirective } from '../../directives/hover-border.directive';
import { Evento } from '../../interfaces/evento.interface';

@Component({
  selector: 'app-programacao',
  standalone: true,
  imports: [EventoCardComponent, HoverBorderDirective],
  template: `
    <div class="programacao-container">
      <h1>Programação</h1>

      <p class="intro">Confira a programação completa do Global Solution e participe dos eventos que mais interessam a você.</p>

      <div class="eventos-grid">
        @for (evento of eventos; track evento.id) {
          <div class="evento-wrapper" [appHoverBorder]="'#FF5100'">
            <app-evento-card
              [titulo]="evento.titulo"
              [data]="evento.data"
              [horario]="evento.horario"
              [local]="evento.local"
            ></app-evento-card>

            <div class="evento-actions">
              <button class="participar-btn" (click)="participar(evento)">Participar</button>
            </div>

            @if (inscricoes[evento.id]) {
              <p class="inscricao-msg">Você se inscreveu no evento: {{ evento.titulo }}</p>
            }
          </div>
        }
      </div>
    </div>
  `,
  styles: [`
    .programacao-container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 2rem 1rem;
    }

    h1 {
      text-align: center;
      color: #333;
      margin-bottom: 1rem;
    }

    .intro {
      text-align: center;
      color: #666;
      margin-bottom: 2rem;
      max-width: 800px;
      margin-left: auto;
      margin-right: auto;
    }

    .eventos-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
      gap: 2rem;
    }

    .evento-wrapper {
      background-color: #f8f9fa;
      border-radius: 8px;
      padding: 1rem;
      transition: transform 0.3s ease;
    }

    .evento-actions {
      margin-top: 1rem;
      display: flex;
      justify-content: center;
    }

    .participar-btn {
      background-color: #FF5100;
      color: white;
      border: none;
      padding: 0.6rem 1.5rem;
      font-size: 0.9rem;
      border-radius: 4px;
      cursor: pointer;
      transition: background-color 0.3s ease;
    }

    .participar-btn:hover {
      background-color: #e04600;
    }

    .inscricao-msg {
      margin-top: 1rem;
      padding: 0.5rem;
      background-color: #e6f7e6;
      color: #2e7d32;
      border-radius: 4px;
      text-align: center;
      font-weight: 500;
    }
  `]
})
export class ProgramacaoComponent {
  eventos: Evento[] = [
    { id: 1, titulo: 'Kick-off', data: '26 de maio', horario: '19H00', local: 'ONLINE' },
    { id: 2, titulo: 'Workshop de Inovação', data: '27 de maio', horario: '14H00', local: 'ONLINE' },
    { id: 3, titulo: 'Painel de Tecnologias Emergentes', data: '28 de maio', horario: '10H00', local: 'ONLINE' },
    { id: 4, titulo: 'Hackathon Global Solution', data: '29 de maio', horario: '09H00', local: 'PRESENCIAL' },
    { id: 5, titulo: 'Apresentação de Projetos', data: '30 de maio', horario: '15H00', local: 'ONLINE' },
    { id: 6, titulo: 'Cerimônia de Premiação', data: '31 de maio', horario: '19H00', local: 'ONLINE' }
  ];

  inscricoes: { [key: number]: boolean } = {};

  participar(evento: Evento) {
    this.inscricoes[evento.id] = true;
  }
}
