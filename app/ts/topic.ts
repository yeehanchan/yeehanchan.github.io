export class Topic {
	public name: string;
	public pk: number;
	public link_count: number;

	constructor(name: string, pk: number=undefined){
		this.name = name;
		this.pk = pk;
	}
}