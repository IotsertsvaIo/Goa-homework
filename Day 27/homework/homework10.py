def collector(collection):
    for i in collection:
        if i == collection[i]:
            collection.pop(i)
        else:
            return collection
    
    return collection

listn = [1, 1, 1, 2, 3, 4]
print(collector(listn))
