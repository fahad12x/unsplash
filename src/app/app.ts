import { Component } from '@angular/core';
import { NgFor, NgIf, NgStyle } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { UnsplashService } from './unsplash';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NgFor, NgIf, NgStyle, FormsModule],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {

  categories = ['nature', 'city', 'food', 'technology'];
  selectedCategory = 'nature';
  backgroundImageUrl = '';

  constructor(private unsplashService: UnsplashService) {}

  fetchRandomImage() {
    this.unsplashService.getRandomImage(this.selectedCategory).subscribe(response => {
      this.backgroundImageUrl = response.urls.full;
    }, error => {
      console.error('Error fetching image:', error);
    });
  }
}
