def palidrome(word):
    if word == word[::-1]:
        print("palidrome")
    else:
        print("not palidrome")

word = input("please enter your name: ")
palidrome(word)

