import { Component, OnInit } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { GiphyState } from '@app-shared/state/giphy';
import { Observable } from 'rxjs';
import { GiphyPagination } from '@app-shared/models';
import { Navigate } from '@ngxs/router-plugin';
import { ActivatedRoute } from '@angular/router';
import { takeUntil } from 'rxjs/operators';
import { Destroyer } from '@app-shared/models/destroyer';

@Component({
  selector: 'app-giphy-pagination',
  templateUrl: './giphy-pagination.component.html',
  styleUrls: ['./giphy-pagination.component.scss']
})
export class GiphyPaginationComponent extends Destroyer implements OnInit {
  /** trending gifs selector from ngxs store */
  @Select(GiphyState.getGifsPagination)
  curPagination$!: Observable<GiphyPagination>;
  curPage: number = 1;

  /**
   * The "constructor"
   *
   * @param route$ angular active route service
   * @param store the NgXs store service injection
   */
  constructor(
    protected readonly route$: ActivatedRoute,
    protected readonly store: Store
  ) {
    super();
  }

  /**
   * ngOnInit lifecycle hook
   *
   * @returns nothing
   */
  ngOnInit(): void {
    this.watchPageQuery();
  }

  /**
   * page changed
   *
   * @param page {number} current page
   * @returns nothing
   */
  pageChanged(page: number): void {
    this.addRouteQueryParams(page);
  }

  /**
   * Add route search query params
   *
   * @param page {number | null} search query
   * @return nothing
   */
  private addRouteQueryParams(page: number): void {
    this.store.dispatch(
      new Navigate([], { p: page }, { queryParamsHandling: 'merge' })
    );
  }

  /**
   * Watch when page query changed
   *
   * @returns nothing
   */
  private watchPageQuery(): void {
    this.route$.queryParamMap
      .pipe(takeUntil(this.destroy$))
      .subscribe((params) => {
        const page = params.get('p');
        if (page) {
          this.curPage = +page;
        } else {
          this.addRouteQueryParams(1);
        }
      });
  }
}
