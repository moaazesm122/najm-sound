import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetSongDetailesListsComponent } from './get-song-detailes-lists.component';

describe('GetSongDetailesListsComponent', () => {
  let component: GetSongDetailesListsComponent;
  let fixture: ComponentFixture<GetSongDetailesListsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetSongDetailesListsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetSongDetailesListsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
