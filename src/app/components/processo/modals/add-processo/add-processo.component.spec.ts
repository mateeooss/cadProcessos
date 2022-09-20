import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddProcessoComponent } from './add-processo.component';

describe('AddProcessoComponent', () => {
  let component: AddProcessoComponent;
  let fixture: ComponentFixture<AddProcessoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddProcessoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddProcessoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
