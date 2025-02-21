import { NgModule } from '@angular/core';
import { InputTextModule } from 'primeng/inputtext';
import { SidebarModule } from 'primeng/sidebar';
import { BadgeModule } from 'primeng/badge';
import { RadioButtonModule } from 'primeng/radiobutton';
import { InputSwitchModule } from 'primeng/inputswitch';
import { RippleModule } from 'primeng/ripple';
import { ToastModule } from 'primeng/toast';
import { ConfirmationService, MessageService } from 'primeng/api';
import { ChartModule } from 'primeng/chart';
import { MenuModule } from 'primeng/menu';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { StyleClassModule } from 'primeng/styleclass';
import { PanelMenuModule } from 'primeng/panelmenu';
import { PasswordModule } from 'primeng/password';
import { DividerModule } from 'primeng/divider';
import { DialogModule } from 'primeng/dialog';
import { TabViewModule } from 'primeng/tabview';
import { InputNumberModule } from 'primeng/inputnumber';
import { ToolbarModule } from 'primeng/toolbar';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { TagModule } from 'primeng/tag';
import { CalendarModule } from 'primeng/calendar';
import { DropdownModule } from 'primeng/dropdown';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { TooltipModule } from 'primeng/tooltip';
import { PanelModule } from 'primeng/panel';
import { CardModule } from 'primeng/card';
import { InputMaskModule } from 'primeng/inputmask';

const PrimeNgModules = [
    CalendarModule,
    CardModule,
    ConfirmDialogModule,
    ToolbarModule,
    IconFieldModule,
    InputIconModule,
    InputTextareaModule,
    TagModule,
    InputNumberModule,
    DropdownModule,
    InputTextModule,
    TooltipModule,
    // IconField,
    // InputIcon,
    SidebarModule,
    BadgeModule,
    RadioButtonModule,
    InputSwitchModule,
    ToastModule,
    RippleModule,
    ChartModule,
    MenuModule,
    TableModule,
    ButtonModule,
    StyleClassModule,
    PanelModule,
    PanelMenuModule,
    PasswordModule,
    DividerModule,
    DialogModule,
    TabViewModule,
    InputMaskModule
];

@NgModule({
    imports: [PrimeNgModules],
    exports: [PrimeNgModules],
    providers: [MessageService, ConfirmationService]
})

export class PrimeNgModule { }