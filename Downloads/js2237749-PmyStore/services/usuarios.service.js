const faker = require('faker');//Importamos faker y almacenamos

//----------------------------------------------------------

class UsuariosService {//Crear clase
  constructor(){//Metodo constructor y sus propiedades
    this.usuarios = [];
  }

//-----------------------------------------------------

create(data){//Funcion con parametro
  const newUsuario = {//Variable almacena un objeto, genera id de forma randomica y procede a mostrar los datos insomnia
    id: faker.datatype.uuid(),
    ...data
  }
  this.usuarios.push(newUsuario);//Agrega nuevo registro a la propiedad mediante el metodo push
  return newUsuario;//Devuelve como resultado el objeto
}

//--------------------------------------------------------

find(){//Funcion
  return new Promise((resolve, reject)=>{//Objeto promise, parametro callback que contiene 2 callbacks, funcion asincrona que a su vez tiene un callback y tiempo en milisegundos
    setTimeout(() => {
      resolve(this.usuarios);
    }, 5000);
  });
}

//-----------------------------------------------

findOne(id){//Funcion con parametro
  return this.usuarios.find(item => item.id === id);//Toma la propiedad, aplica metodo find para encontrar el id, callback que compara los id y luego genera el resultado
}

//-------------------------------------------------------

update(id, changes){//Funcion con 2 parametros
  const index = this.usuarios.findIndex(item => item.id === id);//Toma la propiedad, aplica metodo para identificar la posicion del id, callback que entrega el id y lo almacena
  if (index===-1) {//Si index no encuentra el elemento envia un mensaje de error
    throw new Error('product not found');
  }
  const usuario = this.usuarios[index];//Toma la propiedad, identifica posicion y la almacena
  this.usuarios[index]={//Toma la propiedad, identifica la posicion, indica que quiere que persistan todos los atributos y que se generen todos los cambios
    ...usuario,
    ...changes
  };
  return this.usuarios[index];//Toma la propiedad, identifica posicion y la entrega como resultado
}

//-----------------------------------------------------------

delete(id){//Funcion con parametro
  const index = this.usuarios.findIndex(item => item.id === id);//Aplicara metodo findIndex a la propiedad para encontrar la posicion del id y almacenarla en la variable constante
  if (index===-1) {//Si index no encuentra el elemento envia un mensaje de error
    throw new Error('product not found');
  }
  this.usuarios.splice(index, 1);//Toma la propiedad, aplica metodo para eliminar la posicion y el elemento
  return {id};//Entrega como resultado el parametro que fue eliminado
}
}

//-----------------------------------------------------

module.exports = UsuariosService;//Exportamos el modulo
