import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from 'src/app/components/shared/footer/footer.component';


@NgModule({
  exports: [FooterComponent],
  declarations: [FooterComponent],
  imports: [
    CommonModule
  ]
})
export class FooterModule { }
