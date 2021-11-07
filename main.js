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

    function goNext(e) {
        e.preventDefault()
        if (step !== 3) {
            setStep(v => v + 1)
        }
    }

    return (
        <>
            <div className="root-title">
                <button className="title-btn back-btn" disabled={step === 1} onClick={goBack}>뒤로</button>
                <span className="title-text">리본 행운상점 추첨</span>
                <button className="title-btn reset-btn" onClick={reset}>초기화</button>
            </div>
            <div className="root-content">
                {step === 1 && <Step1 goNext={goNext} />}
                {step === 2 && <div>2단계</div>}
                {step === 3 && <div>3단계</div>}
            </div>
        </>
    )
}

// 스텝 1: 상품 등록 단계
function Step1({ goNext }) {
    const step1Products = React.useMemo(() => products, [])

    return (
        <div className="step-1">
            <div className="s1-left">

            </div>
            <div className="s1-right">
                <div className="s1-products-grid">
                {step1Products.map(p => (
                    <div key={p.id} className="s1-product">
                        {p.name} {p.rewards.map((r, idx) => <p key={idx}>{r}</p>)}
                    </div>
                ))}
                </div>
            </div>
        </div>
    )  
}

// 스텝 2: 인원 선별 단계
function Step2() {

}

// 스텝 3: 추첨 단계
function Step3() {

}

ReactDOM.render(
    <App />,
    document.getElementById('root')
)