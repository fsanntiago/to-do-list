import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, signal } from '@angular/core';
import { map, Observable, tap } from 'rxjs';
import type { ApiResponse } from '../../../core/models/api-reponse.mode';
import { Task } from '../models/task.model';

export interface TaskResponse {
  success: boolean;
  message: string;
  data: Task[];
}

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private readonly apiUrl = 'http://localhost:3333/api/tasks';
  private readonly httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  tasks = signal<Task[]>([]);
  loading = signal<boolean>(false);

  constructor(private httpClient: HttpClient) {}

  getTasks(): Observable<Task[]> {
    this.loading.set(true);

    return this.httpClient.get<ApiResponse<Task[]>>(this.apiUrl).pipe(
      map((response) => {
        if (!response.success) throw new Error(response.message);
        return response.data;
      }),
      tap((tasks) => {
        this.tasks.set(tasks);
        this.loading.set(false);
      })
    );
  }

  createTask(task: Partial<Task>): Observable<Task> {
    this.loading.set(true);

    return this.httpClient
      .post<ApiResponse<Task>>(this.apiUrl, task, this.httpOptions)
      .pipe(
        map((response) => {
          if (!response.success) {
            throw new Error(response.message);
          }
          return response.data;
        }),
        tap((newTask) => {
          this.tasks.update((tasks) => [...tasks, newTask]);
          this.loading.set(false);
        })
      );
  }

  updateTask(task: Task): Observable<Task> {
    this.loading.set(true);

    return this.httpClient
      .put<ApiResponse<Task>>(
        `${this.apiUrl}/${task._id}`,
        task,
        this.httpOptions
      )
      .pipe(
        map((response) => {
          if (!response.success) {
            throw new Error(response.message);
          }
          return response.data;
        }),
        tap((updatedTask) => {
          this.tasks.update((tasks) =>
            tasks.map((task) =>
              task._id === updatedTask._id ? updatedTask : task
            )
          );
          this.loading.set(false);
        })
      );
  }

  deleteTask(task: Task): Observable<Task> {
    this.loading.set(true);
    return this.httpClient
      .delete<ApiResponse<Task>>(`${this.apiUrl}/${task._id}`)
      .pipe(
        map((response) => {
          if (!response.success) {
            throw new Error(response.message);
          }
          return response.data;
        }),
        tap((deletedTask) => {
          this.tasks.update((tasks) =>
            tasks.filter((task) => task._id !== deletedTask._id)
          );
          this.loading.set(false);
        })
      );
  }

  toggleTaskStatus(task: Task): Observable<Task> {
    const updatedTask = {
      ...task,
      isActive: !task.isActive,
      completed: !task.completed,
    };
    return this.updateTask(updatedTask);
  }
}
