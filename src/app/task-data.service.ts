import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {taskModel} from './task-model';

@Injectable()
export class TaskDataService {

    private URL = 'http://localhost:3000/tasks/';

    constructor(private http: HttpClient) {
    }

    getTasks() {
        return this.http.get(this.URL);
    }
    getTaskById( id: number) {
        return this.http.get(this.URL+id);
    }

    saveTask ( item: taskModel) {
        return this.http.put(this.URL+item.id, item);
    }

}
