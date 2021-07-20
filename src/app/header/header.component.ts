import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {
  collapsed = true;

  // emit the signal to parent component (app.component) with Output annotation
  // Output => other components will be able read this value
  @Output() featureSelected = new EventEmitter<string>();

  // *2: emit an Event as Output
  onSelect(feature: string): void {
    this.featureSelected.emit(feature);
  }
}

