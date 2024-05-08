listn = []
for i in range(5):
    strng = input("Enter a word:")
    listn.append(strng)
operator = input("Enter a operator you want to join your words with: ")
print(operator.join(listn))
