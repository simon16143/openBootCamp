import React from 'react'
import { LEVELS } from '../../models/levels.enum'
import { Task } from '../../models/task.class'
import TaskComponent from '../pure/TaskComponent'


const Task_list = () => {
    const defaultTask = new Task('Example','Default description', false, LEVELS.NORMAL)

  return (
    <div>
         <div>
            Your Tasks:
         </div>
         {/* TODO: Aplicar un For/Map para renderizar una lista*/}
         <TaskComponent task={defaultTask}/>
         
    </div>
  )
}

export default Task_list

