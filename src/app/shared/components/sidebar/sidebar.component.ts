import { Component } from '@angular/core';
import { GifsService } from '@src/app/gifs/services';

@Component({
  selector: 'shared-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css',
})
export class SidebarComponent {
  constructor(private readonly _gifsService: GifsService) {}

  get tagsHistory(): string[] {
    return [...this._gifsService.tagsHistory];
  }

  onHistoryClick(tag: string): void {
    this._gifsService.searchTag(tag);
  }
}
