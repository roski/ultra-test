import { Component } from '@angular/core';

/** About component */
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {
  /** this link used just for demo purpose and use for add
   * some content to about page and illustrate lazy load module preloading */
  lingToReadMy: string =
    'https://raw.githubusercontent.com/roski/ultra-test/main/README.md';
}
