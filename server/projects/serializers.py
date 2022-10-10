from rest_framework import serializers

from .models import Task, Daily


class TaskSerializer(serializers.ModelSerializer):
    class Meta:
        model = Task
        fields = '__all__'
