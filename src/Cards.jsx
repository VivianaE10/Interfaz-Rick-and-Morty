import { useEffect, useState } from "react";

const CardS = (props) => {
  const [episode, setEpisode] = useState({}); // el arreglo me llama la url rickandmorti
  useEffect(() => {
    getEpisode(); // para que no me funcione el boton
  }, [props.primeraVez]);

  const getEpisode = async () => {
    const response = await fetch(props.primeraVez[0]); // useState me llama
    const data = await response.json();
    setEpisode(data);
  };

  return (
    <div className="flex  gap-3 h-72 rounded-xl bg-gray-t  ">
      <img className="rounded-l-xl" src={props.imagen} alt="" />

      <div className=" flex flex-col justify-evenly">
        <div>
          <h1 className="text-4xl font-bold text-white hover:text-orange-400 cursor-pointer">
            {props.nombre}
          </h1>

          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-red-700 rounded-full "></div>

            <p className="text-white font-bold text-base">
              {props.estado}-{props.especie}
            </p>
          </div>
        </div>

        <div>
          <p className="text-regal-gray">Last Known Location:</p>
          <p className="text-neutral-100 font-light  hover:text-orange-400 cursor-pointer">
            {props.vistoUltima}
          </p>
        </div>

        <div>
          <p className="text-regal-gray">First seen in:</p>
          <p className="text-neutral-100 font-light  hover:text-orange-400 cursor-pointer">
            {episode?.name}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CardS;
