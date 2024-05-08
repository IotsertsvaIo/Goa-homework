def manual_pop(collection, remove_index): #შევქმენით def ფუნქცია, სახელად manual_pop, და გადავეცით ორი ცვლადე: collection, remove_index 
    if remove_index >= len(collection): #შემოგვაქ if, და ვადარებთ ცვლადებს ერთმანეთს.
        return "Index out of range" #თუ remove_index მეტია ან ტოლია collection-ის რაოდენობაზე მაშინ დავაბრუნებთ "Index out of range"
    
    result = [] #ვქმნით ცარიელ ლისტს

    for i in range(len(collection)): #გადავუვლით collection-ს
        if i != remove_index: #თუ i არ უდრის remove_index-ს
            result.append(collection[i]) #ვამატებთ ცარიელ სიაში

    return result #და დავაბრუნეთ სია

print(manual_pop(["Luka", "lile"], 1)) #ვპრინტავთ ეხლა სიას, და ვუთითებთ ამოსასლელ ინდექსს.

