import { Component } from '@angular/core';

@Component({
  selector: 'app-parceiros',
  standalone: true,
  template: `
    <div class="parceiros-container">
      <h1>Parceiros</h1>

      <p class="intro">Conheça as empresas que tornaram o Global Solution possível.</p>

      <div class="parceiros-grid">
        <div class="parceiro-card">
          <img [src]="logoIBM" [alt]="'Logo da IBM - Parceira do Global Solution'" />
          <h3>IBM</h3>
          <p>Parceiro Platinum</p>
        </div>

        <div class="parceiro-card">
          <img [src]="logoMicrosoft" [alt]="'Logo da Microsoft - Parceira do Global Solution'" />
          <h3>Microsoft</h3>
          <p>Parceiro Gold</p>
        </div>

        <div class="parceiro-card">
          <img [src]="logoGoogle" [alt]="'Logo do Google - Parceiro do Global Solution'" />
          <h3>Google</h3>
          <p>Parceiro Gold</p>
        </div>

        <div class="parceiro-card">
          <img [src]="logoAmazon" [alt]="'Logo da Amazon - Parceira do Global Solution'" />
          <h3>Amazon</h3>
          <p>Parceiro Silver</p>
        </div>

        <div class="parceiro-card">
          <img [src]="logoOracle" [alt]="'Logo da Oracle - Parceira do Global Solution'" />
          <h3>Oracle</h3>
          <p>Parceiro Silver</p>
        </div>

        <div class="parceiro-card">
          <img [src]="logoFIAP" [alt]="'Logo da FIAP - Parceira do Global Solution'" />
          <h3>FIAP</h3>
          <p>Parceiro Educacional</p>
        </div>
      </div>

      <div class="parceria-info">
        <h2>Seja um Parceiro</h2>
        <p>Interessado em se tornar um parceiro do Global Solution? Entre em contato conosco para conhecer os benefícios e oportunidades.</p>
        <button class="contact-btn">Entre em Contato</button>
      </div>
    </div>
  `,
  styles: [`
    .parceiros-container {
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

    .parceiros-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
      gap: 2rem;
      margin-bottom: 3rem;
    }

    .parceiro-card {
      background-color: white;
      border-radius: 8px;
      padding: 1.5rem;
      box-shadow: 0 2px 4px rgba(0,0,0,0.1);
      text-align: center;
      transition: transform 0.3s ease;
    }

    .parceiro-card:hover {
      transform: translateY(-5px);
    }

    .parceiro-card img {
      max-width: 150px;
      height: auto;
      margin-bottom: 1rem;
    }

    .parceiro-card h3 {
      color: #333;
      margin-bottom: 0.5rem;
    }

    .parceiro-card p {
      color: #FF5100;
      font-weight: 500;
    }

    .parceria-info {
      background-color: #f8f9fa;
      padding: 2rem;
      border-radius: 8px;
      text-align: center;
    }

    .parceria-info h2 {
      color: #333;
      margin-bottom: 1rem;
    }

    .parceria-info p {
      color: #666;
      margin-bottom: 1.5rem;
      max-width: 800px;
      margin-left: auto;
      margin-right: auto;
    }

    .contact-btn {
      background-color: #FF5100;
      color: white;
      border: none;
      padding: 0.8rem 2rem;
      font-size: 1rem;
      border-radius: 4px;
      cursor: pointer;
      transition: background-color 0.3s ease;
    }

    .contact-btn:hover {
      background-color: #e04600;
    }
  `]
})
export class ParceirosComponent {
  // Property binding para as imagens dos parceiros
  logoIBM = 'assets/images/ibm-logo.png';
  logoMicrosoft = 'assets/images/microsoft-logo.png';
  logoGoogle = 'assets/images/google-logo.png';
  logoAmazon = 'assets/images/amazon-logo.png';
  logoOracle = 'assets/images/oracle-logo.png';
  logoFIAP = 'assets/images/fiap-logo.png';
}
