
export const addTwoNumbers = async (setIsCodeRunning, setResult, setCarry,setStep ,arr1,arr2) => {
    setIsCodeRunning(true);
    setResult([]);
    setCarry(0);
    let res = [];
    let c = 0;
    let maxLen = Math.max(arr1.length, arr2.length);
    for (let i = 0; i < maxLen; i++) {
      setStep(i);
      let x = arr1[i] !== undefined ? arr1[i] : 0;
      let y = arr2[i] !== undefined ? arr2[i] : 0;
      let sum = x + y + c;
      let digit = sum % 10;
      c = Math.floor(sum / 10);
      setCarry(c);
      res.push(digit);
      setResult([...res]);
      await new Promise((r) => setTimeout(r, 1000));
    }
    if (c > 0) {
      res.push(c);
      setResult([...res]);
      setCarry(0);
      await new Promise((r) => setTimeout(r, 1000));
    }
    setStep(-1);
    setIsCodeRunning(false);
  };


export const ADD_TWO_NUMBERS_ALGORITHM_CODE_JS = `const addTwoNumbers = (l1, l2) => {
    let dummyHead = new ListNode(0);
    let current = dummyHead;
    let carry = 0;
    while (l1 !== null || l2 !== null || carry !== 0) {
        let x = l1 !== null ? l1.val : 0;
        let y = l2 !== null ? l2.val : 0;
        let sum = x + y + carry;
        carry = Math.floor(sum / 10);
        current.next = new ListNode(sum % 10);
        current = current.next;
        if (l1 !== null) l1 = l1.next;
        if (l2 !== null) l2 = l2.next;
    }
    return dummyHead.next;
}

class ListNode { 
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}`;
export const ADD_TWO_NUMBERS_ALGORITHM_CODE_JAVA = `class Main {
    public static void main(String[] args) {
        System.out.println("Try programiz.pro");

        // l1 = 2 -> 4 -> 3  (342)
        ListNode l1 = new ListNode(2);
        l1.next = new ListNode(4);
        l1.next.next = new ListNode(3);

        // l2 = 5 -> 6 -> 4  (465)
        ListNode l2 = new ListNode(5);
        l2.next = new ListNode(6);
        l2.next.next = new ListNode(4);

        ListNode result = addTwoNumbers(l1, l2);  // Expected output: 7 -> 0 -> 8

        // Print the result
        printList(result);
    }

 public ListNode addTwoNumbers(ListNode l1, ListNode l2) {
    ListNode dummyHead = new ListNode(0);
    ListNode current = dummyHead;
    int carry = 0;

    while (l1 != null || l2 != null || carry != 0) {
        int x = (l1 != null) ? l1.val : 0;
        int y = (l2 != null) ? l2.val : 0;
        int sum = x + y + carry;

        carry = sum / 10;
        current.next = new ListNode(sum % 10);
        current = current.next;

        if (l1 != null) l1 = l1.next;
        if (l2 != null) l2 = l2.next;
    }

    return dummyHead.next;
}

    public static void printList(ListNode head) {
        while (head != null) {
            System.out.print(head.val);
            if (head.next != null) System.out.print(" -> ");
            head = head.next;
        }
        System.out.println();
    }
}

// Definition for singly-linked list
class ListNode {
    int val;
    ListNode next;

    ListNode(int x) {
        val = x;
    }
}`;





