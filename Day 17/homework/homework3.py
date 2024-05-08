#split-ი ისეთი ფუნქციაა რომელიც სტრინგში არსებულ წინადადებას/სიტყვას 
#შუაზე ყოფს. რათქმაუნდა split-ს უნდა მივუწეროთ (). 
# მაგალითად:

split_sentence = "Goa is best academy"
" ".split(split_sentence)
print(split_sentence)


#join-ი ისეთი ფუნქციაა რომელიც სტრინგში არსებულ წინადადებას/სიტყვას
#შუაზე კი არ ყოფს split-ის ნაირად, არამედ აერთებს. რატქმაუნდა join-საც
#ვუწერთ ბოლოში ().
#მაგალითად:


def sentence(academy):
    new_sentence = " ".join(academy)
    print(new_sentence)
    

sentence_list = ["GOA" "is" "best" "academy"]
sentence(sentence_list)
