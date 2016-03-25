import { Component, EventEmitter } from 'angular2/core';
// add EventEmitter bc it acts like a bridge btwn components to allow them to communicate with each other. They're objects which allow components to interact with each other and the user.
import { KegListComponent } from './keg-list.component';
// allows for communication btwn this file and the child component (which now resides in keg-list.component)
import { Keg } from './keg.model';
// allows for communication into the definition of Task

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
      new Keg("coors", "beer", 2, 4)

    ];
  }
  kegWasSelected(clickedKeg: Keg): void {
    console.log('parent', clickedKeg);
  }
}
