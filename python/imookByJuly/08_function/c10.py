# 8.9 变量作用域
# 



c = 50 
def add(x , y):
    c = x + y
    print(c)

add(1, 2)
print(c)