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
}

function addFront(pointer) {
	var rudy = new ListNode('rudy');
	rudy.next = pointer.next;
	pointer.next = rudy;
	return pointer;
}

function removeFront(pointer) {
	var temp = new ListNode('temp');
	temp.next = pointer;
	
}