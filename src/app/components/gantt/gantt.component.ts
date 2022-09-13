import { Component, OnInit } from '@angular/core';
import {
  Service, Task, Dependency, Resource, ResourceAssignment,
} from '../../app.service';
@Component({
  selector: 'app-gantt',
  templateUrl: './gantt.component.html',
  styleUrls: ['./gantt.component.scss'],
  preserveWhitespaces: true,
})
export class GanttComponent implements OnInit {

  tasks: Task[];

  dependencies: Dependency[];

  resources: Resource[];

  resourceAssignments: ResourceAssignment[];

  constructor(service: Service) {
    this.tasks = service.getTasks();
    this.dependencies = service.getDependencies();
    this.resources = service.getResources();
    this.resourceAssignments = service.getResourceAssignments();
  }
  ngOnInit(): void {
  }

}
