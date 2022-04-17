import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtistsDetailesComponent } from './artists-detailes.component';

describe('ArtistsDetailesComponent', () => {
  let component: ArtistsDetailesComponent;
  let fixture: ComponentFixture<ArtistsDetailesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArtistsDetailesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtistsDetailesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
