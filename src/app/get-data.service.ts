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
}
