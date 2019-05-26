import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'abs-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'angular-bulma-starter';

  constructor() {

  }

  // getAll(selector) {
  //   return Array.prototype.slice.call(document.querySelectorAll(selector), 0);
  // }

  ngOnInit() {
    // const $burgers = this.getAll('.burger');

    // if ($burgers.length > 0) {
    //   $burgers.forEach(($el: any) => {
    //     $el.addEventListener('click', function () {
    //       const target = $el.dataset.target;
    //       const $target = document.getElementById(target);
    //       $el.classList.toggle('is-active');
    //       $target.classList.toggle('is-active');
    //     });
    //   });
    // }

    // console.log($burgers);
  }

}
