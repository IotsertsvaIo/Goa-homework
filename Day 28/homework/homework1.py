def solution(number):
    num = []    
    for i in range(1, number):
        if i % 3 == 0 or i % 5 == 0:
            num.append(i)
    return sum(num)



def likes(names):
    n = len(names)
    if not names:
        return "no one likes this"
    if n == 1:
        return f"{names[0]} likes this"
    elif n == 2:
        return f"{names[0]} and {names[1]} like this"
    if n == 3:
        return f"{names[0]}, {names[1]} and {names[2]} like this"

    return f"{names[0]}, {names[1]} and {n - 2} others like this"
