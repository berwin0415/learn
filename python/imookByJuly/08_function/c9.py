# 8.8 关键字参数

# 实现任意个数的关键字参数

def city_temp(**param):
    for key,value in param.items():
        print(key, ':', value)

# city_temp(bj = '32c', xm = '34c', sh= '31c')
a = {'bj' :'32c', 'xm' : '34c', 'sh':'31c'}
city_temp(**a)

print('~~~~~~~~~~~~~~~~~~')
city_temp()
