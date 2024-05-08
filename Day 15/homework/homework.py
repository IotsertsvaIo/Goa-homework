def get_initials(fullname) :

    name = fullname.split()

    first_initial = name[0][0]

    last_initial = name[-1][0]

    initial = first_initial + "." + last_initial

    return initial 


fullname = input("please enter your fullname: ")

print("initials", get_initials(fullname))


