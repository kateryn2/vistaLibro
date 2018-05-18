import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { LibroComponent } from 'src/app/libro/libro.component';



const routes: Routes = [
    { path: '', redirectTo: '/libroComponent', pathMatch: 'full' },
    { path: 'appComponent', component: AppComponent },
    { path: 'libroComponent', component: LibroComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule { }
