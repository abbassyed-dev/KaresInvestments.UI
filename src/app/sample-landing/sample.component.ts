import { Component } from '@angular/core';

@Component({
    selector: 'app-fintech-homepage',
    templateUrl: './sample.component.html',
    styleUrls: ['./sample.component.css']
})
export class SampleComponent {
    darkMode = false;

    toggleDarkMode() {
        this.darkMode = !this.darkMode;
    }

    features = [
        { icon: 'pi-money-bill', title: 'Instant Transfers' },
        { icon: 'pi-chart-line', title: 'AI-powered Insights' },
        { icon: 'pi-lock', title: 'No Hidden Fees' },
        { icon: 'pi-globe', title: 'Multi-Currency Support' }
    ];
}
