import { Component } from '@angular/core';
import { HoverBorderDirective } from '../../directives/hover-border.directive';

@Component({
  selector: 'app-gifts',
  standalone: true,
  imports: [HoverBorderDirective],
  template: `
    <div class="gifts-container">
      <h1>Gifts</h1>

      <p class="intro">Todos os participantes do Global Solution receberão brindes exclusivos. Confira o que preparamos para você!</p>

      <div class="gifts-grid">
        @for (gift of gifts; track gift.id) {
          <div class="gift-card" [appHoverBorder]="'#FF5100'">
            <div class="gift-image">
              <div class="placeholder-image">{{ gift.nome.charAt(0) }}</div>
            </div>
            <div class="gift-info">
              <h3>{{ gift.nome }}</h3>
              <p>{{ gift.descricao }}</p>
              @if (gift.exclusivo) {
                <span class="exclusive-badge">Exclusivo</span>
              }
            </div>
          </div>
        }
      </div>

      <div class="info-section">
        <h2>Como Receber</h2>
        <p>Os gifts serão entregues durante o evento para participantes que completarem pelo menos 80% das atividades programadas.</p>
        <p>Participantes presenciais receberão os brindes no local do evento. Participantes online receberão em casa (frete grátis para todo o Brasil).</p>
      </div>
    </div>
  `,
  styles: [`
    .gifts-container {
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

    .gifts-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
      gap: 2rem;
      margin-bottom: 3rem;
    }

    .gift-card {
      display: flex;
      background-color: white;
      border-radius: 8px;
      overflow: hidden;
      box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    }

    .gift-image {
      flex: 0 0 100px;
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: #f0f0f0;
    }

    .placeholder-image {
      width: 60px;
      height: 60px;
      border-radius: 50%;
      background-color: #FF5100;
      color: white;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 1.5rem;
      font-weight: bold;
    }

    .gift-info {
      flex: 1;
      padding: 1.5rem;
      position: relative;
    }

    .gift-info h3 {
      color: #333;
      margin-bottom: 0.5rem;
    }

    .gift-info p {
      color: #666;
      margin-bottom: 1rem;
    }

    .exclusive-badge {
      position: absolute;
      top: 1rem;
      right: 1rem;
      background-color: #FF5100;
      color: white;
      padding: 0.3rem 0.6rem;
      border-radius: 4px;
      font-size: 0.8rem;
      font-weight: bold;
    }

    .info-section {
      background-color: #f8f9fa;
      padding: 2rem;
      border-radius: 8px;
      text-align: center;
    }

    .info-section h2 {
      color: #333;
      margin-bottom: 1rem;
    }

    .info-section p {
      color: #666;
      margin-bottom: 1rem;
      max-width: 800px;
      margin-left: auto;
      margin-right: auto;
    }
  `]
})
export class GiftsComponent {
  gifts = [
    {
      id: 1,
      nome: 'Camiseta Exclusiva',
      descricao: 'Camiseta personalizada do evento Global Solution com design exclusivo.',
      exclusivo: true
    },
    {
      id: 2,
      nome: 'Caneca Térmica',
      descricao: 'Caneca térmica com o logo do evento, mantém sua bebida quente ou fria por horas.',
      exclusivo: false
    },
    {
      id: 3,
      nome: 'Kit de Adesivos',
      descricao: 'Conjunto de adesivos com temas de tecnologia e inovação para personalizar seus dispositivos.',
      exclusivo: false
    },
    {
      id: 4,
      nome: 'Power Bank',
      descricao: 'Carregador portátil de 10000mAh com o logo do Global Solution.',
      exclusivo: true
    },
    {
      id: 5,
      nome: 'Certificado Digital',
      descricao: 'Certificado de participação no evento com validação blockchain.',
      exclusivo: false
    },
    {
      id: 6,
      nome: 'Mochila Tech',
      descricao: 'Mochila com compartimentos especiais para notebook e dispositivos eletrônicos.',
      exclusivo: true
    }
  ];
}
