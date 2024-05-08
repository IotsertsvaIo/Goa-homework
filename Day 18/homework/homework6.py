name = input("please enter your name: ")
surname = input("please enter your surname: ")
fullname_list = []
fullname_list.append(name)
fullname_list.append(surname)
word = fullname_list[0][0].upper()
word1 = fullname_list[1][0].upper()

print(word + "." + word1)