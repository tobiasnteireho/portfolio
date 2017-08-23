# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.shortcuts import render

from rest_framework.views import APIView
from rest_framework.response import Response
#from rest_framework import Request
from rest_framework import authentication, permissions, status
from .serializers import HeroSerializer
from .models import Hero
import json
from mock_heroes import *
from django.core import serializers

from django.http import JsonResponse, HttpResponse
from django.forms.models import model_to_dict

# Create your views here.

class HeroView(APIView):
	"""This class defines the create behavior of our rest api"""
	
	def get(self, request, *args, **kwargs):
		"""
		GET /hero
		gets all heroes
		
		GET /hero/:id
		get specific hero
		
		returns json
		"""
		if ("id" in kwargs):
			id =  kwargs["id"]
			hero = Hero.objects.filter(id=id)
			
			if (hero):
				data = list(hero.values())[0] #dict(data=list(hero.values())[0])
				state = status.HTTP_200_OK
			else:
				data = content="{}"
				state=status.HTTP_404_NOT_FOUND
		else:
			hero = Hero.objects.all()
			data = list(hero.values())
			state = status.HTTP_200_OK
		#serializer  = HeroSerializer("json",Hero.objects.all().values())
		#serializer.is_valid();
		
		#return Response(dict(data=list(Hero.objects.filter(id=1).values())[0]))
		#JsonResponse(data, status) is more appropriate, but is not working
		return HttpResponse(content=json.dumps(data), status=state, content_type="application/json")
		
		def delete(self, request, *args, **kwargs):
			id =  kwargs["id"]
			Hero.objects.filter(id = id)
			Hero.delete()
			return HttpResponse(content="{status: deleted}", status=status.HTTP_200_OK, content_type="application/json")

class HeroEditView(APIView):	
	def post(self, request, *args, **kwargs):
		"""
		"""
		name = kwargs["name"]
		Hero.objects.create(name)
		Hero.save()
	
		return HttpResponse(content="{status: created}", status=status.HTTP_200_OK, content_type="application/json")
		
	def put(self, request, *args, **kwargs):
		return Response(request.body)
		
	