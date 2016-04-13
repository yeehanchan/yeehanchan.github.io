export class Link {
	public url: string;
	public topic: number;
	public title: string;
	public score: number;
	public pk: number;
	public vote: number;

	constructor(newLink: string, newTitle: string, newTopic: number){
		if(newLink.indexOf("//")===-1){
			newLink = "http://" + newLink;
		}
		this.url = newLink;
		this.topic = newTopic;
		this.title = newTitle;
	}

	domain() {
		var myRegexp = new RegExp('(.*\/\/|)(.*?)(\/.*|)$');
		var match = myRegexp.exec(this.url);
		return match[2];
	}

	static cast(link: Link) {
		link.domain = Link.prototype.domain;
		return link;
	}
}