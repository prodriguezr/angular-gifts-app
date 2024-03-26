import { NgModule } from '@angular/core';
import { HomePageComponent } from './pages';
import { CardListComponent, SearchBoxComponent } from './components';

@NgModule({
  declarations: [HomePageComponent, SearchBoxComponent, CardListComponent],
  imports: [],
  exports: [HomePageComponent],
})
export class GifsModule {}
