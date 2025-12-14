

const Button = ({styles}) => {
  return (
    <button type="button" className={`py-4 px-6 rounded-[10px] bg-blue-gradient font-poppins font-medium text-[18px]
    text-primary outline-none ${styles}
    transition-transform duration-300 hover:scale-110
    hover:shadow-[0_0_20px_rgba(0,246,255,0.7)]`}>
      Get Started
    </button>
  )
}

export default Button