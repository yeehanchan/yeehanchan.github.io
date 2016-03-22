import {Component, OnInit} from 'angular2/core';
import {Router, ROUTER_DIRECTIVES} from 'angular2/router'

@Component({
    templateUrl: 'app/templates/home.component.html',
    styleUrls: ['app/css/home.component.css'],
    directives: [
        ROUTER_DIRECTIVES
    ],
})
export class HomeComponent implements OnInit{
    public url:string= "../../images/background2.png";

    constructor(
        private _router: Router) { }

    changeBackground() {
        this.url = this.url === "../../images/background2.png" ? "../../images/background2-2.jpg" : this.url = "../../images/background2.png";
    }
    ngOnInit() { 
        setInterval(this.changeBackground, 2000); 
    }

    start(topic: string) {
        console.log("hi");
        console.log(topic);
        this._router.navigate(['/Search', { search_string: topic }]);
    }
}