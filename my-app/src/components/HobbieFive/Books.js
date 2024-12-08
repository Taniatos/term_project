import React from "react";
import HobbieDefault from "../HobbieDefault/HobbieDefault";

// Fiction & Genres
import FictionOne from "../../images/Books_Imgs/fiction_one_img.png";
import FictionTwo from "../../images/Books_Imgs/fiction_two_img.png";
import FictionThree from "../../images/Books_Imgs/fiction_three_img.png";
import FictionFour from "../../images/Books_Imgs/fiction_four_img.png";
import FictionFive from "../../images/Books_Imgs/fiction_five_img.png";
import FictionSix from "../../images/Books_Imgs/fiction_six_img.png";
import FictionSeven from "../../images/Books_Imgs/fiction_seven_img.png";
import FictionEight from "../../images/Books_Imgs/fiction_eight_img.png";
import FictionNine from "../../images/Books_Imgs/fiction_nine_img.png";
import FictionTen from "../../images/Books_Imgs/fiction_ten_img.png";
import FictionEleven from "../../images/Books_Imgs/fiction_eleven_img.png";
import FictionTwelve from "../../images/Books_Imgs/fiction_twelve_img.png";
import FictionThirteen from "../../images/Books_Imgs/fiction_thirteen_img.png";
import FictionFourteen from "../../images/Books_Imgs/fiction_fourteen_img.png";
import FictionFifteen from "../../images/Books_Imgs/fiction_fifteen_img.png";

// Non-Fiction 
import NonFictionOne from "../../images/Books_Imgs/nonfiction_one_img.png";
import NonFictionTwo from "../../images/Books_Imgs/nonfiction_two_img.png";
import NonFictionThree from "../../images/Books_Imgs/nonfiction_three_img.png";
import NonFictionFour from "../../images/Books_Imgs/nonfiction_four_img.png";
import NonFictionFive from "../../images/Books_Imgs/nonfiction_five_img.png";
import NonFictionSix from "../../images/Books_Imgs/nonfiction_six_img.png";
import NonFictionSeven from "../../images/Books_Imgs/nonfiction_seven_img.png";
import NonFictionEight from "../../images/Books_Imgs/nonfiction_eight_img.png";
import NonFictionNine from "../../images/Books_Imgs/nonfiction_nine_img.png";
import NonFictionTen from "../../images/Books_Imgs/nonfiction_ten_img.png";
import NonFictionEleven from "../../images/Books_Imgs/nonfiction_eleven_img.png";
import NonFictionTwelve from "../../images/Books_Imgs/nonfiction_twelve_img.png";
import NonFictionThirteen from "../../images/Books_Imgs/nonfiction_thirteen_img.png";
import NonFictionFourteen from "../../images/Books_Imgs/nonfiction_fourteen_img.png";
import NonFictionFifteen from "../../images/Books_Imgs/nonfiction_fifteen_img.png";




function Books() {
  const booksContent = {
    title: "Books",
    description:
      "I studied English literature as my second major, and hence, I read a lot of books. And, of course, I read many books outside the program. My top places to read are the subway and trains - why waste time just looking at the window?",
    sections: [
      {
        title: "Fiction & Genres",
        description: "I bet you'll eventually love these books.",
        images: [
          { url: FictionOne, caption: "The Lord of the Rings by J.R.R. Tolkien" },
          { url: FictionTwo, caption: "A Song of Ice and Fire by G.R.R. Martin" },
          { url: FictionThree, caption: "Harry Potter series by J.K. Rowling" },
          { url: FictionFour, caption: "The Hobbit by J.R.R. Tolkien" },
          { url: FictionFive, caption: "Dune by Frank Herbert" },
          { url: FictionSix, caption: "The Da Vinci Code by Dan Brown" },
          { url: FictionSeven, caption: "Murder on the Orient Express by A. Christie" },
          { url: FictionEight, caption: "Jane Eyre by Charlotte Brontë" },
          { url: FictionNine, caption: "Outlander by Diana Gabaldon" },
          { url: FictionTen, caption: "Dracula by Bram Stoker" },
          { url: FictionEleven, caption: "Frankenstein by Mary Shelley" },
          { url: FictionTwelve, caption: "1984 by George Orwell" },
          { url: FictionThirteen, caption: "The Great Gatsby by F. S Fitzgerald" },
          { url: FictionFourteen, caption: "Brave New World by Aldous Huxley" },
          { url: FictionFifteen, caption: "Divergent by Veronica Roth" },
        ],
      },
      {
        title: "Non-fiction",
        description: "that will expand your mind and teach you something new.",
        images: [
          { url: NonFictionOne, caption: "Bloodlands by Timothy Snyder" },
          { url: NonFictionTwo, caption: "Sapiens: A Brief History of Humankind by Y. N. Harari" },
          { url: NonFictionThree, caption: "The Power of Habit by Charles Duhigg" },
          { url: NonFictionFour, caption: "Thinking, Fast and Slow by D. Kahneman" },
          { url: NonFictionFive, caption: "The Glass Castle by Jeannette Walls" },
          { url: NonFictionSix, caption: "Into the Wild by Jon Krakauer" },
          { url: NonFictionSeven, caption: "Man's Search for Meaning by V. E. Frankl" },
          { url: NonFictionEight, caption: "Born a Crime by Trevor Noah" },
          { url: NonFictionNine, caption: "Quiet: The Power of Introverts by S. Cain" },
          { url: NonFictionTen, caption: "Guns, Germs, and Steel by J. Diamond" },
          { url: NonFictionEleven, caption: "Why We Sleep by Matthew Walker" },
          { url: NonFictionTwelve, caption: "Hiroshima by John Hersey" },
          { url: NonFictionThirteen, caption: "The Black Swan by Nassim N. Taleb" },
          { url: NonFictionFourteen, caption: "A Brief History of Time by S. Hawking" },
          { url: NonFictionFifteen, caption: "Why Nations Fail by D. Acemoglu & J. A. Robinson" },
        ],
      },
    ],
  };

  return <HobbieDefault {...booksContent} />;
}

export default Books;
