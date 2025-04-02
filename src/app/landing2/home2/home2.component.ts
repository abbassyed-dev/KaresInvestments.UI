import { Component, OnInit } from '@angular/core';
import { ThemeService } from '../../layout/service/theme.service';
interface Feature {
  icon: string;
  title: string;
  description: string;
}

interface Stat {
  value: string;
  label: string;
}
@Component({
  selector: 'app-home',
  templateUrl: './home2.component.html',
  styleUrls: ['./home2.component.scss'],
})
export class Home2Component implements OnInit {
  isDarkMode = false;

  features = [
    {
      icon: 'handshake',
      title: 'Personalized Service',
      description:
        'Tailored financial strategies designed specifically for your unique goals and risk tolerance.',
      animation: 'fade-right',
    },
    {
      icon: 'trophy',
      title: 'Commitment to Excellence',
      description:
        'Dedicated to providing top-tier financial services with consistent results.',
      animation: 'fade-up',
    },
    {
      icon: 'users',
      title: 'Client-Centric Approach',
      description:
        'Your success is our priority, with transparent planning that evolves with your needs.',
      animation: 'fade-up',
    },
    {
      icon: 'rocket',
      title: 'Innovative Solutions',
      description:
        'Cutting-edge financial tools that maximize returns while minimizing risk.',
      animation: 'fade-left',
    },
  ];

  stats = [
    { value: '95%', label: 'Client Satisfaction' },
    { value: '$2.5B+', label: 'Assets Managed' },
    { value: '15+', label: 'Years Experience' },
    { value: '24/7', label: 'Support Available' },
  ];

  constructor(private themeService: ThemeService) {}

  ngOnInit(): void {
    this.themeService.isDarkMode$.subscribe((isDark) => {
      this.isDarkMode = isDark;
    });
  }
}
