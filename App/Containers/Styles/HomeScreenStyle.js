import { StyleSheet } from 'react-native';
import { ApplicationStyles, Metrics, Colors } from '../../Themes';

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  container: {
    flex: 1,
    marginVertical: 0,
    paddingVertical: 100,
    backgroundColor: 'rgba(0,0,0,.3)',
  },
  row: {
    flex: 1,
    marginVertical: 1,
    justifyContent: 'center',
    padding: 10,
    height: 80,
  },
  boldLabel: {
    fontWeight: 'bold',
    alignSelf: 'center',
    color: Colors.snow,
    textAlign: 'center',
    marginBottom: Metrics.smallMargin,
  },
  label: {
    textAlign: 'center',
    color: Colors.snow,
    fontSize: 20,
    backgroundColor: 'transparent',
  },
  listContent: {
    marginTop: Metrics.baseMargin,
  },
});
