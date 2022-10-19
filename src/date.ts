export default class xDate extends Date {
	constructor(param?: never) {
		if (param !== undefined) super(param);
		else super();
	}
	offsetYear(y: number) {
		return this.setFullYear(this.getFullYear() + y);
	}
	offsetMonth(m: number) {
		return this.setMonth(this.getMonth() + m);
	}
	offsetDay(d: number) {
		return this.setDate(this.getDate() + d);
	}
	get age() {
		// 取得目前年月日
		let now = new Date()
		let nowYYYY = now.getFullYear()
		let nowMM = now.getMonth()
		let nowDD = now.getDay()
		// 取得物件的年月日
		let yyyy = this.getFullYear()
		let mm = this.getMonth()
		let dd = this.getDay()
		let ageY = nowYYYY - yyyy
		// 從生日校正年紀
		if (nowMM < mm || (nowMM == mm && nowDD < dd)) ageY--
		return ageY
	}
}
