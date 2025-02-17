import { Component } from '@angular/core';
import { GetDataService } from '../../get-data.service';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { load } from '../../interceptors/loader-interceptor.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  constructor(public GetDataService: GetDataService) {}
  surahsName: any;
  isLoading = false;
  ngOnInit(): void {
    load.subscribe((status) => {
      this.isLoading = status;
    });
    this.GetDataService.getSurah().subscribe({
      next: (res) => {
        this.surahsName = res.data.surahs;
      },
      error(err) {
        console.error('Error:', err);
      },
    });
  }
}
