function App() {
    const [step, setStep] = React.useState(1)

    function reset(e) {
        e.preventDefault()
        sessionStorage.clear()
        setStep(1)
    }

    return (
        <>
            <div className="root-title">
                <div className="dummy-btn"></div>
                <span className="title-text">리본 행운상점 추첨</span>
                <button className="title-reset-btn" onClick={reset}>초기화</button>
            </div>
            <div className="root-content">
                
            </div>
        </>
    )
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
)