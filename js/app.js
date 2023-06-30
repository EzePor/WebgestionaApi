const movies = { 
        // difinimos la función que obtiene todas las películas.
    obtenerTodos: () => {
      // creamos una constante que tiene la URL de nuestra API
      const urlAPI = 'https://practicaprof2023-ada6.restdb.io/rest/peliculas?apikey=6467b0990b60fc42f4e197f9';

            /* creamos una constante que tendrá una referencia directa con el DIV contenedorPelículas
             y nos permitirá cargarle contenido.*/
      const divContenedorPeliculas = document.querySelector('#contenedorPeliculas');

             // creamos una variable vacia, que contendrá todo el contenido HTML que vamos a insertar
      let contenidoHTML = '';
  
              // obtenemos las películas en formato JSON
      fetch(urlAPI)
        .then(res => res.json())
        .then((datos) => {
                      // enviamos a la consola de JS de lo obtenido
                     //console.log(datos[0]);

                    /*recorremos la colección de las películas obtenids, donde logramos una referencia por cada una, 
                      con la constante "peli", por cada iteración */
          for (const peli of datos) {
                        contenidoHTML += `
              <div class="contPeli">
                    <a href="${peli.trailer_url}" target="_blank">
                    <img src="${peli.portada_url}" alt="${peli.nombre}" class="img-thumbnail">
                  </a>
                   
                  <details class="title">

                  <summary>${peli.nombre}</summary>
                  <p> ${peli.sinopsis}</p>

                  </details>
                  <a href="#" onclick="movies.editarPelicula('${peli._id}');">Editar</a>
                  <a href="#" onclick="movies.eliminarPelicula('${peli._id}','${peli.nombre}');">Eliminar</a>
              </div>`;         // mandamos 2 parámetros para eliminarPelicula
          }
          divContenedorPeliculas.innerHTML = contenidoHTML; 
        })
    },
    
    

             // AGREGAMOS UNA PELÍCULAS 
    agregarNuevaPelicula:() => {

      const txtIdPelicula = document.getElementById('txtIdPelicula');
      let urlAPI ='';
      let methodAPI = '';
      if (txtIdPelicula.value === ''){
        urlAPI = 'https://practicaprof2023-ada6.restdb.io/rest/peliculas?apikey=6467b0990b60fc42f4e197f9';
methodAPI = 'POST';

      }
      else {
      urlAPI =`https://practicaprof2023-ada6.restdb.io/rest/peliculas/${txtIdPelicula.value}?apikey=6467b0990b60fc42f4e197f9`;
      methodAPI = 'PUT';
      }
        
     
     const txtNombre = document.getElementById('txtNombre');
     alert(`agregando la película: ${txtNombre.value}`)
     const txtGenero = document.getElementById('txtGenero');
     const txtDuracion = document.getElementById('txtDuracion');
     const txtTrailerUrl = document.getElementById('txtTrailerUrl');
     const txtSinopsis = document.getElementById('txtSinopsis');
     const txtPortadaUrl = document.getElementById('txtPortadaUrl');

       const nuevaPeli = {
        "nombre":txtNombre.value,
        "genero": txtGenero.value,
        "duracion": txtDuracion.value,
        "trailer_url": txtTrailerUrl.value,
        "sinopsis": txtSinopsis.value,
        "portada_url":txtPortadaUrl.value
      };

      fetch(urlAPI,{
      methodAPI: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(nuevaPeli)
      })  
      .then(response => {
        console.log(response);
        window.location.href="index.html";
        //return movies.obtenerTodos();
      })
      alert(`Haz agregado la película : ${nuevaPeli.nombre} ` );
    },



             // ELIMINAMOS PELÍCULAS        // llegan 2 parámetros id, nombre
    eliminarPelicula:(idPeliculaBorrar, nombrePeliculaBorrar)=>{
      Swal.fire({
          title: `¿Está seguro que desea borrar a ${nombrePeliculaBorrar}?`,
        text: "No podrás revertir los cambios",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si, quiero hacerlo!'
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire(
            'Eliminado!',
            `La película ${nombrePeliculaBorrar} fue borrada .`,
            'satisfactoriamente'
          )
          const urlAPI = `https://practicaprof2023-ada6.restdb.io/rest/peliculas/${idPeliculaBorrar}?apikey=6467b0990b60fc42f4e197f9`;
      

      fetch(urlAPI, {
        method: 'DELETE',
        
        })
        .then(response =>{
          console.log(response);
          return movies.obtenerTodos();
        });
        }
      })

      
        //alert(` Haz eliminado la película : ${nombrePeliculaBorrar} ` );
    },
    editarPelicula : (idPeliculaEditar)=>{
      //alert("Editando la película con el ID=" + idPeliculaEditar)
      const urlAPI = `https://practicaprof2023-ada6.restdb.io/rest/peliculas/${idPeliculaEditar}?apikey=6467b0990b60fc42f4e197f9`;
      fetch(urlAPI)
      .then(res => res.json())
      .then((datos) => {
             //console.log(urlAPI)

                // tomar los elementos con su valor  
       document.getElementById('txtIdPelicula').value = idPeliculaEditar;   
        document.getElementById('txtNombre').value = datos.nombre;
        //alert(`agregando la película: ${txtNombre.value}`)
        document.getElementById('txtGenero').value = datos.genero;
        document.getElementById('txtDuracion').value = datos.duracion;
        document.getElementById('txtTrailerUrl').value = datos.trailer_url;
        document.getElementById('txtSinopsis').value = datos.sinopsis;
        document.getElementById('txtPortadaUrl').value = datos.portada_url;
      
          // llamamos al form para que muestra la edición
const ventanaEditar = document.getElementById('agregarEditarModal');
let modal = new bootstrap.Modal(ventanaEditar);
modal.show();
        
      });


    }
      
  };
  //movies.obtenerTodos();
