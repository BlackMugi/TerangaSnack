import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NosBoissonsComponent } from './nos-boissons.component';

describe('NosBoissonsComponent', () => {
  let component: NosBoissonsComponent;
  let fixture: ComponentFixture<NosBoissonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NosBoissonsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NosBoissonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
