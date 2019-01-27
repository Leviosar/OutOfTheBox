import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateTextComponent } from './create-text.component';

describe('CreateTextComponent', () => {
  let component: CreateTextComponent;
  let fixture: ComponentFixture<CreateTextComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateTextComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
