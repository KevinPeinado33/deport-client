import { toast } from 'react-toastify'

const TIME_DURATION = 5000

interface Props {
    message: string
    type   : string
}

export const showToast = ({ message, type }: Props) => {
    return toast(message, {
        type           : type as 'info',
        position       : toast.POSITION.TOP_RIGHT,
        autoClose      : TIME_DURATION,
        hideProgressBar: false,
        closeOnClick   : true,
        pauseOnHover   : true,
        draggable      : true,
        progress       : undefined,
        theme          : 'dark',
    })
}
