import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReductionsComponent } from './reductions.component';

describe('ReductionsComponent', () => {
  let component: ReductionsComponent;
  let fixture: ComponentFixture<ReductionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReductionsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReductionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
