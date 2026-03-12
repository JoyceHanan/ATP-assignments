/*Assignment 1: 
-------------
Task Management System (ToDo App Modules):
     Building a task manager like Todoist
Requirements:
     Create a modular todo app with 3 separate files:
          i. validator.js - Input validation
                      // TODO: Export these validation functions
                      // 1. Validate task title (not empty, min 3 chars)
                      function validateTitle(title) {
                        // Your code here
                      }
                      // 2. Validate priority (must be: low, medium, high)
                      function validatePriority(priority) {
                        // Your code here
                      }                      
                      // 3. Validate due date (must be future date)
                      function validateDueDate(date) {
                        // Your code here
                      }
       ii. task.js - Task operations
                    // TODO: Import validator functions
                    // import { ... } from './validator.js';                   
                    const tasks = [];                    
                    // 1. Add new task
                    function addTask(title, priority, dueDate) {
                      // Validate using imported functions
                      // If valid, add to tasks array
                      // Return success/error message
                    }                  
                    // 2. Get all tasks
                    function getAllTasks() {
                      // Return all tasks
                    }
                    // 3. Mark task as complete
                    function completeTask(taskId) {
                      // Find task and mark as complete
                    }
                  // Export functions
     iii. app.js - Main application
                  // TODO: Import task functions
                  // import { ... } from './task.js';
                  // Test your module system
                  // 1. Add some tasks
                  // 2. Display all tasks
                  // 3. Complete a task
                  // 4. Display all tasks again */

          
               function validateTitle(title){
                if(!title){
                  return "No Title"
                }
                  if (title.length<3){
                    return "Min length 3 char"
                  }
                    return true
                  
                }
               function validatePriority(priority){
                  if((priority=="low")|| (priority=="medium") ||(priority=="high")){
                    return "priority valid"
                  }
                  else{
                    return "check your priority"
                  }
                }
                 function validateDueDate(date){
                   let dueDate=new Date('2026-02-28')
                   let today=new Date()
                   if(dueDate>today){
                  return "Invalid date"
                }
                  else{ 
                    return true
                  }
                   }
                
                export {validateTitle,validatePriority,validateDueDate}