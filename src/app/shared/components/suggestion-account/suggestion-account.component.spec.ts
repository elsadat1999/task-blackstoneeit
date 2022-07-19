import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuggestionAccountComponent } from './suggestion-account.component';

describe('SuggestionAccountComponent', () => {
  let component: SuggestionAccountComponent;
  let fixture: ComponentFixture<SuggestionAccountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuggestionAccountComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SuggestionAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
