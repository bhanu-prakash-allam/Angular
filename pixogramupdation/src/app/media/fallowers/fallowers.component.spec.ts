import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FallowersComponent } from './fallowers.component';

describe('FallowersComponent', () => {
  let component: FallowersComponent;
  let fixture: ComponentFixture<FallowersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FallowersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FallowersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
