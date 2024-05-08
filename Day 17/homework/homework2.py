#2) შექმენით ფუნქცია რომელსაც გადაეცემა list = ["name1" , "name2" , "name3"....] შემდეგ 
# მომხმარებელს კითხეთ რომელი ინდექსის შეცვლა სურს და ამის მიხედვით შეცვალეთ ის კონკრეტული 
# ინდექსი თქვენი სასურველი სტრინგით და ბოლოს შეაერთეთ join() ფუნქციის მეშვეობით.

def names(name):
    print("old result: ", name)
    index = int(input("please eneter index: "))
    new_name = input("pleae eneter new name: ")
    name[index] = new_name
    result = " ".join(name)
    print("new result: ", result)

names_list = ["mariam", "gio", "andria"]
names(names_list)


        
    