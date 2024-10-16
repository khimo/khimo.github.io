---
layout: slides
---


[comment]: <> (For a new horizontal slide use: \n----\n)
[comment]: <> (For a new vertical slide use: \n|||n)
[comment]: <> (To write slide notes uses \nNote:)


## BeoLiving Intelligence
<!-- .slide: data-background-image="./res/shape.jpg" data-background-opacity="0.2" data-background-color="#010000" class="has-light-background" -->

##### por Khimo y Bang & Olufsen


<br/>
<small>Entrenamiento técnico</small>
<br/>
<small>Montevideo, 2024-10</small>

----
<!-- .slide: data-background-image="./res/living3.png" data-background-opacity="0.2" data-background-color="#010000" class="has-light-background" -->
## Entrenamiento técnico: Ejercicio 1

<p> Construir una configuración rápida con todos los recursos del hogar obteniendo la interfaz de usuario automáticamente </p>

----
<!-- .slide: data-background-image="./res/living3.png" data-background-opacity="0.2" data-background-color="#010000" class="has-light-background" -->
### Desempaquetado | Primeros pasos

1. Conectar a la red
1. Encontrar en la red
2. Obtener acceso (Restablecimiento de contraseña)
3. Actualización de firmware

---

<!-- .slide: data-background-image="./res/living3.png" data-background-opacity="0.2" data-background-color="#010000" class="has-light-background" -->
#### Botón de usuario

- **Función 2**: Establecer la contraseña del nombre de usuario _admin_ a _"admin"_ (válido por los siguientes) 5 minutos. Consulte la sección [*Interfaz de configuración*](06-web_interface_usage#setup-interface) para más información.
- **Función 3**: Configurar los ajustes de red a IP fija (192.168.1.10).
- **Función 4**: Configurar los ajustes de red para usar DHCP.
- **Función 5**: Borrar toda la configuración y ajustes.

---

### 1 | Encontrar en la Red
<!-- .slide: data-background-image="./res/living3.png" data-background-opacity="0.2" data-background-color="#010000" class="has-light-background" -->

- Usando la App BeoLiving:

- En una red con un solo BLI, desde iOS, Android, MacOS, Linux: http://bli.local

Una vez que tenemos el host, desde cualquier navegador web (preferiblemente CHROME) ingresamos: https://HOST/

|||

<!-- .slide: data-background-image="./res/living3.png" data-background-opacity="0.2" data-background-color="#010000" class="has-light-background" -->

#### 1 | Encontrar en la Red: Usando la App BeoLiving:
     1. Instalar la APP
     2. Iniciar sesión en el dispositivo
     3. Solicitar acceso
     4. Acceder
     5. Ir a "Configuración -> Dispositivo -> Más información -> [HOST]"

---

<!-- .slide: data-background-image="./res/living3.png" data-background-opacity="0.2" data-background-color="#010000" class="has-light-background" -->

### 2 | Restablecimiento de contraseña / Inicio de sesión

- Usar la función 2 del BOTÓN DE USUARIO para RESTABLECER la contraseña de admin

|||

<!-- .slide: data-background-image="./res/living3.png" data-background-opacity="0.2" data-background-color="#010000" class="has-light-background" -->

<iframe width="560" height="315" src="https://www.youtube.com/embed/Xxjk1Tv4PM4?si=Y7gq-jEYym9Ae7HF" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

|||
<!-- .slide: data-background-image="./res/living3.png" data-background-opacity="0.2" data-background-color="#010000" class="has-light-background" -->
Presione y mantenga presionado el botón hasta que el LED parpadee dos veces en rojo, suelte el botón, el LED parpadeará rápidamente, toque el botón para confirmar.

Ahora ingrese al navegador y use el usuario **admin** y la contraseña **admin**, esta contraseña será válida por 5 minutos después del procedimiento del botón de usuario.

Ahora defina la contraseña como **khimo**.

-----

<!-- .slide: data-background-image="./res/living2.png" data-background-opacity="0.2" data-background-color="#010000" class="has-light-background" -->
### 3 | Definir estructura del hogar, Áreas y Zonas

- Ir a "Admin -> Zones".
- Presionar "Agregar Área" y luego el "+" para agregar la zona.
- Use el nombre de su equipo para el área, y elija un nombre y una imagen.

Cada equipo tendrá su propia área y zona con el nombre de su equipo, pueden elegir una foto que los represente para la habitación.

---

<!-- .slide: data-background-image="./res/living.jpg" data-background-opacity="0.2" data-background-color="#010000" class="has-light-background" -->

### 4. Agregar sistemas:

- Ir a "Admin -> Systems"
- Presionar el símbolo "+" en su zona y agregar el controlador "Philips Hue CLIP"

Dirección de Philips hue:


---

<!-- .slide: data-background-image="./res/living2.png" data-background-opacity="0.2" data-background-color="#010000" class="has-light-background" -->


#### 5.1. Mozart (B&O Control Link]

- Ir a "Admin -> Resources"
- Ir a "Control Link"
- Presionar "Mostrar recursos descubiertos"
- Agregar su producto a su zona

   **NOTA:** Los productos pueden ser asignados por SN o por IP.
---

#### 5.1 BIS | Enlace a BeoCloud
- Ir a "Systems -> B&O ControlLink"
- Agregar el "Beo cloud accessPIN"

<small> Este PIN está disponible en la App B&O en Configuración -> Integraciones </small>


---

<!-- .slide: data-background-image="./res/living3.png" data-background-opacity="0.2" data-background-color="#010000" class="has-light-background" -->
#### 5.2. Philips HUE 

- Ir a ["Resources" -> la zona del equipo -> Philips HUE]
- Ir a "Cargar recursos de sistemas conectados" e importar los recursos a su zona

 Todos deben importar las luces en su zona.

---

<!-- .slide: data-background-image="./res/living2.png" data-background-opacity="0.2" data-background-color="#010000" class="has-light-background" -->
#### 5.3. Halo

   Este paso solo debe ser realizado por el primer equipo del BLI. Usando la misma idea que en el paso 5.1 el equipo debe definir el Halo en su habitación.

---

<!-- .slide: data-background-image="./res/living.jpg" data-background-opacity="0.2" data-background-color="#010000" class="has-light-background" -->
### 6. Exploramos las interfaces y exploramos lo que hemos aprendido:
- App BeoLiving
- Halo
- TV

---

<!-- .slide: data-background-image="./res/living2.png" data-background-opacity="0.2" data-background-color="#010000" class="has-light-background" -->
### 7. Mantenimiento de la tienda:

Discutimos cómo mantener la tienda funcionando cuando los números de serie cambian todo el tiempo.

----
<!-- .slide: data-background-image="./res/haloroom.png" data-background-opacity="0.2" data-background-color="#010000" class="has-light-background" -->
## Entrenamiento técnico: Ejercicio 2

<p> Lista de reproducción de Halo </p>

---

<!-- .slide: data-background-image="./res/haloroom.png" data-background-opacity="0.2" data-background-color="#010000" class="has-light-background" -->
- Ir a "Interfaces -> Halo"
- Agregar un botón elegante
- Crear un macro con este botón usando IA

"Reproducir los Beatles cuando se presione el tercer botón de la segunda página"

----
<!-- .slide: data-background-image="./res/haloroom.png" data-background-opacity="0.2" data-background-color="#010000" class="has-light-background" -->
## Entrenamiento técnico: Ejercicio 3

<p> Volumen de Halo </p>

---

<!-- .slide: data-background-image="./res/living.jpg" data-background-opacity="0.2" data-background-color="#010000" class="has-light-background" -->

## Entrenamiento técnico: Ejercicio 3

- Ir a "Interfaces -> Halo"
- Agregar un botón de comportamiento de volumen
- ¡Juega con él!

---

<!-- .slide: data-background-image="./res/haloroom.png" data-background-opacity="0.2" data-background-color="#010000" class="has-light-background" -->

##### Entrenamiento técnico: Túnel remoto de Khimo y especialistas remotos
<div style="width: 80vw; height: 80vh;  margin: 0 -5vw; padding: 0 -10vw">

<iframe style="width: 100%; height:100%;" src="http://bli.local/admin/#Setup" title="BLI" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="unsafe-url" allow="cross-origin; accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; cookies" allowfullscreen></iframe>


</div>

---


<!-- .slide: data-background-image="./res/end.jpg" data-background-opacity="0.2" data-background-color="#010000" class="has-light-background" -->

# ¡Gracias!

