class ListNode {
	constructor(value) {
		this.val = value;
		this.next = null;
	}

	removeSelf() {
		var temp = new ListNode(null);
		temp.next = this;
		while (temp.next.next.next != null) {
			temp.next.val = temp.next.next.val;
			temp.next = temp.next.next;
		}
		temp.next.val = temp.next.next.val;
		temp.next.next = null;
		temp.next = null;
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

function secondToLastValue(pointer) { 
	var current = new ListNode(null);
	current.next = pointer.next;
	if (current.next.next == null) {
		return null;
	}
	while (current.next.next != null) {
		current.val = current.next.val;
		current.next = current.next.next;
	}
	return current.val;
}

function copy(pointer) { 
	var cp = new SList();
	cp.head = new ListNode(pointer.next.val);
	var temp = new ListNode(null);
	var current = new ListNode(null);
	current.next = pointer.next;
	temp.next = cp.head;
	while (current.next.next != null) {
		current.next = current.next.next;
		temp.next.next = new ListNode(current.next.val);
		temp.next = temp.next.next;
	}
	temp.next = null;
	current.next = null;
	return cp;
}

function filter(headNode, lowVal, highVal) {
	var current = new ListNode(null);
	var prev = new ListNode(null);
	current.next = headNode;
	prev.next = headNode;
	while (current.next.next != null) {
		current.next = current.next.next;
		if (current.next.val < lowVal || current.next.val > highVal) {
			prev.next.next = current.next.next;
			current.next.next = null;
			current.next = prev.next;
		} else {
			prev.next = current.next;
		}
	}
	return headNode;
}

list = new SList();
list.head = new ListNode(1);
list.head.next = new ListNode(2);
list.head.next.next = new ListNode(2);
list.head.next.next.next = new ListNode(7);


