word = input("Enter a word here: ")
find = input("Enter a letter to find: ")
listn = []
for i in word:
    listn.append(i)
if find in listn:
    print(listn.index(find))
else:
    print(-1)