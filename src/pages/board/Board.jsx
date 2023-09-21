import React, { useState } from "react";
import './Board.css'
import '../../index.css'
import {AiTwotoneDelete,} from 'react-icons/ai'
import {BsArrowLeftCircleFill,BsArrowRightCircleFill} from 'react-icons/bs'
function KanbanBoard() {
  const stagesNames = ['Backlog', 'To Do', 'Ongoing', 'Done'];

  const [tasks, setTasks] = useState([
    { name: 'task 0', desc:'Lunch Party Arrangements', stage: 0 },
    { name: 'task 1', desc:'VC Meeting',stage: 0 },
    { name: 'task 2', desc:'Birthday Party Organisation',stage: 0 },
    { name: 'task 3', desc:'Ofiice Presentation',stage: 0 },
    { name: 'task 4', desc:'Lunch Party Arrangements',stage: 1 },
    { name: 'task 5', desc:'Organize the closet.',stage: 1 },
    { name: 'task 6', desc:'Plan a weekend getaway',stage: 1 },
    { name: 'task 7', desc:'Pay the monthly utility bills',stage: 2 },
    { name: 'task 8', desc:'Buy groceries for the week.',stage: 2 },
    { name: 'task 9', desc:'Finish reading a book',stage: 3 },
  ]);

  const moveToForward = (task) => {
    setTasks((prevTasks) => {
      return prevTasks.map((t) => {
        if (t.name === task.name) {
          return { ...t, stage: t.stage + 1 };
        }
        return t;
      });
    });
  };

  const moveToBack = (task) => {
    setTasks((prevTasks) => {
      return prevTasks.map((t) => {
        if (t.name === task.name) {
          return { ...t, stage: t.stage - 1 };
        }
        return t;
      });
    });
  };

  // Organize tasks into stages
  const stagesTasks = stagesNames.map((stageName, i) => {
    const tasksInStage = tasks.filter((task) => task.stage === i);
    return {
      stageName,
      tasksInStage,
    };
  });
  console.log(stagesTasks)
  const getGradient = (stageName) => {
    if (stageName === "Backlog") {
      return {
        background:
          "linear-gradient(65.35deg, rgba(65, 65, 65, 0.67) -1.72%, rgba(48, 189, 220) 163.54%)",
      };
    } else if (stageName === "To Do") {
      return {
        background:
          "linear-gradient(65.35deg, rgba(65, 65, 65, 0.67) -1.72%, rgba(220, 48, 48) 163.54%)",
      };
    } else if (stageName === "Ongoing") {
      return {
        background:
          "linear-gradient(65.35deg, rgba(65, 65, 65, 0.67) -1.72%, rgba(48, 220, 86) 163.54%)",
      };
    } else if (stageName === "Done") {
      return {
        background:
          "linear-gradient(65.35deg, rgba(65, 65,65, 0.67) -1.72%,rgba(134, 48, 220) 163.54%)",
      };
    }
  };
  const handleinput = (stageIndex) => {
    const taskName = prompt("Enter task name:");
    const taskDesc = prompt("Enter task description:");
  
    if (taskName) {
      const newTask = {
        name: taskName,
        desc: taskDesc || "",
        stage: stageIndex,
      };
  
      setTasks((prevTasks) => [...prevTasks, newTask]);
    }
  };
  const handleDeleteTask = (taskToDelete) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task !== taskToDelete));
  };
  
    
  return (
    <div className="container">
      {stagesTasks.map((stage, i) => (
        <div key={`${i}`} className="taskcard grey-container">
          <h4 className="heading">{stage.stageName}</h4>
          <button onClick={()=>handleinput(i)} className="addbtn">Add task</button>
          <div className="itemcontainer">
          <ul>
            {
            stage.tasksInStage.map((task, index) => (
              <div className="itemcard" style={getGradient(stage.stageName)}>
              <li key={`${i}${index}`} className="items">
                <div className="tasks">
                  <span>
                    {task.name}
                  </span>
                  <p>
                    {task.desc}
                  </p>
                  <div>
                    <button
                      disabled={task.stage === 0}
                      onClick={() => moveToBack(task)}
                    >
                       <BsArrowLeftCircleFill size={20}/>
                    </button>
                    <button
                      disabled={task.stage === 3}
                      onClick={() => moveToForward(task)}
                    >
                      <BsArrowRightCircleFill size={20}/>
                     
                    </button>
                    <button onClick={() => handleDeleteTask(task)}><AiTwotoneDelete size={20}/></button> 
                  </div>
                </div>
              </li>
              </div>
            ))}
          </ul>
          </div>
        </div>
      ))}
    </div>
  );
}


export default KanbanBoard;
