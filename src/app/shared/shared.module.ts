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
  Landmark,
  Building,
  Briefcase,
  BarChart2,
  ShieldCheck,
  Bell,
  Settings,
  Home,
  Lock,
  PieChart,
  Barcode,
  ArrowLeftRight,
  ChevronRight,
  ChevronLeft,
  ChevronsLeft,
  ChevronsRight,
  Repeat,
  Search,
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
      Landmark,
      Building,
      Briefcase,
      BarChart2,
      ShieldCheck,
      Bell,
      Settings,
      Home,
      Lock,
      PieChart,
      Barcode,
      ArrowLeftRight,
      ChevronRight,
      ChevronLeft,
      ChevronsLeft,
      ChevronsRight,
      Repeat,
      Search,
    }),
  ],
  declarations: [SharedComponents],
  exports: [SharedComponents, LucideAngularModule],
})
export class SharedModule {}
