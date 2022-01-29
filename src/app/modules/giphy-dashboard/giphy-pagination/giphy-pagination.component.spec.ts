import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GiphyPaginationComponent } from './giphy-pagination.component';

describe('GiphyPaginationComponent', () => {
  let component: GiphyPaginationComponent;
  let fixture: ComponentFixture<GiphyPaginationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GiphyPaginationComponent]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GiphyPaginationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
