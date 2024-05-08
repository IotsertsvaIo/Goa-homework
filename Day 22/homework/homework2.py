def manuel_count(collection, num_count):
    count = 0

    for item in collection:
        if item  == num_count:
            count += 1
    return count

names = [1, 2, 3, 4, 5]
print(manuel_count(names, 4))    