import pytest
from telephoneCheck import *

def test_1():
	assert telephoneCheck("555-555-5555")== True
	
def test2():
	assert(telephoneCheck("2(757)6227382")) == False
	
def test3():
	assert(telephoneCheck("1 555-555-5555"))

def test4():
	assert(telephoneCheck("555-555-5555"))

def test5():
	assert(telephoneCheck("1 555-555-5555"))

def test6():
	assert(telephoneCheck("1 (555) 555-5555"))

def test7():
	assert(telephoneCheck("5555555555"))

def test8():
	assert(telephoneCheck("555-555-5555"))

def test9():
	assert(telephoneCheck("(555)555-5555"))
	
def test10():
	assert(telephoneCheck("1(555)555-5555"))
