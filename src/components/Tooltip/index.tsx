import React, { Component, CSSProperties, ReactNode } from 'react'

interface ToolTipState {
  hideToolTip: boolean
}

interface ToolTipProps {
  text: string | ReactNode
  position: 'bottom' | 'right' | 'top' | 'left'
}

export class ToolTip extends Component<ToolTipProps, ToolTipState> {
  constructor(props: ToolTipProps) {
    super(props)
    this.state = {
      hideToolTip: true
    }
  }

  toggleHideToolTip = () => {
    const { hideToolTip } = this.state
    this.setState({
      hideToolTip: !hideToolTip
    })
  }

  toolTip = () => {
    const { children, text, position } = this.props
    const { hideToolTip } = this.state
    const toolTipHide: CSSProperties = {
      display: hideToolTip ? 'none' : 'flex'
    }
    return (
      <div
        className='tool-tip'
        onMouseEnter={this.toggleHideToolTip}
        onMouseLeave={this.toggleHideToolTip}
      >
        {children}
        <div
          className={`tool-tip__w tool-tip__w--${position}`}
          style={toolTipHide}
        >
          {text}
        </div>
      </div>
    )
  }

  render() {
    return <>{this.toolTip()}</>
  }
}

export default ToolTip
