def doubler(num):
    for i in num:
        if i == num[i]:
            num.pop(i)
        else:
            return num
    
    return num

listn = [1, 1, 4, 7, 8, 3, 3.4]
print(doubler(listn))
