import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVolumeHigh, faVolumeXmark } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useRef } from "react";
import Button from "./Button";
import { useDataContext } from "../../../hooks/useDataContext";

export default function MusicButton() {
    const { musicIsPlaying, setMusicIsPlaying } = useDataContext();
    const audio = useRef(null);

    const handleToggleMusic = () => {
        setMusicIsPlaying(prev => !prev);
    };

    useEffect(() => {
        const el = audio.current;
        if (!el) return;

        if (musicIsPlaying) {
            el.play().catch(() => setMusicIsPlaying(false));
        } else {
            el.pause();
        }
    }, [musicIsPlaying]);

    return (
        <>  
            <span className='fixed right-0 top-1/2 aspect-square'>
                <Button color={'primary'} onClick={handleToggleMusic} small >
                    <FontAwesomeIcon icon={musicIsPlaying ? faVolumeHigh : faVolumeXmark} fade={musicIsPlaying} style={{ animationDuration: '2s' }} size={'2xl'} />
                </Button>
                <audio src="/audio/bg-music.mp3" loop preload="auto" ref={audio}/>
            </span>
        </>
    )
}
