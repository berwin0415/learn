package cn.itcast.day04.demo02;

public class Demo02MethodDefine {
    public static void main(String[] args) {
        for (int i = 0; i < 5; i++) {
            printRow();
        }
    }
    public static void printRow() {
        for (int i = 0; i < 10; i++) {
            System.out.println('*' * 5);
        }
    }
}
