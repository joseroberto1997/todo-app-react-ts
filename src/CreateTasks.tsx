import styles from "./CreateTasks.module.css"

import { PlusCircle } from "phosphor-react"
import { v4 as uuidv4} from "uuid"


import { Tasks } from "./Tasks"

import { ChangeEvent, FormEvent, useEffect, useState } from "react"

    interface taskProps {
    id: string,
    title: string,
    isCompleted: boolean,
}

export function CreateTasks() {

    const [tasks, setTasks] = useState<taskProps[]>([]);

    const [newTaskText, setNewTaskText] = useState('');


    function handleCreateNewTask(event : FormEvent) {
        event.preventDefault();
        setTasks([...tasks, { id: uuidv4(), title: newTaskText, isCompleted: false }]);
        setNewTaskText('');
    }

    function handleNewTaskText(event: ChangeEvent<HTMLInputElement>) {
        setNewTaskText(event.target.value)
    }

    function deleteTask(id: string) {
        const filteredTaskRemove = tasks.filter(task => task.id !== id);
        setTasks(filteredTaskRemove);
    }

    function completeTask(id: string) {
        const newTasks = tasks.map(task => task.id === id ? {
            ...task,
            isCompleted: !task.isCompleted
        } : task)

        setTasks(newTasks)
   }

    return (
        <>
            <form className={styles.form} onSubmit={handleCreateNewTask}>
                <input
                    type="text"
                    onChange={handleNewTaskText}
                    value={newTaskText}
                    placeholder="Adicione uma nova tarefa"
                    required
                />
                <button>
                    Criar
                    <PlusCircle size={20}/>
                </button>
            </form>

         <main>
                <Tasks tasks={tasks} onDeleteTask={deleteTask} onCompleteTask={completeTask} />
        </main>
        </>
    )
    
}

