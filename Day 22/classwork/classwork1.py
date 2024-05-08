def manuel_pop(number, delete_number):
    new_number = []

    for index in range(0, len(number)):
        if index != delete_number:
            new_number.append(number[index])
    
    return new_number

nums = ["gio", "apple", "lika"]
print(manuel_pop(nums, 1))