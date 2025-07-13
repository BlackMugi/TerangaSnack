import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NosPlatsComponent } from './nos-plats.component';

describe('NosPlatsComponent', () => {
  let component: NosPlatsComponent;
  let fixture: ComponentFixture<NosPlatsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NosPlatsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NosPlatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
