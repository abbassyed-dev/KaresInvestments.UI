import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'phoneFormat'
})
export class PhoneFormatPipe implements PipeTransform {
    transform(value: string | number): string {
        if (!value) {
            return '';
        }

        // Convert number to string
        const phoneNumber = value.toString().replace(/\D/g, ''); // Remove non-numeric characters

        if (phoneNumber.length !== 10) {
            return value.toString(); // Return as is if not 10 digits
        }

        // Format as (XXX) XXX-XXXX
        return `(${phoneNumber.substring(0, 3)}) ${phoneNumber.substring(3, 6)}-${phoneNumber.substring(6)}`;
    }
}
