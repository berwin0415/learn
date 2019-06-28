# 面向对象
# 什么是类？什么是对象
# 9.1 什么是类

class Student():
    name = ''
    age = 0

    def print_file(self):
        print('name: '+ self.name)
        print('age: '+ str(self.age))

class StudentHomework():
    homework_name = ''

# 实例化
student = Student()
student.print_file()