class ListNode {
	constructor(value) {
		this.val = value;
		this.next = null;
	}
}

class SList {
	constructor() {
		this.head = null;
	}

	addFront(value) {
		var rudy = ListNode(value);
		if (this.head == null) {
			this.head == rudy;
		} else {
			rudy.next = this.head.next;
			this.head = rudy;
		}
		return this;
	}

	removeFront() {
		if (this.head == null) {
			return null;
		}
		this.head = this.head.next;
		return this;
	}

	front() {
		return this.head.val;
	}
}

