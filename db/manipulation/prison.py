import csv
from csv import writer


#file open
file1 = open('db/manipulation/Jail wise population of prison inmates.csv')
reader = csv.reader(file1)
no_lines = len(list(reader))
file1.close()

file1 = open('db/manipulation/Jail wise population of prison inmates.csv')
reader1 = csv.reader(file1)

header1 = next(reader1)
print(header1)
#2 - 5
# courses = header1[2:6]
# print(courses)
# header = header1[0:3]
# header.append(header1[5])
# header.append(header1[8])
# print(header)

mFile = open('db/manipulation/prison.csv', 'a')
# writer_object = writer(mFile)
# writer_object.writerow(header)

for i in range(no_lines):
    row = next(reader1)
    # for j in range(4):
    test = [row[0], row[1], row[2], row[5], row[8], int(row[5])+int(row[8])]
    writer_object = writer(mFile)
    writer_object.writerow(test)

