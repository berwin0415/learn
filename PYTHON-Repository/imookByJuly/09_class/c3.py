# 9.3 类和对象
# 通过实例化关联起来

# 什么是类 定义
# 类是现实世界或思维世界在计算机中的反映
# 它将数据以及这些数据上的操作封装在一起

# class Student():
#     name = ''
#     age = 0

#     def do_homework(self):
#         print('homework')

# class Printer():
#     def print_file(self):
#         print('name: '+ self.name)
#         print('age: '+ str(self.age))

# 9.4 构造函数
# __init__
# 1. 构造函数会自动调用
# 2. 构造函数只能返回None
# 3. 用于初始化对象的属性
# class Student():
#     name = ''
#     age = 0

#     def __init__(self, name, age):
#         # print('student')
#         # 初始化对象的属性
#         name = name
#         age = age
#     def do_homework(self):
#         print('homework')


# student1 = Student()
# student2 = Student()
# student3 = Student()

# print(id(student1))
# print(id(student2))
# print(id(student3))

# student1 = Student()
# a = student1.__init__()
# print(a)
# print(type(a))

# student1 = Student('石敢当', 18)
# print(student1.name)

# 9.5 区别模块变量与类中的变量  
# class Student():
#     name = ''
#     age = 0
#     # '类变量'和'实例变量'
#     def __init__(self, name, age):
#         # print('student')
#         # 初始化对象的属性
#         self.name = name
#         self.age = age
#     def do_homework(self):
#         print('homework')

