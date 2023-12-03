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
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ position: "relative", display: "inline-block" }}
    >
      {children}
      <animated.div
        style={{
          position: "absolute",
          left: "50%",
          top: "80%",
          color: "#b1b1ff",
          fontSize: "1rem",
          ...tooltipAnimation,
        }}
      >
        {text}
      </animated.div>
    </div>
  )
}

export default Tooltip
