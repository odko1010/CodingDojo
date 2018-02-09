

# def typeList(a):                                             #function
#     sum = 0
#     types = ""
#     data = [False,False]                                     #Using a boolean type to identify each type
#     for i in range (len(a)):
#         if isinstance(a[i], int) or isinstance(a[i], float): #Using isinstance method to check data type from list using a for loop
#             sum += a[i]
#             data[0] = True                                   #Initializing a data index 0 to true
#         else:
#             types += a[i] + " "
#             data[1] = True                                   #Initializing a data index 1 to true
#     if all(data):print "The array you entered is of mixed type\nString: ", types, "\nSum: ", sum
#     elif data[1]:print "The array you entered is of string type\nString: ", types
#     elif data[0]:print "The array you entered is of integer type\nSum: ", sum

x = ['magical unicorns',19,'hello',98.98,'world']
y = [2,3,1,7,4,12]
z = ['magical','unicorns']

print(type(x))
