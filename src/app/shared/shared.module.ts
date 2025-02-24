import { NgModule } from '@angular/core';
import { PhoneFormatPipe } from './phone-format.pipe';

const SharedComponents = [
    PhoneFormatPipe
];

@NgModule({
    declarations: [SharedComponents],
    exports: [SharedComponents]
})

export class SharedModule { }