import {Component} from 'angular2/core';
import {Programmer} from './programmer'

@Component({
    selector: 'programmer-detail',
    inputs: ['programmer'],
    template: `
	<div *ngIf="programmer">
	  <h2>{{programmer.name}} details</h2>
	  <div><label>id: </label>{{programmer.id}}</div>
	  <div>
	    <label>name: </label>
	    <input [(ngModel)]="programmer.name" placeholder="name"/>
	  </div>
	</div>
    `
})
export class ProgrammerDetailComponent {
    public programmer: Programmer
}