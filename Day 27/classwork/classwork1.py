def manuel_pop(collection, delete_number):
    new_list = []

    for item in range(0, len(collection)):
        if item != delete_number:
            new_list.append(collection[item])
    
    return new_list

nums = ["lile", "luka", "gio", "ioane", "lika"]
print(manuel_pop(nums, 3))


