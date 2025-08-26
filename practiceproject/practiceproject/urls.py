
from django.contrib import admin
from django.urls import path
from django.shortcuts import redirect
from practiceapp.views import list_books, home

urlpatterns = [
    path('admin/', admin.site.urls),
    path('books/', list_books),
    path('', home),
]
