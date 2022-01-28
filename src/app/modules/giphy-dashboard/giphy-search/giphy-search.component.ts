import { Component } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup
} from '@angular/forms';
import { Store } from '@ngxs/store';

enum FormControlName {
  search = 'search'
}

/** search form component */
@Component({
  selector: 'app-giphy-search',
  templateUrl: './giphy-search.component.html',
  styleUrls: ['./giphy-search.component.scss']
})
export class GiphySearchComponent {
  /** search form */
  form: FormGroup = this.fb.group({
    [FormControlName.search]: [null]
  });
  /** search form control name */
  readonly formControlName = FormControlName;

  /**
   * The "constructor"
   *
   * @param fb the form builder
   * @param store the NgXs store service injection
   */
  constructor(
    protected readonly fb: FormBuilder,
    protected readonly store: Store
  ) {}

  /**
   * Get search form controller
   *
   * @return form control
   */
  get searchController(): FormControl | AbstractControl | null {
    return this.form.get(FormControlName.search);
  }

  /**
   * Search gifs
   *
   * @return nothing
   */
  searchGifs(): void {
    console.log(this.searchController?.value);
  }
}
