import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-evento-card',
  standalone: true,
  template: `
    <div class="evento-card">
      <h3>{{ titulo }}</h3>
      <p><strong>Data:</strong> {{ data }}</p>
      <p><strong>Horário:</strong> {{ horario }}</p>
      <p><strong>Local:</strong> {{ local }}</p>
    </div>
  `,
  styles: [`
    .evento-card {
      padding: 15px;
      border-radius: 8px;
      box-shadow: 0 2px 4px rgba(0,0,0,0.1);
      margin: 10px;
      background-color: #fff;
      transition: transform 0.3s ease;
    }

    .evento-card:hover {
      transform: translateY(-5px);
    }

    h3 {
      color: #333;
      margin-top: 0;
    }
  `]
})
export class EventoCardComponent {
  @Input() titulo: string = '';
  @Input() data: string = '';
  @Input() horario: string = '';
  @Input() local: string = '';
}
