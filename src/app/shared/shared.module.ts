import { NgModule } from '@angular/core';
import { PhoneFormatPipe } from './phone-format.pipe';
import { CurrencyFormatPipe } from './currency-format.pipe';
import {
  LucideAngularModule,
  Users,
  Handshake,
  Trophy,
  Rocket,
  Shield,
  TrendingUp,
  Award,
  UserCheck,
  HeartHandshake,
  Lightbulb,
} from 'lucide-angular';

const SharedComponents = [PhoneFormatPipe, CurrencyFormatPipe];

@NgModule({
  imports: [
    LucideAngularModule.pick({
      Users,
      Handshake,
      Trophy,
      Rocket,
      Shield,
      TrendingUp,
      Award,
      UserCheck,
      HeartHandshake,
      Lightbulb,
    }),
  ],
  declarations: [SharedComponents],
  exports: [SharedComponents, LucideAngularModule],
})
export class SharedModule {}
