import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PandaPage } from './panda';

@NgModule({
  declarations: [
    PandaPage,
  ],
  imports: [
    IonicPageModule.forChild(PandaPage),
  ],
})
export class PandaPageModule {}
