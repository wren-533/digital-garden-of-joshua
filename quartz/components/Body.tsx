import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"

const Body: QuartzComponent = ({ children }: QuartzComponentProps) => {
  return (
    <>
      <div id="dappled-light" aria-hidden="true">
        <div id="glow" />
        <div id="glow-bounce" />
        <div class="perspective">
          <div id="leaves" />
          <div id="blinds">
            <div class="shutters">
              <div class="shutter" />
              <div class="shutter" />
              <div class="shutter" />
              <div class="shutter" />
              <div class="shutter" />
            </div>
            <div class="vertical">
              <div class="bar" />
              <div class="bar" />
              <div class="bar" />
              <div class="bar" />
              <div class="bar" />
              <div class="bar" />
            </div>
          </div>
        </div>
        <div id="progressive-blur">
          <div />
          <div />
          <div />
          <div />
        </div>
        <svg aria-hidden="true" width="0" height="0">
          <filter id="wind">
            <feTurbulence type="fractalNoise" baseFrequency="0.01 0.03" numOctaves="2" />
            <feDisplacementMap in="SourceGraphic" scale="30" />
          </filter>
        </svg>
      </div>
      <div id="quartz-body">{children}</div>
    </>
  )
}

export default (() => Body) satisfies QuartzComponentConstructor
