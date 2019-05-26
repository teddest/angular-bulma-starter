import { Directive, HostListener, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Directive({
  selector: '.burger,a.navbar-item',
})
export class NavbarToggleDirective {
  constructor(@Inject(DOCUMENT) private doc: any) { }

  @HostListener('click', ['$event'])
  onClick(e: any) {
    const $burgers = this.doc.querySelectorAll('.burger');

    if ($burgers.length > 0) {
      $burgers.forEach(($el: any) => {
        const $target = this.doc.getElementById($el.dataset.target);

        // Don't toggle is-active class if $target isn't active when clicking navbar links
        if (!$target.classList.contains('is-active') && e.target.className === 'navbar-item') {
          return;
        }

        $el.classList.toggle('is-active');
        $target.classList.toggle('is-active');
      });
    }
  }
}
