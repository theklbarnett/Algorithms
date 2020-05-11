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

	display() {
		var current = new ListNode(null);
		current.next = this.head;
		var str = '';
		while (current.next != null) {
			str = str + current.next.val + ' -> ';
			current.next = current.next.next;
		}
		console.log(str.slice(0, str.length - 4));
	}
}

list = new SList();
list.head = new ListNode(1);
list.head.next = new ListNode(1);
list.head.next.next = new ListNode(2);


list.display();
