import {Directive, ElementRef, HostBinding, HostListener} from '@angular/core';

/*
Once the element that this directive sits on is clicked, a style will be added
Once clicked again, style will be removed
 */
@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {

  @HostBinding('class.open') isOpen = false;

  // @HostListener('click') toggleDropdown(): void {
  //   this.isOpen = !this.isOpen;
  // }

  // ^ to close the dropdown if clicked outside the element: attach the listener to whole document
  @HostListener('document:click', ['$event']) toggleOpen(event: Event): void {
    this.isOpen = this.elRef.nativeElement.contains(event.target) ? !this.isOpen : false;
  }

  constructor(private elRef: ElementRef) {
  }
}
