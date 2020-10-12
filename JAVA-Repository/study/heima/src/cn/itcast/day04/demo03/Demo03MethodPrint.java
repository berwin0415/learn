package cn.itcast.day04.demo03;

public class Demo03MethodPrint {
    public static void main(String[] args) {
        printCount(1000);
    }

    public static void printCount(int x) {
        for (int i = 0; i < x; i++) {
            System.out.println("hello");
        }
    }
}
