import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaCifrasComponent } from './lista-cifras.component';

describe('ListaCifrasComponent', () => {
  let component: ListaCifrasComponent;
  let fixture: ComponentFixture<ListaCifrasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaCifrasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaCifrasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
