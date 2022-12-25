export class Contador {
  numero = 0;
  nombre;
  containerElement;
  cuentaElement;
	fosforos;

  constructor(nombre, containerElement, numeroInicial = 0) {
    this.nombre = nombre;
    this.containerElement = containerElement;
    this.cuentaElement = this.containerElement.querySelector(".cuenta");
    this.containerElement.querySelector(".agregar").addEventListener("click", () => this.agregar());
    this.containerElement.querySelector(".restar").addEventListener("click", () => this.restar());
    this.containerElement.querySelector("h2").innerText = this.nombre;
    this.numero = numeroInicial;
    this.actualizarCuenta();
  }

  agregar(cantidad = 1) {
    this.numero += cantidad;
    this.actualizarCuenta();
  }

  restar(cantidad = 1) {
    this.numero = Math.max(0,this.numero-cantidad) ;
    this.actualizarCuenta();
  }

  reset(){
    this.numero = 0;
    this.actualizarCuenta();
  }

  actualizarCuenta() {
    // this.cuentaElement.innerText = this.numero;
		const gruposActuales = this.cuentaElement.querySelectorAll(".grupo");
		if(gruposActuales.length > 0) {
			Array.from(gruposActuales).forEach(grupo => this.cuentaElement.removeChild(grupo));
		}
		for (let i = 0; i < this.numero; i++) {
			let grupoActual;
			if(i%5 === 0){
				const nuevoGrupo = document.createElement("div");
				nuevoGrupo.classList.add("grupo");
				this.grupoActual = nuevoGrupo;
				this.cuentaElement.appendChild(nuevoGrupo);
			}
			const nuevoFosforo = document.createElement("img");
			nuevoFosforo.classList.add("fosforo", "fosforo"+(i%5+1))
			nuevoFosforo.src = "img/fosforo.png";
			this.grupoActual.appendChild(nuevoFosforo)
		}
  }
}
