import { useEffect, useRef } from "react"

// export interface UseEffectOnUpdateProps {
//     effectFunction: () => void;
//     deps: any[];
// }

function useEffectOnUpdate(
    effectFunction: () => void,
    deps: any[]
) {
    const firstRender = useRef(true)
    
    useEffect(() => {
        if (firstRender.current) {
            firstRender.current = false
        } else {
            effectFunction()
        }
    }, deps)
}

export default useEffectOnUpdate
