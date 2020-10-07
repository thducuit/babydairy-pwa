import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../../Services/auth.service';
import {Router} from '@angular/router';

@Component({
    selector: 'app-login-container',
    templateUrl: './login-container.component.html',
    styleUrls: ['./login-container.component.css']
})
export class LoginContainerComponent implements OnInit {

    public form: FormGroup;

    constructor(
        private router: Router,
        private formBuilder: FormBuilder,
        private authService: AuthService
    ) {
        this.form = this.formBuilder.group({
            email: ['', Validators.required],
            password: ['', Validators.required]
        });
    }

    ngOnInit(): void {
    }

    login(): void {
        const val = this.form.value;
        if (val.email && val.password) {
            this.authService.login(val).subscribe(res => {
                this.authService.setToken(res);
                this.router.navigateByUrl('/');
            });
        }
    }

}
