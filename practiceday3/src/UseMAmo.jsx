import React, { useMemo, useState } from 'react'

const UseMAmo = () => {

    const [count, setCount] = useState(0)
    const [item, setItem] = useState(10)

    const mul = useMemo(function mulCount() {
        console.log("mulTiCount")

        return count * 5

    }, [count])

    return (
        <div>
            <h1>UseMamo </h1>
            <h2>{count}</h2>
            <button onClick={() => setCount(count + 1)}>UpDate Count</button>
            <h2>{item}</h2>
            {
                mul
            }

            <button onClick={() => setItem(item * 2)}>UpDate item</button>

        </div>
    )
}

export default UseMAmo
