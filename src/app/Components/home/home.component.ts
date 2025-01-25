import { Component } from '@angular/core';
import { GetDataService } from '../../get-data.service';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';

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
  ngOnInit(): void {
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
