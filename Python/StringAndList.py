# Find and Replace
words = "It's thanksgiving day. It's my birthday, too!"
print words.find("day")
print words.replace("day", "month", 1)

# Min and Max
x = [2,54,-2,7,12,98]
print min(x)
print max(x)

# First and Last
x = ["hello",2,54,-2,7,12,98,"world"]
firstVal = x[0]
lastVal = x[len(x)-1]
print "First value is:", firstVal
print "Last value is:", lastVal

# New List
x = [19,2,54,-2,7,12,98,32,10,-3,6]
x.sort()
print x
first=[]
second=[]
for i in range (0,len(x)):
    if x[i]<10:
        first.append(x[i])
    else:
        second.append(x[i])
second.insert(0,first)
print second
        