import {Component} from 'angular2/core';
import {OnInit} from 'angular2/core';
import {Programmer} from './programmer';
import {ProgrammerDetailComponent} from './programmer-detail.component';
import {ProgrammerService} from './programmer.service';
import {PROGRAMMERS} from "./mock-programmers";


@Component({
	selector: 'app-root',
	directives: [ProgrammerDetailComponent],
	template: `
	<h1>{{title}}</h1>
	<h2>Programmers</h2>
	<ul class="programmers">
	  <li *ngFor="#programmer of programmers"
	      [class.selected]="programmer === selectedProgrammer"
	      (click)="onSelect(programmer)">
	    <span class="badge">{{programmer.id}}</span> {{ programmer.name }}
	  </li>
	</ul>
	<programmer-detail [programmer]="selectedProgrammer"></programmer-detail>
	`,
	styles: [`
	  .selected {
	    background-color: #CFD8DC !important;
	    color: white;
	  }
	  .programmers {
	    margin: 0 0 2em 0;
	    list-style-type: none;
	    padding: 0;
	    width: 10em;
	  }
	  .programmers li {
	    cursor: pointer;
	    position: relative;
	    left: 0;
	    background-color: #EEE;
	    margin: 0.5em;
	    padding: 0.3em 0em;
	    height: 1.6em;
	    border-radius: 4px;
	  }
	  .programmers li.selected:hover {
	    color: blue;
	  }
	  .programmers li:hover {
	    color: #607D8B;
	    background-color: #EEE;
	    left: 0.1em;
	  }
	  .programmers .text {
	    position: relative;
	    top: -3px;
	  }
	  .programmers .badge {
	    display: inline-block;
	    font-size: small;
	    color: white;
	    padding: 0.8em 0.7em 0em 0.7em;
	    background-color: #607D8B;
	    line-height: 1em;
	    position: relative;
	    left: -1px;
	    top: -4px;
	    height: 1.8em;
	    margin-right: 0.8em;
	    border-radius: 4px 0px 0px 4px;
	  }
	`],
	providers: [ProgrammerService]
})
export class AppComponent implements OnInit {
	constructor(private _programmerService: ProgrammerService) {
	}
	ngOnInit() {
		this.getProgrammers();
	}
	public getProgrammers() {
		this
			._programmerService.getProgrammers()
			.then((programmers) => this.programmers = programmers);
	}
	public title = 'Tour of Programmers';
	public programmer:Programmer = {
		id: 1,
		name: 'Rich'
	};
	public selectedProgrammer: Programmer;
	public programmers: Programmer[];
	onSelect(programmer: Programmer) {
		this.selectedProgrammer = programmer;
	}
}
