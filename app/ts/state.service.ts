import {Injectable}     from 'angular2/core';

@Injectable()
export class StateService {
  // constructor(private http: Http) { }

  public loggedIn: boolean = false;
  public username: string = "";
}