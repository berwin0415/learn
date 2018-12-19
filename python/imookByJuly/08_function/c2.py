# def funcname(parameter_list):
#     pass
# 8.2 函数的定义及运行特点
# 1. 参数列表可以没有
# 2. return value or None

# 1. 实现两个数字的相加
# 2. 打印输入的参数
import sys
sys.setrecursionlimit(3000)

def add (x, y):
    result = x + y
    return result

def print_code(code):
    print(code)

print_code(add(4, 6))