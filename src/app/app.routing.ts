import { ModuleWithProviders, NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

const routes: Routes = [
  { path: '**', redirectTo: '', pathMatch: 'full' }
]

export const AppRoutingModule: ModuleWithProviders = RouterModule.forRoot(routes)
