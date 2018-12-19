import random
def diamondCost(num):
    return num * 0.05

def vitCost(num):
    return int(num)

def l1_pay(num):
    return (0.75 + diamondCost(8)) * int(num)

def l3_pay(num):
    # 3级需要 13 * 1.15 + 0.39 + 10  = 24.56
    return (l1_pay(13) + 0.39 + vitCost(10)) * int(num)

def l4_pay(num, pay = 0):
    lock = random.random()
    if(lock>0.4847):
        cost = pay + l1_pay(16) + 0.897  
        return l4_pay(num, cost)
    else: 
        num-=1
        if num > 0:
            # 直接成功需要 24.56 + 16 * 1.15 + 0.897 + 10
            cost = pay + l3_pay(1)+ l1_pay(16) + 0.897 + vitCost(10)
            return l4_pay(num, cost)
        else:
            a = pay
            return a

def l6_pay(num):
    cost = 0
    while num > 0:
        cost += l4_pay(13) + 19.75 + vitCost(10)
        num -= 1
    return cost

value = 100
avg = l6_pay(value)/value
print(avg)