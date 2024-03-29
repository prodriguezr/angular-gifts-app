import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Gif, GiphySearchResponse } from '../interfaces';

@Injectable({
  providedIn: 'root',
})
export class GifsService {
  private _tagsHistory: string[] = [];
  private readonly giphyApiKey: string = 'Bl5YL4MrH2Ln5m5o3cC5JxjKfVIQVn6w';
  private readonly giphyBaseUrl: string = 'https://api.giphy.com/v1/gifs';
  public gifList: Gif[] = [];

  constructor(private readonly httpClient: HttpClient) {
    this.getLocalStorage();
  }

  get tagsHistory(): string[] {
    return [...this._tagsHistory];
  }

  private saveLocalStorage(): void {
    localStorage.setItem('history', JSON.stringify(this._tagsHistory));
  }

  private getLocalStorage(): void {
    if (!localStorage.getItem('history')) return;

    this._tagsHistory = JSON.parse(
      localStorage.getItem('history')!
    ) as string[];

    if (this._tagsHistory.length === 0) return;

    this.searchTag(this._tagsHistory[0]);
  }

  private organizeHistory(tag: string) {
    tag = tag.toLowerCase();

    if (this._tagsHistory.includes(tag)) {
      this._tagsHistory = this._tagsHistory.filter((t) => t !== tag);
    }

    this._tagsHistory.unshift(tag);

    this._tagsHistory = this._tagsHistory.splice(0, 10);

    this.saveLocalStorage();
  }

  searchTag(tag: string): void {
    if (tag.length === 0) return;

    this.organizeHistory(tag);

    const params = new HttpParams()
      .set('api_key', this.giphyApiKey)
      .set('limit', 20)
      .set('q', tag);

    this.httpClient
      .get<GiphySearchResponse>(`${this.giphyBaseUrl}/search`, { params })
      .subscribe((resp) => {
        this.gifList = resp.data;
      });

    // this._tagsHistory.unshift(tag);
  }
}
