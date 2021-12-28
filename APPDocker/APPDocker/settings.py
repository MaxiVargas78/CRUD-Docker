"""
Django settings for APPDocker project.

Generated by 'django-admin startproject' using Django 3.2.7.

For more information on this file, see
https://docs.djangoproject.com/en/3.2/topics/settings/

For the full list of settings and their values, see
https://docs.djangoproject.com/en/3.2/ref/settings/
"""

from pathlib import Path
import os

# Build paths inside the project like this: BASE_DIR / 'subdir'.
BASE_DIR = Path(__file__).resolve().parent.parent


# Quick-start development settings - unsuitable for production
# See https://docs.djangoproject.com/en/3.2/howto/deployment/checklist/

# SECURITY WARNING: keep the secret key used in production secret!
SECRET_KEY = 'django-insecure-9&$5ji-mfbu$49bm8&ru@a7re2_)!i+5^#%60+n8y!pc(&d5$1'

# SECURITY WARNING: don't run with debug turned on in production!
DEBUG = True

CORS_ORIGIN_ALLOW_ALL = True

ALLOWED_HOSTS = []

CORS_ALLOWED_ORIGINS = []
#CORS_ALLOWED_ORIGINS = ['http://localhost:3000', 'http://127.0.0.1:3000','http://0.0.0.0:3000']


# Application definition

INSTALLED_APPS = [
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',
    'rest_framework',
    'corsheaders',
    'Juegos',
    'storages',
    'elasticapm.contrib.django',
]

MIDDLEWARE = [
    'corsheaders.middleware.CorsMiddleware',
    'elasticapm.contrib.django.middleware.TracingMiddleware',
    'django.middleware.security.SecurityMiddleware',
    'django.contrib.sessions.middleware.SessionMiddleware',
    'django.middleware.common.CommonMiddleware',
    'django.middleware.csrf.CsrfViewMiddleware',
    'django.contrib.auth.middleware.AuthenticationMiddleware',
    'django.contrib.messages.middleware.MessageMiddleware',
    'django.middleware.clickjacking.XFrameOptionsMiddleware',
]

ROOT_URLCONF = 'APPDocker.urls'

TEMPLATES = [
    {
        'BACKEND': 'django.template.backends.django.DjangoTemplates',
        'DIRS': [],
        'APP_DIRS': True,
        'OPTIONS': {
            'context_processors': [
                'django.template.context_processors.debug',
                'django.template.context_processors.request',
                'django.contrib.auth.context_processors.auth',
                'django.contrib.messages.context_processors.messages',
            ],
        },
    },
]

WSGI_APPLICATION = 'APPDocker.wsgi.application'


# Database
# https://docs.djangoproject.com/en/3.2/ref/settings/#databases

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.sqlite3',
        'NAME': os.path.join(BASE_DIR, 'db.sqlite3'),
    }
}

#DATABASES = {
 #   'default': {
  #      'ENGINE': 'django.db.backends.postgresql_psycopg2',
   #     'NAME': 'postgres',
    #    'USER': 'postgres', #Usuario PostgreSQL
     #   'PASSWORD': 'postgres', #contraseña creada en PostgreSQL con el comando \password
      #  'HOST': 'db',
       # 'PORT': '5432' #Asignar puerto de ser necesario

        #ENGINE': 'django.db.backends.postgresql', #si este no funciona probar con postgresql_psycopg2 (además>
 #   }
#}


# Password validation
# https://docs.djangoproject.com/en/3.2/ref/settings/#auth-password-validators

AUTH_PASSWORD_VALIDATORS = [
    {
        'NAME': 'django.contrib.auth.password_validation.UserAttributeSimilarityValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.MinimumLengthValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.CommonPasswordValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.NumericPasswordValidator',
    },
]


# Internationalization
# https://docs.djangoproject.com/en/3.2/topics/i18n/

LANGUAGE_CODE = 'en-us'

TIME_ZONE = 'UTC'

USE_I18N = True

USE_L10N = True

USE_TZ = True


# Static files (CSS, JavaScript, Images)
# https://docs.djangoproject.com/en/3.2/howto/static-files/


AWS_ACCESS_KEY_ID = 'AKIAW5AGQ6EBEOYYC343'
AWS_SECRET_ACCESS_KEY = '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'
AWS_STORAGE_BUCKET_NAME = 'storage-arqui'
AWS_S3_CUSTOM_DOMAIN = '%s.s3.amazonaws.com' % AWS_STORAGE_BUCKET_NAME
AWS_S3_OBJECT_PARAMETERS = {
    'CacheControl': 'max-age=86400',
}
AWS_LOCATION = 'static'


STATIC_URL = 'https://%s/%s/' % (AWS_S3_CUSTOM_DOMAIN, AWS_LOCATION)
STATICFILES_STORAGE = 'storages.backends.s3boto3.S3Boto3Storage'


ELASTIC_APM = {
# Set the required service name. Allowed characters:
# a-z, A-Z, 0-9, -, _, and space
'SERVICE_NAME': 'observaArqui',

# Use if APM Server requires a secret token
'SECRET_TOKEN': 'dgmnqcbw3Nu3noSn0s',


# Set the custom APM Server URL (default: http://localhost:8200)
'SERVER_URL': 'https://3c48d2f5221f46f18ea3f8098e4c549c.apm.us-east-1.aws.cloud.es.io:443',

# Set the service environment
'ENVIRONMENT': 'production',
}

# Default primary key field type
# https://docs.djangoproject.com/en/3.2/ref/settings/#default-auto-field

DEFAULT_AUTO_FIELD = 'django.db.models.BigAutoField'
