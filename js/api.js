let contenedorPersonajes = document.getElementsByTagName("personajes")

fetch("https://rickandmortyapi.com/api/character")
.then(response => response.json())

.then(response => {
 
	console.log(response)
	console.log(response.results)

	response.results.forEach((elementos) =>{
	//console.log(elementos.name)

	const contenedorCreado = document.createElement('div')

  });

 personajes.innerHTML= `
	<h4>${elementos.name}</h4>

 	<img src="${elementos.image}">

`;
contenedorPersonajes.append(contenedorCreado) 	
 });
