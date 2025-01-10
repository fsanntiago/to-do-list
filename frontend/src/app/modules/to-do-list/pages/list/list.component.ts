import { CommonModule } from '@angular/common';
import { Component, type OnInit } from '@angular/core';
import { AddTaskDialogComponent } from '../../components/add-task-dialog/add-task-dialog.component';
import { TaskCardComponent } from '../../components/task-card/task-card.component';
import { Task } from '../../models/task.model';
import { TaskService } from '../../services/task.service';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CommonModule, TaskCardComponent, AddTaskDialogComponent],
  templateUrl: './list.component.html',
})
export class ListComponent implements OnInit {
  showDialog = false;
  selectedTask: Task | null = null;

  constructor(public readonly taskService: TaskService) {}

  ngOnInit(): void {
    this.loadTasks();
  }

  loadTasks() {
    this.taskService.getTasks().subscribe();
  }

  showAddTaskDialog(): void {
    this.selectedTask = null;
    this.showDialog = true;
  }

  closeDialog(): void {
    this.showDialog = false;
    this.selectedTask = null;
  }

  toggleTask(task: Task) {
    this.taskService.toggleTaskStatus(task).subscribe();
  }

  saveTask(task: Partial<Task>): void {
    if (this.selectedTask) {
      this.taskService
        .updateTask({ ...this.selectedTask, ...task })
        .subscribe(() => this.closeDialog());
    } else {
      this.taskService.createTask(task).subscribe(() => this.closeDialog());
    }
  }

  deleteTask(task: Task) {
    this.taskService.deleteTask(task).subscribe();
  }

  editTask(task: Task) {
    this.selectedTask = task;
    this.showDialog = true;
  }
}
