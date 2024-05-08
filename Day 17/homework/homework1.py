#1) შექმენით ფუნქცია, რომელშიც გააერთიანებთ იმ ფუნქციებს რაც დღეს ვისწავლეთ 
# (lower(), upper(), capitalize(), find())

def all(functions):

    item = functions.upper()
    item2 = functions.lower()
    item3 = functions.find("G")
    item4 = functions.capitalize()

    return str(item) + " " + str(item2)  + " " + str(item3)  + " " + str(item4)



word = "GOA"
print(all(word))

    

