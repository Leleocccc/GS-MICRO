import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  template: `
    <div class="home-container">
      <section class="hero">
        <h1>{{ titulo }}</h1>
        <p class="description">{{ descricao }}</p>
        <p class="event-date">Data do evento: {{ dataEvento }}</p>
        <button class="cta-button">Inscreva-se</button>
      </section>

      @if (mostrarDestaques) {
        <section class="highlights">
          <h2>Destaques do Evento</h2>
          <div class="highlights-grid">
            @for (destaque of destaques; track destaque) {
              <div class="highlight-card">
                <h3>{{ destaque }}</h3>
                <p>Descubra como a {{ destaque.toLowerCase() }} está transformando o mundo.</p>
              </div>
            }
          </div>
        </section>
      }

      <section class="about">
        <h2>Sobre o Evento</h2>
        <p>O Global Solution é um evento que reúne especialistas, empresas e entusiastas de tecnologia para discutir e apresentar soluções inovadoras para os desafios globais.</p>
        <button (click)="toggleDestaques()" class="toggle-button">
          {{ mostrarDestaques ? 'Ocultar Destaques' : 'Mostrar Destaques' }}
        </button>
      </section>
    </div>
  `,
  styles: [`
    .home-container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 2rem 1rem;
    }

    .hero {
      text-align: center;
      padding: 3rem 1rem;
      background-color: #f8f9fa;
      border-radius: 8px;
      margin-bottom: 2rem;
    }

    .hero h1 {
      font-size: 2.5rem;
      color: #333;
      margin-bottom: 1rem;
    }

    .description {
      font-size: 1.2rem;
      color: #666;
      margin-bottom: 1rem;
    }

    .event-date {
      font-size: 1.1rem;
      color: #FF5100;
      font-weight: bold;
      margin-bottom: 1.5rem;
    }

    .cta-button {
      background-color: #FF5100;
      color: white;
      border: none;
      padding: 0.8rem 2rem;
      font-size: 1rem;
      border-radius: 4px;
      cursor: pointer;
      transition: background-color 0.3s ease;
    }

    .cta-button:hover {
      background-color: #e04600;
    }

    .highlights {
      margin-bottom: 2rem;
    }

    .highlights h2 {
      text-align: center;
      margin-bottom: 1.5rem;
      color: #333;
    }

    .highlights-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
      gap: 1.5rem;
    }

    .highlight-card {
      background-color: white;
      border-radius: 8px;
      padding: 1.5rem;
      box-shadow: 0 2px 4px rgba(0,0,0,0.1);
      transition: transform 0.3s ease;
    }

    .highlight-card:hover {
      transform: translateY(-5px);
    }

    .highlight-card h3 {
      color: #FF5100;
      margin-bottom: 0.5rem;
    }

    .about {
      background-color: #f8f9fa;
      padding: 2rem;
      border-radius: 8px;
      text-align: center;
    }

    .about h2 {
      margin-bottom: 1rem;
      color: #333;
    }

    .about p {
      margin-bottom: 1.5rem;
      color: #666;
    }

    .toggle-button {
      background-color: #333;
      color: white;
      border: none;
      padding: 0.6rem 1.2rem;
      font-size: 0.9rem;
      border-radius: 4px;
      cursor: pointer;
      transition: background-color 0.3s ease;
    }

    .toggle-button:hover {
      background-color: #555;
    }
  `]
})
export class HomeComponent {
  titulo = 'Global Solution';
  descricao = 'Uma jornada tecnológica rumo ao futuro.';
  dataEvento = '26 de maio';
  mostrarDestaques = true;
  destaques = ['Inovação', 'Tecnologia', 'Impacto Social'];

  toggleDestaques() {
    this.mostrarDestaques = !this.mostrarDestaques;
  }
}
