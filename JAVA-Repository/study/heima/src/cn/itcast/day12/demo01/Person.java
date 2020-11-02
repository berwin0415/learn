package cn.itcast.day12.demo01;

import java.util.Objects;

public class Person {
    private String name;
    private int age;

    public Person() {
    }
    
    
    public Person(String name, int age) {
        this.name = name;
        this.age = age;
    }

    /*
     * 直接打印对象的地址值没有意义,需要重写Object类中的toString方法 打印对象的属性(name,age)
     */
    /*
     * @Override public String toString() { //return "abc"; return
     * "Person{name="+name+" ,age="+age+"}"; }
     */
    /*
     * @Override public String toString() { return "Person{" + "name='" + name +
     * '\'' + ", age=" + age + '}'; }
     */

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getAge() {
        return age;
    }

    public void setAge(int age) {
        this.age = age;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof Person)) return false;
        Person person = (Person) o;
        return getAge() == person.getAge() &&
                getName().equals(person.getName());
    }

    @Override
    public int hashCode() {
        return Objects.hash(getName(), getAge());
    }
}
