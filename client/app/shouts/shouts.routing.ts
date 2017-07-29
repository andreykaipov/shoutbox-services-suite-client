import { ModuleWithProviders, NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

import { ShoutsFeedComponent } from './feed/shouts-feed.component'
import { ShoutsFindVersionedComponent } from './find/versioned/shouts-find-versioned.component'

const routes: Routes = [
  {
    path: 'shouts',
    children: [
      {
        path: 'find', component: ShoutsFindVersionedComponent
      },
      {
        path: 'feed', component: ShoutsFeedComponent
      }
    ]
  }
]

export const ShoutsRoutingModule: ModuleWithProviders = RouterModule.forChild(routes)
