import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoUpdateDeleteComponent } from './info-update-delete.component';

describe('InfoUpdateDeleteComponent', () => {
  let component: InfoUpdateDeleteComponent;
  let fixture: ComponentFixture<InfoUpdateDeleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfoUpdateDeleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoUpdateDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
