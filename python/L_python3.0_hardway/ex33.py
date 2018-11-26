# i = 0
# numbers =[]

# while i < 6:
#     print(f"At the top i is {i}")
#     numbers.append(i)

#     i = i+1
#     print("Numbers now: ", numbers)
#     print(f"At the bottom i is {i}")


# print("The numbers: ")

# for num in numbers:
#     print(num)

from sys import argv

script, limit, add = argv


def func(limit, add):
    limit, add = int(limit), int(add)
    i = 0
    numbers = []
    while i < limit:
        print(f"At the top i is {i}")
        numbers.append(i)

        i += add
        print("Numbers now: ", numbers)
        print(f"At the bottom i is {i}")

    print("The numbers: ")

    for num in numbers:
        print(num)

func(limit, add)