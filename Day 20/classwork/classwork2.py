my_list = [1, 2, 3, 4, 5]
for i in my_list:
    if i % 2 != 0:
        new = my_list.index(i)
        my_list.pop(new)

print(my_list)