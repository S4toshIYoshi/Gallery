import DataProvaider from './DataProvaider';
import ThemeProvaider from './ThemeProvaider';

const Provider = ({children}) => {
	return (
		<DataProvaider>
			<ThemeProvaider>{children}</ThemeProvaider>
		</DataProvaider>
	);
};

export default Provider;
