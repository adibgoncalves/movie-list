import { NgModule } from '@angular/core';
import { MidiaListComponent } from './midia-list/midia-list.component';
import { RouterModule, Routes } from "@angular/router";

const routes: Routes = [
    { path: 'lis-midias', component: MidiaListComponent },
]

@NgModule({
    declarations: [],
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule{}