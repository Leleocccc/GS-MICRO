import { Component } from '@angular/core';

@Component({
  selector: 'app-inspiracao',
  standalone: true,
  template: `
    <div class="inspiracao-container">
      <h1>Inspiração</h1>

      <div class="inspiration-section">
        <h2>Nossa Visão</h2>
        <p>Acreditamos que a tecnologia pode transformar o mundo e criar um futuro mais sustentável, inclusivo e inovador.</p>
        <p>O Global Solution nasceu da ideia de reunir mentes brilhantes para resolver os maiores desafios da humanidade através da tecnologia.</p>
      </div>

      <div class="inspiration-cards">
        <div class="inspiration-card">
          <h3>Sustentabilidade</h3>
          <p>Buscamos soluções tecnológicas que promovam a sustentabilidade e ajudem a preservar nosso planeta para as futuras gerações.</p>
        </div>

        <div class="inspiration-card">
          <h3>Inclusão Digital</h3>
          <p>Trabalhamos para que a tecnologia seja acessível a todos, independentemente de sua localização ou condição socioeconômica.</p>
        </div>

        <div class="inspiration-card">
          <h3>Inovação Responsável</h3>
          <p>Promovemos a inovação que coloca as pessoas em primeiro lugar, respeitando a privacidade, segurança e bem-estar de todos.</p>
        </div>
      </div>

      <div class="quote-section">
        <blockquote>
          "A tecnologia é apenas uma ferramenta. Para fazer as crianças trabalharem juntas e motivá-las, o professor é o mais importante."
          <cite>- Bill Gates</cite>
        </blockquote>
      </div>
    </div>
  `,
  styles: [`
    .inspiracao-container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 2rem 1rem;
    }

    h1 {
      text-align: center;
      color: #333;
      margin-bottom: 2rem;
    }

    .inspiration-section {
      text-align: center;
      margin-bottom: 3rem;
      padding: 2rem;
      background-color: #f8f9fa;
      border-radius: 8px;
    }

    .inspiration-section h2 {
      color: #FF5100;
      margin-bottom: 1rem;
    }

    .inspiration-section p {
      color: #666;
      line-height: 1.6;
      max-width: 800px;
      margin: 0 auto 1rem;
    }

    .inspiration-cards {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
      gap: 2rem;
      margin-bottom: 3rem;
    }

    .inspiration-card {
      background-color: white;
      border-radius: 8px;
      padding: 1.5rem;
      box-shadow: 0 2px 4px rgba(0,0,0,0.1);
      transition: transform 0.3s ease;
    }

    .inspiration-card:hover {
      transform: translateY(-5px);
    }

    .inspiration-card h3 {
      color: #FF5100;
      margin-bottom: 1rem;
    }

    .inspiration-card p {
      color: #666;
      line-height: 1.6;
    }

    .quote-section {
      text-align: center;
      padding: 3rem 1rem;
      background-color: #f8f9fa;
      border-radius: 8px;
    }

    blockquote {
      font-size: 1.2rem;
      font-style: italic;
      color: #555;
      max-width: 800px;
      margin: 0 auto;
      position: relative;
      padding: 0 2rem;
    }

    blockquote:before,
    blockquote:after {
      content: '"';
      font-size: 3rem;
      color: #FF5100;
      opacity: 0.3;
      position: absolute;
    }

    blockquote:before {
      top: -1.5rem;
      left: 0;
    }

    blockquote:after {
      bottom: -2.5rem;
      right: 0;
    }

    cite {
      display: block;
      margin-top: 1rem;
      font-style: normal;
      font-weight: bold;
    }
  `]
})
export class InspiracaoComponent {}
