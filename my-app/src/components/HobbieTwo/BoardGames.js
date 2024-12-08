import React from "react";
import HobbieDefault from "../HobbieDefault/HobbieDefault";

// Games 1
import CodenamesImage from "../../images/Games_Imgs/codenames_img.png";
import KittensImage from "../../images/Games_Imgs/kittens_img.png";
import HumanityImage from "../../images/Games_Imgs/humanity_img.png";
import SushiImage from "../../images/Games_Imgs/sushi_img.png";
import HerdImage from "../../images/Games_Imgs/herd_img.png";
import SaboteurImage from "../../images/Games_Imgs/saboteur_img.png";
import DixitImage from "../../images/Games_Imgs/dixit_img.png";
import CitadelsImage from "../../images/Games_Imgs/citadels_img.png";
import DecryptoImage from "../../images/Games_Imgs/decrypto_img.png";

// Games 2
import MarsImage from "../../images/Games_Imgs/mars_img.png";
import BrassImage from "../../images/Games_Imgs/brass_img.png";
import WondersImage from "../../images/Games_Imgs/wonders_img.png";
import ArnakImage from "../../images/Games_Imgs/arnak_img.png";
import WingspanImage from "../../images/Games_Imgs/wingspan_img.png";
import EverdellImage from "../../images/Games_Imgs/everdell_img.png";
import UnderwaterImage from "../../images/Games_Imgs/underwater_img.png";
import LotrImage from "../../images/Games_Imgs/lotr_img.png";
import GotImage from "../../images/Games_Imgs/got_img.png";
import CarcassImage from "../../images/Games_Imgs/carcass_img.png";
import TicketImage from "../../images/Games_Imgs/ticket_img.png";
import SecretImage from "../../images/Games_Imgs/secret_img.png";
import ArkhamImage from "../../images/Games_Imgs/arkham_img.png";
import DuneImage from "../../images/Games_Imgs/dune_img.png";
import StarwarsImage from "../../images/Games_Imgs/starwars_img.png";
import ScytheImage from "../../images/Games_Imgs/scythe_img.png";
import RootImage from "../../images/Games_Imgs/root_img.png";
import VikingsImage from "../../images/Games_Imgs/vikings_img.png";

function BoardGames() {
  const boardGamesContent = {
    title: "Board Games",
    description:
      "Guess how I spend time with my friends. Yes, it's board games of different genres and complexity. On this page, you'll find my TOP games I always recommend.",
    sections: [
      {
        title: "Games for parties",
        description: "to have fun and enjoy your time together.",
        images: [
          { url: CodenamesImage, caption: "Codenames" },
          { url: KittensImage, caption: "Exploding Kittens" },
          { url: HumanityImage, caption: "Cards Against Humanity" },
          { url: SushiImage, caption: "Sushi Go" },
          { url: HerdImage, caption: "Herd Mentality" },
          { url: SaboteurImage, caption: "Saboteur" },
          { url: DixitImage, caption: "Dixit" },
          { url: CitadelsImage, caption: "Citadels" },
          { url: DecryptoImage, caption: "Decrypto" },
        ],
      },
      {
        title: "Games to think",
        description: "but you will never regret it!",
        images: [
          { url: MarsImage, caption: "Terraforming Mars" },
          { url: BrassImage, caption: "Brass: Birmingham" },
          { url: WondersImage, caption: "7 Wonders" },
          { url: ArnakImage, caption: "Lost Ruins Of Arnak" },
          { url: WingspanImage, caption: "Wingspan" },
          { url: EverdellImage, caption: "Everdell" },
          { url: UnderwaterImage, caption: "Underwater Cities" },
          { url: LotrImage, caption: "Lord Of The Rings" },
          { url: GotImage, caption: "A Game Of Thrones" },
          { url: CarcassImage, caption: "Carcassonne" },
          { url: TicketImage, caption: "Ticket To Ride" },
          { url: SecretImage, caption: "Secret Hitler" },
          { url: ArkhamImage, caption: "Arkham Horror" },
          { url: DuneImage, caption: "Dune: Imperium" },
          { url: StarwarsImage, caption: "Star Wars" },
          { url: ScytheImage, caption: "Scythe" },
          { url: RootImage, caption: "Root" },
          { url: VikingsImage, caption: "Vikings" },
        ],
      },
    ],
  };

  return (
    <div className="board-games-container">
      <HobbieDefault {...boardGamesContent} />
    </div>
  );
}

export default BoardGames;
