import {Component, OnInit} from '@angular/core';
import {TaskDataService} from '../task-data.service';
import {taskModel} from '../task-model';
import {ActivatedRoute} from '@angular/router';
import {Subscription} from 'rxjs/Subscription';

@Component({
    selector: 'app-task-view',
    templateUrl: './task-view.component.html',
    styleUrls: ['./task-view.component.css'],
    providers: [TaskDataService]
})
export class TaskViewComponent implements OnInit {

    private task: taskModel;
    private id: number;
    private subscription: Subscription;

    constructor(private taskDataService: TaskDataService, private route: ActivatedRoute) {
        this.task = {};
        this.subscription = route.params.subscribe(params => this.id = params['id']);
        this.taskDataService.getTaskById(this.id).subscribe( (item: taskModel) => this.task = item);
    }

    ngOnInit() {
    }

}
