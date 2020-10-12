package cn.itcast.day06.lession04;

public class Person {
    String name;

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public void sayHello(String name) {
        System.out.println(name + "你好！" + "我是" + this.name);
    }

    public Person() {
    }

    public Person(String name) {
        this.name = name;
    }
}
