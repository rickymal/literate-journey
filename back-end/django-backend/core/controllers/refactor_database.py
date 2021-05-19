from .models import Judge
from .models import Team
from .models import Mentor
from .models import Mentoring
from .models import Challenge
from .models import Student

from django.contrib.auth.models import User

print("atualizando dbo".center(80,'-'))
User.objects.create(is_superuser = True,
 username= 'henriquemauler@gmail.com',
 password="he147369")