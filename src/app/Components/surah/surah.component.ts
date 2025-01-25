import { Component } from '@angular/core';
import { ActivatedRoute, RouterLink, RouterLinkActive } from '@angular/router';
import { GetDataService } from '../../get-data.service';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-surah',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './surah.component.html',
  styleUrl: './surah.component.css',
})
export class SurahComponent {
  id: number = 0;
  surahsName: any;
  selectedSurah: any;

  constructor(
    private _ActivatedRoute: ActivatedRoute,
    private GetDataService: GetDataService
  ) {
    this._ActivatedRoute.paramMap.subscribe((params) => {
      this.id = parseInt(params.get('id')!);
      this.loadSurahData();
    });
  }
  ngOnInit(): void {
    this.GetDataService.getSurah().subscribe({
      next: (res) => {
        this.surahsName = res.data.surahs;
        this.loadSurahData();
      },
      error: (error) => {
        console.error(error);
      },
    });
  }
  loadSurahData(): void {
    this.selectedSurah = this.surahsName[this.id - 1];
    console.log(this.selectedSurah);
    for (const ayah of this.selectedSurah?.ayahs || []) {
      let state: string = ayah.text;
      if (state.includes('بِسْمِ ٱللَّهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ')) {
        ayah.text = state.replace('بِسْمِ ٱللَّهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ', '');
      }
    }
  }
}
