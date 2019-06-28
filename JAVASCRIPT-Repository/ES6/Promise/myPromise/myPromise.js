class myPromise {
    constructor(constructor){
        this.status = 'pending';
        this.value = undefined;
        this.reason = undefined;
        const resolve = value => {
            
            if(this.status === 'pending'){
                console.log(value);
                this.value = value;
                this.status = 'resolved'
            }
        }
        const reject = reason => {
            if(this.status === 'pending'){
                this.reason = reason;
                this.status = 'rejected'
            }
        }
        try {
            constructor(resolve,reject)
        } catch (e) {
            reject(e)
        }
    }
    then(onFullfilled,onReject){
        console.log(this.status);
        switch(this.status){
            case 'resolved':
            
                onFullfilled(this.value);
                break;
            case 'rejected':
                onReject(this.reason);
                break;
            default:
        }
    }
}
module.exports = myPromise