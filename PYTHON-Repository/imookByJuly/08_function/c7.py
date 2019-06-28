# 8.7 可变参数
 

def demo(*param):
    print(param)
    print(type(param))

# demo(1,2,3,4,5,6)
# 会变成二维元组
# demo((1,2,3,4,5,6))

# 传入变量
a = (1,2,3,4,5,6)
demo(*a)

# 默认参数放在可变参数前，调用时不能跳过默认参数
# def demo2(param1, param2 = 2, *param):
# 默认参数放在可变参数后，必须用关键字参数传入默认参数
def demo2(param1, *param, param2 = 2 ):
    print(param1)
    print(param)
    print(param2)

# demo2('a', 1,2,3,4)
demo2('a', 1,2,3,4, param2 = 'param')

