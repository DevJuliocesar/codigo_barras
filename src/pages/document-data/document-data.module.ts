import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DocumentDataPage } from './document-data';
import { PipesModule } from '../../pipes/pipes.module';

@NgModule({
  declarations: [
    DocumentDataPage,
  ],
  imports: [
    IonicPageModule.forChild(DocumentDataPage),
    PipesModule
  ],
})
export class DocumentDataPageModule {}
