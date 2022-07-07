a, b, c = map(int, input().split())
abcSet = set([a, b, c])
length = len(abcSet)

if length == 1:
    print(a*1000+10000)
elif length == 2:
    if a == b or b == c:
        print(1000+b*100)
    elif a == c:
        print(1000+a*100)
elif length == 3:
    print(max(abcSet)*100)

