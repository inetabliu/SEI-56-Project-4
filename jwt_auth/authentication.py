from rest_framework.authentication import BasicAuthentication
from rest_framework.exceptions import PermissionDenied
from django.contrib.auth import get_user_model
from django.conf import settings
import jwt
# from magic_admin import Magic

# # Pass your API secret key directly to the Magic.
# magic = Magic(api_secret_key='<YOUR_API_SECRET_KEY>')

# # Or add an environment variable, `MAGIC_API_SECRET_KEY`
# magic = Magic()


User = get_user_model()


class JWTAuthentication(BasicAuthentication):

    def authenticate(self, request):
        header = request.headers.get('Authorization')

        if not header:
            return None

        if not header.startswith('Bearer'):
            raise PermissionDenied(detail="Invalid Token")
        token = header.replace('Bearer ', '')

        try:
            payload = jwt.decode(token, settings.SECRET_KEY, algorithms=['HS256'])
            print('PAYLOAD', payload)
            user = User.objects.get(pk=payload.get('sub'))
        except jwt.exceptions.InvalidTokenError:
            raise PermissionDenied(detail='Invalid Token here')
        except User.DoesNotExist:
            raise PermissionDenied(detail='User Not Found')

        return (user, token)    