# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models

# Create your models here.

class Hero(models.Model):
	"""Basic Hero Class"""
	id = models.AutoField(primary_key=True) #Added by default by django.
											#Explicitly added for sanity.
	name = models.CharField(max_length=255, blank=False, unique=True)
	
	def __str__(self):
		"""human readable representation of instance"""
		return "{}".format(self.name)
		
class HeroZ(object):
	"""Basic Hero Class"""
	def __init__(self, id, name):
		self.id = id
		self.name = name
		
class UserZ(models.Model):
	"""User"""
	id = models.AutoField(primary_key=True)
	name = models.CharField(max_length =255, blank=False, unique=True)
	email = models.CharField(max_length =255, blank=False, unique=True)