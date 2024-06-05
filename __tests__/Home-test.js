import renderer from 'react-test-renderer';
import Home from '../src/Home';
test('renders correctly', () => {
    const tree = renderer.create(<Home />).toJSON();
    expect(tree).toMatchSnapshot();
  });