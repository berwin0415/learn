# 9.14 继承

from c6 import Human


# class Student(Human):
#     # sum = 0
#     # def __init__(self, name, age):
#     #     self.name = name
#     #     self.age = age
#     #     self.__score = 0
#     #     self.__class__.sum += 1
#     def __init__(self, school, name, age):
#         self.school = school
#         Human.__init__(self, name, age) # 写法无意义

#     def do_homework(self):
#         print("english homework")


# student1 = Student('人民路小学', '石敢当', 18)
# # print(student1.sum)
# # print(Student.sum)
# print(student1.name)
# print(student1.age)
# # student1.getname()


# 9.15 SUPER关键字
class Student(Human):
    # sum = 0
    def __init__(self, school, name, age):
        self.school = school
        # Human.__init__(self, name, age) # 写法无意义
        super(Student, self).__init__(name,age)

    def do_homework(self):
        super(Student,self).do_homework()
        print("english homework")


student1 = Student('人民路小学', '石敢当', 18)
# print(student1.sum)
# print(Student.sum)
print(student1.name)
print(student1.age)
# student1.getname()
student1.do_homework()



