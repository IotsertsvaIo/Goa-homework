counter = 0

while True:
    word = input("please enter word: ")
    counter = counter + 1
    for i in word:
        if i.islower():
            print("your entered word was with lowercses")
            break
    else:
        break

print("enter the word with uppercase", counter, "attemt")

        