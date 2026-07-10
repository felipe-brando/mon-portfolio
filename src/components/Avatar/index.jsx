import useMightyMouse from "react-hook-mighty-mouse";
import avatar from "../../assets/avatar-felipe-brando.svg"
import './style.scss';

const Avatar = () => {

    const {
        selectedElement: {
          position: { angle: angleLeftEye },
        },
      } = useMightyMouse(true, 'left-eye', { x: 45, y: 45});
      const {
        selectedElement: {
          position: { angle: angleRightEye },
        },
      } = useMightyMouse(true, 'right-eye', { x: 45, y: 45});
    
      const rotateLeftEye = `rotate(${-angleLeftEye}deg)`;
      const rotateRightEye = `rotate(${-angleRightEye}deg)`;

    return (
        <div className="character">
            <img className="character__avatar" src={avatar} alt="Avatar" />
            <div className="eyes-follow">
                <div className="eyes">
                    <div id="left-eye" className="eye" style={{ transform: rotateLeftEye }}>
                         <div className="pupil" />
                    </div>
                    <div id="right-eye" className="eye" style={{ transform: rotateRightEye }}>
                        <div className="pupil" />
                    </div>
                </div>
            </div>           
        </div>
    );
};

export default Avatar;
