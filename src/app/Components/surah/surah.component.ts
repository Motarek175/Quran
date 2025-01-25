import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GetDataService } from '../../get-data.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-surah',
  standalone: true,
  imports: [CommonModule],
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
    _ActivatedRoute.paramMap.subscribe((params) => {
      this.id = parseInt(params.get('id')!);
      this.id--;
    });
  }
  ngOnInit(): void {
    this.GetDataService.getSurah().subscribe({
      next: (res) => {
        this.surahsName = res.data.surahs;
        this.selectedSurah = this.surahsName[this.id];
        for (const ayah of this.selectedSurah.ayahs) {
          let state: string = ayah.text;
          if (state.includes('بِسْمِ ٱللَّهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ')) {
            ayah.text = state.replace(
              'بِسْمِ ٱللَّهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ',
              ''
            );
          }
          if (state.includes('1')) {
            ayah.text = state.replace('1', '');
          }
        }

      },
      error: (error) => {
        console.log(error);
      },
    });
  }
}
