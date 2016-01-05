import {PROGRAMMERS} from './mock-programmers';
import {Injectable} from 'angular2/core';

@Injectable()
export class ProgrammerService {
    getProgrammers() {
        return Promise.resolve(PROGRAMMERS);
    }
}
