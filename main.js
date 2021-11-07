function App() {
    const [step, setStep] = React.useState(1)

    return (
        <h1>Hi There App! {step}</h1>    
    )
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
)