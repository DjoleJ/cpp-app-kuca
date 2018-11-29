import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { IndexPage } from './index';
import { NgxChartsModule } from '@swimlane/ngx-charts';


@NgModule({
  declarations: [
    IndexPage
  ],
  imports: [
    IonicPageModule.forChild(IndexPage),
    NgxChartsModule
  ],
})
export class IndexPageModule {}
