import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleProductPages } from './single-product-pages';

describe('SingleProductPages', () => {
  let component: SingleProductPages;
  let fixture: ComponentFixture<SingleProductPages>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SingleProductPages]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SingleProductPages);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
