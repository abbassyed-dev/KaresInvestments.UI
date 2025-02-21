import { Component, OnInit } from '@angular/core';
import { ConfirmationService, MessageService } from 'primeng/api';
import { ConfigurationService } from './configuration.service';

@Component({
    selector: 'app-configuration',
    templateUrl: './configuration.component.html',
    providers: [ConfirmationService, MessageService]
})
export class ConfigurationComponent implements OnInit {
    tables = ['countries', 'cities', 'departments']; // Add more table names as needed
    selectedTable: string = '';
    records: any[] = [];
    record: any = { id: null, name: '' };
    showDialog = false;
    isEdit = false;

    constructor(
        private dataService: ConfigurationService,
        private confirmationService: ConfirmationService,
        private messageService: MessageService
    ) { }

    ngOnInit() {
        this.loadTableData();
    }

    loadTableData() {
        if (this.selectedTable) {
            this.dataService.getTableData(this.selectedTable).subscribe((data) => {
                this.records = data;
            });
        }
    }

    openNew() {
        this.record = { id: null, name: '' };
        this.showDialog = true;
        this.isEdit = false;
    }

    editRecord(record: any) {
        this.record = { ...record };
        this.showDialog = true;
        this.isEdit = true;
    }

    saveRecord() {
        if (this.isEdit) {
            this.dataService.updateRecord(this.selectedTable, this.record).subscribe(() => {
                this.loadTableData();
                this.showDialog = false;
                this.messageService.add({ severity: 'success', summary: 'Updated', detail: 'Record updated successfully' });
            });
        } else {
            this.dataService.addRecord(this.selectedTable, this.record).subscribe(() => {
                this.loadTableData();
                this.showDialog = false;
                this.messageService.add({ severity: 'success', summary: 'Added', detail: 'Record added successfully' });
            });
        }
    }

    confirmDelete(record: any) {
        this.confirmationService.confirm({
            message: 'Are you sure you want to delete this record?',
            accept: () => {
                this.dataService.deleteRecord(this.selectedTable, record.id).subscribe(() => {
                    this.loadTableData();
                    this.messageService.add({ severity: 'warn', summary: 'Deleted', detail: 'Record deleted' });
                });
            }
        });
    }
}
