def number(collection):
    num = []
    num2 = []
    for i in collection:
        if i == int:
            num.append(i)
        elif i == float:
            num2.append(i)
    return num * 2, num2 * 4


listn = [1, 2.5, 6.7, 6, 24, 64, 92.7]
number(listn)
