# API REST para Red Social: Backend Proyecto Final del Bootcamp DWFSV3-179 - API Rest - Red Social (stack MERN)

Este proyecto es una API REST desarrollada con el Stack MERN (MongoDB, Express.js, React.js, Node.js) para una aplicación de Red Social. La autenticación se realiza utilizando JWT (JSON Web Tokens).

## Instalación

Para ejecutar este proyecto en tu máquina local, sigue estos pasos:

1. Clona este repositorio en tu máquina local (Crea un Fork si lo vas a editar):

    ```bash
    https://github.com/inesmariao/backend_snet.git
    ```

2. Navega al directorio del proyecto:

    ```bash
    cd carpeta_donde_alojarás_tu_proyecto
    ```

3. Abre el proyecto en tu editor de código, crea una carpeta en la raíz del proyecto llamada: .env: configura las variables de entorno con el string de conexión a Mongo Atlas Cloud y el puerto de conexión en local, así

    ```bash
    MONGODB_URI=aquí_el_string_de_conexión_a_Mongo_Atlas_sin_comillas_sin_espacios
    SECRET_KEY=aquí_la_clave_secreta_para_generar_el_token_de_autenticación_con_JWT
    PORT=####
    ```
    Ejemplo:
    ```bash
    MONGODB_URI=mongodb+srv://tu_usuario_mongo_atlas_cloud:tu_password@tu_cluster.configuración_de_mongo.mongodb.net/tu_nombre_bd?retryWrites=true&w=majority
    SECRET_KEY=SECRET_KEY_oTrOs_cArAcTeReS_CLAVE
    PORT=3900
    ```

4. Instala las dependencias del proyecto utilizando npm:

    ```bash
    npm install
    ```

## Ejecución de Node

Para ejecutar el servidor de Node, en la terminal escribe:

    ```bash
    npm install
    ```

> [!IMPORTANT]
> Asegúrate de tener Mongo Atlas Cloud configurado correctamente y la conexión de base de datos en el archivo `.env` antes de ejecutar el archivo de inicio. Este proyecto está configurado para trabajar con una conexión a Base de Datos con Mongo Atlas Cloud.

---

## Contribuciones

> [!TIP]
> ¡Si te gustó este proyecto, puedes dejarme una estrella en el repositorio! 🌟

En caso que estés interesad@ en contribuir al proyecto para hacer mejoras, puedes solicitarme unirte al repositorio como contribuidor, enviándome un correo a inesmaoh@gmail.com

> [!NOTE]
> Por favor, sigue las guías de contribución y buenas prácticas antes de enviar un Pull Request.

## Licencia

Este proyecto está licenciado bajo la [Licencia ISC](https://opensource.org/licenses/ISC). Consulta el archivo LICENSE para más detalles.

> [!IMPORTANT]
> **Copyright 2024. Ing. Inés María Oliveros**

Por la presente se concede permiso para utilizar, copiar, modificar y/o distribuir este software para cualquier fin, con o sin cargo, siempre que el aviso de copyright anterior y este aviso de permiso aparezcan en todas las copias.

EL SOFTWARE SE PROPORCIONA "TAL CUAL" Y EL AUTOR RECHAZA TODA GARANTÍA CON RESPECTO A ESTE SOFTWARE, INCLUIDAS TODAS LAS GARANTÍAS IMPLÍCITAS DE COMERCIABILIDAD E IDONEIDAD. EN NINGÚN CASO EL AUTOR SERÁ RESPONSABLE DE NINGÚN DAÑO ESPECIAL, DIRECTO, INDIRECTO O CONSECUENTE, NI DE NINGÚN DAÑO DERIVADO DE LA PÉRDIDA DE USO, DATOS O BENEFICIOS, YA SEA EN UNA ACCIÓN CONTRACTUAL, NEGLIGENCIA U OTRA ACCIÓN ILÍCITA, QUE SURJA DE O EN RELACIÓN CON EL USO O RENDIMIENTO DE ESTE SOFTWARE.

## License

> [!IMPORTANT]
> **Copyright 2024. Ing. Inés María Oliveros Hernández**

Permission to use, copy, modify, and/or distribute this software for any purpose with or without fee is hereby granted, provided that the above copyright notice and this permission notice appear in all copies.

THE SOFTWARE IS PROVIDED “AS IS” AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
