import { Component } from '@angular/core';

@Component({
    selector: 'app-home',
    templateUrl: './home2.component.html',
    styleUrls: ['./home2.component.scss']
})
export class Home2Component {
    features = [
        { icon: 'pi pi-money-bill', title: 'Personalized Service' },
        { icon: 'pi pi-chart-line', title: 'Commitment to Excellence' },
        { icon: 'pi-globe', title: 'Client-Centric Approach' },
        { icon: 'pi-lock', title: 'No Hidden Fees' }
    ];
}
