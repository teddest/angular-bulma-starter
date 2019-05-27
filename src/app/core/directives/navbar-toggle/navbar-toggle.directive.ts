import { Directive, HostListener, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Directive({
  selector: '.burger,a.navbar-item',
})
export class NavbarToggleDirective {
  constructor(@Inject(DOCUMENT) private document: any) { }

  @HostListener('click', ['$event'])
  onClick(e: any) {
    const burgers = this.document.querySelectorAll('.burger');

    if (burgers.length > 0) {
      burgers.forEach((el: any) => {
        const dataTarget = this.document.getElementById(el.dataset.target);
        const isDataTargetActive = dataTarget.classList.contains('is-active');
        const isNavbarItem = e.target.className === 'navbar-item';

        // Just return if dataTarget isn't active when clicking navbar links
        if ([!isDataTargetActive, isNavbarItem].every(Boolean)) { return; }

        el.classList.toggle('is-active');
        dataTarget.classList.toggle('is-active');
      });
    }
  }
}
