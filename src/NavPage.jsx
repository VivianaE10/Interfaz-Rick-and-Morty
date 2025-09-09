const NavPage = (props) => {
  return (
    <div className="flex justify-around">
      <p
        className="bg-orange-400 text-black font-bold py-2 px-4 rounded"
        onClick={() => props.setPage(props.page - 1)}
      >
        Page:{props.page}
      </p>
      <button
        className="bg-orange-400 text-black font-bold py-2 px-4 rounded"
        //debo capturar en metodod onClick para que el boton me funcione y cundo de el click estoy capturando el evento de la funcion.
        onClick={() => props.setPage(props.page + 1)} // miramos que en la consola nos esta funcionando el click
        //cuando de un click desde props va resibir setpage(que cambia el valor de la pagina)
      >
        Page {props.page + 1}
      </button>
    </div>
  );
};

export default NavPage;
