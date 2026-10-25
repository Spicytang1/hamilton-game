import { useState } from 'react'
import songs from '../data/songs'
import './GameScreen.css'

const MAX_HINTS = 5

function pickRandomSong() {
    return songs[Math.floor(Math.random() * songs.length)]
}

function normalize(text) {
    return text.trim().toLowerCase().replace(/[^a-z0-9가-힣]/g, '')
}

function GameScreen({ onExit }) {
    const [song] = useState(pickRandomSong)
    const [shown, setShown] = useState(1)
    const [input, setInput] = useState('')
    const [status, setStatus] = useState('playing') // playing | correct | over

    function handleSubmit(e) {
        e.preventDefault()
        if (!input.trim()) return

        if (normalize(input) === normalize(song.title)) {
            setStatus('correct')
        } else if (shown >= MAX_HINTS) {
            setStatus('over')
        } else {
            setShown(shown + 1)
        }
        setInput('')
    }

    return (
        <main className="game-screen">
            <h2>1단계</h2>

            <ol className="hints">
                {song.hints.slice(0, shown).map((hint, i) => (
                    <li key={i}>{hint}</li>
                ))}
            </ol>

            {status === 'playing' && (
                <form onSubmit={handleSubmit}>
                    <input
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        placeholder="곡 제목을 입력하세요"
                    />
                    <button type="submit">확인</button>
                    <p>힌트 {shown} / {MAX_HINTS}</p>
                </form>
            )}

            {status === 'correct' && <p>정답! 🎉 {song.title}</p>}
            {status === 'over' && <p>게임 오버. 정답은 {song.title}</p>}

            <button onClick={onExit}>메인으로</button>
        </main>
    )
}

export default GameScreen