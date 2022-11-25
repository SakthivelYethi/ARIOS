import { ReactNode } from "react";
import { setAppState } from "../../redux/features/appStateSlice";
import { useDispatch } from "react-redux"
import { useEffect } from "react"

type Props = {
  state?: string,
  children: ReactNode;
}

const PageWrapper = (props: Props) => {

  const dispatch = useDispatch()
  useEffect(() => {
    if(props.state) {
      dispatch(setAppState(props.state))
    }
  }, [dispatch, props])
  
  return (
    <>{props.children}</>
  )
}

export default PageWrapper