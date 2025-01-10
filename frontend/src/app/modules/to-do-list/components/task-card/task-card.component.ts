import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Task } from '../../models/task.model';

@Component({
  selector: 'app-task-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './task-card.component.html',
  styleUrl: './task-card.component.scss',
})
export class TaskCardComponent {
  @Input({ required: true }) task!: Task;
  @Output() onToggle = new EventEmitter<Task>();
  @Output() onDelete = new EventEmitter<Task>();
  @Output() onEdit = new EventEmitter<Task>();
}
