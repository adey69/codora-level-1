import { View } from 'react-native';
import styles from './styles';

interface ISeparatorProps {
  direction?: 'horizontal' | 'vertical';
}

const Separator = ({ direction }: ISeparatorProps) => {
  return (
    <View
      style={[
        styles.container,
        direction === 'horizontal' ? styles.horizontal : styles.vertical,
      ]}
    />
  );
};

export default Separator;
