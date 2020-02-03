import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlockedcontactsComponent } from './blockedcontacts.component';

describe('BlockedcontactsComponent', () => {
  let component: BlockedcontactsComponent;
  let fixture: ComponentFixture<BlockedcontactsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlockedcontactsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlockedcontactsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
