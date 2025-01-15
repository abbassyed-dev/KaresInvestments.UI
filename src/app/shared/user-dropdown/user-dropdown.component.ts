import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { User } from '../../models/user.model';

@Component({
    selector: 'app-user-dropdown',
    templateUrl: './user-dropdown.component.html',
    styleUrls: ['./user-dropdown.component.scss']
})
export class UserDropdownComponent implements OnInit {
    users: any[] = []; // Holds all users fetched from the API
    filteredUsers: any[] = []; // Holds the filtered list of users
    searchQuery = ''; // Search query string
    selectedUserObj: any = null; // Holds the selected user object
    isUserDialogVisible = false;
    selectedUser: any = {};
    @Output() emitSelectedUser = new EventEmitter<any>();

    constructor(private http: HttpClient) { }

    ngOnInit(): void {
        this.fetchUsers();
    }

    // Fetch users from the API

    //'https://localhost:7109/api/User/lov' 

    fetchUsers() {
        const apiUrl = environment.apiBaseUrl + '/api/User/lov';
        //const apiUrl = 'https://api.example.com/users'; // Replace with your API endpoint
        this.http.get<any[]>(apiUrl).subscribe(
            (data) => {
                this.users = data;
                this.filteredUsers = [...this.users]; // Initialize filtered users
            },
            (error) => {
                console.error('Error fetching users:', error);
            }
        );
    }

    openUserDialog() {
        this.isUserDialogVisible = true;
    }

    filterUsers() {
        const searchQuery = this.searchQuery.trim().toLowerCase();

        this.filteredUsers = this.users.filter(user =>
        (user.firstName?.toLowerCase().includes(searchQuery) ||
            user.lastName?.toLowerCase().includes(searchQuery) ||
            user.email?.toLowerCase().includes(searchQuery) ||
            user.phoneNo?.includes(searchQuery))
        );
    }

    onUserSelected(event: any) {
        if (this.selectedUserObj) {
            this.selectedUser = {
                "userName": this.selectedUserObj.firstName + ', ' + this.selectedUserObj.lastName,
                "userId": this.selectedUserObj.userId,
                "email": this.selectedUserObj.email
            };
            console.log(this.selectedUser);
            this.emitSelectedUser.emit(this.selectedUser);
        }
        this.isUserDialogVisible = false;
    }
}
