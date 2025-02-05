Para poder ejecutar esta app deberá seguir los siguientes pasos:

1. En una terminal situarse en el directorio donde se encuentra el proyecto y ejecutar el comando "npm install --legacy-peer-deps" para instalar las dependencias del proyecto que se encuentran en el package.json

2. Asegurarse de que esté corriendo el Backend de este proyecto en un localhost con un puerto específico 

3. Ejecutar el comando "ng serve --open" para inicializar la app en el localhost con el puerto designado que sea distinto al del Backend

Para poder ejecutar los tests y registrar su salida deberá ejecutar el siguiente comando: ng test --watch=false >> test-output.txt 2>&1

