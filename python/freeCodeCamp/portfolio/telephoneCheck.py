import re

def telephoneCheck(str):
	#Check if str is valid US telephone number

	valid = [

	r'^1?\s?(\d{3})[\s-]?(\d{3})[\s-]?(\d{4})$',
	r'^1?\s?\((\d{3})\)[\s-]?(\d{3})[\s-]?(\d{4})$'
	]

	ret = False
	for exp in valid:
		matchedat =  re.search(exp, str);
		if (matchedat):
		  ret = True
		  break

  
	return ret



#telephoneCheck("555-555-5555");
#telephoneCheck("2(757)6227382");
#telephoneCheck("1 555-555-5555");

#telephoneCheck("555-555-5555");
#telephoneCheck("1 555-555-5555");
#telephoneCheck("1 (555) 555-5555");
#telephoneCheck("5555555555");
#telephoneCheck("555-555-5555");
#telephoneCheck("(555)555-5555");
#assert(telephoneCheck("1(555)555-5555"))
