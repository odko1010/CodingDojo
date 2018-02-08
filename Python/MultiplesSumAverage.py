## Multiples
# part1
for i in range(1, 1000, 2):
    print(i)
# part2
for x in range(5, 1000000):
    if x % 5 == 0:
        print(x)
## Sum List
a = [1, 2, 5, 10, 255, 3]
print sum(a)

## Average List
a = [1, 2, 5, 10, 255, 3]
aSum = sum(a)
aLength = len(a)
aAverage = aSum/aLength
print(aAverage)
