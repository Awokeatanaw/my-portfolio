from django.contrib import admin
from .models import Project  # Import your model
from .models import Contact
# Register your models here.
@admin.register(Project)
class ProjectAdmin(admin.ModelAdmin):
    list_display = ('title', 'description', 'technologies', 'image', 'demo_url', 'github_url')
    search_fields = ('title', 'description')
    list_filter = ('technologies',)

    # Use fields to display all fields directly
    fields = ('title', 'description', 'technologies', 'image', 'demo_url', 'github_url')

@admin.register(Contact)
class ContactAdmin(admin.ModelAdmin):
    list_display = ('name', 'email', 'message', 'created_at')
    search_fields = ('name', 'email')
    list_filter = ('message',)

    # Use fields to display all fields directly
    fields = ('name', 'email', 'message')