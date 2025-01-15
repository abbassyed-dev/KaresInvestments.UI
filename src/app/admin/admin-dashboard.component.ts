import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { LayoutService } from '../layout/service/app.layout.service';
import { Product } from '../api/product';
import { ProductService } from '../service/product.service';


@Component({
    templateUrl: './admin-dashboard.component.html',
    styleUrls: ['./admin-dashboard.component.scss']
})
export class AdminDashboardComponent implements OnInit {

    items!: MenuItem[];

    products!: Product[];



    activeTabIndex = 0;


    constructor(private productService: ProductService, public layoutService: LayoutService
    ) {
    }

    ngOnInit() {

        this.items = [
            { label: 'Add New', icon: 'pi pi-fw pi-plus' },
            { label: 'Remove', icon: 'pi pi-fw pi-minus' }
        ];
    }
}
