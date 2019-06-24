import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthorPublisherComponent } from './author-publisher.component';

describe('AuthorPublisherComponent', () => {
  let component: AuthorPublisherComponent;
  let fixture: ComponentFixture<AuthorPublisherComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuthorPublisherComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthorPublisherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
