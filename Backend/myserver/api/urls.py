from django.urls import path
from . import views

urlpatterns = [
    path('api/items/', views.ItemListCreateView.as_view(), name='item-list-create'),  # Ensure this path matches your request
]
