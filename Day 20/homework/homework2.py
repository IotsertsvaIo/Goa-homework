my_list = [1, 2, 3, 4, 5]
number_list = []

for i in my_list:
    if i % 2 == 0:
        number_list.append(i)

print(number_list)




my_list = [1, 2, 3, 4, 5]
for i in my_list:
    if i % 2 != 0:
        new = my_list.index(i)
        my_list.pop(new)

print(my_list)