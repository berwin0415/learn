package cn.itcast.day07.lesson03;

import java.util.Date;
import java.util.HashMap;
import java.util.Random;

@SuppressWarnings("unchecked")
public class Demo04_1 {
    public static void main(String[] args) {
        HashMap map = new HashMap();
        for (int i = 0; i < 10; i++) {
            map.put(i, 0);
        }
        Random r = new Random();
        long max = 1000000000L;
        long per = max / 100;
        Date time = new Date();
        long start = time.getTime();
        for (long i = 0; i < max; i++) {
            int n = r.nextInt(10);
            int count = (int) map.get(n);
            map.put(n, count + 1);
            if (i % per == 0) {
                Date timeEnd = new Date();
                long end = timeEnd.getTime();
                long persent = i / per;
                System.out.println("finish " + persent + "%, cost " + (end - start) + "ms");
            }
        }
        System.out.println("finish " + 100 + "%, cost " + ((new Date()).getTime() - start) + "ms");
        System.out.println(map.toString());
    }
}

