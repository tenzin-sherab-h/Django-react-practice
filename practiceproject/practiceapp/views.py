from django.http import JsonResponse, HttpResponse
from .models import Book

def list_books(request):
    books = list(Book.objects.values())
    return JsonResponse(books, safe=False)

def home(request):
    return HttpResponse("Welcome to my Django API!")
