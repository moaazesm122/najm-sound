import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlbmusComponent } from './albmus.component';

describe('AlbmusComponent', () => {
  let component: AlbmusComponent;
  let fixture: ComponentFixture<AlbmusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlbmusComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlbmusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
