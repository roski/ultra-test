import { Component } from '@angular/core';
import { Select } from '@ngxs/store';
import { GiphyState } from '@app-shared/state/giphy';
import { Observable } from 'rxjs';
import { GiphyPagination } from '@app-shared/models';

/** Giphy dashboard component */
@Component({
  selector: 'app-giphy-dashboard',
  templateUrl: './giphy-dashboard.component.html',
  styleUrls: ['./giphy-dashboard.component.scss']
})
export class GiphyDashboardComponent {
  /** search gifs selector from ngxs store */
  @Select(GiphyState.getGifsPagination)
  pagination$!: Observable<GiphyPagination>;
}
