import { Component, OnInit } from '@angular/core';
import { UserTransaction } from '../models/user-transaction.model';
import { AuthStateService } from '../shared/services/auth-state.service';
import { ToastrService } from 'ngx-toastr';
import { UserDashboardService } from './user-dashboard.service';
import Highcharts from 'highcharts';
import { UserStats } from '../models/user-stats.model';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';
import { PdfService } from '../shared/services/pdf.service';

interface PerformanceMetrics {
  monthlyGrowth: number;
  annualReturn: number;
  dividendYield: number;
  capitalGrowth: number;
}

interface PieChartData {
    portfolioId: number;
    portfolioName: string;
    totalAmount: number;
}

const PIE_CHART_COLOR_PALLETE = ['#4361ee','#3a0ca3','#7209b7','#f72585'];

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.scss'],
})
export class UserDashboardComponent implements OnInit {
  Highcharts = Highcharts;
  pieChartOptions: any;
  updatePieChartFlag = false;
  // Chart configuration
  portfolioChartData: any;
  userTransactions: UserTransaction[] = [];
  userName = '';
  userId: string | undefined = '';
  userStats = {} as UserStats;
  portfolioData : PieChartData[]= [];
  // Portfolio data for pie chart
  // portfolioData = [
  //   { name: 'Stocks', value: 55000, color: '#4361ee' },
  //   { name: 'Bonds', value: 25000, color: '#3a0ca3' },
  //   { name: 'Real Estate', value: 15000, color: '#7209b7' },
  //   { name: 'Cash', value: 5000, color:  },
  // ];
  // Chart configuration
  reportDialogVisible: boolean = false;
  selectedMonth: Date = new Date();
  selectedFormat: string = 'pdf';


  // Options for dropdowns
  reportFormats: any[] = [
    { name: 'PDF Document', code: 'pdf', icon: 'pi pi-file-pdf' },
  ];

  reportTypes: any[] = [
    { name: 'Investment Summary', code: 'investment' },
    { name: 'Performance Analysis', code: 'performance' },
    { name: 'Transaction History', code: 'transactions' },
    { name: 'Tax Statement', code: 'tax' },
  ];
  chartOptions: any;

  constructor(
    private authStateService: AuthStateService,
    private toastr: ToastrService,
    private dataService: UserDashboardService,
    private pdfService: PdfService
  ) { }

  ngOnInit() {
    this.initChartData();
    this.userName = `${this.authStateService.getLoggedInUserProperty(
      'lastName'
    )} ${this.authStateService.getLoggedInUserProperty('firstName')}`;
    this.userId = this.authStateService.getLoggedInUserProperty('userId');
    if (this.userId) {
      this.getUserTransactions();
      this.getUserStats();
      this.getUserPortfolioDistribution();
    }
  }

  initChartData() {
    // Setup pie chart data
    this.portfolioChartData = {
      labels: this.portfolioData.map((item,index) => item.portfolioName),
      datasets: [
        {
          data: this.portfolioData.map((item) => item.totalAmount),
          backgroundColor: this.portfolioData.map((item,index) => PIE_CHART_COLOR_PALLETE[index]),
          hoverBackgroundColor: this.portfolioData.map((item,index) => PIE_CHART_COLOR_PALLETE[index]),
        },
      ],
    };

    // Chart options
    this.chartOptions = {
      plugins: {
        legend: {
          display: false,
        },
        tooltip: {
          callbacks: {
            label: function (context: any) {
              let label = context.label || '';
              let value = context.raw || 0;
              return `${label}: $${value.toLocaleString()}`;
            },
          },
        },
      },
      cutout: '50%',
      responsive: true,
      maintainAspectRatio: false,
    };
  }

  getProgressWidth(value: number): number {
    return Math.min(Math.max(value, 0), 100);
  }

  getTransactionTypeClass(transaction: any): string {
    switch (transaction.transactionType) {
      case 'INVESTMENT':
        return 'investment-badge';
      case 'DIVIDEND':
        return 'dividend-badge';
      case 'WITHDRAWAL':
        return 'withdrawal-badge';
      default:
        return 'default-badge';
    }
  }

  getAmountClass(transaction: any): string {
    switch (transaction.transactionType) {
      case 'INVESTMENT':
        return 'investment-amount';
      case 'DIVIDEND':
        return 'positive-amount';
      case 'WITHDRAWAL':
        return 'negative-amount';
      default:
        return '';
    }
  }

  openReportDialog() {
    this.reportDialogVisible = true;
    this.selectedMonth = new Date();
    this.selectedFormat = 'pdf';

  }

  downloadReport() {
    // Format date for report filename
    // const monthYear = this.selectedMonth.toLocaleDateString('en-US', {
    //   month: 'long',
    //   year: 'numeric',
    // });

    const monthYear: string = this.selectedMonth.toLocaleDateString('en-US', {
      month: '2-digit',
      year: 'numeric',
    }).replace(/(\d{2})\/(\d{4})/, '$1/$2');
    console.log(`Downloading`, monthYear);
    if (this.userId) {
      this.dataService.getUserTransactionsByMonth(this.userId, monthYear).subscribe((res) => {
        console.log(res);
        if (res.length > 0) {
          // this.generatePdf(res);
          this.pdfService.generateKaresStatement({
            clientName: 'John Doe',
            monthYear: 'April 2025',
            initialInvestment: 10000,
            dividend: 250,
            fee: 10,
            disbursement: 240,
            capitalValue: 12000,
            roi: 5,
            roc: 25
          });
        }
      })
    }
    // Close dialog
    // this.reportDialogVisible = false;
  }



  generatePdf(transactions: any[]) {

    this.getBase64ImageFromUrl('assets/logo.png').then(base64 => {
      const doc = new jsPDF();

      // Add logo at top-left
      doc.addImage(base64, 'PNG', 20, 10, 40, 15); // x, y, width, height

      // Then continue with the rest of your content
    });
    const doc = new jsPDF();

    // Title/Header
    const title = 'User Transactions Report';
    doc.setFontSize(16);
    doc.text(title, 14, 20);

    // Define table columns
    const head = [['#', 'Date', 'Amount', 'Type', 'Mode']];

    // Prepare rows from data
    const body = transactions.map((t, i) => [
      i + 1,
      t.transactionDate,
      t.amount.toFixed(2),
      t.transactionType,
      t.paymentMode
    ]);

    // Add table
    autoTable(doc, {
      head,
      body,
      startY: 30,
      styles: { fontSize: 10 },
      theme: 'grid',
      headStyles: { fillColor: [41, 128, 185], halign: 'center' },
      didDrawPage: (data) => {
        // Footer
        // const pageCount = doc.internal.getNumberOfPages();
        // doc.setFontSize(10);
        // doc.text(`Page ${pageCount}`, data.settings.margin.left, doc.internal.pageSize.height - 10);
      }
    });

    doc.save('UserTransactions.pdf');
  }


  getUserStats() {
    if (this.userId) {
      this.dataService.getUserDashboardStats(this.userId).subscribe({
        next: (data: UserStats) => {
          this.userStats = data;
          console.log('User Stats Data:', data);
          this.updateChartWithSampleData();
        },
        error: (error: any) => {
          console.error('Error fetching user stats:', error);
          this.toastr.error('Could not load investment statistics');
        },
      });
    }
  }

  getUserTransactions() {
    if (this.userId) {
      this.dataService.getUserTransactions(this.userId).subscribe({
        next: (res: any) => {
          this.userTransactions = res;
          console.log('Transactions loaded:', this.userTransactions.length);
        },
        error: (error: any) => {
          console.error('Error fetching transactions:', error);
          this.toastr.error('Could not load transaction history');
        },
      });
    }
  }

  getUserPortfolioDistribution() {
    if (this.userId) {
      this.dataService.getPortfolioDistribution(this.userId).subscribe({
        next: (res: any) => {
          // this.userTransactions = res;
          console.log(res);
          this.portfolioData = res;
          this.initChartData();
        },
        error: (error: any) => {
          this.toastr.error('Could not load transaction history');
        },
      });
    }
  }

  // Update chart with sample data
  updateChartWithSampleData() {
    if (this.userStats && this.userStats.totalInvestment) {
      const chartData = [
        { name: 'Real Estate', y: 45 },
        { name: 'Equity', y: 25 },
        { name: 'Bonds', y: 15 },
        { name: 'Cash', y: 10 },
        { name: 'Others', y: 5 },
      ];

      this.pieChartOptions.series[0].data = chartData;
      this.updatePieChartFlag = true;
    }
  }

  getPaymentIcon(paymentMode: string): string {
    switch (paymentMode.toLowerCase()) {
      case 'bank transfer':
        return 'pi pi-credit-card';
      case 'cash':
        return 'pi pi-money-bill';
      case 'check':
        return 'pi pi-file';
      case 'credit card':
        return 'pi pi-wallet';
      default:
        return 'pi pi-dollar';
    }
  }

  getBase64ImageFromUrl(imageUrl: string): Promise<string> {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.crossOrigin = 'Anonymous';
      img.src = imageUrl;

      img.onload = () => {
        const canvas = document.createElement('canvas');
        canvas.width = img.width;
        canvas.height = img.height;

        const ctx = canvas.getContext('2d');
        ctx?.drawImage(img, 0, 0);

        const dataURL = canvas.toDataURL('image/png'); // or 'image/jpeg'
        resolve(dataURL);
      };

      img.onerror = error => reject(error);
    });
  }



}
