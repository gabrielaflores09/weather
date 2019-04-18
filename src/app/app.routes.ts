import { PaisComponent } from './pais/pais.component';

import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClimaCapitalComponent } from './clima-capital/clima-capital.component';
import { ApiComponent } from './api/api.component';

// Route Configuration
export const routes: Routes = [
    { path: 'pais', component: PaisComponent },
    { path: '', component: PaisComponent },
    { path: 'api', component: ApiComponent },
    { path: 'clima/:capital', component: ClimaCapitalComponent}
  ];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
