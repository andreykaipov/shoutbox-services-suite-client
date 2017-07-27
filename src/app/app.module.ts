import { MdlModule } from '@angular-mdl/core'
import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { NgxDatatableModule } from '@swimlane/ngx-datatable'

import { AppComponent } from './app.component'
import { AppRoutingModule } from './app.routing'
import { ShoutsModule } from './shouts/shouts.module'

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    MdlModule,

    AppRoutingModule,
    ShoutsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
