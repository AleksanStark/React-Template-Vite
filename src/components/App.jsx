// src/Api
import Product from "./Product";
import Mailbox from "./Mailbox";
import AnimeList from "./AnimeList";

const favouriteAnime = [
  {
    id: "id-1",
    name: "Sword Art Online",
    url: "https://rr5---sn-hp57kndk.googlevideo.com/videoplayback?expire=1713872378&ei=mUknZre_NPHIy_sPro6HqAo&ip=89.149.16.88&id=o-AMFdvPWOZmsfm_2FHjbfF5alN1tOAHBQKXvTHSmW7lL7&itag=22&source=youtube&requiressl=yes&xpc=EgVo2aDSNQ%3D%3D&mh=s0&mm=31%2C29&mn=sn-hp57kndk%2Csn-hp57ynlr&ms=au%2Crdu&mv=m&mvi=5&pl=24&pcm2=no&initcwndbps=637500&spc=UWF9fxWC2pfUaHv7Q8lv5sveG9Q-8tCuQFvZ&vprv=1&svpuc=1&mime=video%2Fmp4&cnr=14&ratebypass=yes&dur=990.702&lmt=1673731725927161&mt=1713850142&fvip=1&c=ANDROID&txp=5311224&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cxpc%2Cpcm2%2Cspc%2Cvprv%2Csvpuc%2Cmime%2Ccnr%2Cratebypass%2Cdur%2Clmt&sig=AJfQdSswRAIgYJ20JLyk3w2BbG45DE8QOUmsevT-sFYO9zp_p0NmccQCIC1bPl8VtCdGRw4hW86FdIIqrcNKzQF1ZrNb77wXeI0C&lsparams=mh%2Cmm%2Cmn%2Cms%2Cmv%2Cmvi%2Cpl%2Cinitcwndbps&lsig=AHWaYeowRQIhAKp-EzvogyQfbyXZ166Fvt_xVIU8iSMiWdHwEh0_RkC-AiAf674W-rLH54RBUFHdpm4IUXJfUldkkfQUlsrQkXVjOw%3D%3D&title=%D0%92%D0%BE%D1%81%D1%85%D0%BE%D0%B6%D0%B4%D0%B5%D0%BD%D0%B8%D0%B5%20%D0%B3%D0%B5%D1%80%D0%BE%D1%8F%20%D1%89%D0%B8%D1%82%D0%B0%20-%201%20%D1%81%D0%B5%D1%80%D0%B8%D1%8F%20%7C%20%D0%9E%D0%B7%D0%B2%D1%83%D1%87%D0%BA%D0%B0%2F%D0%94%D1%83%D0%B1%D0%BB%D1%8F%D0%B6",
  },
];
export default function App() {
  return (
    <div>
      <h1>Best Selling</h1>

      <Product
        name="Mahito"
        imgUrl="https://www.simplyrecipes.com/thmb/i-isg1NjF2vuJi3f90HBsZZZWd0=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/__opt__aboutcom__coeus__resources__content_migration__simply_recipes__uploads__2017__06__mojito-vertical-a-1800-51e66b7f72bc49e2a82c5d2ef48b8825.jpg"
        price={100}
      />
      <Product name="Peach Juice" price={100} />
      <Product name="Tomato Juice" price={200} />
      <Mailbox name="Alex" unreadMessages={[]} />
      <AnimeList animes={favouriteAnime} />
    </div>
  );
}
