import { useSharedState } from '../shared/use-shared-state';
import ThreeScene from './three-scene';

export default function Overlay() {
    //const [count, setCount] = useState(0)

    const [state, updateState] = useSharedState()
    //const isControl = new URLSearchParams(location.search).get('mode') === 'control'

    function updateValue(v: number){
        v += 1;
        //setCount(v);
        updateState({ text: `Count is`, value: v });
    }   

    return (
        <div>
            <div>
                <h1>Overlay</h1>
                <p className="overlay-text">This is an overlay component.</p>
                <p className="overlay-text">test</p><br/><br/><br/>
                <button
                    type="button"
                    className="counter"
                    onClick={() => updateValue(state.value)}
                    >
                    {state.text} {state.value}
                    </button>
            </div>
            <div>
                <p>TEST</p>
                <ThreeScene />
            </div>

        </div>
    );
}