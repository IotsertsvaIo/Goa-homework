def square_digits(num):
    to_return = ""
    for i in str(num):
        to_return = to_return + f'{int(i) * int(i)}'
    return (int(to_return))