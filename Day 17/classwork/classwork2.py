#ვისწავლეთ join-ი, რომელიც აერთებს წინადადებას.

def sentence(academy):
    new_sentence = " ".join(academy)
    print(new_sentence)
    

sentence_list = ["GOA" "is" "best" "academy"]
sentence(sentence_list)


#ვისწავლეთ upper-ი და lower-ი, რომელიც ადიდებს და აპატარავებს სიტყვაში არსებულ ასოებს.

item = "apple"
item2 = item.upper()
print(item2)

item = "APPLE"
item2 = item.lower()
print(item2)

#ვისწავლეთ find-ი რომელიც, ეძებს სიტყვაში არსებულ ასოებს, ოღონდ თუ რომელიმე სიტყვაში ერთნაირი 
#ასოები მეორდება რომელსაც პირველს იპოვის იმას დაბეჭდავს.

word = "aplle".find("l")
print(word)



#capitalize() მეთოდი გამოიყენება სტრინგში სიმბოლოების რეგისტრირების შესაცვლელად. კერძოდ, ის ცვლის 
#სტრინგის პირველ სიმბოლოს დიდზე და გარდაქმნის ყველა სხვა სიმბოლოს პატარას.



sentence= "hello world."

text = sentence.capitalize()

print (text)