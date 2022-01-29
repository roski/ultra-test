import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup
} from '@angular/forms';
import { Store } from '@ngxs/store';
import { Navigate } from '@ngxs/router-plugin';
import { ActivatedRoute } from '@angular/router';
import { Destroyer } from '@app-shared/models/destroyer';
import { takeUntil } from 'rxjs/operators';
import { SearchGiphyGifs } from '@app-shared/state/giphy';

enum FormControlName {
  search = 'search'
}

/** search form component */
@Component({
  selector: 'app-giphy-search',
  templateUrl: './giphy-search.component.html',
  styleUrls: ['./giphy-search.component.scss']
})
export class GiphySearchComponent extends Destroyer implements OnInit {
  /** search form */
  form: FormGroup = this.fb.group({
    [FormControlName.search]: [null]
  });
  /** search form control name */
  readonly formControlName = FormControlName;

  /**
   * The "constructor"
   *
   * @param route$ angular active route service
   * @param fb the form builder
   * @param store the NgXs store service injection
   */
  constructor(
    protected readonly route$: ActivatedRoute,
    protected readonly fb: FormBuilder,
    protected readonly store: Store
  ) {
    super();
  }

  /**
   * Get search form controller
   *
   * @return form control
   */
  get searchController(): FormControl | AbstractControl | null {
    return this.form.get(FormControlName.search);
  }

  /**
   * ngOnInit lifecycle hook
   *
   * @returns nothing
   */
  ngOnInit(): void {
    this.watchSearchQuery();
  }

  /**
   * Process search GIFs
   *
   * @return nothing
   */
  processSearch(): void {
    const searchQuery: string | null = this.searchController?.value;
    this.addRouteQueryParams(searchQuery);
    this.searchGifs(searchQuery);
  }

  /**
   * Add route search query params
   *
   * @param searchQuery {string | null} search query
   * @return nothing
   */
  private addRouteQueryParams(searchQuery: string | null): void {
    this.store.dispatch(
      new Navigate([], searchQuery ? { s: searchQuery } : {})
    );
  }

  private searchGifs(searchQuery: string | null): void {
    this.store.dispatch(new SearchGiphyGifs(searchQuery));
  }

  /**
   * Watch when search query changed
   *
   * @returns nothing
   */
  private watchSearchQuery(): void {
    this.route$.queryParamMap
      .pipe(takeUntil(this.destroy$))
      .subscribe((params) => {
        const searchQuery = params.get('s');
        if (searchQuery) {
          this.searchController?.setValue(searchQuery);
          this.searchGifs(searchQuery);
        }
      });
  }
}
