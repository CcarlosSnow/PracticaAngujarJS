angular.module("MyFirstApp",[]).controller("FirstController", 
	["$scope", function(s){
	s.nombre = "Juan Bazán";
	s.nuevoComentario = {};
	s.comentarios = [{
		comentario: "Buen Tutorial",
		username: "Usuario1"
	},
	{
		comentario: "Mal Tutorial",
		username: "Usuario2"
	}];
	s.agregarComentario = function(){
		s.comentarios.push(s.nuevoComentario);
		s.nuevoComentario = {};
	}
}]);