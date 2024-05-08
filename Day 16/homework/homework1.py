def numbers(num):
    total = 0
    for i in range(len(num)):
        if i % 2 == 0:
            total = total + num[i]
    return total


number_list = [1, 2, 3, 4, 5]
print(numbers(number_list))

