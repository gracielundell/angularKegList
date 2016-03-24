import { Component, EventEmitter } from 'angular2/core';
// add EventEmitter bc it acts like a bridge btwn components to allow them to communicate with each other. They're objects which allow components to interact with each other and the user.
import { KegListComponent } from './keg-list.component';
// allows for communication btwn this file and the child component (which now resides in keg-list.component)
import { Keg } from './keg.model';
// allows for communication into the definition of Task

// /////////////// GRANDCHILD of parent; child of child /////////////////
// @Component({
//   selector: 'task-display',
//   inputs: ['task'],
//   template: `
//     <h3>{{ task.description }}</h3>
//   `
// })
// export class TaskComponent {
//   public task: Task;
// }

// ////////////// CHILD COMPONENT //////////////////////
// @Component({
//   selector: 'task-list',
//   input: ['taskList'],
//   outputs: ['onTaskSelect'],
//   directives: [TaskComponent],
//   template: `
//   <task-display *ngFor="#currentTask of taskList"
//     (click)="taskClicked(currentTask)"
//     [class.selected]="currentTask === selectedTask"
//     [task]="currentTask">
//   </task-display>
//   `
//   // add .selected class to task coming from parent that is simultaneously the selected and current task
// })
// export class TaskListComponent {
//   public taskList: Task[];
//   public onTaskSelect: EventEmitter<Task>;
//   public selectedTask: Task;
//   constructor() {
//     // instantiate the Event Emitter object in the child component constructor. holds the EventEmitter object for output
//     this.onTaskSelect = new EventEmitter();
//   }
//   taskClicked(clickedTask: Task): void {
//     console.log("child", clickedTask);
//     // wraps all this info up to be sent into the html selector now that it has been selected
//     this.selectedTask = clickedTask;
//     this.onTaskSelect.emit(clickedTask);
//   }
// }

// parent component (root component)
@Component({
  selector: 'my-app',
  directives: [KegListComponent],
  // this loops through and prints tasks to page inside html selector ^
  template: `
  <div>
    <h1>Kegs</h1>
      <keg-list
        [kegList]="kegs"
        (onKegSelect)="kegWasSelected($event)">
      </keg-list>
    </div>
  `
})
export class AppComponent {
  public kegs: Keg[];  // Keg[] (or Array<Keg>) identifies kegs as an array of Keg objects
  constructor(){
    this.kegs = [
      new Keg("coors", "beer", "$2", "4%")

    ];
  }
  kegWasSelected(clickedKeg: Keg): void {
    console.log('parent', clickedKeg);
  }
}
// read from keg.model
// export class Keg {
//   public done: boolean = false;
//   constructor(public description: string, public id: number) {
//
//   }
// }
