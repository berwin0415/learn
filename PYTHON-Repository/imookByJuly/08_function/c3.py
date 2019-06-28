#8.3 如何让函数返回多个结果
def damage(skill1, skill2):
    damage1 = skill1 * 3
    damage2 = skill2 * 2 + 10
    return damage1, damage2

# 推荐使用序列解包的方式获取返回结果
skill1_damage, skill2_damage = damage(3, 6)
print(skill1_damage, skill2_damage)
# 不推荐序列序号这种写法
# damages = damage(3, 6)
# print(damages[0], damages[1]) 
# print(type(damages))