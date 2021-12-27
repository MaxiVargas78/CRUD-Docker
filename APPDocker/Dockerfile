#Se utiliza imagen de Python3
FROM python:3 
# Esta variable agrega un valor no vacio obligando a que secuencias no se almacenen en buffer.
ENV PYTHONUNBUFFERED=1
#Luego se actualizan las librerias y se instala un cliente de postgresql
RUN apt update 
RUN apt install -y postgresql-client
#Despues, se crea un directorio y se copian los requerimientos a instalar del software.
WORKDIR /backend
COPY ./requirements.txt /backend/
# Se instalan los requerimientos (librerias) necesarias.
RUN pip install -r requirements.txt
#Se copia el script wait para conectar de forma optima a la bdd, 
# ya que el script hace que el backend espere hasta que la base de datos este disponible para funcionar.
COPY wait-for-postgres.sh wait.sh
#Finalmente se copia todo dentro del directorio
COPY  ./ /backend/
# A través del siguiente comando inicia el servidor y asigna el puerto a utilizar.
CMD ["python","manage.py","runserver","0.0.0.0:8080"]
