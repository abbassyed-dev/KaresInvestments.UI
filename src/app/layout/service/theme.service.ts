import { Injectable, Renderer2, RendererFactory2 } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private renderer: Renderer2;
  private darkMode = new BehaviorSubject<boolean>(
    this.getInitialThemePreference()
  );
  isDarkMode$ = this.darkMode.asObservable();

  // Keep track of the current theme link element
  private currentThemeLink: HTMLLinkElement | null = null;

  constructor(rendererFactory: RendererFactory2) {
    this.renderer = rendererFactory.createRenderer(null, null);
    this.applyTheme(this.darkMode.value);

    // Listen for system preference changes
    window
      .matchMedia('(prefers-color-scheme: dark)')
      .addEventListener('change', (e) => {
        if (!localStorage.getItem('theme-preference')) {
          const isDark = e.matches;
          this.darkMode.next(isDark);
          this.applyTheme(isDark);
        }
      });
  }

  private getInitialThemePreference(): boolean {
    // Check for saved preference
    const savedPreference = localStorage.getItem('theme-preference');
    if (savedPreference) {
      return savedPreference === 'dark';
    }

    // Otherwise use system preference
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  }

  toggleTheme(): void {
    const newValue = !this.darkMode.value;
    this.darkMode.next(newValue);
    localStorage.setItem('theme-preference', newValue ? 'dark' : 'light');
    this.applyTheme(newValue);
  }

  private applyTheme(isDark: boolean): void {
    if (isDark) {
      document.documentElement.classList.add('dark-theme');
      document.documentElement.classList.remove('light-theme');
      this.switchPrimeNGTheme('bootstrap4-dark-blue');
    } else {
      document.documentElement.classList.add('light-theme');
      document.documentElement.classList.remove('dark-theme');
      this.switchPrimeNGTheme('lara-light-indigo');
    }
  }

  private switchPrimeNGTheme(newTheme: string): void {
    // Remove the current theme if it exists
    if (this.currentThemeLink) {
      this.renderer.removeChild(document.head, this.currentThemeLink);
      this.currentThemeLink = null;
    }

    // Create a new link element for the theme
    const themeLink = this.renderer.createElement('link');
    this.renderer.setAttribute(themeLink, 'rel', 'stylesheet');
    this.renderer.setAttribute(themeLink, 'type', 'text/css');
    this.renderer.setAttribute(
      themeLink,
      'href',
      `node_modules/primeng/resources/themes/${newTheme}/theme.css`
    );

    // Add the new theme link to the head
    this.renderer.appendChild(document.head, themeLink);
    this.currentThemeLink = themeLink;
  }
}
