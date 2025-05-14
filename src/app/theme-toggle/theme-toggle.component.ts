import { Component, type OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LucideAngularModule } from 'lucide-angular';
import { ThemeService } from '../layout/service/theme.service';

@Component({
  selector: 'app-theme-toggle',
  standalone: true,
  imports: [CommonModule, LucideAngularModule],
  template: `
    <button
      class="theme-toggle-btn"
      (click)="toggleTheme()"
      [attr.aria-label]="
        isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'
      "
    >
      <lucide-icon
        [name]="isDarkMode ? 'sun' : 'moon'"
        [size]="20"
        class="theme-icon"
      ></lucide-icon>
    </button>
  `,
  styles: [
    `
      .theme-toggle-btn {
        background: transparent;
        border: none;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 8px;
        border-radius: 50%;
        transition: background-color 0.3s;
      }

      .theme-toggle-btn:hover {
        background-color: var(--surface-hover);
      }

      .theme-icon {
        color: var(--text-color);
      }
    `,
  ],
})
export class ThemeToggleComponent implements OnInit {
  isDarkMode = false;

  constructor(private themeService: ThemeService) {}

  ngOnInit(): void {
    this.themeService.isDarkMode$.subscribe((isDark: boolean) => {
      this.isDarkMode = isDark;
    });
  }

  toggleTheme(): void {
    this.themeService.toggleTheme();
  }
}
