from django.urls import path
from .views import (
    ProfileListCreateView,
    SkillListCreateView,
    ProjectListCreateView,
    ContactListCreateView,
)

urlpatterns = [
    path('profiles/', ProfileListCreateView.as_view(), name='profile-list-create'),
    path('skills/', SkillListCreateView.as_view(), name='skill-list-create'),
    path('projects/', ProjectListCreateView.as_view(), name='project-list-create'),
    path('contacts/', ContactListCreateView.as_view(), name='contact-list-create'),
]