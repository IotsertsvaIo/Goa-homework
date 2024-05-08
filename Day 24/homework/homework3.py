number = int(input("Enter number: "))
empty_list = []


for i in number:
    if i == "2":
        empty_list.append(i, 1)
    else:
        empty_list.append(i - 2)


