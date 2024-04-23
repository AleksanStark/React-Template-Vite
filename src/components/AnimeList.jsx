const AnimeList = ({ animes }) => {
  return (
    <div>
      <ul>
        {animes.map((anime) => {
          return (
            // eslint-disable-next-line react/jsx-key
            <li key={anime.id}>
              <h2>{anime.name}</h2>
              <video src={anime.url} controls></video>
              <img
                src="https://data.terabox.com/thumbnail/dc291f259d308f3cade315b849938b9c?fid=4400473659587-250528-608852438717996&rt=pr&sign=FDTAER-DCb740ccc5511e5e8fedcff06b081203-7V0iiVuSwFu4gDfSw2LGzQt62%2fg%3d&expires=8h&chkbd=0&chkv=0&dp-logid=327991339263849183&dp-callid=0&time=1713848400&size=c1680_u1050&quality=90&vuk=4400473659587&ft=image&autopolicy=1"
                alt=""
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
};
export default AnimeList;
