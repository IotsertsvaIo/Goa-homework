name = input("please enter name: ")

for i in range(len(name)):
    if i == 5:
        name = name.upper()
        print(name)        
    else:
        name1 = name.lower()
        print(name1)