import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomeContainerComponent} from './Containers/home-container/home-container.component';
import {LoginContainerComponent} from './Containers/login-container/login-container.component';

const routes: Routes = [
    {
        path: '',
        component: HomeContainerComponent,
    },
    {
        path: 'login',
        component: LoginContainerComponent,
    }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes, {
            enableTracing: false,
            useHash: false,
        }),
    ],
    exports: [RouterModule],
    providers: [],
})
export class AppRoutingModule {
}
