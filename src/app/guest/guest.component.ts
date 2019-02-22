import { Component, OnInit } from '@angular/core';
import { GuestService } from './guest.service';
import { Guest } from './Guest';

@Component({
    selector: 'app-users',
    templateUrl: './users.component.html',
    styleUrls: ['./users.component.css']
})
export class GuestComponent implements OnInit {

    users: Guest[];

    constructor(private userService: GuestService) { }

    ngOnInit() {
        /* this.userService
            .getUsers()
            .subscribe((data: Guest[]) => {
                this.users = data;
            }); */
    }

}
