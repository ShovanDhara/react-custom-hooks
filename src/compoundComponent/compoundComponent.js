import Toggle from './toggle'

function CompoundComponent() {
    return (
        <>
            <h4>Switch</h4>
            <Toggle onToggle={on => console.log(on)}>
                <Toggle.On>The button is on</Toggle.On>
                <Toggle.Off>The button is off</Toggle.Off>
                <Toggle.Button />
            </Toggle>
        </>
    )
}

export default CompoundComponent;