import React, { CSSProperties } from 'react'

interface PageTitleProps {
  title: string
}

export const PageTitle = ({ title }: PageTitleProps) => {
  const style: CSSProperties = {
    display: 'flex',
    margin: '16px 0px 42px 0px',
    fontSize: '24px'
  }
  return <h1 style={style}>{title}</h1>
}

export default PageTitle
