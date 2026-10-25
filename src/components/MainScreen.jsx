import './MainScreen.css'

function MainScreen({ onStart }) {
    return (
        <main className="main-screen">
            <h1 className="title">Musical Fan Game</h1>
            <p className="subtitle">가사 힌트로 곡을 맞히고, 극의 순서를 완성하세요</p>

            <ul className="rules">
                <li>힌트가 한 줄씩 나와요. 틀릴 때마다 한 줄이 더 공개돼요.</li>
                <li>5줄을 보고도 틀리면 게임 오버예요.</li>
                <li>곡을 맞힐 때마다 곡들의 극 내 순서를 배치해요.</li>
                <li>5곡의 순서를 완성하면 클리어예요.</li>
            </ul>

            <button className="start-button" onClick={onStart}>
                시작하기
            </button>
        </main>
    )
}

export default MainScreen