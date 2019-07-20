class myPromise {
    constructor(executor) {
        this.status = 'pending';
        this.value = undefined;
        this.reason = undefined;
        this.onResolvedCallbacks = [];
        this.onRejectedCallbacks = [];

        const resolve = value => {

            if (this.status === 'pending') {
                this.value = value;
                this.status = 'resolved'
                this.onResolvedCallbacks.forEach(fn => fn())
            }
        }
        const reject = reason => {
            if (this.status === 'pending') {
                this.reason = reason;
                this.status = 'rejected'
                this.onRejectedCallbacks.forEach(fn => fn())
            }
        }
        try {
            executor(resolve, reject)
        } catch (e) {
            reject(e)
        }
    }
    then(onFullfilled, onRejected) {
        switch (this.status) {
            case 'resolved':

                onFullfilled(this.value);
                break;
            case 'rejected':
                onRejected(this.reason);
                break;

            case 'pending':
                this.onResolvedCallbacks.push(() => onFullfilled(this.value))
                this.onRejectedCallbacks.push(() => onRejected(this.reason))
                break;
            default:
        }
    }
}
module.exports = myPromise