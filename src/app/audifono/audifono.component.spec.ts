import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AudifonoComponent } from './audifono.component';

describe('AudifonoComponent', () => {
  let component: AudifonoComponent;
  let fixture: ComponentFixture<AudifonoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AudifonoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AudifonoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
