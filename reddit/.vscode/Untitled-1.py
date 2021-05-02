def run(student_list):
	student_list.sort()
	print(student_list)
	copy_student_list = student_list
	print(len(student_list))
	for i in range(0,len(student_list),1):
			print(i, i+1)
	return 


run([5,3,2,2,3,5,4,6,9,6,4,12,8,9,12]) 

run([2,2,10,5,4,6,7,5,8,8,6,4,7])

run([2015,2000,1092,2042,2016,2015,2000,1994,23,1092,2042,23,1994])

run([53491,62276,82233,66051,97664,27657,45882,46503,27064,64689,70329,62843,84840,53491,62276,82233,66051,97664,27657,45882,46503,27064,64689,70329,62843,84840,1337])