type HorizontalPosition = 'left' | 'center' | 'right'
type VerticalPosition = 'top' | 'center' | 'bottom'

type ToastProps = {
    position: Exclude<`${HorizontalPosition}-${VerticalPosition}`, 'center-center'> | 'center'
}

const Position = ({ position }: ToastProps ) => {
    return (
        <div>Toast Notication Position - {position}</div>
    )
}

export default Position