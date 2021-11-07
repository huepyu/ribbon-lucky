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
    const [ourProducts, setOurProducts] = React.useState([])

    const step1Products = React.useMemo(() => products, [])

    function addProduct(e, product) {
        e.preventDefault()
        setOurProducts(op => [...op, product])
    }

    function deleteProduct(e, idx) {
        e.preventDefault()
        setOurProducts(op => 
            [
                ...op.slice(0, idx),
                ...op.slice(idx + 1)
            ]
        )
    }

    return (
        <div className="step-1">
            <div className="s1-main">
                <div className="s1-left">
                    <p className="s1-our-products-title">
                        행운 상점 추첨 순서
                    </p>
                    <p className="s1-delete-desc">
                        클릭 시 삭제됩니다.
                    </p>
                    {ourProducts.map((p, idx) => (
                        <div key={idx} className="s1-our-product" onClick={e => deleteProduct(e, idx)}>
                            {p.name}
                        </div>
                    ))}
                </div>
                <div className="s1-right">
                    <p className="s1-right-title">오늘 행운 상점의 상품을 순서대로 골라주세요.</p>
                    <div className="s1-products-grid">
                    {step1Products.map(p => (
                        <div key={p.id} className="s1-product" onClick={e => addProduct(e, p)}>
                            <p className="s1-product-title">{p.name}</p>
                            {p.rewards.map((r, idx) =>
                                <p key={idx} className="s1-product-reward">{r}</p>
                            )}
                        </div>
                    ))}
                    </div>
                </div>
            </div>
            <div className="s1-next-btn">다음 단계로</div>
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