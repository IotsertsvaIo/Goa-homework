#1

def litres(time):
    return int(time * 0.5)

#2

def paperwork(n, m):
    if n < 0 or m < 0:
        return 0
    return n * m

#3

def grow(arr):
	product = 1
	for i in arr:
		product *= i
	return product

#4

def fake_bin(x):
    result = ''
    
    for char in x:
        if int(char) < 5:
            result = result + "0"
        else:
            result = result + "1"
    
    return result

#5

def count_by(x, n):
    return [i * x for i in range(1, n + 1)]

#6

def to_jaden_case(string):
    return ' '.join(word.capitalize() for word in string.split())

#7

def accum(s):
    return '-'.join(c.upper() + c.lower() * i for i, c in enumerate(s))

#8

def remove_smallest(numbers):
    a = numbers[:]
    if a:
        a.remove(min(a))
    return a

#9

def solution(number):
    num = []    
    for i in range(1, number):
        if i % 3 == 0 or i % 5 == 0:
            num.append(i)
    return sum(num)

#10

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




