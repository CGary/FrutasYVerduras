import React from "react";
import * as st from "./styles";
import { Head } from "../../components/Head";
import { Delivery } from "../../components/Delivery";
import { Categorias } from "../../components/Categorias";
import { RiHandbagLine } from "react-icons/ri";

const Home = () => {
  return (
    <st.Main>
      <Head />
      <Delivery />
      <Categorias />
      <st.Contenedor>
        <st.TitleDestacado className="negro home-destacado">
          Productos Destacados
        </st.TitleDestacado>
        {arrFrutas.map((f, i) => (
          <st.Fruta key={"fruta-" + i}>
            <img src={f.url} />
            <st.Descripcion>
              <st.TitleFruta className="negro texto-1linea">
                {f.name}
              </st.TitleFruta>
              <st.Precio className="texto-1linea">{f.precio}</st.Precio>
              <st.Car href="#" className="a-button">
                <RiHandbagLine />
                Al Carrito
              </st.Car>
            </st.Descripcion>
          </st.Fruta>
        ))}
      </st.Contenedor>
    </st.Main>
  );
};

export default Home;

const arrFrutas = [
  {
    url:
      "https://estaticos.miarevista.es/media/cache/1140x_thumb/uploads/images/article/5e53c4125bafe801dabfb62f/comer-semillas-manzana.jpg",
    name: "Manzana",
    precio: "1Bs / Unidad",
  },
  {
    url:
      "https://imparcialoaxaca.mx/wp-content/uploads/2018/08/DlXk9BqXsAU7Xvl_1024x684.jpg",
    name: "Manzana Verde",
    precio: "1Bs / Unidad",
  },
  {
    url:
      "https://dam.cocinafacil.com.mx/wp-content/uploads/2018/05/propiedades-de-la-pera-salud-belleza.jpg",
    name: "Pera",
    precio: "1Bs / Unidad",
  },
  {
    url:
      "https://static2.abc.es/media/bienestar/2019/07/25/platano-beneficios-kIyF--620x349@abc.jpg",
    name: "Banana",
    precio: "1Bs / Unidad",
  },
  {
    url:
      "https://estaticos.miarevista.es/media/cache/1140x_thumb/uploads/images/gallery/59799f115bafe8f88e3c989a/kiwi-int.jpg",
    name: "Kiwi",
    precio: "1Bs / Unidad",
  },
  {
    url: "http://campalfrutas.com/wp-content/uploads/2017/09/pessego.jpg",
    name: "Durazno",
    precio: "1Bs / Unidad",
  },
  {
    url:
      "https://storage.googleapis.com/portalfruticola/2019/07/60e79e66-uva-shutterstock_130380677-1024x683.jpg",
    name: "Uva",
    precio: "1Bs / Unidad",
  },
  {
    url:
      "https://www.hogarmania.com/archivos/201208/higos-4-xl-321x171x80xX.jpg",
    name: "Higo",
    precio: "1Bs / Unidad",
  },
  {
    url:
      "https://estaticos.miarevista.es/media/cache/1140x_thumb/uploads/images/article/5e53c4125bafe801dabfb62f/comer-semillas-manzana.jpg",
    name: "Manzana",
    precio: "1Bs / Unidad",
  },
  {
    url:
      "https://imparcialoaxaca.mx/wp-content/uploads/2018/08/DlXk9BqXsAU7Xvl_1024x684.jpg",
    name: "Manzana Verde",
    precio: "1Bs / Unidad",
  },
  {
    url:
      "https://dam.cocinafacil.com.mx/wp-content/uploads/2018/05/propiedades-de-la-pera-salud-belleza.jpg",
    name: "Pera",
    precio: "1Bs / Unidad",
  },
  {
    url:
      "https://static2.abc.es/media/bienestar/2019/07/25/platano-beneficios-kIyF--620x349@abc.jpg",
    name: "Banana",
    precio: "1Bs / Unidad",
  },
  {
    url:
      "https://estaticos.miarevista.es/media/cache/1140x_thumb/uploads/images/gallery/59799f115bafe8f88e3c989a/kiwi-int.jpg",
    name: "Kiwi",
    precio: "1Bs / Unidad",
  },
  {
    url: "http://campalfrutas.com/wp-content/uploads/2017/09/pessego.jpg",
    name: "Durazno",
    precio: "1Bs / Unidad",
  },
  {
    url:
      "https://storage.googleapis.com/portalfruticola/2019/07/60e79e66-uva-shutterstock_130380677-1024x683.jpg",
    name: "Uva",
    precio: "1Bs / Unidad",
  },
  {
    url:
      "https://www.hogarmania.com/archivos/201208/higos-4-xl-321x171x80xX.jpg",
    name: "Higo",
    precio: "1Bs / Unidad",
  },
];
