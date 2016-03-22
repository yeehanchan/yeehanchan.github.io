export class Topic {
	public name: string;
	public pk: number;

	constructor(name: string, pk: number=undefined){
		this.name = name;
		this.pk = pk;
	}
}