class Test {
    static val:string = 'val'
    protected a:string
    constructor(){
        this.a = '1'
    }

    private method1(){
        console.log('method1')
    }
}

class Test2 extends Test{
    public b:string
    constructor(){
        super()
        this.b = 'b'
        this.a = 'a'
    }
}

interface IB extends Test {

}
const t = new Test2()
console.log(t)