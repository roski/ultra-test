import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GiphyDashboardComponent } from './giphy-dashboard.component';

describe('GiphyDashboardComponent', () => {
  let component: GiphyDashboardComponent;
  let fixture: ComponentFixture<GiphyDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GiphyDashboardComponent]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GiphyDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
