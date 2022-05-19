import styles from "../../../../styles/Player.module.css";
import { useEffect, useRef, useState } from "react";
import { createGlobalStyle } from "styled-components";
import PageTemplate from "../music/page-template";
import Search from "../music/search";
import PlayerTemplate from "../music/player-template";
import ButtonsBox from "../music/buttons-box";
import Volume from "../music/volume";
import PlaylistTemplate from "../music/playlist-template";
import PlaylistItem from "../music/playlist-item";
import Title from "../music/title";
import Time from "../music/time";
import Progress from "../music/progress";

import LoopCurrent from "../music/loop-current";
import Pause from "../music/pause";
import Next from "../music/next";
import Previous from "../music/previous";
import Play from "../music/play";
import Shuffle from "../music/shuffle";

const colors = `html{
  --searchBackground: #18191f;
  --searchText: #ffffff;
  --searchPlaceHolder: #575a77;
  --playerBackground: #18191f;
  --titleColor: #ffffff;
  --timeColor: #ffffff;
  --progressSlider: #ffffff;
  --progressUsed: #ffffff;
  --progressLeft: #151616;
  --volumeSlider: #ffffff;
  --volumeUsed: #ffffff;
  --volumeLeft:  #151616;
  --playlistBackground: #18191f;
  --playlistText: #575a77;
  --playlistBackgroundHoverActive:  #18191f;
  --playlistTextHoverActive: #ffffff;
}`;

const Player = ({
  trackList,
  includeSearch = false,
  showPlaylist = true,
  autoPlayNextTrack = true,
  customColorScheme = colors,
}) => {
  const [query, updateQuery] = useState("");

  let playlist = [];

  const [audio, setAudio] = useState(null);
  const [active, setActive] = useState(false);
  const [title, setTitle] = useState("");
  const [length, setLength] = useState(0);
  const [time, setTime] = useState(0);
  const [slider, setSlider] = useState(1);
  const [drag, setDrag] = useState(0);
  const [volume, setVolume] = useState(0.8);
  const [end, setEnd] = useState(0);
  const [shuffled, setShuffled] = useState(false);
  const [looped, setLooped] = useState(false);

  const [filter, setFilter] = useState([]);
  let [curTrack, setCurTrack] = useState(0);

  const GlobalStyles = createGlobalStyle`
  ${customColorScheme}`;

  const fmtMSS = (s) => new Date(1000 * s).toISOString().substr(15, 4);

  useEffect(() => {
    const audio = new Audio(trackList[curTrack].url);

    const setAudioData = () => {
      setLength(audio.duration);
      setTime(audio.currentTime);
    };

    const setAudioTime = () => {
      const curTime = audio.currentTime;
      setTime(curTime);
      setSlider(curTime ? ((curTime * 100) / audio.duration).toFixed(1) : 0);
    };

    const setAudioVolume = () => setVolume(audio.volume);

    const setAudioEnd = () => setEnd((end += 1));

    audio.addEventListener("loadeddata", setAudioData);
    audio.addEventListener("timeupdate", setAudioTime);
    audio.addEventListener("volumechange", setAudioVolume);
    audio.addEventListener("ended", setAudioEnd);

    setAudio(audio);
    setTitle(trackList[curTrack].title);

    return () => {
      audio.pause();
    };
  }, []);

  const shufflePlaylist = (arr) => {
    if (arr.length === 1) return arr;
    const rand = Math.floor(Math.random() * arr.length);
    return [arr[rand], ...shufflePlaylist(arr.filter((_, i) => i != rand))];
  };

  const isInitialMount = useRef(true);
  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false;
    } else {
      if (shuffled) {
        playlist = shufflePlaylist(playlist);
      }
      !looped && autoPlayNextTrack ? next() : play();
    }
  }, [end]);

  useEffect(() => {
    if (audio != null) {
      audio.volume = volume;
    }
  }, [volume]);

  useEffect(() => {
    if (audio != null) {
      pause();
      const val = Math.round((drag * audio.duration) / 100);
      audio.currentTime = val;
    }
  }, [drag]);

  const play = () => {
    setActive(true);
    audio.play();
  };

  const pause = () => {
    setActive(false);
    audio.pause();
  };

  const loop = () => {
    setLooped(!looped);
  };

  useEffect(() => {
    if (audio != null) {
      audio.src = trackList[curTrack].url;
      setTitle(trackList[curTrack].title);
      play();
    }
  }, [curTrack]);

  const previous = () => {
    const index = playlist.indexOf(curTrack);
    index !== 0
      ? setCurTrack((curTrack = playlist[index - 1]))
      : setCurTrack((curTrack = playlist[playlist.length - 1]));
  };

  const next = () => {
    const index = playlist.indexOf(curTrack);
    index !== playlist.length - 1
      ? setCurTrack((curTrack = playlist[index + 1]))
      : setCurTrack((curTrack = playlist[0]));
  };

  const shuffle = () => {
    setShuffled(!shuffled);
  };

  const playlistItemClickHandler = (e) => {
    const num = Number(e.currentTarget.getAttribute("data-key"));
    const index = playlist.indexOf(num);
    setCurTrack((curTrack = playlist[index]));
    play();
  };

  const isInitialFilter = useRef(true);
  useEffect(() => {
    if (isInitialFilter.current) {
      isInitialFilter.current = false;
    } else {
      if (!playlist.includes(curTrack)) {
        setCurTrack((curTrack = playlist[0]));
      }
    }
  }, [filter]);

  return (
    <PageTemplate>
      <GlobalStyles />
      {includeSearch && (
        <Search
          value={query}
          onChange={(e) => updateQuery(e.target.value.toLowerCase())}
          placeholder={`Search ${trackList.length} tracks...`}
        />
      )}
      <PlayerTemplate>
        <div className={styles.title_time_wrapper}>
          <Title title={title} />
          <Time
            time={`${!time ? "0:00" : fmtMSS(time)}/${
              !length ? "0:00" : fmtMSS(length)
            }`}
          />
        </div>
        <Progress
          value={slider}
          onChange={(e) => {
            setSlider(e.target.value);
            setDrag(e.target.value);
          }}
          onMouseUp={play}
          onTouchEnd={play}
        />
        <div className={styles.buttons_volume_wrapper}>
          <ButtonsBox>
            <LoopCurrent
              src={looped ? "/icons/loop_current.png" : "/icons/loop_none.png"}
              onClick={loop}
            />
            <Previous src="/icons/previous.png" onClick={previous} />
            {active ? (
              <Pause src="/icons/pause.png" onClick={pause} />
            ) : (
              <Play src="/icons/play.png" onClick={play} />
            )}
            <Next src="/icons/next.png" onClick={next} />
            <Shuffle
              src={
                shuffled ? "/icons/shuffle_all.png" : "/icons/shuffle_none.png"
              }
              onClick={shuffle}
            />
          </ButtonsBox>
          <Volume
            value={volume}
            onChange={(e) => {
              setVolume(e.target.value / 100);
            }}
          />
        </div>
      </PlayerTemplate>
      {showPlaylist && (
        <PlaylistTemplate>
          {trackList
            .sort((a, b) => (a.title > b.title ? 1 : -1))
            .map((el, index) => {
              if (filter.length === 0) {
                if (el.title.toLowerCase().includes(query.toLowerCase())) {
                  playlist.push(index);
                  return (
                    <PlaylistItem
                      className={curTrack === index ? "active" : ""}
                      key={index}
                      data_key={index}
                      title={el.title}
                      src={el.url}
                      onClick={playlistItemClickHandler}
                    />
                  );
                }
              }
            })}
        </PlaylistTemplate>
      )}
    </PageTemplate>
  );
};

export default Player;
