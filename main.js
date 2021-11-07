function App() {
    const [step, setStep] = React.useState(1)

    function reset(e) {
        e.preventDefault()
        sessionStorage.clear()
        setStep(1)
    }

    function goBack(e) {
        e.preventDefault()
        if (step !== 1) {
            setStep(v => v - 1)
        }
    }

    return (
        <>
            <div className="root-title">
                <div className="title-btn">뒤로</div>
                <span className="title-text">리본 행운상점 추첨</span>
                <button className="title-btn" onClick={reset}>초기화</button>
            </div>
            <div className="root-content">
                {step === 1 && <div>1단계</div>}
                {step === 2 && <div>2단계</div>}
                {step === 3 && <div>3단계</div>}
            </div>
        </>
    )
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
)