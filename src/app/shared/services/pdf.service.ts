// import { Injectable } from '@angular/core';
// import { jsPDF } from 'jspdf';
// import autoTable from 'jspdf-autotable';

// @Injectable({
//     providedIn: 'root',
// })
// export class PdfService {

//   // MAIN method to generate the PDF
//   async generateKaresStatement(data: {
//     clientName: string;
//     monthYear: string;
//     initialInvestment: number;
//     dividend: number;
//     fee: number;
//     disbursement: number;
//     capitalValue: number;
//     roi: number;
//     roc: number;
//   }) {
//     const doc = new jsPDF();
//     const marginLeft = 20;
//     let y = 20;

//     // ✅ Load logo as base64 and add to PDF
//     try {
//       const logoBase64 = await this.getBase64ImageFromUrl('../../../assets/layout/images/kares-logo2.png');
//       doc.addImage(logoBase64, 'PNG', marginLeft, y, 40, 40);
//       y += 60;
//     } catch (error) {
//       console.warn('Logo could not be loaded:', error);
//     }

//     // Greeting and message
//     doc.setFont('helvetica', 'normal');
//     doc.setFontSize(12);
//     doc.text(`Dear ${data.clientName},`, marginLeft, y);
//     y += 10;

//     const message = `Please see below for the dividend disbursement information of your investments for the month of ${data.monthYear}:`;
//     const lines = doc.splitTextToSize(message, 170);
//     doc.text(lines, marginLeft, y);
//     y += lines.length * 8;

//     // Table
//     autoTable(doc, {
//       startY: y,
//       theme: 'plain',
//       styles: { fontSize: 11, cellPadding: 2 },
//       margin: { left: marginLeft },
//       body: [
//         [{ content: 'Initial Investment', styles: { fontStyle: 'bold' } }, this.formatCurrency(data.initialInvestment)],
//         [{ content: `${data.monthYear} Dividend`, styles: { fontStyle: 'bold' } }, this.formatCurrency(data.dividend)],
//         [{ content: 'Processing Fee', styles: { fontStyle: 'bold' } }, this.formatCurrency(data.fee)],
//         [{ content: 'Disbursement Amount', styles: { fontStyle: 'bold' } }, this.formatCurrency(data.disbursement)],
//       ],
//     });

//     y = (doc as any).lastAutoTable.finalY + 20;

//     // Capital Summary Block
//     doc.setFont('helvetica', 'bold');
//     doc.text('CURRENT CAPITAL VALUE¹', marginLeft, y);
//     y += 8;

//     doc.setFont('helvetica', 'normal');
//     doc.text(`Capital Current Value: $${data.capitalValue.toFixed(2)}`, marginLeft, y);
//     y += 8;
//     doc.text(`ROI²: ${data.roi.toFixed(2)}%`, marginLeft, y);
//     y += 8;
//     doc.text(`ROC³: ${data.roc.toFixed(2)}%`, marginLeft, y);
//     y += 12;

//     // Footnotes
//     doc.setFontSize(9);
//     doc.setFont('helvetica', 'normal');
//     doc.text([
//       '1. Your capital holdings at KARES',
//       '2. ROI = Return on investment extrapolated yearly',
//       '3. ROC = Return of Capital to date'
//     ], marginLeft, y);

//     doc.save('KARES_Disbursement_Statement.pdf');
//   }

//   // 📦 Convert image to Base64 from assets
//   private getBase64ImageFromUrl(imageUrl: string): Promise<string> {
//     return new Promise((resolve, reject) => {
//       const img = new Image();
//       img.crossOrigin = 'anonymous';
//       img.src = imageUrl;

//       img.onload = () => {
//         const canvas = document.createElement('canvas');
//         canvas.width = img.width;
//         canvas.height = img.height;

//         const ctx = canvas.getContext('2d');
//         ctx?.drawImage(img, 0, 0);

//         const dataURL = canvas.toDataURL('image/png');
//         resolve(dataURL);
//       };

//       img.onerror = error => reject(error);
//     });
//   }

//   private formatCurrency(value: number): string {
//     return `$${value.toFixed(2)}`;
//   }
// }

import { Injectable } from '@angular/core';
import { jsPDF } from 'jspdf';
import autoTable from 'jspdf-autotable';


@Injectable({
    providedIn: 'root',
})
export class PdfService {

  // MAIN method to generate the PDF
  async generateKaresStatement(data: {
    clientName: string;
    monthYear: string;
    initialInvestment: number;
    dividend: number;
    fee: number;
    disbursement: number;
    capitalValue: number;
    roi: number;
    roc: number;
  }) {
    const doc = new jsPDF();
    const marginLeft = 20;
    const pageWidth = doc.internal.pageSize.width;
    let y = 20;

    // ✅ Load logo as base64 and add to PDF (center-aligned)
    try {
      const logoBase64 = await this.getBase64ImageFromUrl('../../../assets/layout/images/kares-logo2.png');
      const logoWidth = 40;
      const logoHeight = 40;
      const x = (pageWidth - logoWidth) / 2; // Center the logo
      doc.addImage(logoBase64, 'PNG', x, y, logoWidth, logoHeight);
      y += logoHeight + 10;
    } catch (error) {
      console.warn('Logo could not be loaded:', error);
    }

    // Company Name Centered (under the logo)
    doc.setFont('helvetica', 'bold');
    
    doc.setFontSize(16);
    const companyName = 'KARES Investments';  // Update with actual company name
    const companyNameWidth = doc.getTextWidth(companyName);
    const companyNameX = (pageWidth - companyNameWidth) / 2;
    doc.text(companyName, companyNameX, y);
    y += 20;

    // Border around the content
    doc.setLineWidth(0.5);
    doc.rect(marginLeft, 10, pageWidth - 2 * marginLeft, y + 50);

    // Greeting and message
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(12);
    doc.text(`Dear ${data.clientName},`, marginLeft, y);
    y += 10;

    const message = `Please see below for the dividend disbursement information of your investments for the month of ${data.monthYear}:`;
    const lines = doc.splitTextToSize(message, 170);
    doc.text(lines, marginLeft, y);
    y += lines.length * 8;

    // Table
    autoTable(doc, {
      startY: y,
      theme: 'plain',
      styles: { fontSize: 11, cellPadding: 2 },
      margin: { left: marginLeft },
      body: [
        [{ content: 'Initial Investment', styles: { fontStyle: 'bold' } }, this.formatCurrency(data.initialInvestment)],
        [{ content: `${data.monthYear} Dividend`, styles: { fontStyle: 'bold' } }, this.formatCurrency(data.dividend)],
        [{ content: 'Processing Fee', styles: { fontStyle: 'bold' } }, this.formatCurrency(data.fee)],
        [{ content: 'Disbursement Amount', styles: { fontStyle: 'bold' } }, this.formatCurrency(data.disbursement)],
      ],
    });

    y = (doc as any).lastAutoTable.finalY + 20;

    // Capital Summary Block
    doc.setFont('helvetica', 'bold');
    doc.text('CURRENT CAPITAL VALUE¹', marginLeft, y);
    y += 8;

    doc.setFont('helvetica', 'normal');
    doc.text(`$${data.capitalValue.toFixed(2)}`, marginLeft, y);
    y += 8;
    doc.text(`ROI²: ${data.roi.toFixed(2)}%`, marginLeft, y);
    y += 8;
    doc.text(`ROC³: ${data.roc.toFixed(2)}%`, marginLeft, y);
    y += 12;

    // Footnotes
    doc.setFontSize(9);
    doc.setFont('helvetica', 'normal');
    doc.text([
      '1. Your capital holdings at KARES',
      '2. ROI = Return on investment extrapolated yearly',
      '3. ROC = Return of Capital to date'
    ], marginLeft, y);

    doc.save('KARES_Disbursement_Statement.pdf');
  }

  // 📦 Convert image to Base64 from assets
  private getBase64ImageFromUrl(imageUrl: string): Promise<string> {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.crossOrigin = 'anonymous';
      img.src = imageUrl;

      img.onload = () => {
        const canvas = document.createElement('canvas');
        canvas.width = img.width;
        canvas.height = img.height;

        const ctx = canvas.getContext('2d');
        ctx?.drawImage(img, 0, 0);

        const dataURL = canvas.toDataURL('image/png');
        resolve(dataURL);
      };

      img.onerror = error => reject(error);
    });
  }

  private formatCurrency(value: number): string {
    return `$${value.toFixed(2)}`;
  }
}

