import React, { CSSProperties } from 'react'
import { taskStatusType } from '../../objects/tasks'

const statusStyles: CSSProperties = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '80%',
  padding: '3px',
  borderRadius: '3px',
  color: 'white'
}

const statusColor = (status: taskStatusType): CSSProperties => {
  switch (status) {
    case 'open':
      return {
        backgroundColor: '#3F6D86'
      }
    case 'in progress':
      return {
        backgroundColor: '#0065FF'
      }
    case 'dev complete':
      return {
        backgroundColor: '#11CDC0'
      }
    case 'ready for prod':
      return {
        backgroundColor: '#00B901'
      }
    case 'blocked':
      return {
        backgroundColor: '#FF4402'
      }
    default:
      return {
        display: 'none'
      }
  }
}

const taskStatus = (status: taskStatusType) => {
  return (
    <div style={{ ...statusStyles, ...statusColor(status) }}>
      {status.toLocaleUpperCase()}
    </div>
  )
}

export default taskStatus
