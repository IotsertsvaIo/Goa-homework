

#შექმენით ოთხი მათემატიკური ფუნქცია, თითოეულს გადაეცით ორი არგუმენტი და 
# სახელის შესაბამისად მოახდინეთ მუშაობა. ოპერაციები: +, -, *, /.


def print_nums(num1, num2) :
    print(num1 + num2)
    print(num1 - num2)
    print(num1 * num2)
    print(num1 / num2)

print_nums(78, 34)



#: შექმენით ფუნქცია, რომელსაც გადასცემთ მართკუთხედის სიგრძესა 
# და სიმაღლეს, გამოითვლით მის ფართობს.

def print_rectangle(number1, number2) :
        print(number1 * number2) 

print_rectangle(13, 2)




#შექმენით ფუნქცია, რომელსაც გადასცემთ მართკუთხედის ოთხ გვერდს, 
# გამოითვლით მის პერიმეტრს.

def print_rectangle_perimeter(num1, num2, num3, num4) :
    print((num1 + num2) * 2)

print_rectangle_perimeter(7, 24 ,7 ,24)




# შექმენით ფუნქცია, რომელიც მიიღებს არგუმენტად სიას და 
# დაბეჭდეთ სიის რიცხვების ჯამი, არ გამოიყენოთ sum.


def summation(listn) :
    num = 0
    for i in listn:
        num += num
        print(summation)

summation([2, 4, 7])



#შექმენით ფუნქცია, რომელიც დაბეჭდავს კონკრეტული სიიდან მინიმალურ და მაქსიმალურ რიცხვებს, არ 
# გამოიყენოთ min და max. გამოიყენეთ def, for, if/else, indexing, print.


def max_founder(listn) :
    if listn[0] > listn[1] and listn[0] > listn[2]:
        print("max number is: " + str(listn[0]))
    elif listn[1] > listn[0] and listn[1] > listn[2]:
        print("max number is: " + str(listn[1]))
    else:
         print("max number is: " + str(listn[2]))


max_founder(4, 78 , -90)




def min_founder(listn) :
    if listn[0] < listn[1] and listn[0] < listn[2]:
        print("min number is: " + str(listn[0]))
    elif listn[1] < listn[0] and listn[1] < listn[2]:
        print("min number is: " + str(listn[1]))
    else:
         print("min number is: " + str(listn[2]))


min_founder(4, 78 , -90)


    
