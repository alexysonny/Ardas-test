import {Component, OnInit} from '@angular/core';
import {taskModel} from '../task-model';
import {TaskDataService} from '../task-data.service';
import {Router, ActivatedRoute} from '@angular/router';


@Component({
    selector: 'app-task-list',
    templateUrl: './task-list.component.html',
    styleUrls: ['./task-list.component.css'],
    providers: [TaskDataService]
})
export class TaskListComponent implements OnInit {
    tasks: taskModel[] = [];
    task: taskModel;

    constructor(private taskDataService: TaskDataService, private router: Router) {
        this.taskDataService.getTasks().subscribe(
            (item: taskModel[]) => this.tasks = item
                .filter( element => element.obj_status === 'active'));

    }

    ngOnInit() {
    }

    goToTask(id: number) {
        this.router.navigate(
            ['/taskview/', id]
        );
    }

}
