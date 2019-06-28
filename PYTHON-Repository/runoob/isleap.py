start_year = int(input("输入一个开始年份: "))
end_year = int(input("输入一个结束年份: "))
import calendar

def isRunNian(year):
    if (year % 4) == 0:
        if (year % 100) == 0:
            if (year % 400) == 0:
                print("{0} 是闰年".format(year), calendar.isleap(year))   # 整百年能被400整除的是闰年
            else:
                print("{0} 不是闰年".format(year), calendar.isleap(year))
        else:
            print("{0} 是闰年".format(year), calendar.isleap(year))       # 非整百年能被4整除的为闰年
    else:
        print("{0} 不是闰年".format(year), calendar.isleap(year))


i = start_year or 0
while i <= end_year:
    isRunNian(i)
    i += 1
