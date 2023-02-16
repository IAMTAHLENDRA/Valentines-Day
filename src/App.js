import React from "react";
import "./App.css";

import colors from "./utils/colors";
import Screen from "./components/Screen";

import ursinho_pandinha_ok from "./assets/ursinho_pandinha_ok.gif";
import ursinho_estudando from "./assets/ursinho_estudando.gif";
import pandinha_brava from "./assets/pandinha_fofa_cara_de_brava.gif";
import pandinha from "./assets/pandinha.gif";
import ursinho_S2_pandinha from "./assets/ursinho_S2_pandinha.gif";
import ursinha_chorando from "./assets/ursinha_chorando.gif";
import ursinho_chorando from "./assets/ursinho_chorando.gif";
import pandinha_martelo from "./assets/pandinha_martelo.png";
import ursinho_catucando_pandinha from "./assets/ursinho_catucando_pandinha.gif";
import ursinho_coracao from "./assets/ursinho_coracao.jpg";
import pandinha_coracao from "./assets/pandinha_coracao.gif";
import ursinhos_apaixonados from "./assets/ursinhos_apaixonados.gif";
import ursinhos_caminhada from "./assets/ursinhos_caminhada.jpg";
import ursinhos_fotinha from "./assets/ursinhos_fotinha.jpg";
import ursinhos_bebida from "./assets/ursinhos_bebida.gif";
import ursinha_mordidas from "./assets/ursinha_mordidas.gif";
import ursinho_pegando_no_sono from "./assets/ursinho_pegando_no_sono.gif";
import ursinhos_dormindo from "./assets/ursinhos_dormindo.gif";
import Ruby from "./assets/Ruby.jpeg";

const App = () => {

  return (
    <div className="main">
      <Screen
        imageUrl={ursinho_pandinha_ok}
        bgColor={colors.red}
        textColor={colors.white}
        title="These are Thalendra and Ruby"
        text="They've known each other for a long time, and were friends, but today they're beyond that... they're dating."
        btnText="know more"
        sequency="1"
      />
      <Screen
        imageUrl={ursinho_estudando}
        bgColor={colors.blue}
        textColor={colors.white}
        title="Little Thalendra"
        text="The Thalendra is very studious and funny, he always makes Ruby laugh, but he is very slow and doesn't always understand what the Padinha wants to say."
        btnText="Continue"
        sequency="2"
      />
      <Screen
        imageUrl={pandinha}
        bgColor={colors.pink}
        textColor={colors.white}
        title="Ruby"
        text="Ruby is very cute, she is always worried about her neighbor, but she has no patience. And he has a different way of showing what he feels..."
        btnText="Continue"
        sequency="3"
      />
      <Screen
        imageUrl={ursinho_S2_pandinha}
        bgColor={colors.red}
        textColor={colors.white}
        title="Thalendra Bear S2 Ruby"
        text="As I said, these two are now lovers, they are not perfect... but they always help each other and overcome problems together."
        btnText="Continue"
        sequency="4"
      />
      <Screen
        imageUrl={ursinha_chorando}
        bgColor={colors.purple}
        textColor={colors.white}
        title="sad Ruby"
        text="Sometimes Ruby is sad about some things, and is crying and sad... :( But the Thalendra always comes to try to cheer her up and almost always manages to make her laugh"
        btnText="Continue"
        sequency="5"
      />
      <Screen
        imageUrl={ursinho_chorando}
        bgColor={colors.green}
        textColor={colors.white}
        title="sad Thalendra"
        text="Sometimes it's the Thalendra that gets sad with some problems, and then the Ruby comes with her love and cuteness and helps the Thalendra when he's sad. :)"
        btnText="Continue"
        sequency="6"
      />
      <Screen
        imageUrl={pandinha_martelo}
        bgColor={colors.blue}
        textColor={colors.white}
        title="Thalendra"
        text="The Thalendra is slow and sometimes he doesn't understand what the Ruby meant exactly, and he understands it completely differently..."
        btnText="Continue"
        sequency="7"
      />
      <Screen
        imageUrl={pandinha_brava}
        bgColor={colors.yellow}
        textColor={colors.white}
        title="Ruby and her patience"
        text="The Ruby is VERY LOVING, but the lack of patience is the same... and sometimes she gets irritated because the Thalendra is slow."
        btnText="Continue"
        sequency="8"
      />
      <Screen
        imageUrl={ursinho_catucando_pandinha}
        bgColor={colors.purple}
        textColor={colors.white}
        title="Thalendra insistence"
        text="Ruby doesn't like to be direct, so the will disturb Ruby until she speaks..."
        btnText="Continue"
        sequency="9"
      />
      <Screen
        imageUrl={ursinho_coracao}
        bgColor={colors.blue}
        textColor={colors.white}
        title="Thalendra's love"
        text="Then the Thalendra, after hours of trying to explain, apologizes for being slow and says how much he loves Ruby."
        btnText="Owwwwn <3"
        sequency="10"
      />
      <Screen
        imageUrl={pandinha_coracao}
        bgColor={colors.yellow}
        textColor={colors.white}
        title="panda's love"
        text="The Ruby behind all her lack of patience also loves the Thalendra, and ends up saying that she loves him too."
        btnText="Owwwwn <3"
        sequency="11"
      />
      <Screen
        imageUrl={ursinhos_apaixonados}
        bgColor={colors.red}
        textColor={colors.white}
        title="After that..."
        text="After everything is resolved, the two are fine and happy... and do many things together like the friends and lovers that they are."
        btnText="Continue"
        sequency="12"
      />
      <Screen
        imageUrl={ursinhos_caminhada}
        bgColor={colors.pink}
        textColor={colors.white}
        title="they walk together"
        text="The two love to walk together, they laugh a lot, especially at Ruby's 'zinimiga'. ~ laughs"
        btnText="Walking..."
        sequency="13"
      />
      <Screen
        imageUrl={ursinhos_fotinha}
        bgColor={colors.green}
        textColor={colors.white}
        title="Today they take pictures together"
        text="The Ruby wants to look perfect in the photos, she always asks the Thalendra to take it again ~ laughs"
        btnText="More pics..."
        sequency="14"
      />
      <Screen
        imageUrl={ursinhos_bebida}
        bgColor={colors.purple}
        textColor={colors.white}
        title="drink together"
        text="Thalendra and Ruby love to drink together, and enjoy the good times with some songs"
        btnText="drinks after..."
        sequency="15"
      />
      <Screen
        imageUrl={ursinha_mordidas}
        bgColor={colors.blue}
        textColor={colors.white}
        title="The Thalendra is playing with the Thalendra"
        text="Looks like fun looking like this hahaha ... for the Thalendra of course... look at the poor Thalendra, look at the his little face! ~poor_people"
        btnText="Bites after..."
        sequency="16"
      />
      <Screen
        imageUrl={ursinho_pegando_no_sono}
        bgColor={colors.purple}
        textColor={colors.white}
        title="At night"
        text="But every day, when the little Thalendra can't stand to stay up talking to Ruby any longer, they say goodbye and pretend to sleep together."
        btnText="Naps later..."
        sequency="17"
      />
      <Screen
        imageUrl={ursinhos_dormindo}
        bgColor={colors.blue}
        textColor={colors.white}
        title="And finally sleep"
        text="See, they have a hard time sometimes, and they cry, and they get angry... but when everything falls into place, they love each other a lot and laugh."
        btnText="they sleep"
        sequency="18"
      />
      <Screen
        imageUrl={Ruby}
        bgColor={colors.red}
        textColor={colors.white}
        title="Happy Valentine's Day"
        text="Finally I thought of something that no one has ever given you and I have never given to anyone... I hope you like it. I love you Lidiane like I never loved anyone... ~Eddy"
        btnText="End"
        sequency="19"
      />
    </div>
  );
};

export default App;
