import React from 'react';
import { 
    ScrollContainer,
    Animator,
    ScrollPage,
    MoveIn 
} from 'react-scroll-motion';

export default function Animacion() {
    return (
        <ScrollContainer>
            <ScrollPage page={0}>
                <div className='bg-green-400 h-screen w-[100%] flex items-center justify-center'>
                    <h2>
                    <Animator animation={MoveIn(0, -1000)}>
                        Hi! This is a test
                    </Animator>
                </h2>
                </div>
            </ScrollPage>
        </ScrollContainer>
    )
}
