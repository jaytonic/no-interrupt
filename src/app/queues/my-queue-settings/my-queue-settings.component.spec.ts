import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyQueueSettingsComponent } from './my-queue-settings.component';

describe('MyQueueSettingsComponent', () => {
  let component: MyQueueSettingsComponent;
  let fixture: ComponentFixture<MyQueueSettingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyQueueSettingsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyQueueSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
