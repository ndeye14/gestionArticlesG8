import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsArticlesComponent } from './details-articles.component';

describe('DetailsArticlesComponent', () => {
  let component: DetailsArticlesComponent;
  let fixture: ComponentFixture<DetailsArticlesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetailsArticlesComponent]
    });
    fixture = TestBed.createComponent(DetailsArticlesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
