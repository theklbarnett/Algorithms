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

	max() {
		var current = new ListNode(null);
		current.next = this.head;
		var max = current.next.val;
		while (current.next != null) {
			if (current.next.val > max) {
				max = current.next.val;
			}
			current.next = current.next.next;
		}
		return max;
	}

	min() {
		var current = new ListNode(null);
		current.next = this.head;
		var min = current.next.val;
		while (current.next != null) {
			if (current.next.val < min) {
				min = current.next.val;
			}
			current.next = current.next.next;
		}
		return min;
	}

	average() {
		var current = new ListNode(null);
		current.next = this.head;
		var sum = 0;
		var total = 0;
		while (current.next != null) {
			sum += current.next.val;
			total++;
			current.next = current.next.next;
		}
		return sum / total;
	}
}

list = new SList();
list.head = new ListNode(1);
list.head.next = new ListNode(1);
list.head.next.next = new ListNode(2);


console.log(list.max())
console.log(list.min())
console.log(list.average())