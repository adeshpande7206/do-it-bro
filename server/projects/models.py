from django.db import models
from users.models import User

# Create your models here.
class Daily(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    date = models.DateField()
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        verbose_name = 'Daily'
        verbose_name_plural = 'Daily'

    def __str__(self) -> str:
        return f'{self.user.first_name.capitalize()} ({self.date.strftime("%d/%m/%Y")})'

    def get_user_name(self) -> str:
        return f'{self.user.first_name.capitalize()}'
