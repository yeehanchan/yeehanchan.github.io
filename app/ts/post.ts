export class Post {
	public title: string;
	public url: string;
	public score: number;
	public topic: number;
	public pk: number;
	public vote: number;

	constructor(newLink: string, newTitle: string, newTopic: number){
		this.url = newLink;
		this.topic = newTopic;
		this.title = newTitle;
	}
}