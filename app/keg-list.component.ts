import { Component, EventEmitter } from 'angular2/core';
import { KegComponent } from './keg.component';
import { Keg } from './keg.model';
import { EditKegDetailsComponent } from './edit-keg-details.component';
import { NewKegComponent } from './new-keg.component';
import {DonePipe} from './done.pipe';

// child component
@Component({
  selector: 'keg-list',
  inputs: ['kegList'],
  outputs: ['onKegSelect'],
  pipes: [DonePipe],
  directives: [KegComponent, EditKegDetailsComponent, NewKegComponent],
  template: `
  <select (change)="onChange($event.target.value)" class="filter">
    <option value="all">Show All</option>
    <option value="done">Show Empty(Done)</option>
    <option value="notDone" selected="selected">Show Not Done</option>
  </select>
  <keg-display *ngFor="#currentKeg of kegList | done:filterDone"
    (click)="kegClicked(currentKeg)"
    [class.selected]="currentKeg === selectedKeg"
    [keg]="currentKeg">
  </keg-display>
  <edit-keg-details *ngIf="selectedKeg" [keg]="selectedKeg">
  </edit-keg-details>
  <new-keg (onSubmitNewKeg)="createKeg($event)"></new-keg>
  `
  // done:filterDone:selectedKeg refers to the done.pipe, calls its functionality
  // templateUrl: 'app/keg-list.component.html'
  // add .selected class to keg coming from parent that is simultaneously the selected and current keg
})
export class KegListComponent {
  public kegList: Keg[];
  public onKegSelect: EventEmitter<Keg>;
  public selectedKeg: Keg;
  public filterDone: string = "notDone";
  constructor() {
    // instantiate the Event Emitter object in the child component constructor. holds the EventEmitter object for output
    this.onKegSelect = new EventEmitter();
  }
  kegClicked(clickedKeg: Keg): void {
    // wraps all this info up to be sent into the html selector now that it has been selected
    this.selectedKeg = clickedKeg;
    this.onKegSelect.emit(clickedKeg);
  }
  createKeg(newKeg: Keg): void {
    // new keg of the Keg type
    // push new keg into keg-list array, keep track of its index number(assign it to this keg)
    this.kegList.push(newKeg);
    // push new instance of Keg this instance of a keg)
  }
  onChange(filterOption) {
    this.filterDone = filterOption;
  }
  
}
