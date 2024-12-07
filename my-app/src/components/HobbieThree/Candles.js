import React from "react";
import HobbieDefault from "../HobbieDefault/HobbieDefault";
import "./Candles.css";

// Candles Images
import CandleOneImage from "../../images/Candles_imgs/candle_one_img.png";
import CandleTwoImage from "../../images/Candles_imgs/candle_two_img.png";
import CandleThreeImage from "../../images/Candles_imgs/candle_three_img.png";
import CandleFourImage from "../../images/Candles_imgs/candle_four_img.png";
import CandleFiveImage from "../../images/Candles_imgs/candle_five_img.png";
import CandleSixImage from "../../images/Candles_imgs/candle_six_img.png";

function Candles() {
  const candlesContent = {
    title: "Candles",
    description:
      "Another therapy of mine! Candle-making relaxes me and frees my mind, and I hope you'll enjoy it too. I have prepared a simple kickstart guide on how to make your first candle. Moreover, handmade candles are a perfect present from you to your friends and family!",
    sections: [
      {
        title: "",
        description: "Just have a look at these beauties!",
        images: [
          { url: CandleOneImage },
          { url: CandleTwoImage },
          { url: CandleThreeImage },
          { url: CandleFourImage },
          { url: CandleFiveImage },
          { url: CandleSixImage },
        ],
      },
    ],
  };

  return (
    <div>
      <HobbieDefault {...candlesContent} />
      <section className="candles-section">
        <div className="ingredients-table">
          <h2>Ingredients</h2>
          <table>
            <tbody>
              <tr>
                <td>Wax</td>
                <td>Soy, beeswax, or paraffin; each type offers unique qualities and can be chosen based on personal preference or availability.</td>
              </tr>
              <tr>
                <td>Wick</td>
                <td>Pre-waxed or plain cotton for clean burning; ensure the wick size is suitable for your container size.</td>
              </tr>
              <tr>
                <td>Heat-safe container</td>
                <td>Jars, tins, or ceramic pots designed to handle high heat without cracking.</td>
              </tr>
              <tr>
                <td>Fragrance Oils</td>
                <td>Optional for scented candles; use high-quality oils designed specifically for candle-making.</td>
              </tr>
              <tr>
                <td>Color Dye</td>
                <td>Optional for colorful candles; choose candle-specific dyes for the best results.</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="steps-table">
          <h2>Steps</h2>
          <table>
            <tbody>
              <tr>
                <td className="step-number">1</td>
                <td>Prepare the container and secure the wick using adhesive or a wick holder. Ensure the wick is centered and stable for an even burn.</td>
              </tr>
              <tr>
                <td className="step-number">2</td>
                <td>Melt the wax using a double boiler to avoid burning. Stir the wax occasionally and monitor the temperature for optimal melting.</td>
              </tr>
              <tr>
                <td className="step-number">3</td>
                <td>Add fragrance and dye (optional) to the melted wax, stirring well to ensure even distribution. Use the recommended ratios for best results.</td>
              </tr>
              <tr>
                <td className="step-number">4</td>
                <td>Cool the wax slightly before pouring to prevent container cracking or wick displacement. Let it cool to about 55°C (130°F).</td>
              </tr>
              <tr>
                <td className="step-number">5</td>
                <td>Pour the wax into the container slowly, avoiding bubbles. Leave some space at the top of the container for a polished finish.</td>
              </tr>
              <tr>
                <td className="step-number">6</td>
                <td>Trim the wick to 1/4 inch once the wax has set completely. This ensures a clean burn and minimizes soot.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}

export default Candles;
