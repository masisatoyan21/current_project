import { Employee } from "./employee";

export interface Projects {
    id: number; //petq che
    title: string;
    desc: string;
    status: string;
    deadline: string; 
    completed: number; //petq che
    lead: Employee;
    developers: Employee[];
    categories: string[];
}
