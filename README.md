# CHelp2
CHelp es un pequeño gestor de tareas con alarmas.
* Lista optimizada y componentes reutilizables
	Se usa el flatlist para mostrar una lista de "tipos de tareas", y al seleccionar un tipo, se ven las "Tareas" correspondientes a este tipo.
* Navegación
	Desde el menú principal se navega a una lista de "tipos de tareas", al seleccionar un tipo, se navega a otra pantalla, de "Tareas". Puede verse cómo funciona el filtrado, el primer tipo muestra varias tareas, el tercer tipo una sola, los otros dos ninguna. En la lista de "Tareas", debajo de las tareas aparece una opción para crear una tarea nueva, que navega a otra ventana (sin terminar - no hace nada). Si se clickea en una tarea se pasa a otra ventana que en este momento muestra unas coordenadas.
* Manejo de estado
	Se usa para filtrar la pantalla de tareas, según el tipo seleccionado en la ventana anterior.
* Conexión con API
	Se creó una base de datos y autenticación en Firebase. Los datos de conexión están en el app, así como las ventanas de login y sign in. Sin embargo, no conseguí terminar el login, por lo que la ventana de login está comentada. Si se activa, se verifica que accede a la base de datos, y que verifica el email (autenticación).
* Interfaz de dispositivo (ejemplo: location, cámara, galería de fotos)
	Si se clickea en una tarea cualquiera se pasa a otra ventana que en este momento muestra las coordenadas del dispositivo. El app solicitirá el permiso correspondiente la primera vez que se use.
* Persistencia de datos
	La creación y conexión a la db está, pero para tomar/grabar los datos de ahí tenía que hacer un CRUD y no me dió el tiempo.
* Configuración de publicación (ícono, splash, y permisos)
	Ejecutar desde: exp://u.expo.dev/update/4f9b15fe-919d-4836-ba16-71468b6a368d
