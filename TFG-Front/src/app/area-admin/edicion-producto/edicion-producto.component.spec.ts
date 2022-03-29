import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EdicionProductoComponent } from './edicion-producto.component';

describe('EdicionProductoComponent', () => {
  let component: EdicionProductoComponent;
  let fixture: ComponentFixture<EdicionProductoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EdicionProductoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EdicionProductoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
