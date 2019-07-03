// #622 设计循环队列

class MyCircularQueue {
    constructor(k) {
        this.list = Array(k)
        this.max = k;
        this.front = 0;
        this.rear = 0;
    }

    enQueue(value) {
        if (this.isFull()) {
            return false
        } else {
            this.list[this.rear] = value;
            this.rear = (this.rear + 1) % this.max;
            return true
        }
    }

    deQueue() {
        if (this.isEmpty()) {
            return false
        } else {
            this.list[this.front] = undefined;
            this.front = (this.front + 1) % this.max
            return true
        }
    }

    Front() {
        const element = this.list[this.front]
        return typeof element === "undefined" ? -1 : element;
    }

    Rear() {

        let rear = this.rear - 1
        const element = this.list[rear < 0 ? this.max - 1 : rear];

        return typeof element === "undefined" ? -1 : element;
    }

    isEmpty() {
        return this.front === this.rear && !this.list[this.front]
    }

    isFull() {
        return this.front === this.rear && !!this.list[this.front]
    }
}
