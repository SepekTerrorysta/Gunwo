import { ApplicationConfig } from '@angular/core';
import { Routes, provideRouter } from '@angular/router';


import { NawigacjaComponent } from './gupoty/nawigacja/nawigacja.component';
import { PapiezComponent } from './gupoty/papiez/papiez.component';
import { routes } from './app.routes';




export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes)]
};
