def manuel_pop(number, remove_number):
    new_number = []

    for num in range(0, len(number)):
        if num != remove_number:
            new_number.append(number[num])
    
    return new_number

nums = [1, 2, 3, 4, 5]
print(manuel_pop(nums, 3))