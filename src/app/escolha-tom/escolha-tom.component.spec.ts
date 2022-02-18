import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EscolhaTomComponent } from './escolha-tom.component';

describe('EscolhaTomComponent', () => {
  let component: EscolhaTomComponent;
  let fixture: ComponentFixture<EscolhaTomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EscolhaTomComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EscolhaTomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
