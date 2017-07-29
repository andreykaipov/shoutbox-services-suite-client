import { MdlModule } from '@angular-mdl/core'
import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { ReactiveFormsModule } from '@angular/forms'
import { HttpModule } from '@angular/http'

import { NgxDatatableModule } from '@swimlane/ngx-datatable/release'
import { HelpersModule } from '../helpers/helpers.module'
import { ShoutsFeedComponent } from './feed/shouts-feed.component'
import { ShoutsFindComponent } from './find/shouts-find.component'
import { ShoutsFindVersionedComponent } from './find/versioned/shouts-find-versioned.component'
import { ShoutsSearchComponent } from './search/shouts-search.component'
import { ShoutsTableComponent } from './shouts-table/shouts-table.component'
import { ShoutsRoutingModule } from './shouts.routing'
import { ShoutsService } from './shouts.service'

@NgModule({
  declarations: [
    ShoutsTableComponent,
    ShoutsSearchComponent,
    ShoutsFeedComponent,
    ShoutsFindComponent,
    ShoutsFindVersionedComponent
  ],
  providers: [
    ShoutsService
  ],
  imports: [
    CommonModule,
    HttpModule,
    NgxDatatableModule,
    MdlModule,
    ReactiveFormsModule,

    HelpersModule,
    ShoutsRoutingModule
  ]
})
export class ShoutsModule { }
