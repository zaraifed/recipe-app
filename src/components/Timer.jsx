import { useEffect, useState } from 'react'

function Timer({ initialTime }) {
  const [time, setTime] = useState(initialTime)
  const [running, setRunning] = useState(false)

  useEffect(() => {
    let interval
    if (running && time > 0) {
      interval = setInterval(() => setTime(t => t - 1), 1000)
    }
    return () => clearInterval(interval)
  }, [running, time])

  const formatTime = () => {
    const mins = Math.floor(time / 60)
    const secs = time % 60
    return `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`
  }

  return (
    <div className="timer">
      <h1>{formatTime()}</h1>
      <button onClick={() => setRunning(true)}>Bake!</button>
    </div>
  )
}

export default Timer
