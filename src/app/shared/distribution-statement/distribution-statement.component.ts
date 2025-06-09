import { ChangeDetectionStrategy, ChangeDetectorRef, Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import { DistributionService } from './distribution-statement.service';

export interface DisbursementStats {
    userName: string;
    capitalInvestment: number;
    totalDividends: number;
    processingFee: number;
    disbursedAmount: number;
    totalCapitalInvestment: number;
    returnOnInvestment: number;
    returnOfCapital: number;
}

@Component({
    selector: 'app-distribution-statement',
    templateUrl: './distribution-statement.component.html',
    styleUrls: ['./distribution-statement.component.scss']
})
export class DistributionStatementComponent {

    stats: DisbursementStats = {} as DisbursementStats;
    userId: string;
    fromDate: Date;
    toDate: Date;
    todaysDate = new Date();

    constructor(private location: Location, private route: ActivatedRoute, private dataService: DistributionService,
        private cdr: ChangeDetectorRef
    ) { }

    ngOnInit() {
        this.route.queryParams.subscribe(params => {
            this.userId = params['userId'];
            this.fromDate = params['date1'];
            this.toDate = params['date2'] || null; // optional

            console.log(this.userId);
            console.log(this.fromDate);
            console.log(this.toDate);
        });
        this.dataService.getDisbursementStats(this.userId, this.fromDate, this.toDate!).subscribe({
            next: (data: any) => {
                console.log(data);
                this.stats = data[0];
                console.log(this.stats);
                this.cdr.detectChanges();
            },
            error: (err) => console.error('Failed to load stats:', err)
        });
    }

    goBack() {
        this.location.back();
    }

    downloadPdf() {
        const content = document.getElementById('pdf-content');
        if (!content) return;

        html2canvas(content).then(canvas => {
            const imgData = canvas.toDataURL('image/png');
            const pdf = new jsPDF('p', 'pt', 'a4');
            const imgProps = pdf.getImageProperties(imgData);
            const pdfWidth = pdf.internal.pageSize.getWidth();
            const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
            pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
            pdf.save('disbursement-statement.pdf');
        });
    }
}
