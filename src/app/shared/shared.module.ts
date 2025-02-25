import { NgModule } from '@angular/core';
import { PhoneFormatPipe } from './phone-format.pipe';
import { CurrencyFormatPipe } from './currency-format.pipe';

const SharedComponents = [
    PhoneFormatPipe,
    CurrencyFormatPipe
];

@NgModule({
    declarations: [SharedComponents],
    exports: [SharedComponents]
})

export class SharedModule { }