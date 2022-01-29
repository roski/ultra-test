import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GiphyTagsComponent } from './giphy-tags.component';

describe('GiphyTagsComponent', () => {
  let component: GiphyTagsComponent;
  let fixture: ComponentFixture<GiphyTagsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GiphyTagsComponent]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GiphyTagsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
