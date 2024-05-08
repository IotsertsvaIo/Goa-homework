def odder(num):
    total = 0
    num_list = []
    for i in num:
        if i == total:
            num_list.append(i)
        else:
            return i, i + 2, i + 4
    return  i, i + 2, i + 4

listn = [1, 2, 3, 4, 5]
print(odder(listn))
