
type Props = {
    value?: string
}

export function Letter({value}:Props){
    return (
        <div>
            <span>{value}</span>
        </div>
    )
}