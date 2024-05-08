def manul_max(collection, value):

    for i in range(0, len(collection)):
        if collection[i] == value:
            return i
    
    return -1
print(manuel_max, 10)
