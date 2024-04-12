import { Routes } from "@angular/router";
import { NawigacjaComponent } from "./gupoty/nawigacja/nawigacja.component";
import { PapiezComponent } from "./gupoty/papiez/papiez.component";
import { SepekComponent } from "./gupoty/sepek/sepek.component";
import { ProduktyComponent } from "./gupoty/produkty/produkty.component";

export const routes: Routes = [
  { path: 'papiez', component: PapiezComponent },
  { path: 'sepek', component: SepekComponent },
  { path: 'produkty', component: ProduktyComponent },
];