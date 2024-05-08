my_list = [1, -2, 3, -4, 5]

negative_list = []
possitive_list = []

for i in my_list:
    if i % 2 != 0:
        negative_list.append(i)
    else:
        possitive_list.append(i)

print(negative_list, possitive_list)