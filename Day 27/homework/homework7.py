def manuel(listn, search_term):
    count = 0
    for i in listn:
        if i == search_term:
            count += 1
    return count

listn = ["fruit", "fruit", "fruit", 9, 5, 9]
search_term = 5
print(manuel(listn, search_term))



