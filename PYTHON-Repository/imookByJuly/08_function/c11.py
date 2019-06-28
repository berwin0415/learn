

# 超出作用域，函数外部无法引用函数内部变量
# def demo():
#     c = 10

# print(c)

# 函数内部可以引用外部变量
# c =10
# def demo():
#     print(c)

# demo()

# for循环内部的变量可以在外部引用
# ！！！！ python没有块级作用域
def demo():
    c = 50 
    for i in range(0, 9):
        a = 'a'
        c += 1
    print(c)
    print(a)

demo()
