# 8.6 默认参数
# 注意：
# 1. 非默认参数不能放到默认参数之后
# 2. 默认参数传入是用关键字参数传入， 可以不遵守顺序
# 3. 函数调用时也不能混杂调用

def print_student_files(name, gender = '男',age = 18, college = '人民路小学'):
    print('我叫'+ name)
    print('我今年'+ str(age)+ '岁')
    print('我是'+ gender +'生')
    print('我在'+ college + '上学')

print_student_files('鸡小萌','男', 18, "人民路小学")
print('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~')
print_student_files('鸡小萌')
print('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~')
print_student_files('石敢当')
print('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~')
print_student_files('喜小乐', '女', 16)
print('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~')
print_student_files('果果', age = 17, college='光明小学', gender='女')
print('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~')
print_student_files('果果', age = 17, college='光明小学', gender='女')