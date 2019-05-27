import { NavbarToggleDirective } from './navbar-toggle.directive';
import { DOCUMENT } from '@angular/platform-browser';

describe('NavbarToggleDirective', () => {
  it('should create an instance', () => {
    const directive = new NavbarToggleDirective(DOCUMENT as any);
    expect(directive).toBeTruthy();
  });
});
