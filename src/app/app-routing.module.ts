import { NgModule } from '@angular/core';
import { MidiaListComponent } from './midia-list/midia-list.component';
import { RouterModule, Routes } from "@angular/router";
import { MidiaFormComponent } from './midia-form/midia-form.component';
import { MidiaViewComponent } from './midia-view/midia-view.component';

const routes: Routes = [
    { path: '', component: MidiaListComponent },
    { path: 'home', component: MidiaListComponent },
    { path: 'midia-list', component: MidiaListComponent },
    { path: 'midia-new', component: MidiaFormComponent },
    { path: 'midia-edit/:id', component: MidiaFormComponent },
    { path: 'midia-view/:id', component: MidiaViewComponent },
]

@NgModule({
    declarations: [],
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule{}