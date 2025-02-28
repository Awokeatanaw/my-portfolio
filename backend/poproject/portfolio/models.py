from django.db import models

# Create your models here.
class Profile(models.Model):
    name = models.CharField(max_length=200)
    headline = models.CharField(max_length=200)
    bio = models.TextField()
    profile_pic = models.ImageField(upload_to='profile/')
    resume = models.FileField(upload_to='resume/')
    phone = models.CharField(max_length=20)
    email = models.EmailField()
    telegram_url = models.URLField(blank=True)
    linkedin_url = models.URLField(blank=True)
    github_url = models.URLField(blank=True)
    twitter_url = models.URLField(blank=True)
    Facebook_url=models.URLField(blank=True)
class Skill(models.Model):
    name = models.CharField(max_length=100)
    level = models.IntegerField(null=True, blank=True)  # 1 to 100%
class Project(models.Model):
    title = models.CharField(max_length=200)
    description = models.TextField()
    technologies = models.TextField(help_text="Comma-separated list of technologies used")  # Changed to TextField
    image = models.ImageField(upload_to='projects/')
    demo_url = models.URLField()
    github_url = models.URLField()
class Contact(models.Model):
    name = models.CharField(max_length=255)
    email = models.EmailField()
    message = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
