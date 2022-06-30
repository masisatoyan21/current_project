import { Employee } from "./employee";

export interface Projects {
    id: number;
    title: string;
    desc: string;
    status: string;
    deadline: string;
    completed: number;
    lead: Employee;
    developers: Employee[];
}
