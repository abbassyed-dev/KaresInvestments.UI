import { NgModule } from '@angular/core';
import { PhoneFormatPipe } from './phone-format.pipe';
import { CurrencyFormatPipe } from './currency-format.pipe';
import { LucideAngularModule, Users, Handshake, Trophy, Rocket } from 'lucide-angular';

const SharedComponents = [
    PhoneFormatPipe,
    CurrencyFormatPipe
];

@NgModule({
    imports: [LucideAngularModule.pick({ Users, Handshake, Trophy, Rocket })],
    declarations: [SharedComponents],
    exports: [SharedComponents, LucideAngularModule]
})

export class SharedModule { }