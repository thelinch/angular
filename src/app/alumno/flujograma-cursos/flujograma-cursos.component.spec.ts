import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlujogramaCursosComponent } from './flujograma-cursos.component';

describe('FlujogramaCursosComponent', () => {
  let component: FlujogramaCursosComponent;
  let fixture: ComponentFixture<FlujogramaCursosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlujogramaCursosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlujogramaCursosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
