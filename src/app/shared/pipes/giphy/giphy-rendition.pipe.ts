import { Pipe, PipeTransform } from '@angular/core';
import { IGif, ImageAllTypes } from '@giphy/js-types';
import { getBestRendition } from '@giphy/js-util';

/** Pipe for prepare gif best rendition */
@Pipe({
  name: 'giphyRendition'
})
export class GiphyRenditionPipe implements PipeTransform {
  transform(gif: IGif, width: number = 100): ImageAllTypes {
    const bestRendition = getBestRendition(gif.images, width, 100);
    return gif.images[bestRendition.renditionName] as ImageAllTypes;
  }
}
