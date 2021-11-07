function App() {
    const [step, setStep] = React.useState(1)

    return (
        <>
            <div class="root-title">Hi There App! {step}</div>
            <div class="root-content">Hello Hello</div>
        </>
    )
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
)