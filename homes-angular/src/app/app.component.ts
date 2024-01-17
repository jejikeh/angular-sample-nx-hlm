import { Component, inject } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { ThemeService } from './services/theme.service';

@Component({
  standalone: true,
  imports: [HomeComponent],
  selector: 'app-root',
  template: `
    <main
      class="container d-flex flex-column justify-content-center align-items-center light:bg-slate-100 dark:bg-stone-950"
    >
      <app-home></app-home>
    </main>
  `,
  styles: [
    'main { padding: 15px; min-height: 100vh; min-width: 100vw; margin: 0; display: flex; flex-direction: column; align-items: center; justify-content: center; }',
  ],
})
export class AppComponent {
  private _themeService: ThemeService = inject(ThemeService);
  title = 'homes-angular';
}
