import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../Services/auth.service';
import {Router} from '@angular/router';

@Component({
    selector: 'app-home-container',
    templateUrl: './home-container.component.html',
    styleUrls: ['./home-container.component.css']
})
export class HomeContainerComponent implements OnInit {

    constructor(private router: Router,
                private authService: AuthService) {
    }

    ngOnInit(): void {
        if (this.authService.isLoggedIn() === false) {
            this.router.navigateByUrl('/login');
        }
    }

}
