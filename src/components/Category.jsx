import { useState } from 'react';
import Card from 'react-bootstrap/Card';
import { useSpring, animated } from 'react-spring';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Category({category}){
    const [hovering, setHovering] = useState(false);
    const styles = useSpring({transform: hovering ? 'rotate(3deg' : 'rotate(0deg'});

    return(
        <animated.div 
        style={styles} 
        onMouseEnter={() => setHovering(true)} 
        onMouseLeave={() => setHovering(false)}
        >
        <Card className={`card--bg-${category.color}`}>
            <Card.Body className="text-center">
                <FontAwesomeIcon icon={category.icon} size="3x" />
                <h3 className="mt-2 mb-0" > {category.name} </h3>
            </Card.Body>
        </Card>
    </animated.div>
    ) ;
}