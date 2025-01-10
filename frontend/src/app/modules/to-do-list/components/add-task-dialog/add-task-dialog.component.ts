import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Task } from '../../models/task.model';

@Component({
  selector: 'app-add-task-dialog',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './add-task-dialog.component.html',
  styleUrl: './add-task-dialog.component.scss',
})
export class AddTaskDialogComponent implements OnInit {
  @Input() task: Task | null = null;
  @Output() onClose = new EventEmitter<void>();
  @Output() onSave = new EventEmitter<Partial<Task>>();

  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      title: ['', [Validators.required]],
      description: [''],
    });
  }

  ngOnInit(): void {
    if (this.task) {
      this.form.patchValue({
        title: this.task.title,
        description: this.task.description,
      });
    }
  }

  onSubmit(): void {
    if (this.form.valid) {
      this.onSave.emit(this.form.value);
    }
  }
}
