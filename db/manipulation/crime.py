import csv
from csv import writer


#file open
file1 = open('db/manipulation/convicted.csv')
file2 = open('db/manipulation/under_trial.csv')
reader = csv.reader(file1)
reader0 = csv.reader(file2)
no_lines = len(list(reader))
print(no_lines)
print(len(list(reader0)))
file1.close()
file2.close()
file1 = open('db/manipulation/convicted.csv')
file2 = open('db/manipulation/under_trial.csv')

#csv reader
reader1 = csv.reader(file1)
reader2 = csv.reader(file2)

header1, header2 = [], []
header1 = next(reader1)
header2 = next(reader2)
# print(header1, header2)


#csv login

row, row1 = [], []
agegrp = ['16-18', '18-30', '30-50', '50+']
sex = ['M', 'F']

mFile = open('db/manipulation/test.csv', 'a')

for i in range(no_lines):
    # print(next(reader1))
    row = next(reader1)
    row1 = next(reader2)
    j = 3
    k = 0
    for _ in range(0,8):
        test = [row[0], row[1], row[2], sex[0 if _%2==0 else 1], agegrp[k], row[j], row1[j]]
        # print(row)
        writer_object = writer(mFile)
        writer_object.writerow(test)
        if j%3 == 0:
            j += 1
        else:
            j += 2
        if _%2 == 1:
            k += 1
mFile.close()
    # print(next(reader2))