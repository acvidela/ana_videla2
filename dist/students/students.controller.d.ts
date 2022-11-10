import { StudentsService } from './students.service';
export declare class StudentsController {
    private readonly studentService;
    constructor(studentService: StudentsService);
    getStudent(): string;
    postStudent(): string;
}
