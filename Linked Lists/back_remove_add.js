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

	back(pointer) {
		pointer.next = this.head;
		while (pointer.next.next != null) {
			pointer.next = pointer.next.next;
		}
		return pointer.next.val;
	}

	addBack(newval) {
		var newnode = new ListNode(newval);
		var current = new ListNode(null);
		current.next = this.head;
		while (current.next.next != null) {
			current.next = current.next.next;
		}
		current.next.next = newnode;
		current.next = null;
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

function removeBack(list) {
	var current = new ListNode(null);
	current.next = list.head;
	while (current.next.next.next != null) {
		current.next = current.next.next;
	}
	current.next.next = null;
	return list;
}

list = new SList();
list.head = new ListNode(1);
list.head.next = new ListNode(1);
list.head.next.next = new ListNode(2);


list.display();
list.addBack(5);
list.display();
var listy = removeBack(list);
listy.display();
var temp = new ListNode(null);
console.log(list.back(temp));