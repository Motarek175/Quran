import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GetDataService {
  constructor(private http: HttpClient, private router: Router) {}

  getSurah(): Observable<any> {
    return this.http.get('https://api.alquran.cloud/v1/quran/quran-uthmani');
  }
  // getFullAudio(num: number): Observable<any> {
  //   const formattedNum = num.toString().padStart(3, '0');
  //   return this.http.get(
  //     'http://download.quranicaudio.com/quran/ahmed_ibn_3ali_al-3ajamy/' +
  //       formattedNum +
  //       '.mp3'
  //   );
  // }
  getFullAudioUrl(surahNumber: number): string {
    const formattedNumber = surahNumber.toString().padStart(3, '0'); // Format to 3 digits
    return `https://download.quranicaudio.com/quran/ahmed_ibn_3ali_al-3ajamy/${formattedNumber}.mp3`;
  }
}
