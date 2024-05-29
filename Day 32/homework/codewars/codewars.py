def high_and_low(numbers):
    splited = numbers.split()
    list1 = []
    for i in splited:
        list1.append(int(i))
    return str(max(list1)) + " " + str(min(list1))



def filter_list(l):
    list1 = []
    for i in l:
        if type(i) == int :
            list1.append(i)
    return list1


def square_digits(num):
    to_return = ""
    for i in str(num):
        to_return = to_return + f'{int(i) * int(i)}'
    return (int(to_return))


def get_count(sentence):
    to_count = ["a", "e", "i", "o", "u"]
    res = 0
    for i in to_count:
        for j in sentence:
            if i.lower() == j.lower():
                res += 1
    return res