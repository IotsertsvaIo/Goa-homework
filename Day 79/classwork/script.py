import random

def group_students(students, group_size):
    random.shuffle(students)
    groups = [students[i:i + group_size] for i in range(0, len(students), group_size)]
    return groups

students = ["Anna", "Ben", "Charlie", "Diana", "Edward", "Fiona", "George", "Hannah"]
group_size = 3
result = group_students(students, group_size)

for i, group in enumerate(result, 1):
    print(f"Group {i}: {group}")
