#9. # Да се състави програма, която въвежда един масив и създава друг, на който
#елементите му са сумата от всеки два съседни, започвайки от нулевия.
 
# My output is wrong
 
n = int(input("How many numbers are you gonna input in the first list? "))
 list1 = []

 for i in range(n):
     numbers = int(input("Enter a number in the first list "))
     list1.append(numbers)
# for x in range(0, len (list1),2):
#      for j in range(1, len(list1) + 1,2):
#          print(list1[x] + list1[j])

