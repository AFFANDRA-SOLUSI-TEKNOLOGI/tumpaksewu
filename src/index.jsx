import * as React from 'react'

export default function Select({ data, current, next, first, currentState, nextState, children, initNext, ...obj }) {
  let [d, setD] = currentState;
  let e, setE;

  if(nextState) [e, setE] = nextState;

  React.useEffect(() => {
    if(first) setD(data[current]);

    if(initNext) {
      if(!next) return;

      let pid = data[current].find((x) => x.name === initNext);
      let filtered = data[next].filter((x) => x[current] === Number(pid.id));
      setE(filtered)
    }
  }, [])

  const handleChange = (ev) => {
    if(!next) return;

    let pid = ev.target.value;
    let filtered = data[next].filter((x) => x[current] === Number(pid));
    setE(filtered)
  }

  const handleFocus = (ev) => {
    if(!next) return;

    let pid = ev.target.value;

    if(Number.isNaN(pid)) return;
    let filtered = data[next].filter((x) => x[current] === Number(pid));
    setE(filtered)
  }

  return (
    <>
      <select onChange={handleChange} onFocus={handleFocus} {...obj}>
        {children}
      </select>
    </>
  )
}
