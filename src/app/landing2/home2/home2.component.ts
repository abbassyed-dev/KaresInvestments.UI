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
        'At KARES Investments, we take the time to understand your financial aspirations, risk tolerance, and personal circumstances. Our expert advisors craft personalized strategies tailored to your unique financial journey, ensuring that every decision aligns with your long-term goals.',
      animation: 'fade-right',
    },
    {
      icon: 'trophy',
      title: 'Commitment to Excellence',
      description:
        'We are dedicated to providing top-tier financial services that deliver consistent results. Our commitment to excellence drives us to continuously refine our strategies, ensuring that you receive the best investment opportunities and wealth management solutions.',
      animation: 'fade-up',
    },
    {
      icon: 'users',
      title: 'Client-Centric Approach',
      description:
        'Your success is our top priority. We foster long-term relationships built on trust, transparency, and proactive financial planning, ensuring that your financial strategies evolve alongside your life’s changing needs.',
      animation: 'fade-up',
    },
    {
      icon: 'rocket',
      title: 'Innovative Solutions',
      description:
        'We leverage cutting-edge financial tools and industry insights to provide innovative solutions that maximize returns while minimizing risk. Our forward-thinking approach ensures that your investments stay ahead in an ever-changing financial landscape.',
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
