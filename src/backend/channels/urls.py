from django.urls import path
from . import views


urlpatterns = [
    path('prompt-feedback/',views.PromptFeedbackView.as_view(),name='feedback'),
    path('channels/',views.ChannelView.as_view(),name='channels')
]