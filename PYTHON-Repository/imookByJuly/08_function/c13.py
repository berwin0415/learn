# 8-11 global 关键字
# 可以将内部变量变为全局变量，先什么再赋值
def demo():
    global c
    c = 2
demo()
print(c)