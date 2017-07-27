import { MdlModule } from '@angular-mdl/core'
import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { RecognitionService } from './voice/recognition.service'
import { SynthesisService } from './voice/synthesis.service'


@NgModule({
  declarations: [
  ],
  providers: [
    SynthesisService,
    RecognitionService
  ],
  imports: [
    CommonModule,
    MdlModule
  ],
  exports: [
  ]
})
export class HelpersModule { }
