const STORAGE_KEY = 'STORAGE_KEY'

class ErrorBoundary extends React.Component {
    constructor(props) {
      super(props);
      this.state = { hasError: false };
    }
  
    static getDerivedStateFromError(error) {
      return { hasError: true }
    }
  
    componentDidCatch(error, errorInfo) {
      console.error(error, errorInfo)
    }
  
    render() {
      if (this.state.hasError) {
        return <h1>Something went wrong.</h1>
      }
  
      return this.props.children
    }
  }

function App() {
    const [step, setStep] = React.useState(1)
    const [state, setState] = React.useState(createNewState())

    function reset(e) {
        e.preventDefault()
        sessionStorage.clear()
        setState(createNewState())
        setStep(1)
    }
    
    function createNewState() {
        return {
            products: [],
            productsMembersMap: {},
        }
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
        if (state) {
            setState(state)
        }
    }, [])

    function getStepText() {
        switch (step) {
            case 1: return '상품 선택 단계'
            case 2: return '추첨 대상 선별 단계'
            case 3: return '추첨 단계'
        }
    }

    return (
        <ErrorBoundary>
            <div className="root-title">
                <button className="title-btn back-btn" disabled={step === 1} onClick={goBack}>뒤로</button>
                <div className="title-wrapper">
                    <p className="title-text">리본 행운상점 추첨</p>
                    <p className="title-step">{getStepText()}</p>
                </div>
                <button className="title-btn reset-btn" onClick={reset}>초기화</button>
            </div>
            <div className="root-content">
                {step === 1 && <Step1 goNext={goNext} state={state} setState={setState} />}
                {step === 2 && <Step2 goNext={goNext} state={state} setState={setState} />}
                {step === 3 && <Step3 state={state} setState={setState} />}
            </div>
        </ErrorBoundary>
    )
}

// 스텝 1: 상품 등록 단계
function Step1({ goNext, state, setState }) {
    const leftRef = React.useRef(null)

    const step1Products = React.useMemo(() => products, [])

    function addProduct(e, product) {
        e.preventDefault()
        setState(v => ({
            ...v,
            products: [...v.products, product],
        }))
        setTimeout(() => {
            leftRef.current.scrollTop = leftRef.current.scrollHeight;
        }, 50)
    }

    function deleteProduct(e, idx) {
        e.preventDefault()
        setState(v => ({
            ...v,
            products: [
                ...v.products.slice(0, idx),
                ...v.products.slice(idx + 1)
            ]
        }))
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
                    {state.products.map((p, idx) => (
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
            <button className="next-btn" disabled={!state.products.length} onClick={goNext}>저장 및 다음 단계</button>
        </div>
    )  
}

// 스텝 2: 인원 선별 단계
function Step2({ goNext, state, setState }) {
    const idSetRef = React.useRef(new Set())
    const [dups, setDups] = React.useState(() => {
        const list = state.products.map(p => {
            const id = p.id
            if (idSetRef.current.has(id)) {
                return true
            }
            idSetRef.current.add(id)
            return false
        })
        return list
    })

    React.useEffect(() => {
        const productsMembersMap = {}
        for (let id of idSetRef.current) {
            productsMembersMap[id] = members.map(m => ({
                ...m,
                target: true,
            }))
        }
        setState(v => ({
            ...v,
            productsMembersMap,
        }))
    }, [])

    function setAll(e, id, include) {
        e.preventDefault()

        setState(v => ({
            ...v,
            productsMembersMap: {
                ...v.productsMembersMap,
                [id]: v.productsMembersMap[id].map(m => ({
                    ...m,
                    target: include,
                })),
            }
        }))
    }

    function toggleTarget(e, pid, mid) {
        e.preventDefault()

        setState(v => ({
            ...v,
            productsMembersMap: {
                ...v.productsMembersMap,
                [pid]: v.productsMembersMap[pid].map((m, idx) => ({
                    ...m,
                    target: m.id === mid ? !m.target : m.target
                })),
            }
        }))
    }

    return (
        <div className="step">
            <div className="main s2-wrapper">
                {state.products.map((p, idx) =>
                    <div key={idx} className={`s2-product ${p.type} ${dups[idx] && 's2-dup'}`}>
                        <div className="s2-product-title">{p.name}</div>
                        <div className="s2-product-rewards">
                            {p.rewards.map((r, idx) => (
                                <p key={idx} className="s2-product-reward">{r}</p>
                            ))}
                        </div>
                        {!dups[idx] && state.productsMembersMap[p.id] && (
                            <div className="s2-members">
                                <div className="s2-member-list">
                                    {state.productsMembersMap[p.id].map(m => (
                                        <div className="s2-member" key={m.id}>
                                            {m.name}
                                            <button
                                                className={`s2-member-btn ${m.target ? 's2-exclude-btn' : 's2-include-btn'}`}
                                                onClick={e => toggleTarget(e, p.id, m.id)}
                                            >
                                                {m.target ? '제외하기' : '추가하기'}
                                            </button>
                                        </div>
                                    ))}
                                </div>
                                <div className="s2-target-btns">
                                    <div className="s2-total-members">
                                        총 <span className="s2-current-members">{state.productsMembersMap[p.id].filter(v => v.target).length}</span>/{members.length}명
                                    </div>
                                    <div className="s2-target-btn s2-include-btn" onClick={e => setAll(e, p.id, true)}>
                                        전체 포함
                                    </div>
                                    <div className="s2-target-btn s2-exclude-btn" onClick={e => setAll(e, p.id, false)}>
                                        전체 제외
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                )}
            </div>
            <button className="next-btn" onClick={goNext}>저장 및 다음 단계</button>
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