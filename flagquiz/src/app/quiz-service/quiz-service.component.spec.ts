import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizServiceComponent } from './quiz-service.component';

describe('QuizServiceComponent', () => {
  let component: QuizServiceComponent;
  let fixture: ComponentFixture<QuizServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [QuizServiceComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(QuizServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
