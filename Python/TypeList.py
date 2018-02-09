l = ['magical unicorns',19,'hello',98.98,'world']

sum=0
string=''
data = [False,False]                
for i in l:
    if isinstance(i,int) or isinstance(i,float):
        sum += i
        data[0]=True
    else:
        string+= i + ' '
        data[1]=True

if all(data):print "The array you entered is of mixed type\nString %s\nSum: %.2f"%(string.strip(),sum)
elif data[1]:print "The array you entered is of string type\nString: %s"%string.strip()
elif data[0]:print "The array you entered is of int type\nSum: %.2f"%sum
