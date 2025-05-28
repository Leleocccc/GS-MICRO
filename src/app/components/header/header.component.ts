import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  template: `
    <header class="header">
      <div class="logo">
        <h1>Global Solution</h1>
      </div>
      <nav class="navigation">
        <ul>
          <li><a routerLink="/" routerLinkActive="active" [routerLinkActiveOptions]="{exact: true}">Home</a></li>
          <li><a routerLink="/inspiracao" routerLinkActive="active">Inspiração</a></li>
          <li><a routerLink="/programacao" routerLinkActive="active">Programação</a></li>
          <li><a routerLink="/gifts" routerLinkActive="active">Gifts</a></li>
          <li><a routerLink="/parceiros" routerLinkActive="active">Parceiros</a></li>
        </ul>
      </nav>
    </header>
  `,
  styles: [`
    .header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 1rem 2rem;
      background-color: #333;
      color: white;
      box-shadow: 0 2px 5px rgba(0,0,0,0.1);
    }

    .logo h1 {
      margin: 0;
      font-size: 1.5rem;
      color: #FF5100;
    }

    .navigation ul {
      display: flex;
      list-style: none;
      margin: 0;
      padding: 0;
      gap: 1.5rem;
    }

    .navigation a {
      color: white;
      text-decoration: none;
      font-weight: 500;
      padding: 0.5rem 0;
      transition: color 0.3s ease;
    }

    .navigation a:hover, .navigation a.active {
      color: #FF5100;
      border-bottom: 2px solid #FF5100;
    }
  `]
})
export class HeaderComponent {}
