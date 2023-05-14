import { YMaps, Map, Placemark } from "@pbe/react-yandex-maps";

const AboutPage = () => {
  const defaultState = {
    center: [61.787805, 34.334178],
    zoom: 15,
  };

  return (
    <YMaps>
      <div className="flex flex-col gap-6 p-6 text-text-color">
        <h1 className="text-center text-2xl font-bold tracking-tight text-text-color">
          О нас
        </h1>
        <p className="text-center">Мы находимся в городе Петрозавосдк, по адресу суоярвская 5</p>
      </div>
      <Map width={"100%"} height={"300px"} defaultState={defaultState}>
        <Placemark geometry={[61.787805, 34.334178]} />
      </Map>
    </YMaps>
  );
};

export default AboutPage;
