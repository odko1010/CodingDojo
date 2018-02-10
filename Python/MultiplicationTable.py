print("\t\tMultiplication Tables")
a = 12
b = list(list(range(1*i,(a+1)*i, i)) for i in range(1,a+1))
max_width = len(str(b[-1][-1])) + 1
for i in b:
    i = [str(j).rjust(max_width) for j in i]
    print(''.join(i))