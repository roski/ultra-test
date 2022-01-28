import { Component, Input } from '@angular/core';
import { IGif } from '@giphy/js-types';

@Component({
  selector: 'app-gif',
  templateUrl: './gif.component.html',
  styleUrls: ['./gif.component.scss']
})
export class GifComponent {
  @Input() gif?: IGif;
}
