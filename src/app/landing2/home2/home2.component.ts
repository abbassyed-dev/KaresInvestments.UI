import { Component } from '@angular/core';

@Component({
    selector: 'app-home',
    templateUrl: './home2.component.html',
    styleUrls: ['./home2.component.scss']
})
export class Home2Component {
    features = [
        { icon: 'handshake', title: 'Personalized Service', description: 'At KARES Investments, we take the time to understand your financial aspirations, risk tolerance, and personal circumstances. Our expert advisors craft personalized strategies tailored to your unique financial journey, ensuring that every decision aligns with your long-term goals.' },
        { icon: 'trophy', title: 'Commitment to Excellence', description: 'We are dedicated to providing top-tier financial services that deliver consistent results. Our commitment to excellence drives us to continuously refine our strategies, ensuring that you receive the best investment opportunities and wealth management solutions.' },
        { icon: 'users', title: 'Client-Centric Approach', description: 'Your success is our top priority. We foster long-term relationships built on trust, transparency, and proactive financial planning, ensuring that your financial strategies evolve alongside your life’s changing needs.' },
        { icon: 'rocket', title: 'Innovative Solutions', description: 'We leverage cutting-edge financial tools and industry insights to provide innovative solutions that maximize returns while minimizing risk. Our forward-thinking approach ensures that your investments stay ahead in an ever-changing financial landscape.' }
    ];
}