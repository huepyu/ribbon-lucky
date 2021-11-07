function App() {
    const [step, setStep] = React.useState(1)

    return (
        <>
            <div className="root-title">Hi There App! {step}</div>
            <div className="root-content">Hello Hello</div>
        </>
    )
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
)