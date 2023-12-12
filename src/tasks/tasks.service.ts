import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Task } from './task/task.entity';

@Injectable()
export class TasksService {
    constructor(@InjectRepository(Task) private TasksRepository: Repository<Task>){}

    async getTasks(): Promise<Task[]> {
        return await this.TasksRepository.find();
    }

    async getTask(_id: number): Promise<Task[]> {
        return await this.TasksRepository.find({
            select: ["task_name", "description", "is_done"],
            where: [{ id: _id }]
        });
    }

    async createTask(task: Task){
        this.TasksRepository.save(task);
    }

    async updateTask(task: Task){
        this.TasksRepository.save(task);
    }

    async deleteTask(task:Task){
        this.TasksRepository.delete(task);
    }
}
