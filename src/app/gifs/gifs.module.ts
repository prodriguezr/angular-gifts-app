import { NgModule } from '@angular/core';
import { HomePageComponent } from './pages';
import { CardListComponent, SearchBoxComponent } from './components';
import { CardComponent } from './components/card/card.component';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared';

@NgModule({
  declarations: [
    HomePageComponent,
    SearchBoxComponent,
    CardListComponent,
    CardComponent,
  ],
  imports: [CommonModule, SharedModule],
  exports: [HomePageComponent],
})
export class GifsModule {}
