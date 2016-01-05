import {Component} from 'angular2/core';

@Component({
	selector: 'app-root',
	template: `
	<h1>{{title}}</h1>
	<h2>{{programmer.name}} details</h2>
	<div><label>id: </label>{{programmer.id}}</div>
	<div>
	  <label>name: </label>
	  <input [(ngModel)]="programmer.name" placeholder="name"/>
	</div>
	`
})

export class AppComponent {
	public title = 'Tour of Programmers';
	public programmer:Programmer = {
		id: 1,
		name: 'Rich'
	};
}

interface Programmer {
	id: number;
	name: string;
}