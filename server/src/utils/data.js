//*Archivo creado para simular data con la que se trabajara en la home

const allPets = [
	{
		nombre: "Jack",
		raza: "Persian",
		tamano: "Mediano",
		edad: 8,
		sexo: "Macho",
		foto: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReCYp9BHvCcVBdOXzTsd5ziSAqNBokg1mfYQ&usqp=CAU",
		peso: 6.0,
		descripcion:
			"Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.\n\nVestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.",
	},
	{
		nombre: "Daisy",
		raza: "Persian",
		tamano: "Pequeño",
		edad: 5,
		sexo: "Hembra",
		foto: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFe_tsmeJvX87ZkVOCG6Xu2u5NKT3K6ztYrw&usqp=CAU",
		peso: 4.5,
		descripcion:
			"In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.\n\nNulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.",
	},
	{
		nombre: "Bella",
		raza: "Ragdoll",
		tamano: "Grande",
		edad: 12,
		sexo: "Macho",
		foto: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROc2F23NPlgG25XGj0z1y2Q0tX4TQvOX9Mgw&usqp=CAU",
		peso: 14.5,
		descripcion:
			"Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.\n\nNullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.",
	},
	{
		nombre: "Max",
		raza: "Poodle",
		tamano: "Pequeño",
		edad: 8,
		sexo: "Hembra",
		foto: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQU0j00VKi207K6cHaWK1MU_csqgqB9vcYdeQ&usqp=CAU",
		peso: 12.2,
		descripcion:
			"Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.\n\nDuis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.",
	},
	{
		nombre: "Jack",
		raza: "Golden Retriever",
		tamano: "Grande",
		edad: 6,
		sexo: "Macho",
		foto: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJEUhIp-KgR1jaUhSrL1Rsx2F7YFwIFzKLwg&usqp=CAU",
		peso: 20.7,
		descripcion:
			"Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.\n\nMaecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.\n\nNullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.",
	},
	{
		nombre: "Sadie",
		raza: "Pastor Aleman",
		tamano: "Grande",
		edad: 14,
		sexo: "Hembra",
		foto: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCbJeWlybYqWzD90jPSOymmsHwynfFGROftw&usqp=CAU",
		peso: 17.7,
		descripcion:
			"Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.\n\nNam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.",
	},
	{
		nombre: "Max",
		raza: "Poodle",
		tamano: "Pequeño",
		edad: 9,
		sexo: "Macho",
		foto: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFymZmfZvNXgr3ltxy4r_Sm9ZXnCaTcNVB8Q&usqp=CAU",
		peso: 5.1,
		descripcion:
			"Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.",
	},
	{
		nombre: "Cooper",
		raza: "Sphynx",
		tamano: "Mediano",
		edad: 2,
		sexo: "Hembra",
		foto: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCpLuMKexrK_u0LPjLWQkRliCc1Uh0wArkzQ&usqp=CAU",
		peso: 6,
		descripcion:
			"In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.\n\nAliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.\n\nSed ante. Vivamus tortor. Duis mattis egestas metus.",
	},
	{
		nombre: "Jack",
		raza: "Rottweiler",
		tamano: "Grande",
		edad: 14,
		sexo: "Macho",
		foto: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhGwYlzREQu1UCjRe_y7voSpTGOVBXd9Awqg&usqp=CAU",
		peso: 23.5,
		descripcion:
			"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus.\n\nVestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.",
	},
	{
		nombre: "Charlie",
		raza: "Azul ruso",
		tamano: "Pequeño",
		edad: 7,
		sexo: "Macho",
		foto: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWCeIkhgbMvAausz_cKUqNylLLNiQBudqqFQ&usqp=CAU",
		peso: 6.5,
		descripcion:
			"In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.",
	},
	{
		nombre: "Daisy",
		raza: "Terrier",
		tamano: "Mediano",
		edad: 6,
		sexo: "Hembra",
		foto: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTA3hM6f9I7R6Q8ceScU4fC6k9uS93m4-e8Pw&usqp=CAU",
		peso: 16.6,
		descripcion:
			"Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.",
	},
	{
		nombre: "Bella",
		raza: "Birmano",
		tamano: "Mediano",
		edad: 9,
		sexo: "Macho",
		foto: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBjAgzTd5_WqhOsU364NBAO-dbHHqcRGPfMA&usqp=CAU",
		peso: 9.3,
		descripcion:
			"Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.\n\nDuis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.\n\nIn sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.",
	},
	{
		nombre: "Firulais",
		raza: "Doberman",
		tamano: "Grande",
		edad: 11,
		sexo: "Hembra",
		foto: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPeBeLofqFUkIaeL7yS1H3wsKfHUAQltX60g&usqp=CAU",
		peso: 17.9,
		descripcion:
			"Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.",
	},
	{
		nombre: "Princesa",
		raza: "American Shorthair",
		tamano: "Mediano",
		edad: 3,
		sexo: "Hembra",
		foto: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6iy_bNvm1ggeIeYM40zEM529tRk2NAXBONvhXB2n9Pyd9vkCtNqoe1H0GMFugILV7DTs&usqp=CAU",
		peso: 7.9,
		descripcion:
			"Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.",
	},
	{
		nombre: "Fifi",
		raza: "Pincher",
		tamano: "Pequeño",
		edad: 10,
		sexo: "Hembra",
		foto: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUFuGVPIOzFvm1c6rCa6vu7JSHSOAZ7v1enA&usqp=CAU",
		peso: 4.3,
		descripcion:
			"Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.",
	},
];

module.exports = allPets;
