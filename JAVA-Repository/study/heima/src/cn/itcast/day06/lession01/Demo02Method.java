package cn.itcast.day06.lession01;

public class Demo02Method {
    public static void main(String[] args) {
        int[] array = {5, 10, 15, 20, 25};
        int max = getMax(array);
        System.out.println(max);
    }

    public static int getMax(int[] array) {
        int max = 0;
        for (int i = 0; i < array.length; i ++) {
            System.out.println(i);
            if (array[i] > max) {
                max = array[i];
            }
        }
        return max;
    }
}
