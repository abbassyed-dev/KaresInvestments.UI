import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'currencyFormat'
})
export class CurrencyFormatPipe implements PipeTransform {
    transform(value: number | string, currencySymbol = '$'): string {
        if (value == null || isNaN(+value)) return '';

        // Convert to number and format with commas
        const formattedNumber = Number(value).toLocaleString('en-US', {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2
        });

        return `${currencySymbol}${formattedNumber}`;
    }
}
