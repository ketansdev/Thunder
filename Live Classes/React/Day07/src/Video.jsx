import { useRef } from "react";

function Video(){
    const videoRef = useRef(null);

    function handlePlay(){
        videoRef.current.play()
    }

    function handlePause(){
        videoRef.current.pause()
    }

    function handleReset(){
        videoRef.current.currentTime = 0
    }

    function handleForward(){
        videoRef.current.currentTime += 10
    }

    function handleBackward(){
        videoRef.current.currentTime -= 10
    }
    return(
        <>
            <video ref={videoRef} src="/video.mp4" controls width={"1200px"} height={"600px"}></video>
            <div>
                <button onClick={handlePlay}>Play</button>
                <button onClick={handlePause}>Pause</button>
                <button onClick={handleReset}>Reset</button>
                <button onClick={handleForward}>Forward</button>
                <button onClick={handleBackward}>Backward</button>
            </div>
        </>
    )
}

export default Video;