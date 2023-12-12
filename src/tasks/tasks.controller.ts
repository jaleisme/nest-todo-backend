import { Body, Controller, Delete, Get, HttpCode, Param, Post, Put } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { Task } from './task/task.entity';
import { ApiOkResponse, ApiOperation, ApiParam } from '@nestjs/swagger';

@Controller('tasks')
export class TasksController {
    constructor(private service: TasksService) {}

    // GET ALL TASKS
    @Get()
    @ApiOperation({
        "summary": "Retrieves all task data.",
        "description": "Retrieves and returns all tasks from the database, providing a comprehensive overview of the current task list."
    })
    @ApiOkResponse({
        "description": 'Successfully fetch all task data.',
        "status": 200,
        "schema": {
            "example":
            [    
              {
                "id": 1,
                "task_name": 'Task Title 1',
                "description": 'Task description',
                "is_done": false,
                
              },
              {
                "id": 2,
                "task_name": 'Task Title 2',
                "description": 'Task description',
                "is_done": true,
                
              },
            ],
          },
    })
    getAll(){
        return this.service.getTasks();
    }

    // GET TASK BY ID
    @Get(':id')
    @ApiParam({name: "id", required: true, description: "An integer value of the task id", schema: {type: 'integer'}})
    @ApiOperation({
        "summary": "Retrieve specific task data.",
        "description": "Retrieve and return specific task according to the provided id from the database, providing a comprehensive detail of the task.",
    })
    @ApiOkResponse({
        "description": 'Successfully fetch task data.',
        "status": 200,
        "schema": {
            "example": 
            {
                "id": 1,
                "task_name": 'Task Title 1',
                "description": 'Task description',
                "is_done": false,
            },
          },
    })
    get(@Param() params){
        return this.service.getTask(params.id);
    }

    // ADD NEW TASK
    @Post()
    @ApiParam({name: "task", required: true, description: "An object of task data including the id as identifier", schema: {type: 'object'}})
    @ApiOperation({
        "summary": "Create a new task data.",
        "description": "Create a new task data and save it into the database.",
    })
    @ApiOkResponse({
        "description": 'Successfully create task data.',
        "status": 200
    })  
    create(@Body() task: Task){
        this.service.createTask(task);
        return "success";
    }

    // UPDATE TASK
    @Put()
    @ApiParam({name: "task", required: true, description: "An object of task data including the id as identifier", schema: {type: 'object'}})
    @ApiOperation({
        "summary": "Update specific task data.",
        "description": "Retrieve and update specific task according to the provided id to the database.",
    })
    @ApiOkResponse({
        "description": 'Successfully update task data.',
        "status": 200
    })    
    update(@Body() task: Task){
        return this.service.updateTask(task);
    }

    // DELETE TASK
    @Delete(':id')
    @ApiParam({name: "id", required: true, description: "An integer value of the task id", schema: {type: 'integer'}})
    @ApiOperation({
        "summary": "Delete specific task data.",
        "description": "Delete specific task according to the provided id from the database.",
    })
    @ApiOkResponse({
        "description": 'Successfully deleting task data.',
        "status": 200
    })    
    delete(@Param() params){
        return this.service.deleteTask(params.id);
    }
}
