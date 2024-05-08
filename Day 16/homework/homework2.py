def number(num):
    total = 0
    totall = 0 
    for i in range(len(num)):
        if i % 2 == 0:
            total = total + num[i]
        elif i % 2 != 0:
            totall = totall + num[i]
    return total, totall


number_list = [1, 2, 3, 4, 5]
print(number(number_list))