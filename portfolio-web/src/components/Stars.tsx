import { useState } from "react"
import styled, { keyframes } from "styled-components"
import { StarField } from "react-star-field-canvas"
import { secondColor } from "./colors"
import { Settings } from "lucide-react"

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateX(10px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`

const SectionStars = styled.section`
  position: relative;
`

const ContainerButtonStopStars = styled.section`
  position: absolute;
  right: 6px;
  top: 6px;
  svg {
    cursor: pointer;

    &:hover {
      color: ${secondColor};
      transform: scale(1.05);
      transition: transform 0.8s;
    }
  }
`

const Label = styled.label`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  padding: 0.5rem 1rem;
  border-radius: 5px;
  background: #0e012b;
  opacity: 0;
  position: absolute;
  top: 0;
  right: 45px;
  animation: ${fadeIn} 1s forwards;
`

const Input = styled.input`
  width: 40px;
  height: 20px;
  appearance: none;
  -webkit-appearance: none;
  background-color: transparent;
  border: 1px solid #b4afaf;
  border-radius: 10px;
  outline: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  transition: border 0.3s, background-color 0.3s;

  &:checked {
    border: 1px solid ${secondColor};
    background-color: transparent;
  }

  &:before {
    content: "";
    position: absolute;
    width: 20px;
    height: 18px;
    border-radius: 50%;
    background-color: #b4afaf;
    transition: 0.3s;
  }

  &:checked:before {
    background-color: ${secondColor};
    transition: 0.3s, transform 0.3s ease;
    transform: translateX(20px);
  }

  &:active:before {
    transform: scaleX(1.1);
  }
`

export default function Stars() {
  const [followMouse, setFollowMouse] = useState(true)
  const [labelVisible, setLabelVisible] = useState(false)

  const handleStarFieldClick = () => {
    setFollowMouse(!followMouse)
  }

  const handleSettingsClick = () => {
    setLabelVisible(!labelVisible)
  }

  return (
    <SectionStars>
      <ContainerButtonStopStars>
        <Settings onClick={handleSettingsClick} />
      </ContainerButtonStopStars>
      {labelVisible && (
        <Label>
          <span>Stop Stars</span>
          <Input
            type="checkbox"
            name="buttonStopStars"
            id="toggle"
            checked={followMouse}
            onChange={() => {}}
            onClick={handleStarFieldClick}
          />
        </Label>
      )}

      <StarField
        followMouse={followMouse}
        followContext={document.body}
        glow={false}
        maxSpeed={10}
        numStars={600}
        trails={true}
        color={{ r: 100, g: 100, b: 250 }}
        longerTrails={true}
        className="starfield"
      />
    </SectionStars>
  )
}
