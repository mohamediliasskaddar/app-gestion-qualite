import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MesureInfoComponent } from './mesure-info.component';

describe('MesureInfoComponent', () => {
  let component: MesureInfoComponent;
  let fixture: ComponentFixture<MesureInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MesureInfoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MesureInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
