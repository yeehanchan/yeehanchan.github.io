import {Component, OnInit} from 'angular2/core';
import {Router, ROUTER_DIRECTIVES} from 'angular2/router'
import {Trajectory} from './trajectory';
import {TrajectoryService} from './trajectory.service';

@Component({
    templateUrl: 'app/templates/home.component.html',
    styleUrls: ['app/css/home.component.css'],
    directives: [
        ROUTER_DIRECTIVES
    ],
})
export class HomeComponent implements OnInit{
    public url:string= "../../images/background2.png";
    public trajectories: Trajectory[];

    constructor(
        private _router: Router,
        private _trajectoryService: TrajectoryService
        ) { }

    errorMessage: string;

    changeBackground() {
        this.url = this.url === "../../images/background2.png" ? "../../images/background2-2.jpg" : this.url = "../../images/background2.png";
    }
    
    ngOnInit() { 
        // setInterval(this.changeBackground, 2000); 
        this.getTrajectories();
    }

    getTrajectories() {
        this._trajectoryService.getTrajectories()
            .subscribe(
                trajectories => this.trajectories = trajectories,
                error => this.errorMessage = <any>error
            )
    }

    start(topic: string) {
        this._router.navigate(['/Search', { search_string: topic }]);
    }
}