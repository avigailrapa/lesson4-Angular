import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionTemplateFormComponent } from './question-template-form.component';

describe('QuestionTemplateFormComponent', () => {
  let component: QuestionTemplateFormComponent;
  let fixture: ComponentFixture<QuestionTemplateFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QuestionTemplateFormComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(QuestionTemplateFormComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
