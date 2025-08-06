import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewMoldComponent } from './new-mold.component';

describe('NewMoldComponent', () => {
  let component: NewMoldComponent;
  let fixture: ComponentFixture<NewMoldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewMoldComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewMoldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
