const STORAGE_KEY = 'STORAGE_KEY'

function App() {
    const [step, setStep] = React.useState(1)
    const [state, setState] = React.useState([])

    function reset(e) {
        e.preventDefault()
        sessionStorage.clear()
        setState([])
        setStep(1)
    }

    function goBack(e) {
        e.preventDefault()
        if (step !== 1) {
            setStep(v => v - 1)
        }
    }

    const goNext = React.useCallback((e) => {
        e.preventDefault()
        if (step !== 3) {
            sessionStorage.setItem(STORAGE_KEY, JSON.stringify(state))
            setStep(v => v + 1)
        }
    }, [state, step])

    React.useEffect(() => {
        const state = JSON.parse(sessionStorage.getItem(STORAGE_KEY))
        console.log(state)
        if (state) {
            setState(state)
        }
    }, [])

    return (
        <>
            <div className="root-title">
                <button className="title-btn back-btn" disabled={step === 1} onClick={goBack}>뒤로</button>
                <span className="title-text">리본 행운상점 추첨</span>
                <button className="title-btn reset-btn" onClick={reset}>초기화</button>
            </div>
            <div className="root-content">
                {step === 1 && <Step1 goNext={goNext} state={state} setState={setState} />}
                {step === 2 && <Step2 goNext={goNext} state={state} setState={setState} />}
                {step === 3 && <Step3 state={state} setState={setState} />}
            </div>
        </>
    )
}

// 스텝 1: 상품 등록 단계
function Step1({ goNext, state, setState }) {
    const leftRef = React.useRef(null)

    const step1Products = React.useMemo(() => products, [])

    function addProduct(e, product) {
        e.preventDefault()
        setState(op => [...op, product])
        setTimeout(() => {
            leftRef.current.scrollTop = leftRef.current.scrollHeight;
        }, 50)
    }

    function deleteProduct(e, idx) {
        e.preventDefault()
        setState(op => 
            [
                ...op.slice(0, idx),
                ...op.slice(idx + 1)
            ]
        )
    }

    return (
        <div className="step">
            <div className="main">
                <div className="s1-left" ref={leftRef}>
                    <p className="s1-our-products-title">
                        행운 상점 추첨 순서
                    </p>
                    <p className="s1-delete-desc">
                        클릭 시 삭제됩니다.
                    </p>
                    {state.map((p, idx) => (
                        <div key={idx} className="s1-our-product" onClick={e => deleteProduct(e, idx)}>
                            {p.name}
                            {p.rewards.map((r, idx) =>
                                <p key={idx} className="s1-product-reward">{r}</p>
                            )}
                        </div>
                    ))}
                </div>
                <div className="s1-right">
                    <p className="s1-right-title">오늘 행운 상점의 상품을 순서대로 골라주세요.</p>
                    <div className="s1-products-grid">
                    {step1Products.map(p => (
                        <div key={p.id} className={`s1-product ${p.type}`} onClick={e => addProduct(e, p)}>
                            <p className="s1-product-title">{p.name}</p>
                            {p.rewards.map((r, idx) =>
                                <p key={idx} className="s1-product-reward">{r}</p>
                            )}
                        </div>
                    ))}
                    </div>
                </div>
            </div>
            <button className="next-btn" disabled={!state.length} onClick={goNext}>저장 및 다음 단계</button>
        </div>
    )  
}

// 스텝 2: 인원 선별 단계
function Step2({ goNext, state, setState }) {
    console.log(state)

    return (
        <div className="step">
            <div className="main">
                {state.map(p =>
                    <div key={p.id} className="s2-product">
                        <div className="s2-product-title">{p.name}</div>
                    </div>
                )}
            </div>
            <button className="next-btn" disabled={true} onClick={goNext}>저장 및 다음 단계</button>
        </div>
    )
}

// 스텝 3: 추첨 단계
function Step3() {

}

ReactDOM.render(
    <App />,
    document.getElementById('root')
)