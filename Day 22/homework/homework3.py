def manuel_min(minn, mins):
    new_min = []
    for i in range(minn):
        if i == num:
            new_min.append(i)
            return new_min
    
    return manuel_min

min_num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
print(manuel_min, 1)


def manul_min(collection, value):

    for i in range(0, len(collection)):
        if collection[i] == value:
            return i
    
    return -1
print(manuel_min, 1)
