import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserStackedListComponent } from './user-stacked-list.component';

describe('UserStackedListComponent', () => {
  let component: UserStackedListComponent;
  let fixture: ComponentFixture<UserStackedListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserStackedListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserStackedListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
