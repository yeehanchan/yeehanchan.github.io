import {Topic} from './topic';

export class Trajectory {
	public name: string;
	public pk: number;
	public levels: Topic[];

	constructor(name: string="", pk: number=undefined){
		this.name = name;
		this.pk = pk;
	}
}