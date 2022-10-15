import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavoriteQueuesComponent } from './favorite-queues.component';

describe('FavoriteQueuesComponent', () => {
  let component: FavoriteQueuesComponent;
  let fixture: ComponentFixture<FavoriteQueuesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FavoriteQueuesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FavoriteQueuesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
