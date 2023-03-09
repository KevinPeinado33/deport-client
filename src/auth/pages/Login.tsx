import { showToast } from '@/common/utils'

export const LoginPage = () => {
  return (
    <div>
      <h2>login</h2>
      <button
        onClick={() => showToast({ message: 'Click'})}
      >
        click para el toast
      </button>
    </div>
  )
}
