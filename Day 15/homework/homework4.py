def nms(numbers):
    num1 = 0
    lstn = []
    for i in numbers:
        if i >= 0:
            num1 = num1 + i
        else:
            lstn.append(i)

    print("negative numbers lenght is: ", len(lstn))
    print("positive numbers is: ", num1)


numbers_list = [2, 13, 6, -7, -3]
nms(numbers_list)