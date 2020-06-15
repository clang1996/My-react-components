import React, {useState, useRef} from 'react';
import styled from 'styled-components';

const Button = styled.button`
    display: flex;
    margin: 0 auto;
    border-radius: 5px;
    width: 100px;
    height: 50px;
    position: relative;
    overflow: hidden;
    background: #fff;
    &:focus{
    outline: none;
    }
    > .fuck{
    position: relative;
    left:31px;
    top:12px;
    z-index: 1;
    }
    > .circle{
    position: absolute;
    border-radius: 50%;
    height: 20px;
    width: 20px;
    display: inline-block;
    background: #202931;
    opacity: 0.5;
    animation: 1s big forwards;
    z-index: 0;
    }
    @keyframes big {
    0%{
        transform: scale(0.1);
    }
    100%{
        transform: scale(25);
    }
}
`;
const RipleButton = () => {
		const [active, setActive] = useState(false);
		const [deltX, setDeltaX] = useState(0);
		const [deltY, setDeltaY] = useState(0);
		const btnRef = useRef(null);
		const onClick = (e: any) => {
				// @ts-ignore
				let {x, y} = btnRef.current.getBoundingClientRect();
				let {clientX, clientY} = e;
				let deltaX = clientX - x - 10;
				let deltaY = clientY - y - 10;
				setActive(true);
				setDeltaX(deltaX);
				setDeltaY(deltaY);
		};
		const onAnimationEnd = () => {
				setActive(false);
		};
		return (
			<div>
					<Button onClick={onClick} ref={btnRef}>
							<span className="fuck">按钮</span>
							{active ?
								<span onAnimationEnd={onAnimationEnd} className="circle" style={{left: deltX, top: deltY}}/> : ''}
					</Button>
			</div>
		);
};
export {RipleButton};