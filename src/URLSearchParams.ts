export default class xURLSearchParams extends URLSearchParams{
	constructor(param?: never) {
		if (param !== undefined) super(param);
		else super();
	}
	getIgnoreCase(key: string){
		let newParams = new URLSearchParams();
		for (const [name, value] of this) {
			newParams.append(name.toLowerCase(), value);
		}
		return newParams.get(key.toLowerCase());
	}
}