import { Directive, HostListener, ElementRef } from '@angular/core';

@Directive({
  selector: '[appNotImage]',
})
export class NotImageDirective {
  constructor(private elementImg: ElementRef) {}

  @HostListener('error')
  onError(): void {
    this.elementImg.nativeElement.src =
      'https://api.lorem.space/image/movie?w=150&h=220';
  }
}
