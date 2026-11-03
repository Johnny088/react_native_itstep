math = [80, 92, 75, 60, 88]

physics = [70, 65, 90, 85, 78]

english = [95, 100, 85, 90, 87]

averages = {
    "math": sum(math) / len(math),
    "physics": sum(physics) / len(physics),
    "english": sum(english) / len(english),
}

min_values = {
    "math": min(math),
    "physics": min(physics),
    "english": min(english),
}

max_values = {
    "math": max(math),
    "physics": max(physics),
    "english": max(english),
}

# print(averages)

# print(max(averages))

# print(max(averages.values()))

# print(max( averages, key=averages.get))

# print(max(averages.items()))

# help(max)
# print(min_values.get)

# print(max(averages,key=min_values.get))

best_subject = max(averages, key=averages.get)
best_subject_score = max(averages.values())

print('------------------------------\n|    Average    |\n')
print('------------------------------\n|    Subject   |    Score    |\n')

for x,y in averages:
    print(f'------------------------------\n|    {x}   |    {y}    |\n')



students = pd.DataFrame({
    'name': ['Anna', 'Ivan', 'Olena', 'Max', 'Iryna', 'Andriy', 'Alona', 'Dmytro'],
    'age': [19, 21, 20, 22, 19, 23, 20, 21],
    'city': ['Kyiv', 'Lviv','Kyiv', 'Odesa', 'Lviv', 'Kyiv', 'Odesa', 'Kyiv' ],
    'python' : [85, 72, 91, 67, 88, 76, 94, 81],
    'math' : [78, 69, 95, 73, 84, 80, 91, 77]
})