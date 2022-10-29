import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActesNaissanceComponent } from './actes-naissance/actes-naissance.component';
import { ActesMariageComponent } from './actes-mariage/actes-mariage.component';
import { ActesDecesComponent } from './actes-deces/actes-deces.component';

const routes: Routes = [
  { path: "actesNaissance", component: ActesNaissanceComponent},
  { path: "actesMariage", component: ActesMariageComponent},
  { path: "actesDeces", component: ActesDecesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
