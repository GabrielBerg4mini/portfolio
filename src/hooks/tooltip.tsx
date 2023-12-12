import React from "react"
import { useSpring, animated } from "react-spring"

interface TooltipProps {
  text: string
  children: React.ReactNode
}

const Tooltip: React.FC<TooltipProps> = ({ text, children }) => {
  const [isHovered, setIsHovered] = React.useState(false)

  const tooltipAnimation = useSpring({
    opacity: isHovered ? 1 : 0,
    transform: `translateY(${isHovered ? 0 : 5}px)`,
  })

  return (
    <section
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ position: "relative", display: "inline-block" }}
    >
      {children}
      <animated.section
        style={{
          position: "absolute",
          left: "50%",
          top: "80%",
          color: "black",
          fontSize: "1rem",

          ...tooltipAnimation,
        }}
      >
        {text}
      </animated.section>
    </section>
  )
}

export default Tooltip
