import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsallComponent } from './newsall.component';

describe('NewsallComponent', () => {
  let component: NewsallComponent;
  let fixture: ComponentFixture<NewsallComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewsallComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
