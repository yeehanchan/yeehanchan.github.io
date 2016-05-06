export class Comment {
	public user_name: string;
	public comment: string;
	public submit_date: Date;
	public is_removed: boolean;

	constructor(user_name: string, comment: string, submit_date: Date, is_removed: string) {

	}

	static cast(comment: any){
		comment.submit_date = new Date(comment.submit_date)
		return <Comment>comment
	}
}