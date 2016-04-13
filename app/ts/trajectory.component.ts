import {Component, OnInit} from 'angular2/core';
import {Router,RouteParams} from 'angular2/router'
import {Trajectory} from './trajectory';
import {TrajectoryService} from './trajectory.service';

@Component({
	templateUrl: 'app/templates/trajectory.component.html',
	styleUrls: ['app/css/trajectory.component.css']
})
export class TrajectoryComponent implements OnInit{
	public trajectoryId: string;
	public trajectory: Trajectory
	public loaded: boolean;

	constructor(
		private _router: Router,
		private _routeParams: RouteParams, 
		private _trajectoryService: TrajectoryService
		) {
			this.trajectory = new Trajectory();
	}

  	errorMessage: string;

  	ngOnInit() {
		this.trajectoryId = decodeURI(this._routeParams.get('trajectory_id'));
  		this.getTrajectory();
  	}

  	getTrajectory() {
		this._trajectoryService.getTrajectory(this.trajectoryId)
			.subscribe(
				trajectory => {
					console.log(trajectory);
					this.trajectory = trajectory;
					this.loaded = true;
				},
              	error => this.errorMessage = <any>error
            );
  	}

	openTopic(topicName) {
		this._router.navigate(['/TrajectoryTopic', { topic_name: topicName, trajectory_id: this.trajectoryId }]);
	}

	// addTrajectory(newTrajectoryName="") {
	// 	this._trajectoryService.addTrajectory(newTrajectoryName)
	// 					 .subscribe(
 //                     		trajectory => {
	// 								this.trajectoryList.push(trajectory);
	// 								this._router.navigate(['/Trajectory', { trajectory_name: trajectory.name }]);
	// 							},
 //                     		error =>  this.errorMessage = <any>error);
	// }

	// openTrajectory(trajectoryName) {
	// 	this._router.navigate(['/TrajectoryWithSearch', { trajectory_name: trajectoryName, search_string: this.searchString }]);
	// }
}