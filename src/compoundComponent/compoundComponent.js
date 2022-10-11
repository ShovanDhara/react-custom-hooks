import Toggle from './toggle'
import Tabs from './tabs';

function CompoundComponent() {
    return (
        <>
            <h4>Switch</h4>
            <Toggle onToggle={on => console.log(on)}>
                <Toggle.On>The button is on</Toggle.On>
                <Toggle.Off>The button is off</Toggle.Off>
                <Toggle.Button />
            </Toggle>

            <div className="App">
                <h4>Tabs</h4>
                
                <Tabs>
                    {/* Group of tabs */}
                    <Tabs.Tab label="a">Tab A</Tabs.Tab>
                    <Tabs.Tab label="b">Tab B</Tabs.Tab>
                    <Tabs.Tab label="c">Tab C</Tabs.Tab>

                    {/* Tab panels */}
                    <Tabs.Panel label="a">
                        This is tab A{' '}
                        <span role="img" aria-label="Rocket ship">
                            🚀
                        </span>
                    </Tabs.Panel>
                    <Tabs.Panel label="b">
                        This is tab B{' '}
                        <span role="img" aria-label="Diamond">
                            💎
                        </span>
                    </Tabs.Panel>
                    <Tabs.Panel label="c">
                        This is tab C{' '}
                        <span role="img" aria-label="Ghost">
                            👻
                        </span>
                    </Tabs.Panel>
                </Tabs>
            </div>
        </>
    )
}

export default CompoundComponent;