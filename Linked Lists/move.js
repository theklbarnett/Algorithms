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

function moveMinFront(list) {
	var current = new ListNode(null);
	var temp = new ListNode(list.head.val);
	current.next = list.head;
	while (current.next != null) {
		if (current.next.val < temp.val) {
			temp.val = current.next.val;
		}
		current.next = current.next.next;
	}
	current.next = list.head;
	while (current.next.next.val != temp.val) {
		current.next = current.next.next;
	}
	temp.next = current.next.next;
	current.next.next = temp.next.next;
	temp.next.next = null;
	current.next = null;
	temp.next.next = list.head;
	list.head = temp.next;
	return list;

}

function moveMaxBack(list) {
	var current = new ListNode(null);
	var temp = new ListNode(list.head.val);
	current.next = list.head;
	while (current.next != null) {
		if (current.next.val > temp.val) {
			temp.val = current.next.val;
		}
		current.next = current.next.next;
	}
	current.next = list.head;
	while (current.next.next.val != temp.val) {
		current.next = current.next.next;
	}
	temp.next = current.next.next;
	current.next.next = temp.next.next;
	temp.next.next = null;
	while (current.next.next != null) {
		current.next = current.next.next;
	}
	current.next.next = temp.next;
	current.next = null;
	temp.next = null;
	return list;
}

list = new SList();
list.head = new ListNode(1);
list.head.next = new ListNode(10);
list.head.next.next = new ListNode(0);
list.head.next.next.next = new ListNode(2);

list = moveMinFront(list);

list.display();

list = moveMaxBack(list);

list.display();