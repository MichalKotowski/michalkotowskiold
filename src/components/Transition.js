import React from "react"
import { TransitionGroup, Transition as ReactTransition } from "react-transition-group"

const timeout = 500
const getTransitionStyles = {
    exiting: {

    },
    exited: {
        opacity: 0,
        transform: `translateX(40px)`,
    },
    entering: {

    },
    entered: {
        opacity: 1,
        transform: `translateX(0)`,
    }
}

class Transition extends React.PureComponent {
    render() {
        const { children, location } = this.props
        return (
            <TransitionGroup>
                <ReactTransition
                    key={location.pathname}
                    timeout={{
                        enter: timeout,
                        exit: timeout,
                    }}
                >
                    {status => (
                        <div
                            style={{
                                transition: `.5s`,
                                maxWidth: `800px`,
                                width: `100%`,
                                opacity: 0,
                                transform: `translateX(-40px)`,
                                position: `absolute`,
                                ...getTransitionStyles[status],
                            }}
                        >
                            {children}
                        </div>
                    )}
                </ReactTransition>
            </TransitionGroup>
        )
    }
}

export default Transition