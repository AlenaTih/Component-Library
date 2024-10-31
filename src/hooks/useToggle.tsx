import { useState } from "react"
import useEffectOnUpdate from "./useEffectOnUpdate.tsx"

interface UseToggleOptions {
    initialValue?: boolean;
    onToggle?: (state: boolean) => void;
}

function useToggle({
    initialValue = false,
    onToggle = () => {}
}: UseToggleOptions) {
    const [on, setOn] = useState(initialValue)

    function toggle() {
        setOn(prevOn => !prevOn)
    }
    
    // Use useEffectOnUpdate to call onToggle only on updates, not the initial render
    useEffectOnUpdate(() => {
        onToggle(on)
    }, [on])

    return [on, toggle] as const // Return type [boolean, () => void]
}

export default useToggle
