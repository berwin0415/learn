package cn.itcast.day08.lesson03;

public class Person {
    static {
        System.out.println("静态代码块");
    }

    public Person() {
        System.out.println("构造方法");
    }
}
