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

	contains(val) {
		var search = new ListNode(null);
		search.next = this.head;
		while (search.next != null) {
			if (search.next.val == val) {
				return true;
			}
			search.next = search.next.next;
		}
		return false;
	}
}

list = new SList();
//list.head = new ListNode(1);
console.log(list.contains(1));