import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CorporationClientsComponent } from './corporation-clients.component';

describe('CorporationClientsComponent', () => {
  let component: CorporationClientsComponent;
  let fixture: ComponentFixture<CorporationClientsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CorporationClientsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CorporationClientsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
