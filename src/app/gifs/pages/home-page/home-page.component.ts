import { Component } from '@angular/core';

import { GifsService } from '../../services';
import { Gif } from '../../interfaces';

@Component({
  selector: 'gifs-home-page',
  templateUrl: './home-page.component.html',
})
export class HomePageComponent {
  constructor(private readonly gifsService: GifsService) {}

  get gifs(): Gif[] {
    return [...this.gifsService.gifList];
  }
}
