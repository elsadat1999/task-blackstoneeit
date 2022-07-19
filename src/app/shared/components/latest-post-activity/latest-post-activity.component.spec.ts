import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LatestPostActivityComponent } from './latest-post-activity.component';

describe('LatestPostActivityComponent', () => {
  let component: LatestPostActivityComponent;
  let fixture: ComponentFixture<LatestPostActivityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LatestPostActivityComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LatestPostActivityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
