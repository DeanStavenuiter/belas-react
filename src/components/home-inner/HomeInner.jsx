import "./HomeInner.css";
import Logo from "../logo/Logo";
import CardHome from "../card-home/CardHome";

const HomeInner = () => {
  return (
    <div className="home-inner">
      <Logo />
      <div className="cards">
        <CardHome
          image="public/images/20220722_132141.jpg"
          name="Staal constructies"
          link=""
        />
        <CardHome
          image="public/images/20221221_104057.jpg"
          name="Aluminium hekwerken"
          link=""
        />
        <CardHome
          image="public/images/20220124_113714.jpg"
          name="Machine bouw"
          link=""
        />
        <CardHome image="" name="Stalen hekken" link="" />
        <CardHome image="public/images/20230221_191559.jpg" name="Voorraad" />
        <CardHome image="" name="Over ons" link="" />
      </div>
    </div>
  );
};

export default HomeInner;
