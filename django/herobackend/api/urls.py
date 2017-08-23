from django.conf.urls import url
from api.views import HeroView

urlpatterns = [
	url(r'^$', HeroView.as_view(), name="about"),
]