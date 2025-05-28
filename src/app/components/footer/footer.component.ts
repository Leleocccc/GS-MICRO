import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  template: `
    <footer class="footer">
      <div class="footer-content">
        <div class="footer-section">
          <h3>Global Solution</h3>
          <p>Uma jornada tecnológica rumo ao futuro.</p>
        </div>
        <div class="footer-section">
          <h3>Contato</h3>
          <p>Email: contato&#64;globalsolution.com</p>
          <p>Telefone: (11) 1234-5678</p>
        </div>
        <div class="footer-section">
          <h3>Redes Sociais</h3>
          <div class="social-links">
            <a href="#" class="social-link">Instagram</a>
            <a href="#" class="social-link">Twitter</a>
            <a href="#" class="social-link">LinkedIn</a>
          </div>
        </div>
      </div>
      <div class="footer-bottom">
        <p>&copy; 2023 Global Solution. Todos os direitos reservados.</p>
      </div>
    </footer>
  `,
  styles: [`
    .footer {
      background-color: #333;
      color: white;
      padding: 2rem 0 1rem;
      margin-top: 2rem;
    }

    .footer-content {
      display: flex;
      justify-content: space-around;
      flex-wrap: wrap;
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 1rem;
    }

    .footer-section {
      flex: 1;
      min-width: 250px;
      margin-bottom: 1.5rem;
      padding: 0 1rem;
    }

    .footer-section h3 {
      color: #FF5100;
      margin-bottom: 1rem;
    }

    .social-links {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
    }

    .social-link {
      color: white;
      text-decoration: none;
      transition: color 0.3s ease;
    }

    .social-link:hover {
      color: #FF5100;
    }

    .footer-bottom {
      text-align: center;
      padding-top: 1.5rem;
      margin-top: 1.5rem;
      border-top: 1px solid rgba(255,255,255,0.1);
    }
  `]
})
export class FooterComponent {}
