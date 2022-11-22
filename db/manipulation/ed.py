import csv
from csv import writer


#file open
file1 = open('db/manipulation/Education_facilities.csv')
reader = csv.reader(file1)
no_lines = len(list(reader))
file1.close()

file1 = open('db/manipulation/Education_facilities.csv')
reader1 = csv.reader(file1)

header1 = next(reader1)
# print(header1)
#2 - 5
courses = header1[2:6]
print(courses)


mFile = open('db/manipulation/test2.csv', 'a')

for i in range(no_lines):
    row = next(reader1)
    for j in range(4):
        test = [row[0], row[1], courses[j], row[j+2]]
        writer_object = writer(mFile)
        writer_object.writerow(test)

