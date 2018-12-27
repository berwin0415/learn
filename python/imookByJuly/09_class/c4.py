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


# class Student():
#     # 类变量
#     # name = 'qiyue'
#     # age = 0
#     sum = 0
#     # 实例方法，定义时传入self

#     def __init__(self, name, age):
#         self.name = name
#         self.age = age
#         self.__class__.sum += 1
#         print("当前学生总数为： " + str(self.__class__.sum))

#     def do_homework(self):
#         print('homework')

#     # 定义类方法
#     @classmethod
#     def plus_sum(cls):
#         cls.sum += 1
#         print(cls.sum)

# student1 = Student('石敢当', 18)
# Student.plus_sum()
# student2 = Student('喜小乐', 18)
# Student.plus_sum()
# student3 = Student('小诺', 18)
# Student.plus_sum()

#区别：
    # 实例与类

# 9.11 静态方法


# class Student():
#     # 类变量
#     # name = 'qiyue'
#     # age = 0
#     sum = 0
#     # 实例方法，定义时传入self

#     def __init__(self, name, age):
#         self.name = name
#         self.age = age
#         self.__class__.sum += 1
#         print("当前学生总数为： " + str(self.__class__.sum))

#     def do_homework(self):
#         print('homework')

#     # 定义类方法
#     @classmethod
#     def plus_sum(cls):
#         cls.sum += 1
#         print(cls.sum)

#     @staticmethod
#     def add(x, y):
#         print("This is a static method")

# student1 = Student('石敢当', 18)
# Student.add(1,2)
# student1.add(1,2)

# 1、实例和类都可以调用
# 2. 静态方法可以访问类变量
# 3、静态方法和类方法都不能访问实例变量

# 9.12 成员可见性：公有和私有


class Student():
    sum = 0

    def __init__(self, name, age):
        self.name = name
        self.age = age
        self.__score = 0
        self.__class__.sum += 1

    def do_homework(self):
        print('homework')

    def marking(self,score):
        print(self.__score)
        self.__score = score
        return self.__score
    # 定义类方法
    @classmethod
    def plus_sum(cls):
        cls.sum += 1
        print(cls.sum)

    @staticmethod
    def add(x, y):
        print("This is a static method")

student1 = Student('石敢当', 18)
result = student1.marking(59)
print(result)
student1.__score = -1

# 1. 外部访问造成类内部变量的不安全性
# 2. 外部调用类方法，在类方法内修改变实例变量
# 3. 通过在变量或方法前加'__'双下划线，表示私有变量或者方法，不要在后面加双下划线

# 9.13 没有什么是不能访问的
# 1.双下划线的私有变量实际上是python自动在变量名前添加'_类名'