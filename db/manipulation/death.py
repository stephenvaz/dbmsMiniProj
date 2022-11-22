import csv
from csv import writer


#file open
file1 = open('db/manipulation/Inmates_death.csv')
reader = csv.reader(file1)
no_lines = len(list(reader))
file1.close()

file1 = open('db/manipulation/Inmates_death.csv')
reader1 = csv.reader(file1)

header1 = next(reader1)
# print(header1)
#2 - 5
sex = header1[3:5]


mFile = open('db/manipulation/test3.csv', 'a')

for i in range(no_lines):
    row = next(reader1)
    for j in range(2):
        test = [row[0], row[1], row[2], sex[j], row[j+3]]
        writer_object = writer(mFile)
        writer_object.writerow(test)