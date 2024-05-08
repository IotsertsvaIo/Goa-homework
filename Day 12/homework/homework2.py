name = input("please eneter your name: ")
lastname = input("please enter your lastname: ")
age = int(input("please enter your age: "))
adress = input("please enter your adress: ")
personal_info = []

personal_info.append(name)
personal_info.append(lastname)
personal_info.append(age)
personal_info.append(adress)

print(personal_info[0:2])
print(personal_info[1:3])