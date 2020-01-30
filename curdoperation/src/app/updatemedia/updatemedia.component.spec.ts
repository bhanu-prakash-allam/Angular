import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatemediaComponent } from './updatemedia.component';

describe('UpdatemediaComponent', () => {
  let component: UpdatemediaComponent;
  let fixture: ComponentFixture<UpdatemediaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdatemediaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatemediaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
