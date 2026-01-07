import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  greetingText: {
    color: '#000',
    margin: 'auto',
    fontWeight: '500',
    fontSize: 28,
  },
  textContainer: {
    marginTop: 19,
  },
  temprature: {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 28,
  },
  tempText: {
    fontSize: 15,
    color: '#4E4E4E',
    fontWeight: '500',
    marginLeft: 5,
  },
  partyText: {
    fontSize: 12,
    color: '#2E3137',
    marginLeft: 5,
    fontWeight: '400',
  },
  icon: {
    width: 25,
    height: 25,
  },
});
