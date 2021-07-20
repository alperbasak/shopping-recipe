import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  loadedFeature = 'recipe';

  // *4: set the visibility flag to hold which component should be shown on header click
  onNavigate(feature: string): void {
    this.loadedFeature = feature;
  }
}
