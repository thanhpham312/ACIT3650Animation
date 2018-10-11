const BirdSprite = {
    name:"bird",
    size: {width: 220, height: 220},
    animationTypes: ['FLY', 'HIT'],
    frames: [
        require('./flying-1.png'),
        require('./flying-2.png'),
        require('./hit-1.png'),
        require('./hit-2.png')
    ],
    animationIndex: function getAnimationIndex (animationType) {
        switch (animationType) {
        case 'FLY':
            return [0, 1];
        case 'HIT':
            return [2, 3];
        }
    },
};

export default BirdSprite;