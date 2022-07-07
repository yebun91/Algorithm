a = int(input())
b = int(input())
c = int(input())
numList = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]

abc = str(a*b*c)
for i in abc:
    numList[int(i)] += 1

for i in numList:
    print(i)
