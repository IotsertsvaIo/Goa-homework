#ჩემი გაკეთებული
def manuel_index(nums, num):
    new_nums = [] 
    for index in nums:
        if index == num:
            new_nums.append(index)

    return new_nums   


numbers = [1, 2, 3, 4, 5]
print(manuel_index(numbers, 2))


#მასწავლებლის გაკეთებული



def manual_index(collection, value):

    for index in range(0, len(collection)):
        if collection[index] == value:
            return index
    
    return -1


print(manual_index("Luka", "k"))