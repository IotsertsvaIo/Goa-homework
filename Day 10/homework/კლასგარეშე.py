language = [ 'python' , 'javascript' , 'scala' , 'php' , 'c++ ' , True , False]

print(language[5])





name = input("Please enter your name: ")
lastname = input("Please enter your lastname: ")
age = int(input("Please enter your age: "))

if age < 18:
    print("You are kid")
elif age > 18:
    print("You are adult")
elif age > 40:
    print("You are adult")
else:
    print("You are too old")

living_country = input("Please enter your country: ")
adress = input("Please enter your adress: ")
phone_number = input("Please enter your phone number: ")

print(f''' Hello, I am {name} {lastname}. I am {age} years old. I am living in {living_country}, in {adress}. My phone number is {phone_number}. ''')
