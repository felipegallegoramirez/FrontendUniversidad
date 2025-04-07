import { Component, AfterViewInit } from '@angular/core';
declare const M: any;

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.css'
})
export class LandingComponent implements AfterViewInit  {

  ngAfterViewInit() {
    document.addEventListener('DOMContentLoaded', function() {
      var elems = document.querySelectorAll('.collapsible');
      M.Collapsible.init(elems, {});
    });
  }

}
