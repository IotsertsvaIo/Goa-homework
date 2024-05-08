def manuel_count(collection, item_to_count):
    count = 0

    for item in collection:
        if item  == item_to_count:
            count += 1
    return count

names = ["luka", "gio", "mariam"]
print(manuel_count(names, "mariam"))    