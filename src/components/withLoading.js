import { useState, useEffect } from 'react'

function withLoading(WrappedComponent) {
  return function WithLoading({ fetchMethod, params, ...rest }) {
    const [data, setData] = useState(null)

    useEffect(() => {
      let cancelled = false
      setData(null)
      fetchMethod(params).then(res => {
        if (!cancelled) setData(res)
      })
      return () => {
        cancelled = true
      }
    }, [params])

    if (!data) {
      return <p className='center'>Loading...</p>
    }

    return <WrappedComponent {...rest} data={data} />
  }
}

export default withLoading
