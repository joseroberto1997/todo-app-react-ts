import styles from "./Tasks.module.css";

import iconEmptyImg from "./assets/iconEmpty.png";
import iconCheckerImg from "./assets/iconChecker.png";
import iconCheckedImg from "./assets/iconChecked.png";
import iconTrash from "./assets/iconTrash.svg"

import { Trash } from "phosphor-react";
import { useEffect } from "react";

interface ListTasksProps {
  tasks: taskProps[],
  onDeleteTask: (id: string) => void,
  onCompleteTask: (id: string) => void,
}

interface taskProps {
  id: string;
  title: string;
  isCompleted: boolean;
}

export function Tasks({ tasks, onDeleteTask, onCompleteTask }: ListTasksProps) {

  const createdTasks = tasks.length;

    const completedTasks = tasks.filter((task) => task.isCompleted).length;

  return (
    <>
      <div className={styles.info}>
        <div className={styles.createdTasks}>
          <p>Tarefas criadas</p>
          <span>{tasks.length}</span>
        </div>
        <div className={styles.completedTasks}>
          <p>Concluídas</p>
          {
            createdTasks || completedTasks ? (
              
               <span>{completedTasks} de {createdTasks}</span>
            ) :
            (
                <span>0</span>
            )
          }
         
        </div>
      </div>

      {tasks.length ? (
        <div className={styles.contentTasks}>
          {tasks.map((task) => {
            return (
              <div key={task.id} className={styles.taskWrapper}>
                <span
                  className={styles.iconChecker}
                  onClick={(e) => onCompleteTask(task.id)}
                >
                  <img src={task.isCompleted ? iconCheckedImg : iconCheckerImg} alt="" />
                </span>
                <p className={task.isCompleted ? styles.titleTaskActive : styles.titleTask}>{task.title}</p>
                <span
                  className={styles.iconTrash}
                  onClick={(e) => onDeleteTask(task.id)}
                >
                  <img src={iconTrash}  />
                </span>
              </div>
            );
          })}
        </div>
      ) : (
        <div className={styles.contentTasksEmpty}>
          <div className={styles.content}>
            <img src={iconEmptyImg} alt="Icone de tarefas vazias" />
            <p className={styles.textOne}>
              Você ainda não tem tarefas cadastradas
            </p>
            <p className={styles.textTwo}>
              Crie tarefas e organize seus itens a fazer
            </p>
          </div>
        </div>
      )}
    </>
  );
}
