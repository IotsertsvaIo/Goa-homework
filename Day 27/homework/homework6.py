def duplicator(num):
    number = []
    for i in num:
        if i == num[i]:
            number.append(i) 
        else:
            return number
    
    return number

listn = [1, 1, 4, 7, 8, 3, 3.4]
print(duplicator(listn))


