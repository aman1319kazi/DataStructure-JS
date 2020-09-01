class Stack {
  constructor() {
    this.data = [];
  }

  push(record) {
    this.data.push(record); //push add data at last position of array
  }

  pop() {
    return this.data.pop(); //pop removes data from last position
  }

  peek() {
    return this.data[this.data.length - 1]; //peeking at last element of array
  }
}


var st = new Stack();
st.push(5);
console.log(st.peek());