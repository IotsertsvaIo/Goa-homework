word = input("please enter word: ")
word_list = []
word_lists = []
for i in word:
    word_list.append(i)
    if word_list.index(i) % 2 == 0:
        word_lists.append(i.upper())
    else:
        word_lists.append(i.lower())

print("".join(word_lists))
                
