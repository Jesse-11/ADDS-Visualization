// Array Visualization
const arrayElement = document.getElementById('array');
const array = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3];
renderArray();

function renderArray() {
  arrayElement.innerHTML = array.map(num => `<span>${num}</span>`).join('');
}

// Linked List Visualization
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  insert(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
    } else {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = newNode;
    }
  }

  toArray() {
    const result = [];
    let current = this.head;
    while (current) {
      result.push(current.value);
      current = current.next;
    }
    return result;
  }
}

const linkedList = new LinkedList();
linkedList.insert(3);
linkedList.insert(1);
linkedList.insert(4);
linkedList.insert(1);
linkedList.insert(5);
linkedList.insert(9);
linkedList.insert(2);
linkedList.insert(6);
linkedList.insert(5);
linkedList.insert(3);
const linkedListArray = linkedList.toArray();
const linkedListElement = document.getElementById('linked-list');
renderLinkedList();

function renderLinkedList() {
  linkedListElement.innerHTML = linkedListArray.map(num => `<span>${num}</span>`).join('');
}

// Bubble Sort Visualization
function visualizeBubbleSort() {
  const sortedArray = bubbleSort([...array]);
  renderVisualization(sortedArray);
}

function bubbleSort(arr) {
  const n = arr.length;
  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        // Swap arr[j] and arr[j+1]
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}

// Insertion Sort Visualization
function visualizeInsertionSort() {
  const sortedArray = insertionSort([...array]);
  renderVisualization(sortedArray);
}

function insertionSort(arr) {
  const n = arr.length;
  for (let i = 1; i < n; i++) {
    let key = arr[i];
    let j = i - 1;
    while (j >= 0 && arr[j] > key) {
      arr[j + 1] = arr[j];
      j = j - 1;
    }
    arr[j + 1] = key;
  }
  return arr;
}

function renderVisualization(sortedArray) {
  const visualizationElement = document.getElementById('visualization');
  visualizationElement.innerHTML = sortedArray.map(num => `<span>${num}</span>`).join('');
}
