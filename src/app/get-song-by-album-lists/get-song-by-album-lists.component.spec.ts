import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetSongByAlbumListsComponent } from './get-song-by-album-lists.component';

describe('GetSongByAlbumListsComponent', () => {
  let component: GetSongByAlbumListsComponent;
  let fixture: ComponentFixture<GetSongByAlbumListsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetSongByAlbumListsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetSongByAlbumListsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
