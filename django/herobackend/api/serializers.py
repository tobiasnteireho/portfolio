from rest_framework import serializers
from api.models import Hero

class HeroZSerializer(serializers.ModelSerializer):

	class Meta:
		model = Hero
		fields = ('id', 'name');
		

class HeroSerializer(serializers.Serializer):
	id = serializers.IntegerField()
	name = serializers.CharField(max_length =255)