import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RemoteButtonLinkComponent } from './remote-button-link.component';

describe('RemoteButtonLinkComponent', () => {
  let component: RemoteButtonLinkComponent;
  let fixture: ComponentFixture<RemoteButtonLinkComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RemoteButtonLinkComponent]
    });
    fixture = TestBed.createComponent(RemoteButtonLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
