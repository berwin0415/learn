# 9.6 类变量和实例变量
# 类变量和类关联，实例变量和实例关联
# class Student():
#     # 类变量
#     name = 'qiyue'
#     # age = 0

#     # 一个班级里所有学生的总数
#     sum = 0

#     # '类变量'和'实例变量'
#     def __init__(self, name, age):
#         # print('student')
#         # 初始化对象的属性
#         # 实例变量
#         self.name = name
#         self.age = age
#     def do_homework(self):
#         print('homework')

# student1 = Student('石敢当', 18)
# student2 = Student('喜小乐', 19)
# print(student1.name)
# print(student2.name)
# print(Student.name)

# 9.7 类与对象的变量查找顺序
# class Student():
#     # 类变量
#     name = 'qiyue'
#     age = 0

#     # 一个班级里所有学生的总数
#     sum = 0

#     # '类变量'和'实例变量'
#     def __init__(self, name, age):
#         # print('student')
#         # 初始化对象的属性
#         # 实例变量
#         self.name = name
#         self.age = age
#         print(age,name)
#     def do_homework(self):
#         print('homework')

# student1 = Student('石敢当', 18)
# # __dict__保存当前对象下的所有变量
# print(student1.__dict__)
# # print(Student.__dict__)
# # 当访问一个实例变量时，如果实例中找不到，会到类中寻找，当前类找不到，到父类寻找
# print(student1.name)

# 9.8 self与实例方法
# # self指向实例
# class Student():
#     # 类变量
#     name = 'qiyue'
#     age = 0
#     sum = 0

#     # 实例方法，定义时传入self
#     def __init__(self, name, age):
#         # print('student')
#         # 初始化对象的属性
#         # 实例变量
#         self.name = name
#         self.age = age
#         print(age,name)
#     def do_homework(self):
#         print('homework')

# student1 = Student('石敢当', 18)
# # __dict__保存当前对象下的所有变量
# print(student1.__dict__)
# # print(Student.__dict__)
# # 当访问一个实例变量时，如果实例中找不到，会到类中寻找，当前类找不到，到父类寻找
# print(student1.name)

# 9.9 在实例方法中访问实例变量与类变量
# 1. 访问实例变量需要通过self
# 2. 实例方法中无法直接访问类变量
# 3. 通过 类名.变量 方式使用
# 4. 通过self.__class__.变量使用
# class Student():
#     # 类变量
#     # name = 'qiyue'
#     # age = 0
#     sum1 = 0
#     # 实例方法，定义时传入self
#     def __init__(self, name, age):
#         # print('student')
#         # 初始化对象的属性
#         # 实例变量
#         self.name = name
#         self.age = age
#         # print(self.name)
#         # print(name) # 打印的是形参
#         print(Student.sum1)
#         print(self.__class__.sum1)
#     def do_homework(self):
#         print('homework')

# student1 = Student('石敢当', 18)

# print(student1.name)

# 9.10 类方法


class Student():
    # 类变量
    # name = 'qiyue'
    # age = 0
    sum1 = 0
    # 实例方法，定义时传入self

    def __init__(self, name, age):
        self.name = name
        self.age = age
        self.__class__.sum1 += 1
        print("当前学生总数为： " + str(self.__class__.sum1))

    def do_homework(self):
        print('homework')


student1 = Student('石敢当', 18)
student2 = Student('喜小乐', 18)
student3 = Student('小诺', 18)

# print(student1.name)
