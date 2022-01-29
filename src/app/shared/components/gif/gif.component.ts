import { Component, Input } from '@angular/core';
import { IGif } from '@giphy/js-types';

/** component for drawing gif from Giphy GIF object */
@Component({
  selector: 'app-gif',
  templateUrl: './gif.component.html',
  styleUrls: ['./gif.component.scss']
})
export class GifComponent {
  /** gif image input property */
  @Input() gif?: IGif;
}
