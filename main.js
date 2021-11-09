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
            members: members.map(m => ({
                ...m,
                rewards: [],
            })),
            drawers: [],
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
                    <p className="title-text">Ribbon 행운상점 추첨</p>
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

    const step1Products = React.useMemo(() => [...products], [])

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
    const groupSetRef = React.useRef(new Set())
    const [dups, setDups] = React.useState(() => {
        const list = state.products.map(p => {
            const group = p.group
            if (groupSetRef.current.has(group)) {
                return true
            }
            groupSetRef.current.add(group)
            return false
        })
        return list
    })

    React.useEffect(() => {
        if (Object.keys(state.productsMembersMap).length) {
            return
        }

        const productsMembersMap = {}
        for (let group of groupSetRef.current) {
            productsMembersMap[group] = members.map(m => ({
                ...m,
                target: true,
            }))
        }
        setState(v => ({
            ...v,
            productsMembersMap,
        }))
    }, [])

    function setAll(e, group, include) {
        e.preventDefault()

        setState(v => ({
            ...v,
            productsMembersMap: {
                ...v.productsMembersMap,
                [group]: v.productsMembersMap[group].map(m => ({
                    ...m,
                    target: include,
                })),
            }
        }))
    }

    function toggleTarget(e, group, mid) {
        e.preventDefault()

        setState(v => ({
            ...v,
            productsMembersMap: {
                ...v.productsMembersMap,
                [group]: v.productsMembersMap[group].map((m, idx) => ({
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
                    <div key={idx} className={`s2-product ${p.type}${dups[idx] ? ' s2-dup' : ''}`}>
                        <div className="s2-product-title">{p.name}</div>
                        <div className="s2-product-rewards">
                            {p.rewards.map((r, idx) => (
                                <p key={idx} className="s2-product-reward">{r}</p>
                            ))}
                        </div>
                        {!dups[idx] && state.productsMembersMap[p.group] && (
                            <div className="s2-members">
                                <div className="s2-member-list">
                                    {state.productsMembersMap[p.group].map((m, idx) => (
                                        <div className="s2-member" key={idx}>
                                            <span className={m.target ? 's2-included' : 's2-excluded'}>{m.name}</span>
                                            <button
                                                className={`s2-member-btn ${m.target ? 's2-exclude-btn' : 's2-include-btn'}`}
                                                onClick={e => toggleTarget(e, p.group, m.id)}
                                            >
                                                {m.target ? '제외하기' : '추가하기'}
                                            </button>
                                        </div>
                                    ))}
                                </div>
                                <div className="s2-target-bottom">
                                    <div className="s2-total-members">
                                        총&nbsp;<span className="s2-current-members">{state.productsMembersMap[p.group].filter(v => v.target).length}</span>/{state.members.length}명
                                    </div>
                                    <div className="s2-target-btns">
                                        <div className="s2-target-btn s2-include-btn" onClick={e => setAll(e, p.group, true)}>
                                            전체 포함
                                        </div>
                                        <div className="s2-target-btn s2-exclude-btn" onClick={e => setAll(e, p.group, false)}>
                                            전체 제외
                                        </div>
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
function Step3({ state, setState }) {    
    const step3Rewards = React.useMemo(() => {
        const rewards = []
        state.products.forEach(product => {
            product.rewards.forEach(reward => {
                rewards.push({
                    reward,
                    product,
                })
            })
        })
        return rewards
    })

    const rewardDivRef = React.useRef(null)
    const rewardsIdxRef = React.useRef(0)
    const [currentReward, setCurrentReward] = React.useState(step3Rewards[rewardsIdxRef.current])
    const [drawingState, setDrawingState] = React.useState({
        drawerId: null,
        currentGroup: currentReward.product.group,
        targetIds: createTargetIds(),
    })

    React.useEffect(() => {
        if (!drawingState.targetIds.length) {
            setDrawingState(v => ({
                ...v,
                targetIds: createTargetIds(),
            }))
        }
    }, [drawingState.targetIds])

    const lockOnDrawingRef = React.useRef(false)
    const drawingAnimationRef = React.useRef(null)
    const [highlightedId, setHighlightedId] = React.useState(null)

    function animateDrawing() {
        while(true) {
            const nextHighlightedId = drawingState.targetIds[Math.floor(Math.random() * drawingState.targetIds.length)]
            if (nextHighlightedId !== highlightedId) {
                setHighlightedId(nextHighlightedId)
                break
            } 
        }
        drawingAnimationRef.current = requestAnimationFrame(animateDrawing)
    }

    function createTargetIds() {
        const targets = state.productsMembersMap[currentReward.product.group].filter(m => m.target)
        const minStack = Math.min(...targets.map(v => v.stack))

        return targets
            .filter(v => v.stack === minStack)
            .map(v => v.id)
    }

    function draw(e) {
        e.preventDefault()

        if (lockOnDrawingRef.current) {
            return
        }
        lockOnDrawingRef.current = true

        const drawerId = drawingState.targetIds[Math.floor(Math.random() * drawingState.targetIds.length)]

        if (drawingState.targetIds.length < 2) {
            updateDrawing(drawerId)
            return
        }

        animateDrawing()
        setTimeout(() => {
            cancelAnimationFrame(drawingAnimationRef.current)
            updateDrawing(drawerId)
        }, 1000)
    }

    function updateDrawing(drawerId) {
        setHighlightedId(null)
        setState(v => ({
            ...v,
            members: v.members.map(m => {
                if (m.id === drawerId) {
                    return {
                        ...m,
                        stack: m.stack + 1,
                        rewards: [...m.rewards, currentReward.reward]
                    }
                }
                return { ...m }
            }),
            drawers: [
                ...v.drawers,
                { name: currentReward.reward, drawer: state.members.find(m => m.id === drawerId).name }
            ]
        }))

        setDrawingState(v => ({
            ...v,
            drawerId,
        }))

        lockOnDrawingRef.current = false
    } 

    function next(e) {
        e.preventDefault()
        
        rewardDivRef.current.classList.add('s3-disappear')

        setTimeout(() => {
            rewardsIdxRef.current += 1
            const nextReward = step3Rewards[rewardsIdxRef.current]

            setCurrentReward(nextReward)
            setDrawingState(v => {
                return {
                    ...v,
                    drawerId: null,
                    currentGroup: nextReward.group,
                    targetIds: v.currentGroup !== nextReward.product.group
                        ? []
                        : v.targetIds.filter(id => id !== v.drawerId)
                }
            })

            setTimeout(() => {
                rewardDivRef.current.classList.remove('s3-disappear')
            }, 50)
        }, 500)
    }

    return (
        <div className="step">
            <div className="step-3">
                <div className="s3-reward-wrapper">
                    <div className="s3-reward-dummy" />
                    <div className="s3-reward" ref={rewardDivRef}>
                        <p className="s3-reward-product">{currentReward.product.name}</p>
                        <p className="s3-reward-name">{currentReward.reward}</p>
                        {drawingState.drawerId && <p className="s3-reward-drawer">{members.find(m => m.id === drawingState.drawerId).name}</p>}
                        {!drawingState.drawerId && <button className="s3-reward-btn s3-drawing-btn" onClick={draw}>추첨</button>}
                    </div>
                    {drawingState.drawerId && <button className="s3-reward-btn s3-next-btn" onClick={next}>다음</button>}
                    {!drawingState.drawerId && <div className="s3-reward-dummy" />}
                </div>
                <div className="s3-members">
                    <div className="s3-members-grid">
                        {state.members.map(m => {
                            const target = drawingState.targetIds.includes(m.id)

                            const classes = [
                                's3-member',
                                's3-stack' + m.stack,
                            ]

                            if (highlightedId === m.id) {
                                classes.push('s3-highlighted')
                            }

                            if (!target) {
                                classes.push('s3-not-target')
                            }

                            return (
                                <div className={classes.join(' ')} key={m.id}>
                                    <p className="s3-member-name">{m.name}</p>
                                    <p className="s3-member-reward">{m.rewards[0] ?? ''}</p>
                                    <p className="s3-member-reward">{m.rewards[1] ?? ''}</p>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
)