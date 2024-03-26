import { Component, ElementRef, ViewChild } from '@angular/core';
import { GifsService } from '../../services';

@Component({
  selector: 'gifs-search-box',
  template: `
    <h5>Search</h5>
    <input
      type="text"
      class="form-control"
      placeholder="Type the word or concept to search"
      (keyup.enter)="searchTag()"
      #txtTag
    />
  `,
})
export class SearchBoxComponent {
  constructor(private readonly gifsService: GifsService) {}

  @ViewChild('txtTag')
  public tag!: ElementRef<HTMLInputElement>;

  public searchTag(): void {
    const newTag: string = this.tag.nativeElement.value;

    this.gifsService.searchTag(newTag);

    this.tag.nativeElement.value = '';
  }
}
