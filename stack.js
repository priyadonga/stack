class Stack {

    constructor() {
        this.stack = []
        this.size = 5
    }
    add(element) {

        if (this.stack.length < this.size) {
            this.stack.push(element)
        } else {
            console.log("stack overflow")
        }
    }
    travel() {

        console.log(this.stack);

        if (this.stack.length === 0) {
            console.log("stack is underflow");
        }
    }
    print() {
        console.log(this.stack);
    }
    delete() {
        if (this.stack.length === 0) {
            console.log("underflow");
        }
        this.stack.splice(this.stack.length - 1);
    }
}



const stack = new Stack()

stack.add(7)
stack.add(9)
stack.add(4)
stack.add(2)
stack.add(6)
stack.add(4)
stack.print()
stack.delete()
stack.print()
stack.delete()
stack.print()
stack.delete()
stack.travel()

