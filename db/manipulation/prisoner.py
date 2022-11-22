import csv
from csv import writer


#file open
file1 = open('db/manipulation/Age_group.csv')
reader = csv.reader(file1)
no_lines = len(list(reader))
file1.close()

file1 = open('db/manipulation/Age_group.csv')
reader1 = csv.reader(file1)

header1 = next(reader1)
# print(header1)

age = ['16-18', '18-30', '30-50', '50+']

mFile = open('db/manipulation/prisoner.csv', 'a')

for i in range(no_lines):
    row = next(reader1)
    if(row[4] == 'Convicts' or row[4] == 'Under Trials'):
        for j in range(4):
            test = [row[0], row[2], row[3], row[4],row[5], age[j], row[j+6]]
            writer_object = writer(mFile)
            writer_object.writerow(test)

