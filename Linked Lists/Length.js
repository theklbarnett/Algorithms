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

	length() {
		var current = new ListNode(null);
		current.next = this.head;
		var total = 0;
		while (current.next != null) {
			total++;
			current.next = current.next.next;
		}
		return total;
	}
}

list = new SList();
list.head = new ListNode(1);
list.head.next = new ListNode(1);


console.log(list.length())
