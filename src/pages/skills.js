//import { div } from 'framer-motion/client';
import InfiniteScroll from '../components/infinitescroll';
import AllSkillCard from '../components/allskillcard.js'

const items = [

    { content: <AllSkillCard iconPath={'/icons/nodejs.png'} /> },
    { content: <AllSkillCard iconPath={'/icons/javascript.png'} /> },
    { content: <AllSkillCard iconPath={'/icons/react.png'} /> },
    { content: <AllSkillCard iconPath={'/icons/bootstrap.png'} /> },
    { content: <AllSkillCard iconPath={'/icons/python.png'} /> },

    { content: <AllSkillCard iconPath={'/icons/mongodb.png'} /> },

    { content: <AllSkillCard iconPath={'/icons/git.png'} /> },
    { content: <AllSkillCard iconPath={'/icons/css.png'} /> },
    { content: <AllSkillCard iconPath={'/icons/html.png'} /> },
    { content: <AllSkillCard iconPath={'/icons/opencv.png'} /> },
];

export default function Skills() {
    return (
        <>
            <div style={{ height: '500px', positon: 'relative', marginTop: '100px' }}>
                <InfiniteScroll
                    items={items}
                    isTilted={true}
                    tiltDirection='left'
                    autoplay={true}
                    autoplaySpeed={0.5}
                    autoplayDirection="down"
                    pauseOnHover={true}
                />
            </div>

        </>

    );
}
