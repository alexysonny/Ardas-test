export class taskModel {
    id: number;
    name: string;
    creation_date: string;
    due_date: string;
    start_date: string;
    is_completed: boolean;
    is_archived: boolean;
    estimated_effort: number;
    actual_effort: number;
    physical_progress: number;
    obj_status: string;
    description: string;
    project_id: number;
    tags?: Array<string>;
    is_high_priority?: boolean;

}