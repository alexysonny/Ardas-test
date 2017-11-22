import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {TaskViewComponent} from './task-view/task-view.component';
import {TaskListComponent} from './task-list/task-list.component';
import {Routes, RouterModule} from '@angular/router';
import {TaskDataService} from './task-data.service';
import {HttpClientModule} from '@angular/common/http';


const appRoutes: Routes = [
    {path: '', component: TaskListComponent},
    {path: 'taskview/:id', component: TaskViewComponent}
];

@NgModule({
    declarations: [
        AppComponent,
        TaskViewComponent,
        TaskListComponent
    ],
    imports: [
        BrowserModule,
        RouterModule.forRoot(appRoutes),
        HttpClientModule
    ],
    providers: [
        TaskDataService
    ],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule {
}
