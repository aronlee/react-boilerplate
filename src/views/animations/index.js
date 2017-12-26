import RotatingCude from '../../animation/rotating-cube';
import './animations.scss'

export default class Animations extends React.Component {

  render() {
    return (
      <div>
        <header>
          <ul className="animations-menu">
            <li></li>
          </ul>
        </header>
        <Route />
        <RotatingCude />
      </div>
    )
  }
}
